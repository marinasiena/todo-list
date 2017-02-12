( function() {
	"use strict";

	$( document ).ready( () => {
		const toDoList = function() {

			function bindEvents() {
				$( '#todo-form' ).on( 'submit', function() {
					event.preventDefault();
					let newItem = $( '.new-todo' ).val();
					this.reset();
					displayNewTodo( newItem );
					itemsLeft();
				} );

				$( document ).on( 'click', '.check', function() {
					event.preventDefault();
					$( document.activeElement ).parent().parent().toggleClass( 'active' );
					$( document.activeElement ).toggleClass( 'on' );
					$( document.activeElement ).parent().parent().removeClass( 'completed' );
					itemsLeft();
				} ); //end check listener

				$( document ).on( 'click', '.delete', function() {
					event.preventDefault();
					$( document.activeElement ).parent().parent().toggleClass( 'completed' );
					$( document.activeElement ).parent().parent().removeClass( 'active' );
					itemsLeft();
				} ); //end delete listener

				$( document ).on( 'click', '.clear', function() {
					event.preventDefault();
					$( '.list-item' ).remove( '.completed' );
					itemsLeft();
				} ); //end clear listener

				$( document ).on( 'click', '.show-active', function() {
					$( '.list-item' ).not( '.active' ).addClass( 'hide' );
          $( '.active' ).removeClass( 'hide' );

				} ); //end show-active listener

				$( document ).on( 'click', '.show-completed', function() {
					$( '.list-item' ).not( '.completed' ).addClass( 'hide' );
          $( '.completed' ).removeClass( 'hide' );				} ); //end show-completed listener

				$( document ).on( 'click', '.show-all', function() {
					$( '.list-item' ).slice( 1 ).removeClass( 'hide' );
				} ); //end show-completed listener

			} // end bindEvents

			function itemsLeft() {
				let count = $( '.list-item' ).not( '.completed' ).length - 1;
				$( '.incomplete-items' ).text( count );
			} //end itemsLeft

			function displayNewTodo( newItem ) {
				$( '.list-item' ).first().clone().appendTo( '.items' );
				$( '.list-item p' ).last().html( `${newItem}` );
				$( '.list-item' ).last().removeClass( 'hide' );
			} //end displayNewTodo

			function init() {
				bindEvents();
			} //end init

			return {
				init: init
			}; //end return\

		}; // end toDoList

		const todo = toDoList();
		todo.init();

	} ); //end docready

} )(); //end iife
