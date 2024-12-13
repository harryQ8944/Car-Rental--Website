const host				= `car_info.php`
const carGrid			= document.querySelector('.car-grid');
const searchButton		= document.querySelector('.search-box');
let   cars				= null

function rentCar(car) {
	console.log('rentCar', car)
	// car			 		= JSON.parse(car)
	let orders			= JSON.parse(localStorage.getItem('orders')) || [];
	if (!orders.find((oc, i, _) => oc.id == car.id)) {
		orders.push(car)
		localStorage.setItem('orders', JSON.stringify(orders))
	}

	window.location		= '/myOrders.html'
}

function getSearchKeyword() {
	const searchInput	= document.querySelector('#loc')
	return searchInput.value.toLowerCase()
}

async function searchCar() {
	console.log('searchCar()')

	await fetch("car.json")
	.then(res  => res.json())
	.then(data => {
		console.log('searchCar()', data)

		const keyword	= getSearchKeyword()
		let items		= data.reduce((acc, car) => {
			let match	= keyword=='' 
				|| car.model.toLowerCase().includes(keyword) 
				|| car.brand.toLowerCase().includes(keyword)
			if(!match) return

			acc.push(`<div class='car-item box' data-id='${car.id}'>
				<img src="${car.image}" alt="${car.model}" style='width:100%; height:200px; object-fit:contain; border-radius:11px;'>
				<h3>${car.brand} ${car.model}</h3>
				<p>${car.type}</p>
				<h4>Mileage: ${car.Mileage} miles</h4>
				<h4>Seats: ${car.seats}</h4>
                <h2>${car.price_per_day.toFixed(2)}<span>/day</span></h2>
                <a class="btn" onclick='rentCar(${JSON.stringify(car)})'>Rent Now</a>
			</div>`)
			return acc
		}, [])
		carGrid.innerHTML   = items.join('\n')
	});
}

searchButton.addEventListener('click', searchCar)
window		.addEventListener('load',  searchCar)
