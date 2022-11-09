import utilService from '../../../services/util.service.js'
import storageService from '../../../services/async-storage.service.js'

export default{

}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

var emails
_CreateMails()

function _createMail(subject, body, from, to, sentAt = new Date(), isRead = false) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false, sentAt: 1551133930594,
        from,
        to
    }
}

function _CreateMails() {
    let mails = []
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
    mails.push(mail1, mail2)
    emails = mails
    console.log(emails);
}