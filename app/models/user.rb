class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :first_name, :last_name, :email, length: {minimum: 1}

  has_many :saved_events
  has_many :events, through: :saved_events

  has_many :tickets,
  primary_key: :id,
  foreign_key: :purchaser_id,
  class_name: 'Ticket'

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def self.generate_session_token
    token = SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  # def email_exists?(email)
  #   @user = User.find_by(email: email)
  #   return @user === 'undefined' ? false : true
  # end

end
