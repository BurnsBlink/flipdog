Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '727487647412077', 'ed622b976bd588aecfbcb6433d53fec1',
           :scope => 'email,user_birthday', :display => 'popup'
end
