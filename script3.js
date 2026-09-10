function filterSelection(category)
{
    let cards = document.querySelectorAll(".card");

    cards.forEach(card =>
    {
        if(category === "all")
        {
            card.style.display = "block";
        }
        else
        {
            if(card.classList.contains(category))
            {
                card.style.display = "block";
            }
            else
            {
                card.style.display = "none";
            }
        }
    });
}