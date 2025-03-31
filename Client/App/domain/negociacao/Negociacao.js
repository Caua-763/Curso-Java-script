class Negociacao {
    constructor(data,	quantidade,	valor)	{

       this._data	=	new Date(data.getTime());
       this._quantidade	=	quantidade;
       this._valor	=	valor;
       Object.freeze(this);
}
}