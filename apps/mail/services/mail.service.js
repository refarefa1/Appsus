import utilService from '../../../services/util.service.js'
import storageService from '../../../services/async-storage.service.js'

export default {
    query,
    get,
    add,
    update,
    remove,
    getUnread
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const EMAILS_KEY = 'mailsDB'
const SENT_EMAILS_KEY = 'sentMailsDB'

_createMails()
_createSentMails()

function query(key) {
    var storageKey
    switch (key) {
        case 'mails': storageKey = EMAILS_KEY
            break
        case 'sentMails': storageKey = SENT_EMAILS_KEY
            break
    }
    return storageService.query(storageKey)
}

function get(mailId, key) {
    return storageService.get(key, mailId)
}

function add({ to, title, body }) {
    const mail = _createMail(title, body, loggedinUser.email, to, false, loggedinUser.fullname, new Date().toISOString().slice(0, 10))
    return storageService.post(SENT_EMAILS_KEY, mail, false)
}

function update(mail, key) {
    return storageService.put(key, mail)
}

function remove(mailId, key) {
    storageService.remove(key, mailId)
}

function getUnread() {
    return storageService.query(EMAILS_KEY)
        .then(mails => {
            return mails.filter(mail => !mail.isRead).length
        })
}

function _createMail(subject, body, from, to, isRead, fullname, sentAt) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead,
        sentAt,
        from,
        to,
        fullname
    }
}

function _createMails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (emails) return Promise.resolve(emails)
    emails = []
    let mail1 = _createMail(
        'Purchase receipt',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, voluptatibus. Labore ducimus, enim est dolorum sequi cupiditate debitis nihil tempora?',
        'dani@Email.com',
        loggedinUser.email,
        false,
        'Dani din',
        '2022-11-09'
    )
    let mail2 = _createMail(
        'Daniel just posted. View now.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, voluptatibus. Labore ducimus, enim est dolorum sequi cupiditate debitis nihil tempora?',
        'yosi@Email.com',
        loggedinUser.email,
        true,
        'Berry Sakhrof',
        '2022-10-08'
    )
    emails.push(mail1, mail2)
    utilService.saveToStorage(EMAILS_KEY, emails)
}

function _createSentMails() {
    let emails = utilService.loadFromStorage(SENT_EMAILS_KEY)
    if (emails) return Promise.resolve(emails)
    emails = []
    let mail1 = _createMail(
        'Please answer fast',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, voluptatibus. Labore ducimus, enim est dolorum sequi cupiditate debitis nihil tempora?',
        loggedinUser.email,
        'dani@gmail.com',
        false,
        loggedinUser.fullname,
        '2022-11-09'
    )
    let mail2 = _createMail(
        'Simple question',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, voluptatibus. Labore ducimus, enim est dolorum sequi cupiditate debitis nihil tempora?',
        loggedinUser.email,
        'yosi@Email.com',
        true,
        loggedinUser.fullname,
        '2022-10-08'
    )
    emails.push(mail1, mail2)
    utilService.saveToStorage(SENT_EMAILS_KEY, emails)
}