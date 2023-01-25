/* 
un joven muy afortunado logro ganar el primer premio de la loteria, el ganador fue el vagabundo
al que coflan le dio la plata para que compre su boleto, el vagabundo decidio hacer una fiesta para 
celebrar, el tipo tan estusiasmado compro hasta una maquina que solo deja pasar a los mayores de edad

Problema A
-Dejar pasar solo a los +18
-El primero que entre despues de las 2Am,no paga.

*/



let free=false;

const Entrada=(hora)=>
{
    let edad=prompt("Dime tu edad");
    let Cad;
    if (edad>=18)
    {
        Cad=`Tenes ${edad} años, sos mayor de edad, podes pasar `;
        if (hora>=2 && hora<=7 && free==false)
        {
            Cad=Cad+ ` ,son las ${hora}hs ,eres la primera persona despues de esa hora ,puedes pasar gratis <br> `;
            free=true;
        }
        else
        {
            Cad=Cad +` ,son las ${hora}hs  ,debes pagar la entrada <br>`;
        }
    }
    else
    {
        Cad=`Tenes + ${edad}hs años, sos menor de edad,no podes pasar <br>`;
    }
    return Cad;
}

document.write(Entrada(1));
document.write(Entrada(2));
document.write(Entrada(3));
