import utilService from '../../../services/util.service.js'
import storageService from '../../../services/async-storage.service.js'

export default {
    query,
    get,
    add,
    update,
    remove,
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Gandhi'
}

const EMAILS_KEY = 'mailsDB'

_createMails()

function query() {
    return storageService.query(EMAILS_KEY)
}

function get(mailId) {
    return storageService.get(EMAILS_KEY, mailId)
}

function add({ to, subject, body, isDraft }) {
    const mail = _createMail(subject, body, loggedinUser.email, to, false, loggedinUser.fullname, new Date().toISOString().slice(0, 10), false, null, isDraft)
    return storageService.post(EMAILS_KEY, mail, false)
}

function update(mail) {
    return storageService.put(EMAILS_KEY, mail)
}

function remove(mailId) {
    return storageService.remove(EMAILS_KEY, mailId)
}

function _createMail(subject, body, from, to, isRead, fullname, sentAt, isStar, removedAt, isDraft) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead,
        sentAt,
        from,
        to,
        fullname,
        isStar,
        removedAt,
        isDraft
    }
}

function _createMails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (emails) return Promise.resolve(emails)
    emails = []
    let mail1 = _createMail(
        'Leumi discounts',
        'e.g.  With all the recent natural disasters, the destruction of the rainforest, and other changes in our environment brought on by climate change, it seems like the Earth has become a very hostile place. People are becoming more aware of how quickly our planet is deteriorating and asking themselves how they can make a difference. Cows are one of the main contributors to greenhouse gas emissions and environmental damage due to their production of methane gas. Many people believe that cows should be taken off the Earth for this reason. However, cows are vital to sustainable agriculture because they help fertilize land with their manure, which also prevents soil erosion. Although livestock causes problems for our planet, cows are necessary in order to improve environmental quality and sustainable farming practices',
        'leumi@gmail.com',
        loggedinUser.email,
        false,
        'Leumi',
        Date.now(),
        false,
        null,
        false
    )
    let mail2 = _createMail(
        'Monthly receipt',
        'The confirmation of the paid parking shall come as a return SMS message to a user’s mobile phone, with all the data on the paid parking. A user shall be under the obligation to save the return SMS message because it serves as a proof on the paid parking in case the end-user (driver) is fined by the Parking Enterprise by mistake. Users may consider that they have paid the parking only after they receive a return SMS message on paid parking. In case they do not receive the confirmation in adequate time interval (5-7 minutes) the transaction has been cancelled and the user shall be informed thereof accordingly.',
        'pango@pango.co.il',
        loggedinUser.email,
        true,
        'Pango',
        Date.now()-200000000,
        false,
        null,
        false
    )
    let mail3 = _createMail(
        'Work pdfs',
        'Hey man, here is all the work Ive done so far, you can proceed from here.',
        loggedinUser.email,
        'alon@yahoo.com',
        false,
        loggedinUser.fullname,
        Date.now()-1500000000,
        
        false,
        null,
        false
    )
    let mail4 = _createMail(
        'My resume',
        'Hey, here is my resume, I would love to work at your company. Ive known you for a long time and really admire you!!!',
        loggedinUser.email,
        'rebbeca@job.com',
        true,
        loggedinUser.fullname,
        Date.now()-2723900000,
        false,
        null,
        false
    )
    let mail5 = _createMail(
        'Your lottie animation is ready',
        'You can now neatly organize your animations, collections, and projects and share them selectively with your teammates. In addition, we have introduced an auto-tagging feature so that searching you through that correct file is a breeze. Your new LottieFiles workspace packs a punch to boost your and your teams productivity. Some of our most requested features here are now live. you can explore them here',
        'lottiefiles@walla.com',
        loggedinUser.email,
        false,
        'LottieFiles',
        Date.now()-800000000,
        false,
        null,
        false
    )
    let mail6 = _createMail(
        'Learn to graphic design in 5 weeks!',
        'The University of North Texas (UNT)s Bachelor of Applied Arts and Sciences (B.A.A.S.) degree has been named one of America’s 100 Best College Buys® for 24 consecutive years. Alumni of the on-campus B.A.A.S. have gone on to hold management and specialist positions in sectors like banking, education, retail and more while others go on to attend graduate school. Students in the B.A.A.S. bachelor’s completion degree receive the same high-quality instruction as on-campus students and earn the same degree while learning when and where it works best for them. The next deadline is: Friday, November 18',
        'commercials@gmail.com',
        loggedinUser.email,
        true,
        'Coursera',
        Date.now()-1500000000,
        true,
        null,
        false
    )
    let mail7 = _createMail(
        'Your monthly receipt',
        'Hi Refael,You have successfully unsubscribed from our email list and there is nothing more for you to do. We will miss you, but if you ever change your mind you can always resubscribe. Just update your Notification Preferences to receive course announcements, special deals, and personalized recommendations again.',
        'partner@walla.com',
        loggedinUser.email,
        false,
        'Partner',
        Date.now()-2500000000,
        false,
        null,
        false
    )
    let mail8 = _createMail(
        'Free courses to learn fullstack',
        'Recommendations for you. We combed our catalog and found courses that we think match your interests. Browse our recommendations below, and start learning something new today!',
        'udemy@udemy.co.il',
        loggedinUser.email,
        true,
        'Udemy',
        Date.now()-5500000000,
        true,
        null,
        false
    )
    let mail9 = _createMail(
        'flyers for print',
        'Hey daniel! your flyer is ready to print you can go for it :)',
        loggedinUser.email,
        'daniel@yahoo.com',
        false,
        loggedinUser.fullname,
        Date.now()-5500000000,
        true,
        null,
        false
    )
    let mail10 = _createMail(
        'Hey can you help me ?',
        'Hey man I got stuck on that question. Would really love to get some help on this...',
        loggedinUser.email,
        'puki@hr.com',
        true,
        loggedinUser.fullname,
        Date.now()-7500000000,
        false,
        null,
        false
    )
    let mail11 = _createMail(
        'Is the earth flat?',
        'Enjoy up to €10 off your favorite flavors. Order great food in a snap. With so many restaurants to choose from, every meal is just a few taps away. Terms & fees apply. Add the promo code before you checkout to claim your meal',
        loggedinUser.email,
        'earth@knowledge.com',
        false,
        loggedinUser.fullname,
        Date.now()-8500000000,
        true,
        null,
        false
    )
    let mail12 = _createMail(
        'Watch your video here',
        'Whether you are starting fresh or building enterprise services, with over 15 APIs and SDKs there’s no limit to what you can build. Get started for free and enjoy a $200 monthly usage credit to keep you going.        ',
        'youtube@video.co.il',
        loggedinUser.email,
        true,
        'Youtube',
        Date.now()-6500000000,
        false,
        null,
        false
    )
    let mail13 = _createMail(
        'home-test ready',
        'Here is the home test you wanted me to do, hope you will like it',
        loggedinUser.email,
        'test@testers.co.il',
        false,
        loggedinUser.fullname,
        Date.now()-9500000000,
        true,
        null,
        false
    )
    let mail14 = _createMail(
        'Cant touch this',
        'How can it be th',
        loggedinUser.email,
        'greenpeace@gmail.com',
        true,
        loggedinUser.fullname,
        Date.now()-5500000000 ,
        false,
        null,
        true
    )
    let mail15 = _createMail(
        'Can you de',
        'what are you doing omg it cannot be like this',
        'rebbeca@gmail.com',
        loggedinUser.email,
        true,
        loggedinUser.fullname,
        Date.now()-7500000000,
        false,
        null,
        true
    )
    let mail16 = _createMail(
        'rafi please answer fast',
        'hey rafi can you tell me if its okay to',
        loggedinUser.email,
        'rafi@walla.com',
        true,
        loggedinUser.fullname,
        Date.now()-8500000000,
        false,
        null,
        true
    )
    let mail17 = _createMail(
        'Come and explore lottie',
        'The Product Team at LottieFiles helps design and developer teams uplevel their motion design game.        Whether you have questions, brutally honest feedback, bugs, or feature requests, we got you covered.',
        'lottiefiles@gmail.com',
        loggedinUser.email,
        true,
        'Lottiefiles',
        Date.now()-6500000000,
        false,
        new Date(),
        false
    )
    let mail18 = _createMail(
        'Best deals!!!',
        'Last chance for up to €10 off.Your final call to save up to €10 on delicious dishes. Terms & fees apply. Add the promo code before you checkout to claim your meal on us:',
        'uber@uber.com',
        loggedinUser.email,
        true,
        'Uber',
        Date.now()-7500000000,
        false,
        new Date(),
        false
    )
    let mail19 = _createMail(
        'Security notification regarding your account',
        'if you have not yet added 2 Steps-Verification protection to your account, we highly recommend you to activate the feature now to enhance the security of your account and prevent unauthorized access.You can see all the successful and unsuccessful login attempts on your Account Management website, on the Security Settings page.        Please beware of phishing emails, Ubisoft employees will never prompt you or request personal payment or login credentials. If the email you receive asks you to send any of these, contains typos, unusual grammar or phrases, then it does not come from Ubiso',
        'ubisoft@gmail.com',
        loggedinUser.email,
        true,
        'Ubisoft',
        Date.now()-8500000000,
        false,
        new Date(),
        false
    )
    let mail20 = _createMail(
        'Welcome to Google Maps platforms',
        'Whether you’re starting fresh or building enterprise services, with over 15 APIs and SDKs there’s no limit to what you can build. Get started for free and enjoy a $200 monthly usage credit to keep you going.',
        'google@gmail.com',
        loggedinUser.email,
        true,
        'Google',
        Date.now()-9500000000,
        false,
        new Date(),
        false
    )
        emails = [mail1, mail2, mail3, mail4, mail5, mail6, mail7, mail8, mail9, mail10, mail11, mail12, mail13, mail14, mail15, mail16, mail17, mail18, mail19, mail20]
    utilService.saveToStorage(EMAILS_KEY, emails)
}