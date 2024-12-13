document.addEventListener('DOMContentLoaded', function() {
    const ordersList = document.getElementById('ordersList');

    // Example data for orders (you can replace it with your actual data)
    const orders = [
        {
            id: 1,
            date: '2024-05-10',
            total: 150.99,
            items: [
                { name: 'Toyota Camry', price: 50.99 },
                { name: 'Ford Focus', price: 100 }
            ]
        },
        {
            id: 2,
            date: '2024-05-15',
            total: 200.5,
            items: [
                { name: 'Honda Civic', price: 150.5 },
                { name: 'Mazda CX-5', price: 50 }
            ]
        }
    ];

    // Render orders
    orders.forEach(order => {
        const orderElement = document.createElement('div');
        orderElement.classList.add('order');
        orderElement.innerHTML = `
            <h2>Order #${order.id}</h2>
            <p>Date: ${order.date}</p>
            <p>Total: $${order.total.toFixed(2)}</p>
            <button class="show-details-btn">Show Details</button>
            <div class="details"></div>
        `;
        ordersList.appendChild(orderElement);

        const detailsContainer = orderElement.querySelector('.details');
        const showDetailsBtn = orderElement.querySelector('.show-details-btn');

        showDetailsBtn.addEventListener('click', () => {
            if (detailsContainer.style.display === 'block') {
                detailsContainer.style.display = 'none';
                showDetailsBtn.textContent = 'Show Details';
            } else {
                detailsContainer.style.display = 'block';
                showDetailsBtn.textContent = 'Hide Details';

                // Render order items
                detailsContainer.innerHTML = '';
                order.items.forEach(item => {
                    const itemElement = document.createElement('p');
                    itemElement.textContent = `${item.name}: $${item.price.toFixed(2)}`;
                    detailsContainer.appendChild(itemElement);
                });
            }
        });
    });
});
