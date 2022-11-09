import utilService from '../../../services/util.service.js'
import storageService from '../../../services/async-storage.service.js'

export default {
    query,
    get,
    add
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const EMAILS_KEY = 'mailsDB'

var emails
_CreateMails()

function query() {
    return storageService.query(EMAILS_KEY)
}

function get(mailId) {
    return storageService.get(EMAILS_KEY, mailId)
}

function add(mail) {
    return storageService.post(EMAILS_KEY, mail, false)
}

function _createMail(subject, body, from, to) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: new Date().toISOString().slice(0,10),
        from,
        to
    }
}

function _CreateMails() {
    emails = utilService.loadFromStorage(EMAILS_KEY)
    if (emails) return Promise.resolve(emails)
    emails = []
    let mail1 = _createMail(
        'Purchase receipt',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, voluptatibus. Labore ducimus, enim est dolorum sequi cupiditate debitis nihil tempora?',
        'dani@Email.com',
        loggedinUser.email,
    )
    let mail2 = _createMail(
        'Daniel just posted. View now.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, voluptatibus. Labore ducimus, enim est dolorum sequi cupiditate debitis nihil tempora?',
        'yosi@Email.com',
        loggedinUser.email,
    )
    emails.push(mail1, mail2)
    utilService.saveToStorage(EMAILS_KEY, emails)
}