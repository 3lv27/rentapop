/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /**************************************************************************
  *                                                                         *
  * The base URL to use during development.                                 *
  *                                                                         *
  * • No trailing slash at the end                                          *
  * • `http://` or `https://` at the beginning.                             *
  *                                                                         *
  * > This is for use in custom logic that builds URLs.                     *
  * > It is particularly handy for building dynamic links in emails,        *
  * > but it can also be used for user-uploaded images, webhooks, etc.      *
  *                                                                         *
  **************************************************************************/
  baseUrl: 'http://localhost:1337',

  /**************************************************************************
  *                                                                         *
  * The TTL (time-to-live) for various sorts of tokens before they expire.  *
  *                                                                         *
  **************************************************************************/
  passwordResetTokenTTL: 24*60*60*1000,// 24 hours
  emailProofTokenTTL:    24*60*60*1000,// 24 hours

  /**************************************************************************
  *                                                                         *
  * The extended length that browsers should retain the session cookie      *
  * if "Remember Me" was checked while logging in.                          *
  *                                                                         *
  **************************************************************************/
  rememberMeCookieMaxAge: 30*24*60*60*1000, // 30 days

  /**************************************************************************
  *                                                                         *
  * Automated email configuration                                           *
  *                                                                         *
  * Sandbox Mailgun credentials for use during development, as well as any  *
  * other default settings related to "how" and "where" automated emails    *
  * are sent.                                                               *
  *                                                                         *
  * (https://app.mailgun.com/app/domains)                                   *
  *                                                                         *
  **************************************************************************/
  mailgunDomain: 'sandbox1f84423050c84b95a83ed27e3c7d86cc.mailgun.org',
  mailgunSecret: 'key-e8d826bd3f24b2d4dd38d5bacae9bd35',
  //--------------------------------------------------------------------------
  // /\  Configure these to enable support for automated emails.
  // ||  (Important for password recovery, verification, contact form, etc.)
  //--------------------------------------------------------------------------

  // The sender that all outgoing emails will appear to come from.
  fromEmailAddress: 'noreply@example.com',
  fromName: 'The Rentapop Team',

  // Email address for receiving support messages & other correspondences.
  internalEmailAddress: 'support+development@example.com',

  // Whether to require proof of email address ownership any time a new user
  // signs up, or when an existing user attempts to change their email address.
  verifyEmailAddresses: true,
  /**************************************************************************
  *                                                                         *
  * Billing & payments configuration                                        *
  *                                                                         *
  * (https://dashboard.stripe.com/account/apikeys)                          *
  *                                                                         *
  **************************************************************************/
  stripePublishableKey: 'pk_test_QbHqU0Z1W8YU3ACrt2juzLw7',
  stripeSecret: 'sk_test_HeAyQlYbpElXmuKsQQ1TIWGq',
  //--------------------------------------------------------------------------
  // /\  Configure these to enable support for billing features.
  // ||  (Or if you don't need billing, feel free to remove them.)
  //--------------------------------------------------------------------------

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // …

};
