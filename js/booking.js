
// booking table page
const family_package_btn = document.querySelector('#family-package-btn')
const couple_package_btn = document.querySelector('#couple-package-btn')
const general_dist_btn = document.querySelector('#general-dish-btn')
const booking_table = document.querySelector('#booking-table')
const booking_package_result = document.querySelector('#booking-package-result')
const package_name = document.querySelector('#package-name')
const member = document.querySelector('#member')
const price = document.querySelector('#price')

// family_package_btn
family_package_btn.addEventListener('click', () => {
    package_name.innerHTML = 'you have been booked family package'
    member.innerHTML = 'total member = 8 persons'
    price.innerHTML = 'package rate = 2600 tk.'

    booking_table.style.display = 'none';
    booking_package_result.style.display = 'block';
})
// couple_package_btn
couple_package_btn.addEventListener('click', () => {
    package_name.innerHTML = 'you have been booked couple package'
    member.innerHTML = 'total member = 2 persons'
    price.innerHTML = 'package rate = 800 tk.'

    booking_table.style.display = 'none';
    booking_package_result.style.display = 'block';
})
// general_dist_btn
general_dist_btn.addEventListener('click', () => {
    package_name.innerHTML = 'you have been booked general package'
    member.innerHTML = 'total member = 6 persons'
    price.innerHTML = 'package rate = 1400 tk.'

    booking_table.style.display = 'none';
    booking_package_result.style.display = 'block';
})