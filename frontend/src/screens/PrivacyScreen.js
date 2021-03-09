import React from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

function PrivacyScreen() {
  return (
    <div>
      <Meta title={'Norme sulla privacy | CentCellStore'} />
      <h1 className='border-bottom mb-4'>INFORMATIVA SULLA PRIVACY</h1>
      <h3 className='text-dark mb-2'>Privacy Policy Scope</h3>
      <p>
        This Privacy Policy governs the manner in which CentCellStore collects,
        uses, maintains and discloses information collected from users (each, a
        "User") of the <Link to='/'>CentCellStore</Link> website ("Site"). This
        privacy policy applies to the Site and all products and services offered
        by CentCellStore. We at CentCellStore know you care about how your
        personal information is used and shared, and we take your privacy
        seriously. Please read the following to learn more about our Privacy
        Policy.{' '}
        <strong>
          By using or accessing the Services in any manner, you acknowledge that
          you accept the practices and policies outlined in this Privacy Policy,
          and you hereby consent that we will collect, use, and share your
          information in the following ways
        </strong>
        . Remember that your use of CentCellStore’s Services is at all times
        subject to the Terms and Conditions, which incorporates this Privacy
        Policy. Any terms we use in this Policy without defining them have the
        definitions given to them in the Terms and Conditions. The privacy
        policy is governed by the Personal Data (Privacy) Ordinance (Cap. 486).
      </p>
      <h3 className='text-dark mb-2'>Personal Identification Information</h3>
      <p>
        We may collect personally identification information from Users in a
        variety of ways, including, but not limited to, when Users visit our
        site, register on the site, place an order, respond to a survey, fill
        out a form, and in connection with other activities, services, features
        or resources we make available on our Site. Users may be asked for, as
        appropriate, name, email address, mailing address, credit card
        information. Users may, however, visit our Site anonymously. We will
        collect personal identification information from Users only if they
        voluntarily submit such information to us. Users can always refuse to
        supply personally identification information, except that it may prevent
        them from engaging in certain Site related activities.
      </p>
      <h3 className='text-dark mb-2'>
        Non-personal Identification Information
      </h3>
      <p>
        We may collect non-personal identification information about Users
        whenever they interact with our Site. Non-personal identification
        information may include the browser name, the type of computer and
        technical information about Users' means of connection to our Site, such
        as the operating system and the Internet service providers utilized and
        other similar information.
      </p>
      <h3 className='text-dark mb-2'>Web Browser Cookies</h3>
      <p>
        Our Site may use "cookies" to enhance User experience. User's web
        browser places cookies on their hard drive for record-keeping purposes
        and sometimes to track information about them. User may choose to set
        their web browser to refuse cookies, or to alert you when cookies are
        being sent. If they do so, note that some parts of the Site may not
        function properly.
      </p>
      <h3 className='text-dark mb-2'>How We Use Collected Information</h3>
      <p>
        CentCellStore collects and uses Users personal information for the
        following purposes:
      </p>
      <ol>
        <li>
          To personalize user experience, <br /> We may use information in the
          aggregate to understand how our Users as a group use the services and
          resources provided on our Site.
        </li>
        <li>
          To improve our Site, <br /> We continually strive to improve our
          website offerings based on the information and feedback we receive
          from you.
        </li>
        <li>
          To improve customer service, <br /> Your information helps us to more
          effectively respond to your customer service requests and support
          needs.
        </li>
        <li>
          To process transactions, <br /> We may use the information Users
          provide about themselves when placing an order only to provide service
          to that order. We do not share this information with outside parties
          except to the extent necessary to provide the service.
        </li>
        <li>
          To administer a content, promotion, survey or other Site feature,
          <br /> To send Users information they agreed to receive about topics
          we think will be of interest to them.
        </li>
        <li>
          To send periodic emails,
          <br /> The email address Users provide for order processing, will only
          be used to send them information and updates pertaining to their
          order. It may also be used to respond to their inquiries, and/or other
          requests or questions. If User decides to opt-in to our mailing list,
          they will receive emails that may include company news, updates,
          related product or service information, etc. If at any time the User
          would like to unsubscribe from receiving future emails, we include
          detailed unsubscribe instructions at the bottom of each email or User
          may contact us via our Site.
        </li>
      </ol>
      <h3 className='text-dark mb-2'>How We Protect Your Information</h3>
      <p>
        We adopt appropriate data collection, storage and processing practices
        and security measures to protect against unauthorized access,
        alteration, disclosure or destruction of your personal information,
        username, password, transaction information and data stored on our Site.
      </p>
      <h3 className='text-dark mb-2'>Sharing Your Personal Information</h3>
      <p>
        We do not sell, trade, or rent Users personal identification information
        to others. We may share generic aggregated demographic information not
        linked to any personal identification information regarding visitors and
        users with our business partners, trusted affiliates and advertisers for
        the purposes outlined above. We may use third party service providers to
        help us operate our business and the Site or administer activities on
        our behalf, such as sending out newsletters or surveys. We may share
        your information with these third parties for those limited purposes
        provided that you have given us your permission.
      </p>
      <h3 className='text-dark mb-2'>Third Party Websites</h3>
      <p>
        Users may find advertising or other content on our Site that link to the
        sites and services of our partners, suppliers, advertisers, sponsors,
        licensors and other third parties. We do not control the content or
        links that appear on these sites and are not responsible for the
        practices employed by websites linked to or from our Site. In addition,
        these sites or services, including their content and links, may be
        constantly changing. These sites and services may have their own privacy
        policies and customer service policies. Browsing and interaction on any
        other website, including websites which have a link to our Site, is
        subject to that website's own terms and policies.
      </p>
      <h3 className='text-dark mb-2'>Changes to This Privacy Policy</h3>
      <p>
        CentCellStore has the discretion to update this privacy policy at any
        time. When we do, we will revise the updated date at the bottom of this
        page. We encourage Users to frequently check this page for any changes
        to stay informed about how we are helping to protect the personal
        information we collect. You acknowledge and agree that it is your
        responsibility to review this privacy policy periodically and become
        aware of modifications.
      </p>
      <h3 className='text-dark mb-2'>Your Acceptance of These Terms</h3>
      <p>
        By using this Site, you signify your acceptance of this policy. If you
        do not agree to this policy, please do not use our Site. Your continued
        use of the Site following the posting of changes to this policy will be
        deemed your acceptance of those changes.
      </p>
    </div>
  )
}

export default PrivacyScreen
