document.addEventListener('DOMContentLoaded', () => {
    const phoneNumber = document.querySelector('.phone-number')
    const maskOptions = {
        mask: "+38\\0(00)000-00-00"
    }
    IMask(phoneNumber, maskOptions)
})