function Card({ card }) {
    return (

        <div class="col">
            <div class={`card mb-4 rounded-3 shadow-sm ${card.highlight ? 'border-primary' : ''}`}>
                <div class={`card-header py-3 ${card.highlight ? 'text-bg-primary border-primary' : ''}`}>
                    <h4 class="my-0 fw-normal">{card.plan}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">{card.price}<small class="text-muted fw-light">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        {
                            card.features.map((item) => {
                                return <li>{item.title}</li>
                            })
                        }
                    </ul>
                    <button type="button" class={`w-100 btn btn-lg ${card.buttonoutline ? 'btn-outline-primary' : 'btn-primary'}`}>Sign up for free</button>
                </div>
            </div>
        </div>
    );
}

export default Card;