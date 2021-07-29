export const PhanLoai = (theloai) =>{
    if ( theloai === "Ao")
        <select id="cars">
        <option value="1">X</option>
        <option value="2">XL</option>
        <option value="3">M</option>
        <option value="4">Audi</option>
        </select>
    else
    {
        <select id="cars">
        <option value="5">28</option>
        <option value="6">30</option>
        <option value="7">32</option>
        <option value="8">34</option>
        </select>
    }
    console.log( Date.now)

    return PhanLoai;
}