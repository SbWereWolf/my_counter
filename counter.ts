// mam/my/counter/counter.ts
class $my_counter extends $my_lom_view {

// delete
// -	storage<Value>( key: string, next?: Value ) {
// -		if ( next === undefined ) return JSON.parse( localStorage.getItem( key ) ?? 'null' )
// -
// -		if ( next === null ) localStorage.removeItem( key )
// -		else localStorage.setItem( key, JSON.stringify( next ) )
// -
// -		return next
// -	}

	count( next?: number ) {
// -		return this.storage( 'count' , next ) ?? 0
		return $my_lom_storage.value( 'count' , next ) ?? 0 // +
	}


	count_str( next?: string ) {
		return this.count( next?.valueOf && Number(next) ).toString()
	}

	inc() {
		this.count( this.count() + 1 )
	}

	dec() {
		this.count( this.count() - 1 )
	}

	// Создаем инстанс $my_lom_button
	// Переопределяем title
	// click биндим на this.inc
	_Inc = null as unknown as $my_lom_view
	Inc() {
		if (this._Inc) return this._Inc

		const obj = new $my_lom_button
		obj.title = ()=> '+'
		obj.click = ()=> this.inc()

		return this._Inc = obj
	}

	_Dec = null as unknown as $my_lom_view
	Dec() {
		if (this._Dec) return this._Dec

		const obj = new $my_lom_button
		obj.title = ()=> '-'
		obj.click = ()=> this.dec()

		return this._Dec = obj
	}

	_Count = null as unknown as $my_lom_view
	Count() {
		if (this._Count) return this._Count

		const obj = new $my_lom_input
		obj.value = (next?: string)=> this.count_str( next )

		return this._Count = obj
	}

	sub() {
		return [
			this.Dec(),
			this.Count(),
			this.Inc(),
		]
	}
}

// Вызываем для монтирования приложения в DOM-дерево
$my_lom_view.root = ()=> $my_counter
