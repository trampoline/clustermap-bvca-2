// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2080";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",4338025857),cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Keyword(null,"readably","readably",4441712502),cljs.core._STAR_print_readably_STAR_,new cljs.core.Keyword(null,"meta","meta",1017252215),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"dup","dup",1014004081),cljs.core._STAR_print_dup_STAR_,new cljs.core.Keyword(null,"print-length","print-length",3960797560),cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){cljs.core._STAR_print_newline_STAR_ = false;
return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14897__delegate = function (args){return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14897 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__14897__delegate.call(this,args);};
G__14897.cljs$lang$maxFixedArity = 0;
G__14897.cljs$lang$applyTo = (function (arglist__14898){
var args = cljs.core.seq(arglist__14898);
return G__14897__delegate(args);
});
G__14897.cljs$core$IFn$_invoke$arity$variadic = G__14897__delegate;
return G__14897;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){return (x != null && x !== false);
});
cljs.core.not_native = null;
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){return goog.isString(x);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){var x__$1 = (((x == null))?null:x);if((p[goog.typeOf(x__$1)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type.call(null,obj);var ty__$1 = (cljs.core.truth_((function (){var and__3279__auto__ = ty;if(cljs.core.truth_(and__3279__auto__))
{return ty.cljs$lang$type;
} else
{return and__3279__auto__;
}
})())?ty.cljs$lang$ctorStr:goog.typeOf(obj));return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){var temp__4090__auto__ = ty.cljs$lang$ctorStr;if(cljs.core.truth_(temp__4090__auto__))
{var s = temp__4090__auto__;return s;
} else
{return [cljs.core.str(ty)].join('');
}
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){return (new Array(size));
});
var make_array__2 = (function (type,size){return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__4114__auto___14899 = len;var i_14900 = 0;while(true){
if((i_14900 < n__4114__auto___14899))
{(new_arr[i_14900] = (arr[i_14900]));
{
var G__14901 = (i_14900 + 1);
i_14900 = G__14901;
continue;
}
} else
{}
break;
}
return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){return (array[i]);
});
var aget__3 = (function() { 
var G__14902__delegate = function (array,i,idxs){return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__14902 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14902__delegate.call(this,array,i,idxs);};
G__14902.cljs$lang$maxFixedArity = 2;
G__14902.cljs$lang$applyTo = (function (arglist__14903){
var array = cljs.core.first(arglist__14903);
arglist__14903 = cljs.core.next(arglist__14903);
var i = cljs.core.first(arglist__14903);
var idxs = cljs.core.rest(arglist__14903);
return G__14902__delegate(array,i,idxs);
});
G__14902.cljs$core$IFn$_invoke$arity$variadic = G__14902__delegate;
return G__14902;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){return (array[i] = val);
});
var aset__4 = (function() { 
var G__14904__delegate = function (array,idx,idx2,idxv){return cljs.core.apply.call(null,aset,(array[idx]),idx2,idxv);
};
var G__14904 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__14904__delegate.call(this,array,idx,idx2,idxv);};
G__14904.cljs$lang$maxFixedArity = 3;
G__14904.cljs$lang$applyTo = (function (arglist__14905){
var array = cljs.core.first(arglist__14905);
arglist__14905 = cljs.core.next(arglist__14905);
var idx = cljs.core.first(arglist__14905);
arglist__14905 = cljs.core.next(arglist__14905);
var idx2 = cljs.core.first(arglist__14905);
var idxv = cljs.core.rest(arglist__14905);
return G__14904__delegate(array,idx,idx2,idxv);
});
G__14904.cljs$core$IFn$_invoke$arity$variadic = G__14904__delegate;
return G__14904;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){return cljs.core.reduce.call(null,(function (a,x){a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.Fn = (function (){var obj14907 = {};return obj14907;
})();
cljs.core.IFn = (function (){var obj14909 = {};return obj14909;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._invoke[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._invoke["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = (function (){var obj14911 = {};return obj14911;
})();
cljs.core._count = (function _count(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._count[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._count["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj14913 = {};return obj14913;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._empty[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._empty["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj14915 = {};return obj14915;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._conj[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._conj["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj14917 = {};return obj14917;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._nth[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._nth["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._nth[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._nth["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = (function (){var obj14919 = {};return obj14919;
})();
cljs.core.ISeq = (function (){var obj14921 = {};return obj14921;
})();
cljs.core._first = (function _first(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._first[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._first["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._rest[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._rest["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj14923 = {};return obj14923;
})();
cljs.core._next = (function _next(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._next[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._next["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj14925 = {};return obj14925;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__3279__auto__ = o;if(and__3279__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3279__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__3894__auto__ = (((o == null))?null:o);return (function (){var or__3291__auto__ = (cljs.core._lookup[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._lookup["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__3279__auto__ = o;if(and__3279__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3279__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__3894__auto__ = (((o == null))?null:o);return (function (){var or__3291__auto__ = (cljs.core._lookup[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._lookup["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = (function (){var obj14927 = {};return obj14927;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._contains_key_QMARK_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._assoc[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._assoc["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj14929 = {};return obj14929;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._dissoc[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._dissoc["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj14931 = {};return obj14931;
})();
cljs.core._key = (function _key(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._key[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._key["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._val[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._val["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj14933 = {};return obj14933;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._disjoin[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._disjoin["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj14935 = {};return obj14935;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._peek[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._peek["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._pop[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._pop["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj14937 = {};return obj14937;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._assoc_n[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._assoc_n["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj14939 = {};return obj14939;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__3279__auto__ = o;if(and__3279__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3279__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__3894__auto__ = (((o == null))?null:o);return (function (){var or__3291__auto__ = (cljs.core._deref[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._deref["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj14941 = {};return obj14941;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__3279__auto__ = o;if(and__3279__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3279__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__3894__auto__ = (((o == null))?null:o);return (function (){var or__3291__auto__ = (cljs.core._deref_with_timeout[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj14943 = {};return obj14943;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__3279__auto__ = o;if(and__3279__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3279__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__3894__auto__ = (((o == null))?null:o);return (function (){var or__3291__auto__ = (cljs.core._meta[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._meta["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj14945 = {};return obj14945;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__3279__auto__ = o;if(and__3279__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3279__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__3894__auto__ = (((o == null))?null:o);return (function (){var or__3291__auto__ = (cljs.core._with_meta[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._with_meta["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj14947 = {};return obj14947;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._reduce[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._reduce["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._reduce[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._reduce["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = (function (){var obj14949 = {};return obj14949;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._kv_reduce[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj14951 = {};return obj14951;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__3279__auto__ = o;if(and__3279__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3279__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__3894__auto__ = (((o == null))?null:o);return (function (){var or__3291__auto__ = (cljs.core._equiv[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._equiv["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj14953 = {};return obj14953;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__3279__auto__ = o;if(and__3279__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3279__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__3894__auto__ = (((o == null))?null:o);return (function (){var or__3291__auto__ = (cljs.core._hash[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._hash["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj14955 = {};return obj14955;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__3279__auto__ = o;if(and__3279__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3279__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__3894__auto__ = (((o == null))?null:o);return (function (){var or__3291__auto__ = (cljs.core._seq[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._seq["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj14957 = {};return obj14957;
})();
cljs.core.IList = (function (){var obj14959 = {};return obj14959;
})();
cljs.core.IRecord = (function (){var obj14961 = {};return obj14961;
})();
cljs.core.IReversible = (function (){var obj14963 = {};return obj14963;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._rseq[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._rseq["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj14965 = {};return obj14965;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._sorted_seq[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._sorted_seq_from[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._entry_key[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._entry_key["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._comparator[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._comparator["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj14967 = {};return obj14967;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__3279__auto__ = writer;if(and__3279__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3279__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__3894__auto__ = (((writer == null))?null:writer);return (function (){var or__3291__auto__ = (cljs.core._write[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._write["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__3279__auto__ = writer;if(and__3279__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3279__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__3894__auto__ = (((writer == null))?null:writer);return (function (){var or__3291__auto__ = (cljs.core._flush[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._flush["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj14969 = {};return obj14969;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__3279__auto__ = o;if(and__3279__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3279__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__3894__auto__ = (((o == null))?null:o);return (function (){var or__3291__auto__ = (cljs.core._pr_writer[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._pr_writer["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj14971 = {};return obj14971;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__3279__auto__ = d;if(and__3279__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__3894__auto__ = (((d == null))?null:d);return (function (){var or__3291__auto__ = (cljs.core._realized_QMARK_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj14973 = {};return obj14973;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._notify_watches[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._notify_watches["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._add_watch[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._add_watch["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__3279__auto__ = this$;if(and__3279__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3279__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__3894__auto__ = (((this$ == null))?null:this$);return (function (){var or__3291__auto__ = (cljs.core._remove_watch[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._remove_watch["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj14975 = {};return obj14975;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._as_transient[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._as_transient["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj14977 = {};return obj14977;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__3279__auto__ = tcoll;if(and__3279__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__3894__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3291__auto__ = (cljs.core._conj_BANG_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__3279__auto__ = tcoll;if(and__3279__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__3894__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3291__auto__ = (cljs.core._persistent_BANG_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj14979 = {};return obj14979;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__3279__auto__ = tcoll;if(and__3279__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__3894__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3291__auto__ = (cljs.core._assoc_BANG_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj14981 = {};return obj14981;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__3279__auto__ = tcoll;if(and__3279__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__3894__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3291__auto__ = (cljs.core._dissoc_BANG_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj14983 = {};return obj14983;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__3279__auto__ = tcoll;if(and__3279__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__3894__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3291__auto__ = (cljs.core._assoc_n_BANG_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__3279__auto__ = tcoll;if(and__3279__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__3894__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3291__auto__ = (cljs.core._pop_BANG_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj14985 = {};return obj14985;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__3279__auto__ = tcoll;if(and__3279__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__3894__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3291__auto__ = (cljs.core._disjoin_BANG_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj14987 = {};return obj14987;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__3279__auto__ = x;if(and__3279__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3279__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__3894__auto__ = (((x == null))?null:x);return (function (){var or__3291__auto__ = (cljs.core._compare[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._compare["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj14989 = {};return obj14989;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._drop_first[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._drop_first["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj14991 = {};return obj14991;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._chunked_first[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._chunked_first["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._chunked_rest[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj14993 = {};return obj14993;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__3279__auto__ = coll;if(and__3279__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3279__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__3894__auto__ = (((coll == null))?null:coll);return (function (){var or__3291__auto__ = (cljs.core._chunked_next[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._chunked_next["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj14995 = {};return obj14995;
})();
cljs.core._name = (function _name(x){if((function (){var and__3279__auto__ = x;if(and__3279__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__3279__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__3894__auto__ = (((x == null))?null:x);return (function (){var or__3291__auto__ = (cljs.core._name[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._name["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__3279__auto__ = x;if(and__3279__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__3279__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__3894__auto__ = (((x == null))?null:x);return (function (){var or__3291__auto__ = (cljs.core._namespace[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._namespace["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INamed.-namespace",x);
}
}
})().call(null,x);
}
});

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){return (new cljs.core.StringBufferWriter(sb));
});
/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core._pr_writer.call(null,obj,writer,cljs.core.pr_opts.call(null));
cljs.core._flush.call(null,writer);
return [cljs.core.str(sb)].join('');
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){return cljs.core.hash_combine.call(null,cljs.core.hash.call(null,sym.ns),cljs.core.hash.call(null,sym.name));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_(cljs.core._EQ_.call(null,a,b)))
{return 0;
} else
{if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not.call(null,a.ns);if(and__3279__auto__)
{return b.ns;
} else
{return and__3279__auto__;
}
})()))
{return -1;
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not.call(null,b.ns))
{return 1;
} else
{var nsc = cljs.core.compare.call(null,a.ns,b.ns);if((nsc === 0))
{return cljs.core.compare.call(null,a.name,b.name);
} else
{return nsc;
}
}
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.compare.call(null,a.name,b.name);
} else
{return null;
}
}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.cljs$lang$type = true;
cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/Symbol");
});
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write.call(null,writer,self__.str);
});
cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){var self__ = this;
var sym__$1 = this;var h__3702__auto__ = self__._hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_symbol.call(null,sym__$1);self__._hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__14997 = null;
var G__14997__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.call(null,coll,sym,null);
});
var G__14997__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.call(null,coll,sym,not_found);
});
G__14997 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__14997__2.call(this,self__,coll);
case 3:
return G__14997__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__14997;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args14996){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14996)));
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var sym = this;return cljs.core._lookup.call(null,coll,sym,null);
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var sym = this;return cljs.core._lookup.call(null,coll,sym,not_found);
});
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Symbol))
{return (self__.str === other.str);
} else
{return false;
}
});
cljs.core.Symbol.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.str;
});
cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){if((name instanceof cljs.core.Symbol))
{return name;
} else
{return symbol.call(null,null,name);
}
});
var symbol__2 = (function (ns,name){var sym_str = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){if((coll == null))
{return null;
} else
{if((function (){var G__14999 = coll;if(G__14999)
{var bit__3910__auto__ = (G__14999.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3910__auto__) || (G__14999.cljs$core$ISeqable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._seq.call(null,coll);
} else
{if(coll instanceof Array)
{if((coll.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,0));
}
} else
{if(typeof coll === 'string')
{if((coll.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,0));
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,coll))
{return cljs.core._seq.call(null,coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str(coll),cljs.core.str("is not ISeqable")].join('')));
} else
{return null;
}
}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){if((coll == null))
{return null;
} else
{if((function (){var G__15001 = coll;if(G__15001)
{var bit__3910__auto__ = (G__15001.cljs$lang$protocol_mask$partition0$ & 64);if((bit__3910__auto__) || (G__15001.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);if((s == null))
{return null;
} else
{return cljs.core._first.call(null,s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){if(!((coll == null)))
{if((function (){var G__15003 = coll;if(G__15003)
{var bit__3910__auto__ = (G__15003.cljs$lang$protocol_mask$partition0$ & 64);if((bit__3910__auto__) || (G__15003.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);if(s)
{return cljs.core._rest.call(null,s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){if((coll == null))
{return null;
} else
{if((function (){var G__15005 = coll;if(G__15005)
{var bit__3910__auto__ = (G__15005.cljs$lang$protocol_mask$partition0$ & 128);if((bit__3910__auto__) || (G__15005.cljs$core$INext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){return true;
});
var _EQ___2 = (function (x,y){return ((x === y)) || (cljs.core._equiv.call(null,x,y));
});
var _EQ___3 = (function() { 
var G__15006__delegate = function (x,y,more){while(true){
if(_EQ_.call(null,x,y))
{if(cljs.core.next.call(null,more))
{{
var G__15007 = y;
var G__15008 = cljs.core.first.call(null,more);
var G__15009 = cljs.core.next.call(null,more);
x = G__15007;
y = G__15008;
more = G__15009;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__15006 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15006__delegate.call(this,x,y,more);};
G__15006.cljs$lang$maxFixedArity = 2;
G__15006.cljs$lang$applyTo = (function (arglist__15010){
var x = cljs.core.first(arglist__15010);
arglist__15010 = cljs.core.next(arglist__15010);
var y = cljs.core.first(arglist__15010);
var more = cljs.core.rest(arglist__15010);
return G__15006__delegate(x,y,more);
});
G__15006.cljs$core$IFn$_invoke$arity$variadic = G__15006__delegate;
return G__15006;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){return 0;
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){return null;
}));
(cljs.core.IKVReduce["null"] = true);
(cljs.core._kv_reduce["null"] = (function (_,f,init){return init;
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){return null;
}));
(cljs.core._pop["null"] = (function (_){return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var o__$1 = this;return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){return (x === o);
}));
(cljs.core.IMeta["function"] = true);
(cljs.core._meta["function"] = (function (_){return null;
}));
(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){return (x + 1);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){var self__ = this;
var o__$1 = this;return self__.val;
});
cljs.core.__GT_Reduced = (function __GT_Reduced(val){return (new cljs.core.Reduced(val));
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){return (r instanceof cljs.core.Reduced);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){var cnt = cljs.core._count.call(null,cicoll);if((cnt === 0))
{return f.call(null);
} else
{var val = cljs.core._nth.call(null,cicoll,0);var n = 1;while(true){
if((n < cnt))
{var nval = f.call(null,val,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__15011 = nval;
var G__15012 = (n + 1);
val = G__15011;
n = G__15012;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){var cnt = cljs.core._count.call(null,cicoll);var val__$1 = val;var n = 0;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__15013 = nval;
var G__15014 = (n + 1);
val__$1 = G__15013;
n = G__15014;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){var cnt = cljs.core._count.call(null,cicoll);var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__15015 = nval;
var G__15016 = (n + 1);
val__$1 = G__15015;
n = G__15016;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){var cnt = arr.length;if((arr.length === 0))
{return f.call(null);
} else
{var val = (arr[0]);var n = 1;while(true){
if((n < cnt))
{var nval = f.call(null,val,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__15017 = nval;
var G__15018 = (n + 1);
val = G__15017;
n = G__15018;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){var cnt = arr.length;var val__$1 = val;var n = 0;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__15019 = nval;
var G__15020 = (n + 1);
val__$1 = G__15019;
n = G__15020;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){var cnt = arr.length;var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__15021 = nval;
var G__15022 = (n + 1);
val__$1 = G__15021;
n = G__15022;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__15024 = x;if(G__15024)
{var bit__3917__auto__ = (G__15024.cljs$lang$protocol_mask$partition0$ & 2);if((bit__3917__auto__) || (G__15024.cljs$core$ICounted$))
{return true;
} else
{if((!G__15024.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__15024);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__15024);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__15026 = x;if(G__15026)
{var bit__3917__auto__ = (G__15026.cljs$lang$protocol_mask$partition0$ & 16);if((bit__3917__auto__) || (G__15026.cljs$core$IIndexed$))
{return true;
} else
{if((!G__15026.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__15026);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__15026);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_coll.call(null,coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + 1) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var c = cljs.core._count.call(null,coll__$1);if((c > 0))
{return (new cljs.core.RSeq(coll__$1,(c - 1),null));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.i]),(self__.i + 1));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + 1) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + 1)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){return (new cljs.core.IndexedSeq(arr,i));
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_coll.call(null,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.RSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;return cljs.core.seq_reduce.call(null,f,col__$1);
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;return cljs.core.seq_reduce.call(null,f,start,col__$1);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > 0))
{return (new cljs.core.RSeq(self__.ci,(self__.i - 1),null));
} else
{return null;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){return (new cljs.core.RSeq(ci,i,meta));
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){while(true){
var sn = cljs.core.next.call(null,s);if(!((sn == null)))
{{
var G__15027 = sn;
s = G__15027;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){if(!((coll == null)))
{return cljs.core._conj.call(null,coll,x);
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__15028__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__15029 = conj.call(null,coll,x);
var G__15030 = cljs.core.first.call(null,xs);
var G__15031 = cljs.core.next.call(null,xs);
coll = G__15029;
x = G__15030;
xs = G__15031;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__15028 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15028__delegate.call(this,coll,x,xs);};
G__15028.cljs$lang$maxFixedArity = 2;
G__15028.cljs$lang$applyTo = (function (arglist__15032){
var coll = cljs.core.first(arglist__15032);
arglist__15032 = cljs.core.next(arglist__15032);
var x = cljs.core.first(arglist__15032);
var xs = cljs.core.rest(arglist__15032);
return G__15028__delegate(coll,x,xs);
});
G__15028.cljs$core$IFn$_invoke$arity$variadic = G__15028__delegate;
return G__15028;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){var s = cljs.core.seq.call(null,coll);var acc = 0;while(true){
if(cljs.core.counted_QMARK_.call(null,s))
{return (acc + cljs.core._count.call(null,s));
} else
{{
var G__15033 = cljs.core.next.call(null,s);
var G__15034 = (acc + 1);
s = G__15033;
acc = G__15034;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){if(!((coll == null)))
{if((function (){var G__15036 = coll;if(G__15036)
{var bit__3910__auto__ = (G__15036.cljs$lang$protocol_mask$partition0$ & 2);if((bit__3910__auto__) || (G__15036.cljs$core$ICounted$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._count.call(null,coll);
} else
{if(coll instanceof Array)
{return coll.length;
} else
{if(typeof coll === 'string')
{return coll.length;
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,coll))
{return cljs.core._count.call(null,coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.accumulating_seq_count.call(null,coll);
} else
{return null;
}
}
}
}
}
} else
{return 0;
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__15037 = cljs.core.next.call(null,coll);
var G__15038 = (n - 1);
coll = G__15037;
n = G__15038;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){while(true){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__15039 = cljs.core.next.call(null,coll);
var G__15040 = (n - 1);
var G__15041 = not_found;
coll = G__15039;
n = G__15040;
not_found = G__15041;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){if((coll == null))
{return null;
} else
{if((function (){var G__15046 = coll;if(G__15046)
{var bit__3910__auto__ = (G__15046.cljs$lang$protocol_mask$partition0$ & 16);if((bit__3910__auto__) || (G__15046.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((function (){var G__15047 = coll;if(G__15047)
{var bit__3917__auto__ = (G__15047.cljs$lang$protocol_mask$partition0$ & 64);if((bit__3917__auto__) || (G__15047.cljs$core$ISeq$))
{return true;
} else
{if((!G__15047.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__15047);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__15047);
}
})())
{return cljs.core.linear_traversal_nth.call(null,coll,n);
} else
{throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll)))].join('')));
}
} else
{return null;
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){if(!((coll == null)))
{if((function (){var G__15048 = coll;if(G__15048)
{var bit__3910__auto__ = (G__15048.cljs$lang$protocol_mask$partition0$ & 16);if((bit__3910__auto__) || (G__15048.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((function (){var G__15049 = coll;if(G__15049)
{var bit__3917__auto__ = (G__15049.cljs$lang$protocol_mask$partition0$ & 64);if((bit__3917__auto__) || (G__15049.cljs$core$ISeq$))
{return true;
} else
{if((!G__15049.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__15049);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__15049);
}
})())
{return cljs.core.linear_traversal_nth.call(null,coll,n,not_found);
} else
{throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll)))].join('')));
}
} else
{return null;
}
}
}
}
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){if((o == null))
{return null;
} else
{if((function (){var G__15052 = o;if(G__15052)
{var bit__3910__auto__ = (G__15052.cljs$lang$protocol_mask$partition0$ & 256);if((bit__3910__auto__) || (G__15052.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._lookup.call(null,o,k);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,o))
{return cljs.core._lookup.call(null,o,k);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
});
var get__3 = (function (o,k,not_found){if(!((o == null)))
{if((function (){var G__15053 = o;if(G__15053)
{var bit__3910__auto__ = (G__15053.cljs$lang$protocol_mask$partition0$ & 256);if((bit__3910__auto__) || (G__15053.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._lookup.call(null,o,k,not_found);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,o))
{return cljs.core._lookup.call(null,o,k,not_found);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
}
} else
{return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){if(!((coll == null)))
{return cljs.core._assoc.call(null,coll,k,v);
} else
{return cljs.core.PersistentHashMap.fromArrays.call(null,[k],[v]);
}
});
var assoc__4 = (function() { 
var G__15054__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.call(null,coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__15055 = ret;
var G__15056 = cljs.core.first.call(null,kvs);
var G__15057 = cljs.core.second.call(null,kvs);
var G__15058 = cljs.core.nnext.call(null,kvs);
coll = G__15055;
k = G__15056;
v = G__15057;
kvs = G__15058;
continue;
}
} else
{return ret;
}
break;
}
};
var G__15054 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15054__delegate.call(this,coll,k,v,kvs);};
G__15054.cljs$lang$maxFixedArity = 3;
G__15054.cljs$lang$applyTo = (function (arglist__15059){
var coll = cljs.core.first(arglist__15059);
arglist__15059 = cljs.core.next(arglist__15059);
var k = cljs.core.first(arglist__15059);
arglist__15059 = cljs.core.next(arglist__15059);
var v = cljs.core.first(arglist__15059);
var kvs = cljs.core.rest(arglist__15059);
return G__15054__delegate(coll,k,v,kvs);
});
G__15054.cljs$core$IFn$_invoke$arity$variadic = G__15054__delegate;
return G__15054;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){return coll;
});
var dissoc__2 = (function (coll,k){return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__15060__delegate = function (coll,k,ks){while(true){
var ret = dissoc.call(null,coll,k);if(cljs.core.truth_(ks))
{{
var G__15061 = ret;
var G__15062 = cljs.core.first.call(null,ks);
var G__15063 = cljs.core.next.call(null,ks);
coll = G__15061;
k = G__15062;
ks = G__15063;
continue;
}
} else
{return ret;
}
break;
}
};
var G__15060 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15060__delegate.call(this,coll,k,ks);};
G__15060.cljs$lang$maxFixedArity = 2;
G__15060.cljs$lang$applyTo = (function (arglist__15064){
var coll = cljs.core.first(arglist__15064);
arglist__15064 = cljs.core.next(arglist__15064);
var k = cljs.core.first(arglist__15064);
var ks = cljs.core.rest(arglist__15064);
return G__15060__delegate(coll,k,ks);
});
G__15060.cljs$core$IFn$_invoke$arity$variadic = G__15060__delegate;
return G__15060;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__3291__auto__ = goog.isFunction(f);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var G__15068 = f;if(G__15068)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto____$1 = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{return G__15068.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__15068.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__15068);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__15068);
}
}
});
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_.call(null,o)) && (!((function (){var G__15076 = o;if(G__15076)
{var bit__3917__auto__ = (G__15076.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__3917__auto__) || (G__15076.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__15076.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__15076);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__15076);
}
})())))
{return with_meta.call(null,(function (){if(typeof cljs.core.t15077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.t15077 = (function (meta,o,with_meta,meta15078){
this.meta = meta;
this.o = o;
this.with_meta = with_meta;
this.meta15078 = meta15078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.t15077.cljs$lang$type = true;
cljs.core.t15077.cljs$lang$ctorStr = "cljs.core/t15077";
cljs.core.t15077.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/t15077");
});
cljs.core.t15077.prototype.call = (function() { 
var G__15081__delegate = function (self__,args){var self____$1 = this;var _ = self____$1;return cljs.core.apply.call(null,self__.o,args);
};
var G__15081 = function (self__,var_args){
var self__ = this;
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15081__delegate.call(this,self__,args);};
G__15081.cljs$lang$maxFixedArity = 1;
G__15081.cljs$lang$applyTo = (function (arglist__15082){
var self__ = cljs.core.first(arglist__15082);
var args = cljs.core.rest(arglist__15082);
return G__15081__delegate(self__,args);
});
G__15081.cljs$core$IFn$_invoke$arity$variadic = G__15081__delegate;
return G__15081;
})()
;
cljs.core.t15077.prototype.apply = (function (self__,args15080){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15080)));
});
cljs.core.t15077.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__15083__delegate = function (args){var _ = this;return cljs.core.apply.call(null,self__.o,args);
};
var G__15083 = function (var_args){
var self__ = this;
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15083__delegate.call(this,args);};
G__15083.cljs$lang$maxFixedArity = 0;
G__15083.cljs$lang$applyTo = (function (arglist__15084){
var args = cljs.core.seq(arglist__15084);
return G__15083__delegate(args);
});
G__15083.cljs$core$IFn$_invoke$arity$variadic = G__15083__delegate;
return G__15083;
})()
;
cljs.core.t15077.prototype.cljs$core$Fn$ = true;
cljs.core.t15077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15079){var self__ = this;
var _15079__$1 = this;return self__.meta15078;
});
cljs.core.t15077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15079,meta15078__$1){var self__ = this;
var _15079__$1 = this;return (new cljs.core.t15077(self__.meta,self__.o,self__.with_meta,meta15078__$1));
});
cljs.core.__GT_t15077 = (function __GT_t15077(meta__$1,o__$1,with_meta__$1,meta15078){return (new cljs.core.t15077(meta__$1,o__$1,with_meta__$1,meta15078));
});
}
return (new cljs.core.t15077(meta,o,with_meta,null));
})(),meta);
} else
{return cljs.core._with_meta.call(null,o,meta);
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){if((function (){var G__15086 = o;if(G__15086)
{var bit__3917__auto__ = (G__15086.cljs$lang$protocol_mask$partition0$ & 131072);if((bit__3917__auto__) || (G__15086.cljs$core$IMeta$))
{return true;
} else
{if((!G__15086.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__15086);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__15086);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){return coll;
});
var disj__2 = (function (coll,k){return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__15087__delegate = function (coll,k,ks){while(true){
var ret = disj.call(null,coll,k);if(cljs.core.truth_(ks))
{{
var G__15088 = ret;
var G__15089 = cljs.core.first.call(null,ks);
var G__15090 = cljs.core.next.call(null,ks);
coll = G__15088;
k = G__15089;
ks = G__15090;
continue;
}
} else
{return ret;
}
break;
}
};
var G__15087 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15087__delegate.call(this,coll,k,ks);};
G__15087.cljs$lang$maxFixedArity = 2;
G__15087.cljs$lang$applyTo = (function (arglist__15091){
var coll = cljs.core.first(arglist__15091);
arglist__15091 = cljs.core.next(arglist__15091);
var k = cljs.core.first(arglist__15091);
var ks = cljs.core.rest(arglist__15091);
return G__15087__delegate(coll,k,ks);
});
G__15087.cljs$core$IFn$_invoke$arity$variadic = G__15087__delegate;
return G__15087;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = (function (){var obj15093 = {};return obj15093;
})();
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){var h = goog.string.hashCode(k);(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = (function (){var obj15097 = {};return obj15097;
})();
cljs.core.string_hash_cache_count = 0;
} else
{}
var h = (cljs.core.string_hash_cache[k]);if(typeof h === 'number')
{return h;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function hash(o){if((function (){var G__15099 = o;if(G__15099)
{var bit__3910__auto__ = (G__15099.cljs$lang$protocol_mask$partition0$ & 4194304);if((bit__3910__auto__) || (G__15099.cljs$core$IHash$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._hash.call(null,o);
} else
{if(typeof o === 'number')
{return (Math.floor(o) % 2147483647);
} else
{if(o === true)
{return 1;
} else
{if(o === false)
{return 0;
} else
{if(typeof o === 'string')
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._hash.call(null,o);
} else
{return null;
}
}
}
}
}
}
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){return ((coll == null)) || (cljs.core.not.call(null,cljs.core.seq.call(null,coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){if((x == null))
{return false;
} else
{var G__15101 = x;if(G__15101)
{var bit__3917__auto__ = (G__15101.cljs$lang$protocol_mask$partition0$ & 8);if((bit__3917__auto__) || (G__15101.cljs$core$ICollection$))
{return true;
} else
{if((!G__15101.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__15101);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__15101);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__15103 = x;if(G__15103)
{var bit__3917__auto__ = (G__15103.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__3917__auto__) || (G__15103.cljs$core$ISet$))
{return true;
} else
{if((!G__15103.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__15103);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__15103);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__15105 = x;if(G__15105)
{var bit__3917__auto__ = (G__15105.cljs$lang$protocol_mask$partition0$ & 512);if((bit__3917__auto__) || (G__15105.cljs$core$IAssociative$))
{return true;
} else
{if((!G__15105.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__15105);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__15105);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__15107 = x;if(G__15107)
{var bit__3917__auto__ = (G__15107.cljs$lang$protocol_mask$partition0$ & 16777216);if((bit__3917__auto__) || (G__15107.cljs$core$ISequential$))
{return true;
} else
{if((!G__15107.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__15107);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__15107);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__15109 = x;if(G__15109)
{var bit__3917__auto__ = (G__15109.cljs$lang$protocol_mask$partition0$ & 524288);if((bit__3917__auto__) || (G__15109.cljs$core$IReduce$))
{return true;
} else
{if((!G__15109.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__15109);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__15109);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__15111 = x;if(G__15111)
{var bit__3917__auto__ = (G__15111.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__3917__auto__) || (G__15111.cljs$core$IMap$))
{return true;
} else
{if((!G__15111.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__15111);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__15111);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__15113 = x;if(G__15113)
{var bit__3917__auto__ = (G__15113.cljs$lang$protocol_mask$partition0$ & 16384);if((bit__3917__auto__) || (G__15113.cljs$core$IVector$))
{return true;
} else
{if((!G__15113.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__15113);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__15113);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__15115 = x;if(G__15115)
{var bit__3910__auto__ = (G__15115.cljs$lang$protocol_mask$partition1$ & 512);if((bit__3910__auto__) || (G__15115.cljs$core$IChunkedSeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){var obj15119 = {};return obj15119;
});
var js_obj__1 = (function() { 
var G__15120__delegate = function (keyvals){return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__15120 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15120__delegate.call(this,keyvals);};
G__15120.cljs$lang$maxFixedArity = 0;
G__15120.cljs$lang$applyTo = (function (arglist__15121){
var keyvals = cljs.core.seq(arglist__15121);
return G__15120__delegate(keyvals);
});
G__15120.cljs$core$IFn$_invoke$arity$variadic = G__15120__delegate;
return G__15120;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){var keys = [];goog.object.forEach(obj,(function (val,key,obj__$1){return keys.push(key);
}));
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){var i__$1 = i;var j__$1 = j;var len__$1 = len;while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__15122 = (i__$1 + 1);
var G__15123 = (j__$1 + 1);
var G__15124 = (len__$1 - 1);
i__$1 = G__15122;
j__$1 = G__15123;
len__$1 = G__15124;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){var i__$1 = (i + (len - 1));var j__$1 = (j + (len - 1));var len__$1 = len;while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__15125 = (i__$1 - 1);
var G__15126 = (j__$1 - 1);
var G__15127 = (len__$1 - 1);
i__$1 = G__15125;
j__$1 = G__15126;
len__$1 = G__15127;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj15129 = {};return obj15129;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){if((s == null))
{return false;
} else
{var G__15131 = s;if(G__15131)
{var bit__3917__auto__ = (G__15131.cljs$lang$protocol_mask$partition0$ & 64);if((bit__3917__auto__) || (G__15131.cljs$core$ISeq$))
{return true;
} else
{if((!G__15131.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__15131);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__15131);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__15133 = s;if(G__15133)
{var bit__3917__auto__ = (G__15133.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__15133.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15133.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15133);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15133);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__3291__auto__ = cljs.core.fn_QMARK_.call(null,f);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var G__15137 = f;if(G__15137)
{var bit__3917__auto__ = (G__15137.cljs$lang$protocol_mask$partition0$ & 1);if((bit__3917__auto__) || (G__15137.cljs$core$IFn$))
{return true;
} else
{if((!G__15137.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,G__15137);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,G__15137);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && ((parseFloat(n) === parseInt(n,10)));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){if((cljs.core.get.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){if((!((coll == null))) && (cljs.core.associative_QMARK_.call(null,coll)) && (cljs.core.contains_QMARK_.call(null,coll,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.call(null,coll,k)], null);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){return true;
});
var distinct_QMARK___2 = (function (x,y){return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__15138__delegate = function (x,y,more){if(!(cljs.core._EQ_.call(null,x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([y,x], true);var xs = more;while(true){
var x__$1 = cljs.core.first.call(null,xs);var etc = cljs.core.next.call(null,xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_.call(null,s,x__$1))
{return false;
} else
{{
var G__15139 = cljs.core.conj.call(null,s,x__$1);
var G__15140 = etc;
s = G__15139;
xs = G__15140;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__15138 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15138__delegate.call(this,x,y,more);};
G__15138.cljs$lang$maxFixedArity = 2;
G__15138.cljs$lang$applyTo = (function (arglist__15141){
var x = cljs.core.first(arglist__15141);
arglist__15141 = cljs.core.next(arglist__15141);
var y = cljs.core.first(arglist__15141);
var more = cljs.core.rest(arglist__15141);
return G__15138__delegate(x,y,more);
});
G__15138.cljs$core$IFn$_invoke$arity$variadic = G__15138__delegate;
return G__15138;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__15143 = x;if(G__15143)
{var bit__3910__auto__ = (G__15143.cljs$lang$protocol_mask$partition1$ & 2048);if((bit__3910__auto__) || (G__15143.cljs$core$IComparable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){var xl = cljs.core.count.call(null,xs);var yl = cljs.core.count.call(null,ys);if((xl < yl))
{return -1;
} else
{if((xl > yl))
{return 1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return compare_indexed.call(null,xs,ys,xl,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){while(true){
var d = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));if(((d === 0)) && (((n + 1) < len)))
{{
var G__15144 = xs;
var G__15145 = ys;
var G__15146 = len;
var G__15147 = (n + 1);
xs = G__15144;
ys = G__15145;
len = G__15146;
n = G__15147;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){var r = f.call(null,x,y);if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){if(cljs.core.seq.call(null,coll))
{var a = cljs.core.to_array.call(null,coll);goog.array.stableSort(a,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.call(null,(function (x,y){return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){var temp__4090__auto__ = cljs.core.seq.call(null,coll);if(temp__4090__auto__)
{var s = temp__4090__auto__;return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s),cljs.core.next.call(null,s));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq.call(null,coll);while(true){
if(coll__$1)
{var nval = f.call(null,val__$1,cljs.core.first.call(null,coll__$1));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__15148 = nval;
var G__15149 = cljs.core.next.call(null,coll__$1);
val__$1 = G__15148;
coll__$1 = G__15149;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){var a = cljs.core.to_array.call(null,coll);goog.array.shuffle(a);
return cljs.core.vec.call(null,a);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){if((function (){var G__15152 = coll;if(G__15152)
{var bit__3910__auto__ = (G__15152.cljs$lang$protocol_mask$partition0$ & 524288);if((bit__3910__auto__) || (G__15152.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.call(null,coll,f);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.call(null,coll,f);
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,coll))
{return cljs.core._reduce.call(null,coll,f);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.seq_reduce.call(null,f,coll);
} else
{return null;
}
}
}
}
}
});
var reduce__3 = (function (f,val,coll){if((function (){var G__15153 = coll;if(G__15153)
{var bit__3910__auto__ = (G__15153.cljs$lang$protocol_mask$partition0$ & 524288);if((bit__3910__auto__) || (G__15153.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.call(null,coll,f,val);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.call(null,coll,f,val);
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,coll))
{return cljs.core._reduce.call(null,coll,f,val);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.seq_reduce.call(null,f,val,coll);
} else
{return null;
}
}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){return cljs.core._kv_reduce.call(null,coll,f,init);
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){return 0;
});
var _PLUS___1 = (function (x){return x;
});
var _PLUS___2 = (function (x,y){return (x + y);
});
var _PLUS___3 = (function() { 
var G__15154__delegate = function (x,y,more){return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__15154 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15154__delegate.call(this,x,y,more);};
G__15154.cljs$lang$maxFixedArity = 2;
G__15154.cljs$lang$applyTo = (function (arglist__15155){
var x = cljs.core.first(arglist__15155);
arglist__15155 = cljs.core.next(arglist__15155);
var y = cljs.core.first(arglist__15155);
var more = cljs.core.rest(arglist__15155);
return G__15154__delegate(x,y,more);
});
G__15154.cljs$core$IFn$_invoke$arity$variadic = G__15154__delegate;
return G__15154;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){return (- x);
});
var ___2 = (function (x,y){return (x - y);
});
var ___3 = (function() { 
var G__15156__delegate = function (x,y,more){return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__15156 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15156__delegate.call(this,x,y,more);};
G__15156.cljs$lang$maxFixedArity = 2;
G__15156.cljs$lang$applyTo = (function (arglist__15157){
var x = cljs.core.first(arglist__15157);
arglist__15157 = cljs.core.next(arglist__15157);
var y = cljs.core.first(arglist__15157);
var more = cljs.core.rest(arglist__15157);
return G__15156__delegate(x,y,more);
});
G__15156.cljs$core$IFn$_invoke$arity$variadic = G__15156__delegate;
return G__15156;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){return 1;
});
var _STAR___1 = (function (x){return x;
});
var _STAR___2 = (function (x,y){return (x * y);
});
var _STAR___3 = (function() { 
var G__15158__delegate = function (x,y,more){return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__15158 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15158__delegate.call(this,x,y,more);};
G__15158.cljs$lang$maxFixedArity = 2;
G__15158.cljs$lang$applyTo = (function (arglist__15159){
var x = cljs.core.first(arglist__15159);
arglist__15159 = cljs.core.next(arglist__15159);
var y = cljs.core.first(arglist__15159);
var more = cljs.core.rest(arglist__15159);
return G__15158__delegate(x,y,more);
});
G__15158.cljs$core$IFn$_invoke$arity$variadic = G__15158__delegate;
return G__15158;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){return (x / y);
});
var _SLASH___3 = (function() { 
var G__15160__delegate = function (x,y,more){return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__15160 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15160__delegate.call(this,x,y,more);};
G__15160.cljs$lang$maxFixedArity = 2;
G__15160.cljs$lang$applyTo = (function (arglist__15161){
var x = cljs.core.first(arglist__15161);
arglist__15161 = cljs.core.next(arglist__15161);
var y = cljs.core.first(arglist__15161);
var more = cljs.core.rest(arglist__15161);
return G__15160__delegate(x,y,more);
});
G__15160.cljs$core$IFn$_invoke$arity$variadic = G__15160__delegate;
return G__15160;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){return true;
});
var _LT___2 = (function (x,y){return (x < y);
});
var _LT___3 = (function() { 
var G__15162__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__15163 = y;
var G__15164 = cljs.core.first.call(null,more);
var G__15165 = cljs.core.next.call(null,more);
x = G__15163;
y = G__15164;
more = G__15165;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__15162 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15162__delegate.call(this,x,y,more);};
G__15162.cljs$lang$maxFixedArity = 2;
G__15162.cljs$lang$applyTo = (function (arglist__15166){
var x = cljs.core.first(arglist__15166);
arglist__15166 = cljs.core.next(arglist__15166);
var y = cljs.core.first(arglist__15166);
var more = cljs.core.rest(arglist__15166);
return G__15162__delegate(x,y,more);
});
G__15162.cljs$core$IFn$_invoke$arity$variadic = G__15162__delegate;
return G__15162;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){return true;
});
var _LT__EQ___2 = (function (x,y){return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__15167__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__15168 = y;
var G__15169 = cljs.core.first.call(null,more);
var G__15170 = cljs.core.next.call(null,more);
x = G__15168;
y = G__15169;
more = G__15170;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__15167 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15167__delegate.call(this,x,y,more);};
G__15167.cljs$lang$maxFixedArity = 2;
G__15167.cljs$lang$applyTo = (function (arglist__15171){
var x = cljs.core.first(arglist__15171);
arglist__15171 = cljs.core.next(arglist__15171);
var y = cljs.core.first(arglist__15171);
var more = cljs.core.rest(arglist__15171);
return G__15167__delegate(x,y,more);
});
G__15167.cljs$core$IFn$_invoke$arity$variadic = G__15167__delegate;
return G__15167;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){return true;
});
var _GT___2 = (function (x,y){return (x > y);
});
var _GT___3 = (function() { 
var G__15172__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__15173 = y;
var G__15174 = cljs.core.first.call(null,more);
var G__15175 = cljs.core.next.call(null,more);
x = G__15173;
y = G__15174;
more = G__15175;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__15172 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15172__delegate.call(this,x,y,more);};
G__15172.cljs$lang$maxFixedArity = 2;
G__15172.cljs$lang$applyTo = (function (arglist__15176){
var x = cljs.core.first(arglist__15176);
arglist__15176 = cljs.core.next(arglist__15176);
var y = cljs.core.first(arglist__15176);
var more = cljs.core.rest(arglist__15176);
return G__15172__delegate(x,y,more);
});
G__15172.cljs$core$IFn$_invoke$arity$variadic = G__15172__delegate;
return G__15172;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){return true;
});
var _GT__EQ___2 = (function (x,y){return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__15177__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__15178 = y;
var G__15179 = cljs.core.first.call(null,more);
var G__15180 = cljs.core.next.call(null,more);
x = G__15178;
y = G__15179;
more = G__15180;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__15177 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15177__delegate.call(this,x,y,more);};
G__15177.cljs$lang$maxFixedArity = 2;
G__15177.cljs$lang$applyTo = (function (arglist__15181){
var x = cljs.core.first(arglist__15181);
arglist__15181 = cljs.core.next(arglist__15181);
var y = cljs.core.first(arglist__15181);
var more = cljs.core.rest(arglist__15181);
return G__15177__delegate(x,y,more);
});
G__15177.cljs$core$IFn$_invoke$arity$variadic = G__15177__delegate;
return G__15177;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){return x;
});
var max__2 = (function (x,y){var x__3598__auto__ = x;var y__3599__auto__ = y;return ((x__3598__auto__ > y__3599__auto__) ? x__3598__auto__ : y__3599__auto__);
});
var max__3 = (function() { 
var G__15182__delegate = function (x,y,more){return cljs.core.reduce.call(null,max,(function (){var x__3598__auto__ = x;var y__3599__auto__ = y;return ((x__3598__auto__ > y__3599__auto__) ? x__3598__auto__ : y__3599__auto__);
})(),more);
};
var G__15182 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15182__delegate.call(this,x,y,more);};
G__15182.cljs$lang$maxFixedArity = 2;
G__15182.cljs$lang$applyTo = (function (arglist__15183){
var x = cljs.core.first(arglist__15183);
arglist__15183 = cljs.core.next(arglist__15183);
var y = cljs.core.first(arglist__15183);
var more = cljs.core.rest(arglist__15183);
return G__15182__delegate(x,y,more);
});
G__15182.cljs$core$IFn$_invoke$arity$variadic = G__15182__delegate;
return G__15182;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){return x;
});
var min__2 = (function (x,y){var x__3605__auto__ = x;var y__3606__auto__ = y;return ((x__3605__auto__ < y__3606__auto__) ? x__3605__auto__ : y__3606__auto__);
});
var min__3 = (function() { 
var G__15184__delegate = function (x,y,more){return cljs.core.reduce.call(null,min,(function (){var x__3605__auto__ = x;var y__3606__auto__ = y;return ((x__3605__auto__ < y__3606__auto__) ? x__3605__auto__ : y__3606__auto__);
})(),more);
};
var G__15184 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15184__delegate.call(this,x,y,more);};
G__15184.cljs$lang$maxFixedArity = 2;
G__15184.cljs$lang$applyTo = (function (arglist__15185){
var x = cljs.core.first(arglist__15185);
arglist__15185 = cljs.core.next(arglist__15185);
var y = cljs.core.first(arglist__15185);
var more = cljs.core.rest(arglist__15185);
return G__15184__delegate(x,y,more);
});
G__15184.cljs$core$IFn$_invoke$arity$variadic = G__15184__delegate;
return G__15184;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){if(typeof x === 'number')
{return String.fromCharCode(x);
} else
{if((typeof x === 'string') && ((x.length === 1)))
{return x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("Argument to char must be a character or number"));
} else
{return null;
}
}
}
});
cljs.core.short$ = (function short$(x){return x;
});
cljs.core.float$ = (function float$(x){return x;
});
cljs.core.double$ = (function double$(x){return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){return 0;
});
var unchecked_add__1 = (function (x){return x;
});
var unchecked_add__2 = (function (x,y){return (x + y);
});
var unchecked_add__3 = (function() { 
var G__15186__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_add,(x + y),more);
};
var G__15186 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15186__delegate.call(this,x,y,more);};
G__15186.cljs$lang$maxFixedArity = 2;
G__15186.cljs$lang$applyTo = (function (arglist__15187){
var x = cljs.core.first(arglist__15187);
arglist__15187 = cljs.core.next(arglist__15187);
var y = cljs.core.first(arglist__15187);
var more = cljs.core.rest(arglist__15187);
return G__15186__delegate(x,y,more);
});
G__15186.cljs$core$IFn$_invoke$arity$variadic = G__15186__delegate;
return G__15186;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){return 0;
});
var unchecked_add_int__1 = (function (x){return x;
});
var unchecked_add_int__2 = (function (x,y){return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__15188__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_add_int,(x + y),more);
};
var G__15188 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15188__delegate.call(this,x,y,more);};
G__15188.cljs$lang$maxFixedArity = 2;
G__15188.cljs$lang$applyTo = (function (arglist__15189){
var x = cljs.core.first(arglist__15189);
arglist__15189 = cljs.core.next(arglist__15189);
var y = cljs.core.first(arglist__15189);
var more = cljs.core.rest(arglist__15189);
return G__15188__delegate(x,y,more);
});
G__15188.cljs$core$IFn$_invoke$arity$variadic = G__15188__delegate;
return G__15188;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){return (x - 1);
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){return (x - 1);
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){return unchecked_divide_int.call(null,1,x);
});
var unchecked_divide_int__2 = (function (x,y){return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__15190__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_divide_int,unchecked_divide_int.call(null,x,y),more);
};
var G__15190 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15190__delegate.call(this,x,y,more);};
G__15190.cljs$lang$maxFixedArity = 2;
G__15190.cljs$lang$applyTo = (function (arglist__15191){
var x = cljs.core.first(arglist__15191);
arglist__15191 = cljs.core.next(arglist__15191);
var y = cljs.core.first(arglist__15191);
var more = cljs.core.rest(arglist__15191);
return G__15190__delegate(x,y,more);
});
G__15190.cljs$core$IFn$_invoke$arity$variadic = G__15190__delegate;
return G__15190;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){return (x + 1);
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){return (x + 1);
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){return 1;
});
var unchecked_multiply__1 = (function (x){return x;
});
var unchecked_multiply__2 = (function (x,y){return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__15192__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_multiply,(x * y),more);
};
var G__15192 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15192__delegate.call(this,x,y,more);};
G__15192.cljs$lang$maxFixedArity = 2;
G__15192.cljs$lang$applyTo = (function (arglist__15193){
var x = cljs.core.first(arglist__15193);
arglist__15193 = cljs.core.next(arglist__15193);
var y = cljs.core.first(arglist__15193);
var more = cljs.core.rest(arglist__15193);
return G__15192__delegate(x,y,more);
});
G__15192.cljs$core$IFn$_invoke$arity$variadic = G__15192__delegate;
return G__15192;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){return 1;
});
var unchecked_multiply_int__1 = (function (x){return x;
});
var unchecked_multiply_int__2 = (function (x,y){return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__15194__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_multiply_int,(x * y),more);
};
var G__15194 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15194__delegate.call(this,x,y,more);};
G__15194.cljs$lang$maxFixedArity = 2;
G__15194.cljs$lang$applyTo = (function (arglist__15195){
var x = cljs.core.first(arglist__15195);
arglist__15195 = cljs.core.next(arglist__15195);
var y = cljs.core.first(arglist__15195);
var more = cljs.core.rest(arglist__15195);
return G__15194__delegate(x,y,more);
});
G__15194.cljs$core$IFn$_invoke$arity$variadic = G__15194__delegate;
return G__15194;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){return cljs.core.mod.call(null,x,n);
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_substract = (function() {
var unchecked_substract = null;
var unchecked_substract__1 = (function (x){return (- x);
});
var unchecked_substract__2 = (function (x,y){return (x - y);
});
var unchecked_substract__3 = (function() { 
var G__15196__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_substract,(x - y),more);
};
var G__15196 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15196__delegate.call(this,x,y,more);};
G__15196.cljs$lang$maxFixedArity = 2;
G__15196.cljs$lang$applyTo = (function (arglist__15197){
var x = cljs.core.first(arglist__15197);
arglist__15197 = cljs.core.next(arglist__15197);
var y = cljs.core.first(arglist__15197);
var more = cljs.core.rest(arglist__15197);
return G__15196__delegate(x,y,more);
});
G__15196.cljs$core$IFn$_invoke$arity$variadic = G__15196__delegate;
return G__15196;
})()
;
unchecked_substract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_substract__1.call(this,x);
case 2:
return unchecked_substract__2.call(this,x,y);
default:
return unchecked_substract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_substract.cljs$lang$maxFixedArity = 2;
unchecked_substract.cljs$lang$applyTo = unchecked_substract__3.cljs$lang$applyTo;
unchecked_substract.cljs$core$IFn$_invoke$arity$1 = unchecked_substract__1;
unchecked_substract.cljs$core$IFn$_invoke$arity$2 = unchecked_substract__2;
unchecked_substract.cljs$core$IFn$_invoke$arity$variadic = unchecked_substract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_substract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_substract_int = (function() {
var unchecked_substract_int = null;
var unchecked_substract_int__1 = (function (x){return (- x);
});
var unchecked_substract_int__2 = (function (x,y){return (x - y);
});
var unchecked_substract_int__3 = (function() { 
var G__15198__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_substract_int,(x - y),more);
};
var G__15198 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15198__delegate.call(this,x,y,more);};
G__15198.cljs$lang$maxFixedArity = 2;
G__15198.cljs$lang$applyTo = (function (arglist__15199){
var x = cljs.core.first(arglist__15199);
arglist__15199 = cljs.core.next(arglist__15199);
var y = cljs.core.first(arglist__15199);
var more = cljs.core.rest(arglist__15199);
return G__15198__delegate(x,y,more);
});
G__15198.cljs$core$IFn$_invoke$arity$variadic = G__15198__delegate;
return G__15198;
})()
;
unchecked_substract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_substract_int__1.call(this,x);
case 2:
return unchecked_substract_int__2.call(this,x,y);
default:
return unchecked_substract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_substract_int.cljs$lang$maxFixedArity = 2;
unchecked_substract_int.cljs$lang$applyTo = unchecked_substract_int__3.cljs$lang$applyTo;
unchecked_substract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_substract_int__1;
unchecked_substract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_substract_int__2;
unchecked_substract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_substract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_substract_int;
})()
;
cljs.core.fix = (function fix(q){if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){return (x | 0);
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){return cljs.core.fix.call(null,x);
});
cljs.core.booleans = (function booleans(x){return x;
});
cljs.core.bytes = (function bytes(x){return x;
});
cljs.core.chars = (function chars(x){return x;
});
cljs.core.shorts = (function shorts(x){return x;
});
cljs.core.ints = (function ints(x){return x;
});
cljs.core.floats = (function floats(x){return x;
});
cljs.core.doubles = (function doubles(x){return x;
});
cljs.core.longs = (function longs(x){return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){var rem = (n % d);return cljs.core.fix.call(null,((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){var q = cljs.core.quot.call(null,n,d);return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return Math.random.call(null);
});
var rand__1 = (function (n){return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){var v__$1 = (v - ((v >> 1) & 1431655765));var v__$2 = ((v__$1 & 858993459) + ((v__$1 >> 2) & 858993459));return ((((v__$2 + (v__$2 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){return true;
});
var _EQ__EQ___2 = (function (x,y){return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__15200__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.call(null,x,y))
{if(cljs.core.next.call(null,more))
{{
var G__15201 = y;
var G__15202 = cljs.core.first.call(null,more);
var G__15203 = cljs.core.next.call(null,more);
x = G__15201;
y = G__15202;
more = G__15203;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__15200 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15200__delegate.call(this,x,y,more);};
G__15200.cljs$lang$maxFixedArity = 2;
G__15200.cljs$lang$applyTo = (function (arglist__15204){
var x = cljs.core.first(arglist__15204);
arglist__15204 = cljs.core.next(arglist__15204);
var y = cljs.core.first(arglist__15204);
var more = cljs.core.rest(arglist__15204);
return G__15200__delegate(x,y,more);
});
G__15200.cljs$core$IFn$_invoke$arity$variadic = G__15200__delegate;
return G__15200;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){var n__$1 = n;var xs = cljs.core.seq.call(null,coll);while(true){
if((xs) && ((n__$1 > 0)))
{{
var G__15205 = (n__$1 - 1);
var G__15206 = cljs.core.next.call(null,xs);
n__$1 = G__15205;
xs = G__15206;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){return "";
});
var str__1 = (function (x){if((x == null))
{return "";
} else
{return x.toString();
}
});
var str__2 = (function() { 
var G__15207__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.call(null,x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__15208 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__15209 = cljs.core.next.call(null,more);
sb = G__15208;
more = G__15209;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__15207 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15207__delegate.call(this,x,ys);};
G__15207.cljs$lang$maxFixedArity = 1;
G__15207.cljs$lang$applyTo = (function (arglist__15210){
var x = cljs.core.first(arglist__15210);
var ys = cljs.core.rest(arglist__15210);
return G__15207__delegate(x,ys);
});
G__15207.cljs$core$IFn$_invoke$arity$variadic = G__15207__delegate;
return G__15207;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){return s.substring(start);
});
var subs__3 = (function (s,start,end){return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs = cljs.core.seq.call(null,x);var ys = cljs.core.seq.call(null,y);while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys)))
{{
var G__15211 = cljs.core.next.call(null,xs);
var G__15212 = cljs.core.next.call(null,ys);
xs = G__15211;
ys = G__15212;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){if(cljs.core.seq.call(null,coll))
{var res = cljs.core.hash.call(null,cljs.core.first.call(null,coll));var s = cljs.core.next.call(null,coll);while(true){
if((s == null))
{return res;
} else
{{
var G__15213 = cljs.core.hash_combine.call(null,res,cljs.core.hash.call(null,cljs.core.first.call(null,s)));
var G__15214 = cljs.core.next.call(null,s);
res = G__15213;
s = G__15214;
continue;
}
}
break;
}
} else
{return 0;
}
});
cljs.core.hash_imap = (function hash_imap(m){var h = 0;var s = cljs.core.seq.call(null,m);while(true){
if(s)
{var e = cljs.core.first.call(null,s);{
var G__15215 = ((h + (cljs.core.hash.call(null,cljs.core.key.call(null,e)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e)))) % 4503599627370496);
var G__15216 = cljs.core.next.call(null,s);
h = G__15215;
s = G__15216;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){var h = 0;var s__$1 = cljs.core.seq.call(null,s);while(true){
if(s__$1)
{var e = cljs.core.first.call(null,s__$1);{
var G__15217 = ((h + cljs.core.hash.call(null,e)) % 4503599627370496);
var G__15218 = cljs.core.next.call(null,s__$1);
h = G__15217;
s__$1 = G__15218;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__15225_15231 = cljs.core.seq.call(null,fn_map);var chunk__15226_15232 = null;var count__15227_15233 = 0;var i__15228_15234 = 0;while(true){
if((i__15228_15234 < count__15227_15233))
{var vec__15229_15235 = cljs.core._nth.call(null,chunk__15226_15232,i__15228_15234);var key_name_15236 = cljs.core.nth.call(null,vec__15229_15235,0,null);var f_15237 = cljs.core.nth.call(null,vec__15229_15235,1,null);var str_name_15238 = cljs.core.name.call(null,key_name_15236);(obj[str_name_15238] = f_15237);
{
var G__15239 = seq__15225_15231;
var G__15240 = chunk__15226_15232;
var G__15241 = count__15227_15233;
var G__15242 = (i__15228_15234 + 1);
seq__15225_15231 = G__15239;
chunk__15226_15232 = G__15240;
count__15227_15233 = G__15241;
i__15228_15234 = G__15242;
continue;
}
} else
{var temp__4092__auto___15243 = cljs.core.seq.call(null,seq__15225_15231);if(temp__4092__auto___15243)
{var seq__15225_15244__$1 = temp__4092__auto___15243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15225_15244__$1))
{var c__4015__auto___15245 = cljs.core.chunk_first.call(null,seq__15225_15244__$1);{
var G__15246 = cljs.core.chunk_rest.call(null,seq__15225_15244__$1);
var G__15247 = c__4015__auto___15245;
var G__15248 = cljs.core.count.call(null,c__4015__auto___15245);
var G__15249 = 0;
seq__15225_15231 = G__15246;
chunk__15226_15232 = G__15247;
count__15227_15233 = G__15248;
i__15228_15234 = G__15249;
continue;
}
} else
{var vec__15230_15250 = cljs.core.first.call(null,seq__15225_15244__$1);var key_name_15251 = cljs.core.nth.call(null,vec__15230_15250,0,null);var f_15252 = cljs.core.nth.call(null,vec__15230_15250,1,null);var str_name_15253 = cljs.core.name.call(null,key_name_15251);(obj[str_name_15253] = f_15252);
{
var G__15254 = cljs.core.next.call(null,seq__15225_15244__$1);
var G__15255 = null;
var G__15256 = 0;
var G__15257 = 0;
seq__15225_15231 = G__15254;
chunk__15226_15232 = G__15255;
count__15227_15233 = G__15256;
i__15228_15234 = G__15257;
continue;
}
}
} else
{}
}
break;
}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === 1))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._rest.call(null,coll__$1);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === 1))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){return (new cljs.core.List(meta,first,rest,count,__hash));
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){return (new cljs.core.EmptyList(meta));
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__15259 = coll;if(G__15259)
{var bit__3917__auto__ = (G__15259.cljs$lang$protocol_mask$partition0$ & 134217728);if((bit__3917__auto__) || (G__15259.cljs$core$IReversible$))
{return true;
} else
{if((!G__15259.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__15259);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__15259);
}
});
cljs.core.rseq = (function rseq(coll){return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){var arr = (((xs instanceof cljs.core.IndexedSeq))?xs.arr:(function (){var arr = [];var xs__$1 = xs;while(true){
if(!((xs__$1 == null)))
{arr.push(cljs.core._first.call(null,xs__$1));
{
var G__15260 = cljs.core._next.call(null,xs__$1);
xs__$1 = G__15260;
continue;
}
} else
{return arr;
}
break;
}
})());var i = arr.length;var r = cljs.core.List.EMPTY;while(true){
if((i > 0))
{{
var G__15261 = (i - 1);
var G__15262 = cljs.core._conj.call(null,r,(arr[(i - 1)]));
i = G__15261;
r = G__15262;
continue;
}
} else
{return r;
}
break;
}
};
var list = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__15263){
var xs = cljs.core.seq(arglist__15263);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return null;
} else
{return cljs.core.seq.call(null,self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});
cljs.core.Cons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){return (new cljs.core.Cons(meta,first,rest,__hash));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){if((function (){var or__3291__auto__ = (coll == null);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var G__15267 = coll;if(G__15267)
{var bit__3910__auto__ = (G__15267.cljs$lang$protocol_mask$partition0$ & 64);if((bit__3910__auto__) || (G__15267.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){var G__15269 = x;if(G__15269)
{var bit__3917__auto__ = (G__15269.cljs$lang$protocol_mask$partition0$ & 33554432);if((bit__3917__auto__) || (G__15269.cljs$core$IList$))
{return true;
} else
{if((!G__15269.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__15269);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,G__15269);
}
});

/**
* @constructor
*/
cljs.core.Keyword = (function (ns,name,fqn,_hash){
this.ns = ns;
this.name = name;
this.fqn = fqn;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775105;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorStr = "cljs.core/Keyword";
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str(":"),cljs.core.str(self__.fqn)].join(''));
});
cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if((self__._hash == null))
{self__._hash = (cljs.core.hash_combine.call(null,cljs.core.hash.call(null,self__.ns),cljs.core.hash.call(null,self__.name)) + 2654435769);
return self__._hash;
} else
{return self__._hash;
}
});
cljs.core.Keyword.prototype.call = (function() {
var G__15271 = null;
var G__15271__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.call(null,coll,kw);
});
var G__15271__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.call(null,coll,kw,not_found);
});
G__15271 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__15271__2.call(this,self__,coll);
case 3:
return G__15271__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15271;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args15270){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15270)));
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var kw = this;return cljs.core.get.call(null,coll,kw);
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var kw = this;return cljs.core.get.call(null,coll,kw,not_found);
});
cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Keyword))
{return (self__.fqn === other.fqn);
} else
{return false;
}
});
cljs.core.Keyword.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str(":"),cljs.core.str(self__.fqn)].join('');
});
cljs.core.__GT_Keyword = (function __GT_Keyword(ns,name,fqn,_hash){return (new cljs.core.Keyword(ns,name,fqn,_hash));
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){return (x instanceof cljs.core.Keyword);
});
cljs.core.keyword_identical_QMARK_ = (function keyword_identical_QMARK_(x,y){if((x === y))
{return true;
} else
{if(((x instanceof cljs.core.Keyword)) && ((y instanceof cljs.core.Keyword)))
{return (x.fqn === y.fqn);
} else
{return false;
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){if((function (){var G__15273 = x;if(G__15273)
{var bit__3910__auto__ = (G__15273.cljs$lang$protocol_mask$partition1$ & 4096);if((bit__3910__auto__) || (G__15273.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._namespace.call(null,x);
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){if((name instanceof cljs.core.Keyword))
{return name;
} else
{if((name instanceof cljs.core.Symbol))
{return (new cljs.core.Keyword(cljs.core.namespace.call(null,name),cljs.core.name.call(null,name),name.str,null));
} else
{if(typeof name === 'string')
{var parts = name.split("/");if((parts.length === 2))
{return (new cljs.core.Keyword((parts[0]),(parts[1]),name,null));
} else
{return (new cljs.core.Keyword(null,(parts[0]),name,null));
}
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){return (new cljs.core.Keyword(ns,name,[cljs.core.str((cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/")].join(''):null)),cljs.core.str(name)].join(''),null));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$core$IFn$_invoke$arity$1 = keyword__1;
keyword.cljs$core$IFn$_invoke$arity$2 = keyword__2;
return keyword;
})()
;

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,fn,s,__hash){
this.meta = meta;
this.fn = fn;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorStr = "cljs.core/LazySeq";
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq.call(null,coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.next.call(null,self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.LazySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.LazySeq.prototype.sval = (function (){var self__ = this;
var coll = this;if((self__.fn == null))
{return self__.s;
} else
{self__.s = self__.fn.call(null);
self__.fn = null;
return self__.s;
}
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;coll__$1.sval();
if((self__.s == null))
{return null;
} else
{var ls = self__.s;while(true){
if((ls instanceof cljs.core.LazySeq))
{{
var G__15274 = ls.sval();
ls = G__15274;
continue;
}
} else
{self__.s = ls;
return cljs.core.seq.call(null,self__.s);
}
break;
}
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq.call(null,coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.first.call(null,self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq.call(null,coll__$1);
if(!((self__.s == null)))
{return cljs.core.rest.call(null,self__.s);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_LazySeq = (function __GT_LazySeq(meta,fn,s,__hash){return (new cljs.core.LazySeq(meta,fn,s,__hash));
});

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorStr = "cljs.core/ChunkBuffer";
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){var self__ = this;
var _ = this;(self__.buf[self__.end] = o);
return self__.end = (self__.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){var self__ = this;
var _ = this;var ret = (new cljs.core.ArrayChunk(self__.buf,0,self__.end));self__.buf = null;
return ret;
});
cljs.core.__GT_ChunkBuffer = (function __GT_ChunkBuffer(buf,end){return (new cljs.core.ChunkBuffer(buf,end));
});
cljs.core.chunk_buffer = (function chunk_buffer(capacity){return (new cljs.core.ChunkBuffer((new Array(capacity)),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorStr = "cljs.core/ArrayChunk";
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.off]),(self__.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(self__.arr,(self__.off + 1),self__.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){var self__ = this;
var coll__$1 = this;return (self__.arr[(self__.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){var self__ = this;
var coll__$1 = this;if(((i >= 0)) && ((i < (self__.end - self__.off))))
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.end - self__.off);
});
cljs.core.__GT_ArrayChunk = (function __GT_ArrayChunk(arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){return (new cljs.core.ArrayChunk(arr,0,arr.length));
});
var array_chunk__2 = (function (arr,off){return (new cljs.core.ArrayChunk(arr,off,arr.length));
});
var array_chunk__3 = (function (arr,off,end){return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$core$IFn$_invoke$arity$1 = array_chunk__1;
array_chunk.cljs$core$IFn$_invoke$arity$2 = array_chunk__2;
array_chunk.cljs$core$IFn$_invoke$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850732;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorStr = "cljs.core/ChunkedCons";
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count.call(null,self__.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else
{var more__$1 = cljs.core._seq.call(null,self__.more);if((more__$1 == null))
{return null;
} else
{return more__$1;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons.call(null,o,this$__$1);
});
cljs.core.ChunkedCons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,self__.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count.call(null,self__.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
});
cljs.core.__GT_ChunkedCons = (function __GT_ChunkedCons(chunk,more,meta,__hash){return (new cljs.core.ChunkedCons(chunk,more,meta,__hash));
});
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){return b.add(x);
});
cljs.core.chunk = (function chunk(b){return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){if((function (){var G__15276 = s;if(G__15276)
{var bit__3910__auto__ = (G__15276.cljs$lang$protocol_mask$partition1$ & 1024);if((bit__3910__auto__) || (G__15276.cljs$core$IChunkedNext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){var ary = [];var s__$1 = s;while(true){
if(cljs.core.seq.call(null,s__$1))
{ary.push(cljs.core.first.call(null,s__$1));
{
var G__15277 = cljs.core.next.call(null,s__$1);
s__$1 = G__15277;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){var ret = (new Array(cljs.core.count.call(null,coll)));var i_15278 = 0;var xs_15279 = cljs.core.seq.call(null,coll);while(true){
if(xs_15279)
{(ret[i_15278] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs_15279)));
{
var G__15280 = (i_15278 + 1);
var G__15281 = cljs.core.next.call(null,xs_15279);
i_15278 = G__15280;
xs_15279 = G__15281;
continue;
}
} else
{}
break;
}
return ret;
});
cljs.core.int_array = (function() {
var int_array = null;
var int_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return int_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = 0;var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__15282 = (i + 1);
var G__15283 = cljs.core.next.call(null,s__$1);
i = G__15282;
s__$1 = G__15283;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4114__auto___15284 = size;var i_15285 = 0;while(true){
if((i_15285 < n__4114__auto___15284))
{(a[i_15285] = init_val_or_seq);
{
var G__15286 = (i_15285 + 1);
i_15285 = G__15286;
continue;
}
} else
{}
break;
}
return a;
}
});
int_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return int_array__1.call(this,size);
case 2:
return int_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
int_array.cljs$core$IFn$_invoke$arity$1 = int_array__1;
int_array.cljs$core$IFn$_invoke$arity$2 = int_array__2;
return int_array;
})()
;
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return long_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = 0;var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__15287 = (i + 1);
var G__15288 = cljs.core.next.call(null,s__$1);
i = G__15287;
s__$1 = G__15288;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4114__auto___15289 = size;var i_15290 = 0;while(true){
if((i_15290 < n__4114__auto___15289))
{(a[i_15290] = init_val_or_seq);
{
var G__15291 = (i_15290 + 1);
i_15290 = G__15291;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$core$IFn$_invoke$arity$1 = long_array__1;
long_array.cljs$core$IFn$_invoke$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return double_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = 0;var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__15292 = (i + 1);
var G__15293 = cljs.core.next.call(null,s__$1);
i = G__15292;
s__$1 = G__15293;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4114__auto___15294 = size;var i_15295 = 0;while(true){
if((i_15295 < n__4114__auto___15294))
{(a[i_15295] = init_val_or_seq);
{
var G__15296 = (i_15295 + 1);
i_15295 = G__15296;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$core$IFn$_invoke$arity$1 = double_array__1;
double_array.cljs$core$IFn$_invoke$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){if(typeof size_or_seq === 'number')
{return object_array.call(null,size_or_seq,null);
} else
{return cljs.core.into_array.call(null,size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);var i = 0;var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__15297 = (i + 1);
var G__15298 = cljs.core.next.call(null,s__$1);
i = G__15297;
s__$1 = G__15298;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4114__auto___15299 = size;var i_15300 = 0;while(true){
if((i_15300 < n__4114__auto___15299))
{(a[i_15300] = init_val_or_seq);
{
var G__15301 = (i_15300 + 1);
i_15300 = G__15301;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$core$IFn$_invoke$arity$1 = object_array__1;
object_array.cljs$core$IFn$_invoke$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__$1 = s;var i = n;var sum = 0;while(true){
if(((i > 0)) && (cljs.core.seq.call(null,s__$1)))
{{
var G__15302 = cljs.core.next.call(null,s__$1);
var G__15303 = (i - 1);
var G__15304 = (sum + 1);
s__$1 = G__15302;
i = G__15303;
sum = G__15304;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){return (new cljs.core.LazySeq(null,(function (){return null;
}),null,null));
});
var concat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return x;
}),null,null));
});
var concat__2 = (function (x,y){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.seq.call(null,x);if(s)
{if(cljs.core.chunked_seq_QMARK_.call(null,s))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s),concat.call(null,cljs.core.chunk_rest.call(null,s),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),concat.call(null,cljs.core.rest.call(null,s),y));
}
} else
{return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__15305__delegate = function (x,y,zs){var cat = (function cat(xys,zs__$1){return (new cljs.core.LazySeq(null,(function (){var xys__$1 = cljs.core.seq.call(null,xys);if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__$1))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__$1),cat.call(null,cljs.core.chunk_rest.call(null,xys__$1),zs__$1));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__$1),cat.call(null,cljs.core.rest.call(null,xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat.call(null,cljs.core.first.call(null,zs__$1),cljs.core.next.call(null,zs__$1));
} else
{return null;
}
}
}),null,null));
});return cat.call(null,concat.call(null,x,y),zs);
};
var G__15305 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15305__delegate.call(this,x,y,zs);};
G__15305.cljs$lang$maxFixedArity = 2;
G__15305.cljs$lang$applyTo = (function (arglist__15306){
var x = cljs.core.first(arglist__15306);
arglist__15306 = cljs.core.next(arglist__15306);
var y = cljs.core.first(arglist__15306);
var zs = cljs.core.rest(arglist__15306);
return G__15305__delegate(x,y,zs);
});
G__15305.cljs$core$IFn$_invoke$arity$variadic = G__15305__delegate;
return G__15305;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$core$IFn$_invoke$arity$0 = concat__0;
concat.cljs$core$IFn$_invoke$arity$1 = concat__1;
concat.cljs$core$IFn$_invoke$arity$2 = concat__2;
concat.cljs$core$IFn$_invoke$arity$variadic = concat__3.cljs$core$IFn$_invoke$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__15307__delegate = function (a,b,c,d,more){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__15307 = function (a,b,c,d,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__15307__delegate.call(this,a,b,c,d,more);};
G__15307.cljs$lang$maxFixedArity = 4;
G__15307.cljs$lang$applyTo = (function (arglist__15308){
var a = cljs.core.first(arglist__15308);
arglist__15308 = cljs.core.next(arglist__15308);
var b = cljs.core.first(arglist__15308);
arglist__15308 = cljs.core.next(arglist__15308);
var c = cljs.core.first(arglist__15308);
arglist__15308 = cljs.core.next(arglist__15308);
var d = cljs.core.first(arglist__15308);
var more = cljs.core.rest(arglist__15308);
return G__15307__delegate(a,b,c,d,more);
});
G__15307.cljs$core$IFn$_invoke$arity$variadic = G__15307__delegate;
return G__15307;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$core$IFn$_invoke$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$core$IFn$_invoke$arity$1 = list_STAR___1;
list_STAR_.cljs$core$IFn$_invoke$arity$2 = list_STAR___2;
list_STAR_.cljs$core$IFn$_invoke$arity$3 = list_STAR___3;
list_STAR_.cljs$core$IFn$_invoke$arity$4 = list_STAR___4;
list_STAR_.cljs$core$IFn$_invoke$arity$variadic = list_STAR___5.cljs$core$IFn$_invoke$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){var args__$1 = cljs.core.seq.call(null,args);if((argc === 0))
{return f.call(null);
} else
{var a = cljs.core._first.call(null,args__$1);var args__$2 = cljs.core._rest.call(null,args__$1);if((argc === 1))
{if(f.cljs$core$IFn$_invoke$arity$1)
{return f.cljs$core$IFn$_invoke$arity$1(a);
} else
{return f.call(null,a);
}
} else
{var b = cljs.core._first.call(null,args__$2);var args__$3 = cljs.core._rest.call(null,args__$2);if((argc === 2))
{if(f.cljs$core$IFn$_invoke$arity$2)
{return f.cljs$core$IFn$_invoke$arity$2(a,b);
} else
{return f.call(null,a,b);
}
} else
{var c = cljs.core._first.call(null,args__$3);var args__$4 = cljs.core._rest.call(null,args__$3);if((argc === 3))
{if(f.cljs$core$IFn$_invoke$arity$3)
{return f.cljs$core$IFn$_invoke$arity$3(a,b,c);
} else
{return f.call(null,a,b,c);
}
} else
{var d = cljs.core._first.call(null,args__$4);var args__$5 = cljs.core._rest.call(null,args__$4);if((argc === 4))
{if(f.cljs$core$IFn$_invoke$arity$4)
{return f.cljs$core$IFn$_invoke$arity$4(a,b,c,d);
} else
{return f.call(null,a,b,c,d);
}
} else
{var e = cljs.core._first.call(null,args__$5);var args__$6 = cljs.core._rest.call(null,args__$5);if((argc === 5))
{if(f.cljs$core$IFn$_invoke$arity$5)
{return f.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e);
} else
{return f.call(null,a,b,c,d,e);
}
} else
{var f__$1 = cljs.core._first.call(null,args__$6);var args__$7 = cljs.core._rest.call(null,args__$6);if((argc === 6))
{if(f__$1.cljs$core$IFn$_invoke$arity$6)
{return f__$1.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1);
}
} else
{var g = cljs.core._first.call(null,args__$7);var args__$8 = cljs.core._rest.call(null,args__$7);if((argc === 7))
{if(f__$1.cljs$core$IFn$_invoke$arity$7)
{return f__$1.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g);
}
} else
{var h = cljs.core._first.call(null,args__$8);var args__$9 = cljs.core._rest.call(null,args__$8);if((argc === 8))
{if(f__$1.cljs$core$IFn$_invoke$arity$8)
{return f__$1.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h);
}
} else
{var i = cljs.core._first.call(null,args__$9);var args__$10 = cljs.core._rest.call(null,args__$9);if((argc === 9))
{if(f__$1.cljs$core$IFn$_invoke$arity$9)
{return f__$1.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i);
}
} else
{var j = cljs.core._first.call(null,args__$10);var args__$11 = cljs.core._rest.call(null,args__$10);if((argc === 10))
{if(f__$1.cljs$core$IFn$_invoke$arity$10)
{return f__$1.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j);
}
} else
{var k = cljs.core._first.call(null,args__$11);var args__$12 = cljs.core._rest.call(null,args__$11);if((argc === 11))
{if(f__$1.cljs$core$IFn$_invoke$arity$11)
{return f__$1.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
}
} else
{var l = cljs.core._first.call(null,args__$12);var args__$13 = cljs.core._rest.call(null,args__$12);if((argc === 12))
{if(f__$1.cljs$core$IFn$_invoke$arity$12)
{return f__$1.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
}
} else
{var m = cljs.core._first.call(null,args__$13);var args__$14 = cljs.core._rest.call(null,args__$13);if((argc === 13))
{if(f__$1.cljs$core$IFn$_invoke$arity$13)
{return f__$1.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
}
} else
{var n = cljs.core._first.call(null,args__$14);var args__$15 = cljs.core._rest.call(null,args__$14);if((argc === 14))
{if(f__$1.cljs$core$IFn$_invoke$arity$14)
{return f__$1.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
}
} else
{var o = cljs.core._first.call(null,args__$15);var args__$16 = cljs.core._rest.call(null,args__$15);if((argc === 15))
{if(f__$1.cljs$core$IFn$_invoke$arity$15)
{return f__$1.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
}
} else
{var p = cljs.core._first.call(null,args__$16);var args__$17 = cljs.core._rest.call(null,args__$16);if((argc === 16))
{if(f__$1.cljs$core$IFn$_invoke$arity$16)
{return f__$1.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
}
} else
{var q = cljs.core._first.call(null,args__$17);var args__$18 = cljs.core._rest.call(null,args__$17);if((argc === 17))
{if(f__$1.cljs$core$IFn$_invoke$arity$17)
{return f__$1.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
}
} else
{var r = cljs.core._first.call(null,args__$18);var args__$19 = cljs.core._rest.call(null,args__$18);if((argc === 18))
{if(f__$1.cljs$core$IFn$_invoke$arity$18)
{return f__$1.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
}
} else
{var s = cljs.core._first.call(null,args__$19);var args__$20 = cljs.core._rest.call(null,args__$19);if((argc === 19))
{if(f__$1.cljs$core$IFn$_invoke$arity$19)
{return f__$1.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
} else
{var t = cljs.core._first.call(null,args__$20);var args__$21 = cljs.core._rest.call(null,args__$20);if((argc === 20))
{if(f__$1.cljs$core$IFn$_invoke$arity$20)
{return f__$1.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,args,(fixed_arity + 1));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){var arglist = cljs.core.list_STAR_.call(null,x,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__4 = (function (f,x,y,args){var arglist = cljs.core.list_STAR_.call(null,x,y,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__5 = (function (f,x,y,z,args){var arglist = cljs.core.list_STAR_.call(null,x,y,z,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__6 = (function() { 
var G__15309__delegate = function (f,a,b,c,d,args){var arglist = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
};
var G__15309 = function (f,a,b,c,d,var_args){
var args = null;if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__15309__delegate.call(this,f,a,b,c,d,args);};
G__15309.cljs$lang$maxFixedArity = 5;
G__15309.cljs$lang$applyTo = (function (arglist__15310){
var f = cljs.core.first(arglist__15310);
arglist__15310 = cljs.core.next(arglist__15310);
var a = cljs.core.first(arglist__15310);
arglist__15310 = cljs.core.next(arglist__15310);
var b = cljs.core.first(arglist__15310);
arglist__15310 = cljs.core.next(arglist__15310);
var c = cljs.core.first(arglist__15310);
arglist__15310 = cljs.core.next(arglist__15310);
var d = cljs.core.first(arglist__15310);
var args = cljs.core.rest(arglist__15310);
return G__15309__delegate(f,a,b,c,d,args);
});
G__15309.cljs$core$IFn$_invoke$arity$variadic = G__15309__delegate;
return G__15309;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$core$IFn$_invoke$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$core$IFn$_invoke$arity$2 = apply__2;
apply.cljs$core$IFn$_invoke$arity$3 = apply__3;
apply.cljs$core$IFn$_invoke$arity$4 = apply__4;
apply.cljs$core$IFn$_invoke$arity$5 = apply__5;
apply.cljs$core$IFn$_invoke$arity$variadic = apply__6.cljs$core$IFn$_invoke$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return vary_meta__delegate.call(this,obj,f,args);};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__15311){
var obj = cljs.core.first(arglist__15311);
arglist__15311 = cljs.core.next(arglist__15311);
var f = cljs.core.first(arglist__15311);
var args = cljs.core.rest(arglist__15311);
return vary_meta__delegate(obj,f,args);
});
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){return false;
});
var not_EQ___2 = (function (x,y){return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__15312__delegate = function (x,y,more){return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__15312 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15312__delegate.call(this,x,y,more);};
G__15312.cljs$lang$maxFixedArity = 2;
G__15312.cljs$lang$applyTo = (function (arglist__15313){
var x = cljs.core.first(arglist__15313);
arglist__15313 = cljs.core.next(arglist__15313);
var y = cljs.core.first(arglist__15313);
var more = cljs.core.rest(arglist__15313);
return G__15312__delegate(x,y,more);
});
G__15312.cljs$core$IFn$_invoke$arity$variadic = G__15312__delegate;
return G__15312;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$core$IFn$_invoke$arity$1 = not_EQ___1;
not_EQ_.cljs$core$IFn$_invoke$arity$2 = not_EQ___2;
not_EQ_.cljs$core$IFn$_invoke$arity$variadic = not_EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__15314 = pred;
var G__15315 = cljs.core.next.call(null,coll);
pred = G__15314;
coll = G__15315;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){while(true){
if(cljs.core.seq.call(null,coll))
{var or__3291__auto__ = pred.call(null,cljs.core.first.call(null,coll));if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{{
var G__15316 = pred;
var G__15317 = cljs.core.next.call(null,coll);
pred = G__15316;
coll = G__15317;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){return (function() {
var G__15318 = null;
var G__15318__0 = (function (){return cljs.core.not.call(null,f.call(null));
});
var G__15318__1 = (function (x){return cljs.core.not.call(null,f.call(null,x));
});
var G__15318__2 = (function (x,y){return cljs.core.not.call(null,f.call(null,x,y));
});
var G__15318__3 = (function() { 
var G__15319__delegate = function (x,y,zs){return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__15319 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15319__delegate.call(this,x,y,zs);};
G__15319.cljs$lang$maxFixedArity = 2;
G__15319.cljs$lang$applyTo = (function (arglist__15320){
var x = cljs.core.first(arglist__15320);
arglist__15320 = cljs.core.next(arglist__15320);
var y = cljs.core.first(arglist__15320);
var zs = cljs.core.rest(arglist__15320);
return G__15319__delegate(x,y,zs);
});
G__15319.cljs$core$IFn$_invoke$arity$variadic = G__15319__delegate;
return G__15319;
})()
;
G__15318 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__15318__0.call(this);
case 1:
return G__15318__1.call(this,x);
case 2:
return G__15318__2.call(this,x,y);
default:
return G__15318__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15318.cljs$lang$maxFixedArity = 2;
G__15318.cljs$lang$applyTo = G__15318__3.cljs$lang$applyTo;
return G__15318;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){return (function() { 
var G__15321__delegate = function (args){return x;
};
var G__15321 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15321__delegate.call(this,args);};
G__15321.cljs$lang$maxFixedArity = 0;
G__15321.cljs$lang$applyTo = (function (arglist__15322){
var args = cljs.core.seq(arglist__15322);
return G__15321__delegate(args);
});
G__15321.cljs$core$IFn$_invoke$arity$variadic = G__15321__delegate;
return G__15321;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){return cljs.core.identity;
});
var comp__1 = (function (f){return f;
});
var comp__2 = (function (f,g){return (function() {
var G__15323 = null;
var G__15323__0 = (function (){return f.call(null,g.call(null));
});
var G__15323__1 = (function (x){return f.call(null,g.call(null,x));
});
var G__15323__2 = (function (x,y){return f.call(null,g.call(null,x,y));
});
var G__15323__3 = (function (x,y,z){return f.call(null,g.call(null,x,y,z));
});
var G__15323__4 = (function() { 
var G__15324__delegate = function (x,y,z,args){return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__15324 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15324__delegate.call(this,x,y,z,args);};
G__15324.cljs$lang$maxFixedArity = 3;
G__15324.cljs$lang$applyTo = (function (arglist__15325){
var x = cljs.core.first(arglist__15325);
arglist__15325 = cljs.core.next(arglist__15325);
var y = cljs.core.first(arglist__15325);
arglist__15325 = cljs.core.next(arglist__15325);
var z = cljs.core.first(arglist__15325);
var args = cljs.core.rest(arglist__15325);
return G__15324__delegate(x,y,z,args);
});
G__15324.cljs$core$IFn$_invoke$arity$variadic = G__15324__delegate;
return G__15324;
})()
;
G__15323 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15323__0.call(this);
case 1:
return G__15323__1.call(this,x);
case 2:
return G__15323__2.call(this,x,y);
case 3:
return G__15323__3.call(this,x,y,z);
default:
return G__15323__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15323.cljs$lang$maxFixedArity = 3;
G__15323.cljs$lang$applyTo = G__15323__4.cljs$lang$applyTo;
return G__15323;
})()
});
var comp__3 = (function (f,g,h){return (function() {
var G__15326 = null;
var G__15326__0 = (function (){return f.call(null,g.call(null,h.call(null)));
});
var G__15326__1 = (function (x){return f.call(null,g.call(null,h.call(null,x)));
});
var G__15326__2 = (function (x,y){return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__15326__3 = (function (x,y,z){return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__15326__4 = (function() { 
var G__15327__delegate = function (x,y,z,args){return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__15327 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15327__delegate.call(this,x,y,z,args);};
G__15327.cljs$lang$maxFixedArity = 3;
G__15327.cljs$lang$applyTo = (function (arglist__15328){
var x = cljs.core.first(arglist__15328);
arglist__15328 = cljs.core.next(arglist__15328);
var y = cljs.core.first(arglist__15328);
arglist__15328 = cljs.core.next(arglist__15328);
var z = cljs.core.first(arglist__15328);
var args = cljs.core.rest(arglist__15328);
return G__15327__delegate(x,y,z,args);
});
G__15327.cljs$core$IFn$_invoke$arity$variadic = G__15327__delegate;
return G__15327;
})()
;
G__15326 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15326__0.call(this);
case 1:
return G__15326__1.call(this,x);
case 2:
return G__15326__2.call(this,x,y);
case 3:
return G__15326__3.call(this,x,y,z);
default:
return G__15326__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15326.cljs$lang$maxFixedArity = 3;
G__15326.cljs$lang$applyTo = G__15326__4.cljs$lang$applyTo;
return G__15326;
})()
});
var comp__4 = (function() { 
var G__15329__delegate = function (f1,f2,f3,fs){var fs__$1 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));return (function() { 
var G__15330__delegate = function (args){var ret = cljs.core.apply.call(null,cljs.core.first.call(null,fs__$1),args);var fs__$2 = cljs.core.next.call(null,fs__$1);while(true){
if(fs__$2)
{{
var G__15331 = cljs.core.first.call(null,fs__$2).call(null,ret);
var G__15332 = cljs.core.next.call(null,fs__$2);
ret = G__15331;
fs__$2 = G__15332;
continue;
}
} else
{return ret;
}
break;
}
};
var G__15330 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15330__delegate.call(this,args);};
G__15330.cljs$lang$maxFixedArity = 0;
G__15330.cljs$lang$applyTo = (function (arglist__15333){
var args = cljs.core.seq(arglist__15333);
return G__15330__delegate(args);
});
G__15330.cljs$core$IFn$_invoke$arity$variadic = G__15330__delegate;
return G__15330;
})()
;
};
var G__15329 = function (f1,f2,f3,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15329__delegate.call(this,f1,f2,f3,fs);};
G__15329.cljs$lang$maxFixedArity = 3;
G__15329.cljs$lang$applyTo = (function (arglist__15334){
var f1 = cljs.core.first(arglist__15334);
arglist__15334 = cljs.core.next(arglist__15334);
var f2 = cljs.core.first(arglist__15334);
arglist__15334 = cljs.core.next(arglist__15334);
var f3 = cljs.core.first(arglist__15334);
var fs = cljs.core.rest(arglist__15334);
return G__15329__delegate(f1,f2,f3,fs);
});
G__15329.cljs$core$IFn$_invoke$arity$variadic = G__15329__delegate;
return G__15329;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$core$IFn$_invoke$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$core$IFn$_invoke$arity$0 = comp__0;
comp.cljs$core$IFn$_invoke$arity$1 = comp__1;
comp.cljs$core$IFn$_invoke$arity$2 = comp__2;
comp.cljs$core$IFn$_invoke$arity$3 = comp__3;
comp.cljs$core$IFn$_invoke$arity$variadic = comp__4.cljs$core$IFn$_invoke$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__1 = (function (f){return f;
});
var partial__2 = (function (f,arg1){return (function() { 
var G__15335__delegate = function (args){return cljs.core.apply.call(null,f,arg1,args);
};
var G__15335 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15335__delegate.call(this,args);};
G__15335.cljs$lang$maxFixedArity = 0;
G__15335.cljs$lang$applyTo = (function (arglist__15336){
var args = cljs.core.seq(arglist__15336);
return G__15335__delegate(args);
});
G__15335.cljs$core$IFn$_invoke$arity$variadic = G__15335__delegate;
return G__15335;
})()
;
});
var partial__3 = (function (f,arg1,arg2){return (function() { 
var G__15337__delegate = function (args){return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__15337 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15337__delegate.call(this,args);};
G__15337.cljs$lang$maxFixedArity = 0;
G__15337.cljs$lang$applyTo = (function (arglist__15338){
var args = cljs.core.seq(arglist__15338);
return G__15337__delegate(args);
});
G__15337.cljs$core$IFn$_invoke$arity$variadic = G__15337__delegate;
return G__15337;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){return (function() { 
var G__15339__delegate = function (args){return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__15339 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15339__delegate.call(this,args);};
G__15339.cljs$lang$maxFixedArity = 0;
G__15339.cljs$lang$applyTo = (function (arglist__15340){
var args = cljs.core.seq(arglist__15340);
return G__15339__delegate(args);
});
G__15339.cljs$core$IFn$_invoke$arity$variadic = G__15339__delegate;
return G__15339;
})()
;
});
var partial__5 = (function() { 
var G__15341__delegate = function (f,arg1,arg2,arg3,more){return (function() { 
var G__15342__delegate = function (args){return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__15342 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15342__delegate.call(this,args);};
G__15342.cljs$lang$maxFixedArity = 0;
G__15342.cljs$lang$applyTo = (function (arglist__15343){
var args = cljs.core.seq(arglist__15343);
return G__15342__delegate(args);
});
G__15342.cljs$core$IFn$_invoke$arity$variadic = G__15342__delegate;
return G__15342;
})()
;
};
var G__15341 = function (f,arg1,arg2,arg3,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__15341__delegate.call(this,f,arg1,arg2,arg3,more);};
G__15341.cljs$lang$maxFixedArity = 4;
G__15341.cljs$lang$applyTo = (function (arglist__15344){
var f = cljs.core.first(arglist__15344);
arglist__15344 = cljs.core.next(arglist__15344);
var arg1 = cljs.core.first(arglist__15344);
arglist__15344 = cljs.core.next(arglist__15344);
var arg2 = cljs.core.first(arglist__15344);
arglist__15344 = cljs.core.next(arglist__15344);
var arg3 = cljs.core.first(arglist__15344);
var more = cljs.core.rest(arglist__15344);
return G__15341__delegate(f,arg1,arg2,arg3,more);
});
G__15341.cljs$core$IFn$_invoke$arity$variadic = G__15341__delegate;
return G__15341;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return partial__1.call(this,f);
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$core$IFn$_invoke$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$core$IFn$_invoke$arity$1 = partial__1;
partial.cljs$core$IFn$_invoke$arity$2 = partial__2;
partial.cljs$core$IFn$_invoke$arity$3 = partial__3;
partial.cljs$core$IFn$_invoke$arity$4 = partial__4;
partial.cljs$core$IFn$_invoke$arity$variadic = partial__5.cljs$core$IFn$_invoke$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){return (function() {
var G__15345 = null;
var G__15345__1 = (function (a){return f.call(null,(((a == null))?x:a));
});
var G__15345__2 = (function (a,b){return f.call(null,(((a == null))?x:a),b);
});
var G__15345__3 = (function (a,b,c){return f.call(null,(((a == null))?x:a),b,c);
});
var G__15345__4 = (function() { 
var G__15346__delegate = function (a,b,c,ds){return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__15346 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15346__delegate.call(this,a,b,c,ds);};
G__15346.cljs$lang$maxFixedArity = 3;
G__15346.cljs$lang$applyTo = (function (arglist__15347){
var a = cljs.core.first(arglist__15347);
arglist__15347 = cljs.core.next(arglist__15347);
var b = cljs.core.first(arglist__15347);
arglist__15347 = cljs.core.next(arglist__15347);
var c = cljs.core.first(arglist__15347);
var ds = cljs.core.rest(arglist__15347);
return G__15346__delegate(a,b,c,ds);
});
G__15346.cljs$core$IFn$_invoke$arity$variadic = G__15346__delegate;
return G__15346;
})()
;
G__15345 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__15345__1.call(this,a);
case 2:
return G__15345__2.call(this,a,b);
case 3:
return G__15345__3.call(this,a,b,c);
default:
return G__15345__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15345.cljs$lang$maxFixedArity = 3;
G__15345.cljs$lang$applyTo = G__15345__4.cljs$lang$applyTo;
return G__15345;
})()
});
var fnil__3 = (function (f,x,y){return (function() {
var G__15348 = null;
var G__15348__2 = (function (a,b){return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__15348__3 = (function (a,b,c){return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__15348__4 = (function() { 
var G__15349__delegate = function (a,b,c,ds){return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__15349 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15349__delegate.call(this,a,b,c,ds);};
G__15349.cljs$lang$maxFixedArity = 3;
G__15349.cljs$lang$applyTo = (function (arglist__15350){
var a = cljs.core.first(arglist__15350);
arglist__15350 = cljs.core.next(arglist__15350);
var b = cljs.core.first(arglist__15350);
arglist__15350 = cljs.core.next(arglist__15350);
var c = cljs.core.first(arglist__15350);
var ds = cljs.core.rest(arglist__15350);
return G__15349__delegate(a,b,c,ds);
});
G__15349.cljs$core$IFn$_invoke$arity$variadic = G__15349__delegate;
return G__15349;
})()
;
G__15348 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__15348__2.call(this,a,b);
case 3:
return G__15348__3.call(this,a,b,c);
default:
return G__15348__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15348.cljs$lang$maxFixedArity = 3;
G__15348.cljs$lang$applyTo = G__15348__4.cljs$lang$applyTo;
return G__15348;
})()
});
var fnil__4 = (function (f,x,y,z){return (function() {
var G__15351 = null;
var G__15351__2 = (function (a,b){return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__15351__3 = (function (a,b,c){return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__15351__4 = (function() { 
var G__15352__delegate = function (a,b,c,ds){return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__15352 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15352__delegate.call(this,a,b,c,ds);};
G__15352.cljs$lang$maxFixedArity = 3;
G__15352.cljs$lang$applyTo = (function (arglist__15353){
var a = cljs.core.first(arglist__15353);
arglist__15353 = cljs.core.next(arglist__15353);
var b = cljs.core.first(arglist__15353);
arglist__15353 = cljs.core.next(arglist__15353);
var c = cljs.core.first(arglist__15353);
var ds = cljs.core.rest(arglist__15353);
return G__15352__delegate(a,b,c,ds);
});
G__15352.cljs$core$IFn$_invoke$arity$variadic = G__15352__delegate;
return G__15352;
})()
;
G__15351 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__15351__2.call(this,a,b);
case 3:
return G__15351__3.call(this,a,b,c);
default:
return G__15351__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15351.cljs$lang$maxFixedArity = 3;
G__15351.cljs$lang$applyTo = G__15351__4.cljs$lang$applyTo;
return G__15351;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$core$IFn$_invoke$arity$2 = fnil__2;
fnil.cljs$core$IFn$_invoke$arity$3 = fnil__3;
fnil.cljs$core$IFn$_invoke$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){var mapi = (function mapi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll__$1);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);var size = cljs.core.count.call(null,c);var b = cljs.core.chunk_buffer.call(null,size);var n__4114__auto___15354 = size;var i_15355 = 0;while(true){
if((i_15355 < n__4114__auto___15354))
{cljs.core.chunk_append.call(null,b,f.call(null,(idx + i_15355),cljs.core._nth.call(null,c,i_15355)));
{
var G__15356 = (i_15355 + 1);
i_15355 = G__15356;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),mapi.call(null,(idx + size),cljs.core.chunk_rest.call(null,s)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s)));
}
} else
{return null;
}
}),null,null));
});
return mapi.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);var size = cljs.core.count.call(null,c);var b = cljs.core.chunk_buffer.call(null,size);var n__4114__auto___15357 = size;var i_15358 = 0;while(true){
if((i_15358 < n__4114__auto___15357))
{var x_15359 = f.call(null,cljs.core._nth.call(null,c,i_15358));if((x_15359 == null))
{} else
{cljs.core.chunk_append.call(null,b,x_15359);
}
{
var G__15360 = (i_15358 + 1);
i_15358 = G__15360;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keep.call(null,f,cljs.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,cljs.core.first.call(null,s));if((x == null))
{return keep.call(null,f,cljs.core.rest.call(null,s));
} else
{return cljs.core.cons.call(null,x,keep.call(null,f,cljs.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null,null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){var keepi = (function keepi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll__$1);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);var size = cljs.core.count.call(null,c);var b = cljs.core.chunk_buffer.call(null,size);var n__4114__auto___15361 = size;var i_15362 = 0;while(true){
if((i_15362 < n__4114__auto___15361))
{var x_15363 = f.call(null,(idx + i_15362),cljs.core._nth.call(null,c,i_15362));if((x_15363 == null))
{} else
{cljs.core.chunk_append.call(null,b,x_15363);
}
{
var G__15364 = (i_15362 + 1);
i_15362 = G__15364;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keepi.call(null,(idx + size),cljs.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,idx,cljs.core.first.call(null,s));if((x == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s));
} else
{return cljs.core.cons.call(null,x,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null,null));
});
return keepi.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){return (function() {
var ep1 = null;
var ep1__0 = (function (){return true;
});
var ep1__1 = (function (x){return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){return cljs.core.boolean$.call(null,(function (){var and__3279__auto__ = p.call(null,x);if(cljs.core.truth_(and__3279__auto__))
{return p.call(null,y);
} else
{return and__3279__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){return cljs.core.boolean$.call(null,(function (){var and__3279__auto__ = p.call(null,x);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = p.call(null,y);if(cljs.core.truth_(and__3279__auto____$1))
{return p.call(null,z);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__15371__delegate = function (x,y,z,args){return cljs.core.boolean$.call(null,(ep1.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,p,args)));
};
var G__15371 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15371__delegate.call(this,x,y,z,args);};
G__15371.cljs$lang$maxFixedArity = 3;
G__15371.cljs$lang$applyTo = (function (arglist__15372){
var x = cljs.core.first(arglist__15372);
arglist__15372 = cljs.core.next(arglist__15372);
var y = cljs.core.first(arglist__15372);
arglist__15372 = cljs.core.next(arglist__15372);
var z = cljs.core.first(arglist__15372);
var args = cljs.core.rest(arglist__15372);
return G__15371__delegate(x,y,z,args);
});
G__15371.cljs$core$IFn$_invoke$arity$variadic = G__15371__delegate;
return G__15371;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$core$IFn$_invoke$arity$0 = ep1__0;
ep1.cljs$core$IFn$_invoke$arity$1 = ep1__1;
ep1.cljs$core$IFn$_invoke$arity$2 = ep1__2;
ep1.cljs$core$IFn$_invoke$arity$3 = ep1__3;
ep1.cljs$core$IFn$_invoke$arity$variadic = ep1__4.cljs$core$IFn$_invoke$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){return (function() {
var ep2 = null;
var ep2__0 = (function (){return true;
});
var ep2__1 = (function (x){return cljs.core.boolean$.call(null,(function (){var and__3279__auto__ = p1.call(null,x);if(cljs.core.truth_(and__3279__auto__))
{return p2.call(null,x);
} else
{return and__3279__auto__;
}
})());
});
var ep2__2 = (function (x,y){return cljs.core.boolean$.call(null,(function (){var and__3279__auto__ = p1.call(null,x);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = p1.call(null,y);if(cljs.core.truth_(and__3279__auto____$1))
{var and__3279__auto____$2 = p2.call(null,x);if(cljs.core.truth_(and__3279__auto____$2))
{return p2.call(null,y);
} else
{return and__3279__auto____$2;
}
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){return cljs.core.boolean$.call(null,(function (){var and__3279__auto__ = p1.call(null,x);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = p1.call(null,y);if(cljs.core.truth_(and__3279__auto____$1))
{var and__3279__auto____$2 = p1.call(null,z);if(cljs.core.truth_(and__3279__auto____$2))
{var and__3279__auto____$3 = p2.call(null,x);if(cljs.core.truth_(and__3279__auto____$3))
{var and__3279__auto____$4 = p2.call(null,y);if(cljs.core.truth_(and__3279__auto____$4))
{return p2.call(null,z);
} else
{return and__3279__auto____$4;
}
} else
{return and__3279__auto____$3;
}
} else
{return and__3279__auto____$2;
}
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__15373__delegate = function (x,y,z,args){return cljs.core.boolean$.call(null,(ep2.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,(function (p1__15365_SHARP_){var and__3279__auto__ = p1.call(null,p1__15365_SHARP_);if(cljs.core.truth_(and__3279__auto__))
{return p2.call(null,p1__15365_SHARP_);
} else
{return and__3279__auto__;
}
}),args)));
};
var G__15373 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15373__delegate.call(this,x,y,z,args);};
G__15373.cljs$lang$maxFixedArity = 3;
G__15373.cljs$lang$applyTo = (function (arglist__15374){
var x = cljs.core.first(arglist__15374);
arglist__15374 = cljs.core.next(arglist__15374);
var y = cljs.core.first(arglist__15374);
arglist__15374 = cljs.core.next(arglist__15374);
var z = cljs.core.first(arglist__15374);
var args = cljs.core.rest(arglist__15374);
return G__15373__delegate(x,y,z,args);
});
G__15373.cljs$core$IFn$_invoke$arity$variadic = G__15373__delegate;
return G__15373;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$core$IFn$_invoke$arity$0 = ep2__0;
ep2.cljs$core$IFn$_invoke$arity$1 = ep2__1;
ep2.cljs$core$IFn$_invoke$arity$2 = ep2__2;
ep2.cljs$core$IFn$_invoke$arity$3 = ep2__3;
ep2.cljs$core$IFn$_invoke$arity$variadic = ep2__4.cljs$core$IFn$_invoke$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){return (function() {
var ep3 = null;
var ep3__0 = (function (){return true;
});
var ep3__1 = (function (x){return cljs.core.boolean$.call(null,(function (){var and__3279__auto__ = p1.call(null,x);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = p2.call(null,x);if(cljs.core.truth_(and__3279__auto____$1))
{return p3.call(null,x);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})());
});
var ep3__2 = (function (x,y){return cljs.core.boolean$.call(null,(function (){var and__3279__auto__ = p1.call(null,x);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = p2.call(null,x);if(cljs.core.truth_(and__3279__auto____$1))
{var and__3279__auto____$2 = p3.call(null,x);if(cljs.core.truth_(and__3279__auto____$2))
{var and__3279__auto____$3 = p1.call(null,y);if(cljs.core.truth_(and__3279__auto____$3))
{var and__3279__auto____$4 = p2.call(null,y);if(cljs.core.truth_(and__3279__auto____$4))
{return p3.call(null,y);
} else
{return and__3279__auto____$4;
}
} else
{return and__3279__auto____$3;
}
} else
{return and__3279__auto____$2;
}
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){return cljs.core.boolean$.call(null,(function (){var and__3279__auto__ = p1.call(null,x);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = p2.call(null,x);if(cljs.core.truth_(and__3279__auto____$1))
{var and__3279__auto____$2 = p3.call(null,x);if(cljs.core.truth_(and__3279__auto____$2))
{var and__3279__auto____$3 = p1.call(null,y);if(cljs.core.truth_(and__3279__auto____$3))
{var and__3279__auto____$4 = p2.call(null,y);if(cljs.core.truth_(and__3279__auto____$4))
{var and__3279__auto____$5 = p3.call(null,y);if(cljs.core.truth_(and__3279__auto____$5))
{var and__3279__auto____$6 = p1.call(null,z);if(cljs.core.truth_(and__3279__auto____$6))
{var and__3279__auto____$7 = p2.call(null,z);if(cljs.core.truth_(and__3279__auto____$7))
{return p3.call(null,z);
} else
{return and__3279__auto____$7;
}
} else
{return and__3279__auto____$6;
}
} else
{return and__3279__auto____$5;
}
} else
{return and__3279__auto____$4;
}
} else
{return and__3279__auto____$3;
}
} else
{return and__3279__auto____$2;
}
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__15375__delegate = function (x,y,z,args){return cljs.core.boolean$.call(null,(ep3.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,(function (p1__15366_SHARP_){var and__3279__auto__ = p1.call(null,p1__15366_SHARP_);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = p2.call(null,p1__15366_SHARP_);if(cljs.core.truth_(and__3279__auto____$1))
{return p3.call(null,p1__15366_SHARP_);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
}),args)));
};
var G__15375 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15375__delegate.call(this,x,y,z,args);};
G__15375.cljs$lang$maxFixedArity = 3;
G__15375.cljs$lang$applyTo = (function (arglist__15376){
var x = cljs.core.first(arglist__15376);
arglist__15376 = cljs.core.next(arglist__15376);
var y = cljs.core.first(arglist__15376);
arglist__15376 = cljs.core.next(arglist__15376);
var z = cljs.core.first(arglist__15376);
var args = cljs.core.rest(arglist__15376);
return G__15375__delegate(x,y,z,args);
});
G__15375.cljs$core$IFn$_invoke$arity$variadic = G__15375__delegate;
return G__15375;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$core$IFn$_invoke$arity$0 = ep3__0;
ep3.cljs$core$IFn$_invoke$arity$1 = ep3__1;
ep3.cljs$core$IFn$_invoke$arity$2 = ep3__2;
ep3.cljs$core$IFn$_invoke$arity$3 = ep3__3;
ep3.cljs$core$IFn$_invoke$arity$variadic = ep3__4.cljs$core$IFn$_invoke$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__15377__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);return (function() {
var epn = null;
var epn__0 = (function (){return true;
});
var epn__1 = (function (x){return cljs.core.every_QMARK_.call(null,(function (p1__15367_SHARP_){return p1__15367_SHARP_.call(null,x);
}),ps__$1);
});
var epn__2 = (function (x,y){return cljs.core.every_QMARK_.call(null,(function (p1__15368_SHARP_){var and__3279__auto__ = p1__15368_SHARP_.call(null,x);if(cljs.core.truth_(and__3279__auto__))
{return p1__15368_SHARP_.call(null,y);
} else
{return and__3279__auto__;
}
}),ps__$1);
});
var epn__3 = (function (x,y,z){return cljs.core.every_QMARK_.call(null,(function (p1__15369_SHARP_){var and__3279__auto__ = p1__15369_SHARP_.call(null,x);if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = p1__15369_SHARP_.call(null,y);if(cljs.core.truth_(and__3279__auto____$1))
{return p1__15369_SHARP_.call(null,z);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
}),ps__$1);
});
var epn__4 = (function() { 
var G__15378__delegate = function (x,y,z,args){return cljs.core.boolean$.call(null,(epn.call(null,x,y,z)) && (cljs.core.every_QMARK_.call(null,(function (p1__15370_SHARP_){return cljs.core.every_QMARK_.call(null,p1__15370_SHARP_,args);
}),ps__$1)));
};
var G__15378 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15378__delegate.call(this,x,y,z,args);};
G__15378.cljs$lang$maxFixedArity = 3;
G__15378.cljs$lang$applyTo = (function (arglist__15379){
var x = cljs.core.first(arglist__15379);
arglist__15379 = cljs.core.next(arglist__15379);
var y = cljs.core.first(arglist__15379);
arglist__15379 = cljs.core.next(arglist__15379);
var z = cljs.core.first(arglist__15379);
var args = cljs.core.rest(arglist__15379);
return G__15378__delegate(x,y,z,args);
});
G__15378.cljs$core$IFn$_invoke$arity$variadic = G__15378__delegate;
return G__15378;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$core$IFn$_invoke$arity$0 = epn__0;
epn.cljs$core$IFn$_invoke$arity$1 = epn__1;
epn.cljs$core$IFn$_invoke$arity$2 = epn__2;
epn.cljs$core$IFn$_invoke$arity$3 = epn__3;
epn.cljs$core$IFn$_invoke$arity$variadic = epn__4.cljs$core$IFn$_invoke$arity$variadic;
return epn;
})()
};
var G__15377 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15377__delegate.call(this,p1,p2,p3,ps);};
G__15377.cljs$lang$maxFixedArity = 3;
G__15377.cljs$lang$applyTo = (function (arglist__15380){
var p1 = cljs.core.first(arglist__15380);
arglist__15380 = cljs.core.next(arglist__15380);
var p2 = cljs.core.first(arglist__15380);
arglist__15380 = cljs.core.next(arglist__15380);
var p3 = cljs.core.first(arglist__15380);
var ps = cljs.core.rest(arglist__15380);
return G__15377__delegate(p1,p2,p3,ps);
});
G__15377.cljs$core$IFn$_invoke$arity$variadic = G__15377__delegate;
return G__15377;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$core$IFn$_invoke$arity$1 = every_pred__1;
every_pred.cljs$core$IFn$_invoke$arity$2 = every_pred__2;
every_pred.cljs$core$IFn$_invoke$arity$3 = every_pred__3;
every_pred.cljs$core$IFn$_invoke$arity$variadic = every_pred__4.cljs$core$IFn$_invoke$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){return (function() {
var sp1 = null;
var sp1__0 = (function (){return null;
});
var sp1__1 = (function (x){return p.call(null,x);
});
var sp1__2 = (function (x,y){var or__3291__auto__ = p.call(null,x);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){var or__3291__auto__ = p.call(null,x);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = p.call(null,y);if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__15387__delegate = function (x,y,z,args){var or__3291__auto__ = sp1.call(null,x,y,z);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__15387 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15387__delegate.call(this,x,y,z,args);};
G__15387.cljs$lang$maxFixedArity = 3;
G__15387.cljs$lang$applyTo = (function (arglist__15388){
var x = cljs.core.first(arglist__15388);
arglist__15388 = cljs.core.next(arglist__15388);
var y = cljs.core.first(arglist__15388);
arglist__15388 = cljs.core.next(arglist__15388);
var z = cljs.core.first(arglist__15388);
var args = cljs.core.rest(arglist__15388);
return G__15387__delegate(x,y,z,args);
});
G__15387.cljs$core$IFn$_invoke$arity$variadic = G__15387__delegate;
return G__15387;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$core$IFn$_invoke$arity$0 = sp1__0;
sp1.cljs$core$IFn$_invoke$arity$1 = sp1__1;
sp1.cljs$core$IFn$_invoke$arity$2 = sp1__2;
sp1.cljs$core$IFn$_invoke$arity$3 = sp1__3;
sp1.cljs$core$IFn$_invoke$arity$variadic = sp1__4.cljs$core$IFn$_invoke$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){return (function() {
var sp2 = null;
var sp2__0 = (function (){return null;
});
var sp2__1 = (function (x){var or__3291__auto__ = p1.call(null,x);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){var or__3291__auto__ = p1.call(null,x);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = p1.call(null,y);if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{var or__3291__auto____$2 = p2.call(null,x);if(cljs.core.truth_(or__3291__auto____$2))
{return or__3291__auto____$2;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){var or__3291__auto__ = p1.call(null,x);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = p1.call(null,y);if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{var or__3291__auto____$2 = p1.call(null,z);if(cljs.core.truth_(or__3291__auto____$2))
{return or__3291__auto____$2;
} else
{var or__3291__auto____$3 = p2.call(null,x);if(cljs.core.truth_(or__3291__auto____$3))
{return or__3291__auto____$3;
} else
{var or__3291__auto____$4 = p2.call(null,y);if(cljs.core.truth_(or__3291__auto____$4))
{return or__3291__auto____$4;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__15389__delegate = function (x,y,z,args){var or__3291__auto__ = sp2.call(null,x,y,z);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.some.call(null,(function (p1__15381_SHARP_){var or__3291__auto____$1 = p1.call(null,p1__15381_SHARP_);if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{return p2.call(null,p1__15381_SHARP_);
}
}),args);
}
};
var G__15389 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15389__delegate.call(this,x,y,z,args);};
G__15389.cljs$lang$maxFixedArity = 3;
G__15389.cljs$lang$applyTo = (function (arglist__15390){
var x = cljs.core.first(arglist__15390);
arglist__15390 = cljs.core.next(arglist__15390);
var y = cljs.core.first(arglist__15390);
arglist__15390 = cljs.core.next(arglist__15390);
var z = cljs.core.first(arglist__15390);
var args = cljs.core.rest(arglist__15390);
return G__15389__delegate(x,y,z,args);
});
G__15389.cljs$core$IFn$_invoke$arity$variadic = G__15389__delegate;
return G__15389;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$core$IFn$_invoke$arity$0 = sp2__0;
sp2.cljs$core$IFn$_invoke$arity$1 = sp2__1;
sp2.cljs$core$IFn$_invoke$arity$2 = sp2__2;
sp2.cljs$core$IFn$_invoke$arity$3 = sp2__3;
sp2.cljs$core$IFn$_invoke$arity$variadic = sp2__4.cljs$core$IFn$_invoke$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){return (function() {
var sp3 = null;
var sp3__0 = (function (){return null;
});
var sp3__1 = (function (x){var or__3291__auto__ = p1.call(null,x);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = p2.call(null,x);if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){var or__3291__auto__ = p1.call(null,x);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = p2.call(null,x);if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{var or__3291__auto____$2 = p3.call(null,x);if(cljs.core.truth_(or__3291__auto____$2))
{return or__3291__auto____$2;
} else
{var or__3291__auto____$3 = p1.call(null,y);if(cljs.core.truth_(or__3291__auto____$3))
{return or__3291__auto____$3;
} else
{var or__3291__auto____$4 = p2.call(null,y);if(cljs.core.truth_(or__3291__auto____$4))
{return or__3291__auto____$4;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){var or__3291__auto__ = p1.call(null,x);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = p2.call(null,x);if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{var or__3291__auto____$2 = p3.call(null,x);if(cljs.core.truth_(or__3291__auto____$2))
{return or__3291__auto____$2;
} else
{var or__3291__auto____$3 = p1.call(null,y);if(cljs.core.truth_(or__3291__auto____$3))
{return or__3291__auto____$3;
} else
{var or__3291__auto____$4 = p2.call(null,y);if(cljs.core.truth_(or__3291__auto____$4))
{return or__3291__auto____$4;
} else
{var or__3291__auto____$5 = p3.call(null,y);if(cljs.core.truth_(or__3291__auto____$5))
{return or__3291__auto____$5;
} else
{var or__3291__auto____$6 = p1.call(null,z);if(cljs.core.truth_(or__3291__auto____$6))
{return or__3291__auto____$6;
} else
{var or__3291__auto____$7 = p2.call(null,z);if(cljs.core.truth_(or__3291__auto____$7))
{return or__3291__auto____$7;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__15391__delegate = function (x,y,z,args){var or__3291__auto__ = sp3.call(null,x,y,z);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.some.call(null,(function (p1__15382_SHARP_){var or__3291__auto____$1 = p1.call(null,p1__15382_SHARP_);if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{var or__3291__auto____$2 = p2.call(null,p1__15382_SHARP_);if(cljs.core.truth_(or__3291__auto____$2))
{return or__3291__auto____$2;
} else
{return p3.call(null,p1__15382_SHARP_);
}
}
}),args);
}
};
var G__15391 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15391__delegate.call(this,x,y,z,args);};
G__15391.cljs$lang$maxFixedArity = 3;
G__15391.cljs$lang$applyTo = (function (arglist__15392){
var x = cljs.core.first(arglist__15392);
arglist__15392 = cljs.core.next(arglist__15392);
var y = cljs.core.first(arglist__15392);
arglist__15392 = cljs.core.next(arglist__15392);
var z = cljs.core.first(arglist__15392);
var args = cljs.core.rest(arglist__15392);
return G__15391__delegate(x,y,z,args);
});
G__15391.cljs$core$IFn$_invoke$arity$variadic = G__15391__delegate;
return G__15391;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$core$IFn$_invoke$arity$0 = sp3__0;
sp3.cljs$core$IFn$_invoke$arity$1 = sp3__1;
sp3.cljs$core$IFn$_invoke$arity$2 = sp3__2;
sp3.cljs$core$IFn$_invoke$arity$3 = sp3__3;
sp3.cljs$core$IFn$_invoke$arity$variadic = sp3__4.cljs$core$IFn$_invoke$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__15393__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);return (function() {
var spn = null;
var spn__0 = (function (){return null;
});
var spn__1 = (function (x){return cljs.core.some.call(null,(function (p1__15383_SHARP_){return p1__15383_SHARP_.call(null,x);
}),ps__$1);
});
var spn__2 = (function (x,y){return cljs.core.some.call(null,(function (p1__15384_SHARP_){var or__3291__auto__ = p1__15384_SHARP_.call(null,x);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return p1__15384_SHARP_.call(null,y);
}
}),ps__$1);
});
var spn__3 = (function (x,y,z){return cljs.core.some.call(null,(function (p1__15385_SHARP_){var or__3291__auto__ = p1__15385_SHARP_.call(null,x);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = p1__15385_SHARP_.call(null,y);if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{return p1__15385_SHARP_.call(null,z);
}
}
}),ps__$1);
});
var spn__4 = (function() { 
var G__15394__delegate = function (x,y,z,args){var or__3291__auto__ = spn.call(null,x,y,z);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.some.call(null,(function (p1__15386_SHARP_){return cljs.core.some.call(null,p1__15386_SHARP_,args);
}),ps__$1);
}
};
var G__15394 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15394__delegate.call(this,x,y,z,args);};
G__15394.cljs$lang$maxFixedArity = 3;
G__15394.cljs$lang$applyTo = (function (arglist__15395){
var x = cljs.core.first(arglist__15395);
arglist__15395 = cljs.core.next(arglist__15395);
var y = cljs.core.first(arglist__15395);
arglist__15395 = cljs.core.next(arglist__15395);
var z = cljs.core.first(arglist__15395);
var args = cljs.core.rest(arglist__15395);
return G__15394__delegate(x,y,z,args);
});
G__15394.cljs$core$IFn$_invoke$arity$variadic = G__15394__delegate;
return G__15394;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$core$IFn$_invoke$arity$0 = spn__0;
spn.cljs$core$IFn$_invoke$arity$1 = spn__1;
spn.cljs$core$IFn$_invoke$arity$2 = spn__2;
spn.cljs$core$IFn$_invoke$arity$3 = spn__3;
spn.cljs$core$IFn$_invoke$arity$variadic = spn__4.cljs$core$IFn$_invoke$arity$variadic;
return spn;
})()
};
var G__15393 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15393__delegate.call(this,p1,p2,p3,ps);};
G__15393.cljs$lang$maxFixedArity = 3;
G__15393.cljs$lang$applyTo = (function (arglist__15396){
var p1 = cljs.core.first(arglist__15396);
arglist__15396 = cljs.core.next(arglist__15396);
var p2 = cljs.core.first(arglist__15396);
arglist__15396 = cljs.core.next(arglist__15396);
var p3 = cljs.core.first(arglist__15396);
var ps = cljs.core.rest(arglist__15396);
return G__15393__delegate(p1,p2,p3,ps);
});
G__15393.cljs$core$IFn$_invoke$arity$variadic = G__15393__delegate;
return G__15393;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$core$IFn$_invoke$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$core$IFn$_invoke$arity$1 = some_fn__1;
some_fn.cljs$core$IFn$_invoke$arity$2 = some_fn__2;
some_fn.cljs$core$IFn$_invoke$arity$3 = some_fn__3;
some_fn.cljs$core$IFn$_invoke$arity$variadic = some_fn__4.cljs$core$IFn$_invoke$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);var size = cljs.core.count.call(null,c);var b = cljs.core.chunk_buffer.call(null,size);var n__4114__auto___15398 = size;var i_15399 = 0;while(true){
if((i_15399 < n__4114__auto___15398))
{cljs.core.chunk_append.call(null,b,f.call(null,cljs.core._nth.call(null,c,i_15399)));
{
var G__15400 = (i_15399 + 1);
i_15399 = G__15400;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),map.call(null,f,cljs.core.chunk_rest.call(null,s)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s)),map.call(null,f,cljs.core.rest.call(null,s)));
}
} else
{return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq.call(null,c1);var s2 = cljs.core.seq.call(null,c2);if((s1) && (s2))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,s2)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2)));
} else
{return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq.call(null,c1);var s2 = cljs.core.seq.call(null,c2);var s3 = cljs.core.seq.call(null,c3);if((s1) && (s2) && (s3))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,s2),cljs.core.first.call(null,s3)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2),cljs.core.rest.call(null,s3)));
} else
{return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__15401__delegate = function (f,c1,c2,c3,colls){var step = (function step(cs){return (new cljs.core.LazySeq(null,(function (){var ss = map.call(null,cljs.core.seq,cs);if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss),step.call(null,map.call(null,cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
});return map.call(null,(function (p1__15397_SHARP_){return cljs.core.apply.call(null,f,p1__15397_SHARP_);
}),step.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__15401 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__15401__delegate.call(this,f,c1,c2,c3,colls);};
G__15401.cljs$lang$maxFixedArity = 4;
G__15401.cljs$lang$applyTo = (function (arglist__15402){
var f = cljs.core.first(arglist__15402);
arglist__15402 = cljs.core.next(arglist__15402);
var c1 = cljs.core.first(arglist__15402);
arglist__15402 = cljs.core.next(arglist__15402);
var c2 = cljs.core.first(arglist__15402);
arglist__15402 = cljs.core.next(arglist__15402);
var c3 = cljs.core.first(arglist__15402);
var colls = cljs.core.rest(arglist__15402);
return G__15401__delegate(f,c1,c2,c3,colls);
});
G__15401.cljs$core$IFn$_invoke$arity$variadic = G__15401__delegate;
return G__15401;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
map.cljs$core$IFn$_invoke$arity$4 = map__4;
map.cljs$core$IFn$_invoke$arity$variadic = map__5.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){return (new cljs.core.LazySeq(null,(function (){if((n > 0))
{var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;return cljs.core.cons.call(null,cljs.core.first.call(null,s),take.call(null,(n - 1),cljs.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){var step = (function (n__$1,coll__$1){while(true){
var s = cljs.core.seq.call(null,coll__$1);if(((n__$1 > 0)) && (s))
{{
var G__15403 = (n__$1 - 1);
var G__15404 = cljs.core.rest.call(null,s);
n__$1 = G__15403;
coll__$1 = G__15404;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,(function (){return step.call(null,n,coll);
}),null,null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){return cljs.core.map.call(null,(function (x,_){return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$core$IFn$_invoke$arity$1 = drop_last__1;
drop_last.cljs$core$IFn$_invoke$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){var s = cljs.core.seq.call(null,coll);var lead = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));while(true){
if(lead)
{{
var G__15405 = cljs.core.next.call(null,s);
var G__15406 = cljs.core.next.call(null,lead);
s = G__15405;
lead = G__15406;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){var step = (function (pred__$1,coll__$1){while(true){
var s = cljs.core.seq.call(null,coll__$1);if(cljs.core.truth_((function (){var and__3279__auto__ = s;if(and__3279__auto__)
{return pred__$1.call(null,cljs.core.first.call(null,s));
} else
{return and__3279__auto__;
}
})()))
{{
var G__15407 = pred__$1;
var G__15408 = cljs.core.rest.call(null,s);
pred__$1 = G__15407;
coll__$1 = G__15408;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,(function (){return step.call(null,pred,coll);
}),null,null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;return cljs.core.concat.call(null,s,cycle.call(null,s));
} else
{return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null,null));
});
var repeat__2 = (function (n,x){return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$core$IFn$_invoke$arity$1 = repeat__1;
repeat.cljs$core$IFn$_invoke$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null,null));
});
var repeatedly__2 = (function (n,f){return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$core$IFn$_invoke$arity$1 = repeatedly__1;
repeatedly.cljs$core$IFn$_invoke$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,(function (){return iterate.call(null,f,f.call(null,x));
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq.call(null,c1);var s2 = cljs.core.seq.call(null,c2);if((s1) && (s2))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),interleave.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else
{return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__15409__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
};
var G__15409 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15409__delegate.call(this,c1,c2,colls);};
G__15409.cljs$lang$maxFixedArity = 2;
G__15409.cljs$lang$applyTo = (function (arglist__15410){
var c1 = cljs.core.first(arglist__15410);
arglist__15410 = cljs.core.next(arglist__15410);
var c2 = cljs.core.first(arglist__15410);
var colls = cljs.core.rest(arglist__15410);
return G__15409__delegate(c1,c2,colls);
});
G__15409.cljs$core$IFn$_invoke$arity$variadic = G__15409__delegate;
return G__15409;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$core$IFn$_invoke$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$core$IFn$_invoke$arity$2 = interleave__2;
interleave.cljs$core$IFn$_invoke$arity$variadic = interleave__3.cljs$core$IFn$_invoke$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){var cat = (function cat(coll,colls__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4090__auto__ = cljs.core.seq.call(null,coll);if(temp__4090__auto__)
{var coll__$1 = temp__4090__auto__;return cljs.core.cons.call(null,cljs.core.first.call(null,coll__$1),cat.call(null,cljs.core.rest.call(null,coll__$1),colls__$1));
} else
{if(cljs.core.seq.call(null,colls__$1))
{return cat.call(null,cljs.core.first.call(null,colls__$1),cljs.core.rest.call(null,colls__$1));
} else
{return null;
}
}
}),null,null));
});return cat.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__15411__delegate = function (f,coll,colls){return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__15411 = function (f,coll,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15411__delegate.call(this,f,coll,colls);};
G__15411.cljs$lang$maxFixedArity = 2;
G__15411.cljs$lang$applyTo = (function (arglist__15412){
var f = cljs.core.first(arglist__15412);
arglist__15412 = cljs.core.next(arglist__15412);
var coll = cljs.core.first(arglist__15412);
var colls = cljs.core.rest(arglist__15412);
return G__15411__delegate(f,coll,colls);
});
G__15411.cljs$core$IFn$_invoke$arity$variadic = G__15411__delegate;
return G__15411;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$core$IFn$_invoke$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$core$IFn$_invoke$arity$2 = mapcat__2;
mapcat.cljs$core$IFn$_invoke$arity$variadic = mapcat__3.cljs$core$IFn$_invoke$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);var size = cljs.core.count.call(null,c);var b = cljs.core.chunk_buffer.call(null,size);var n__4114__auto___15413 = size;var i_15414 = 0;while(true){
if((i_15414 < n__4114__auto___15413))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c,i_15414))))
{cljs.core.chunk_append.call(null,b,cljs.core._nth.call(null,c,i_15414));
} else
{}
{
var G__15415 = (i_15414 + 1);
i_15414 = G__15415;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),filter.call(null,pred,cljs.core.chunk_rest.call(null,s)));
} else
{var f = cljs.core.first.call(null,s);var r = cljs.core.rest.call(null,s);if(cljs.core.truth_(pred.call(null,f)))
{return cljs.core.cons.call(null,f,filter.call(null,pred,r));
} else
{return filter.call(null,pred,r);
}
}
} else
{return null;
}
}),null,null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){var walk = (function walk(node){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null,null));
});return walk.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){return cljs.core.filter.call(null,(function (p1__15416_SHARP_){return !(cljs.core.sequential_QMARK_.call(null,p1__15416_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){if(!((to == null)))
{if((function (){var G__15418 = to;if(G__15418)
{var bit__3910__auto__ = (G__15418.cljs$lang$protocol_mask$partition1$ & 4);if((bit__3910__auto__) || (G__15418.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__15419__delegate = function (f,c1,c2,c3,colls){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__15419 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__15419__delegate.call(this,f,c1,c2,c3,colls);};
G__15419.cljs$lang$maxFixedArity = 4;
G__15419.cljs$lang$applyTo = (function (arglist__15420){
var f = cljs.core.first(arglist__15420);
arglist__15420 = cljs.core.next(arglist__15420);
var c1 = cljs.core.first(arglist__15420);
arglist__15420 = cljs.core.next(arglist__15420);
var c2 = cljs.core.first(arglist__15420);
arglist__15420 = cljs.core.next(arglist__15420);
var c3 = cljs.core.first(arglist__15420);
var colls = cljs.core.rest(arglist__15420);
return G__15419__delegate(f,c1,c2,c3,colls);
});
G__15419.cljs$core$IFn$_invoke$arity$variadic = G__15419__delegate;
return G__15419;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$core$IFn$_invoke$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$core$IFn$_invoke$arity$2 = mapv__2;
mapv.cljs$core$IFn$_invoke$arity$3 = mapv__3;
mapv.cljs$core$IFn$_invoke$arity$4 = mapv__4;
mapv.cljs$core$IFn$_invoke$arity$variadic = mapv__5.cljs$core$IFn$_invoke$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;var p = cljs.core.take.call(null,n,s);if((n === cljs.core.count.call(null,p)))
{return cljs.core.cons.call(null,p,partition.call(null,n,step,cljs.core.drop.call(null,step,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;var p = cljs.core.take.call(null,n,s);if((n === cljs.core.count.call(null,p)))
{return cljs.core.cons.call(null,p,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s)));
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.take.call(null,n,cljs.core.concat.call(null,p,pad)));
}
} else
{return null;
}
}),null,null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
partition.cljs$core$IFn$_invoke$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){return get_in.call(null,m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){var sentinel = cljs.core.lookup_sentinel;var m__$1 = m;var ks__$1 = cljs.core.seq.call(null,ks);while(true){
if(ks__$1)
{if(!((function (){var G__15422 = m__$1;if(G__15422)
{var bit__3917__auto__ = (G__15422.cljs$lang$protocol_mask$partition0$ & 256);if((bit__3917__auto__) || (G__15422.cljs$core$ILookup$))
{return true;
} else
{if((!G__15422.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__15422);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__15422);
}
})()))
{return not_found;
} else
{var m__$2 = cljs.core.get.call(null,m__$1,cljs.core.first.call(null,ks__$1),sentinel);if((sentinel === m__$2))
{return not_found;
} else
{{
var G__15423 = sentinel;
var G__15424 = m__$2;
var G__15425 = cljs.core.next.call(null,ks__$1);
sentinel = G__15423;
m__$1 = G__15424;
ks__$1 = G__15425;
continue;
}
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$core$IFn$_invoke$arity$2 = get_in__2;
get_in.cljs$core$IFn$_invoke$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__15426,v){var vec__15428 = p__15426;var k = cljs.core.nth.call(null,vec__15428,0,null);var ks = cljs.core.nthnext.call(null,vec__15428,1);if(ks)
{return cljs.core.assoc.call(null,m,k,assoc_in.call(null,cljs.core.get.call(null,m,k),ks,v));
} else
{return cljs.core.assoc.call(null,m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() {
var update_in = null;
var update_in__3 = (function (m,p__15429,f){var vec__15439 = p__15429;var k = cljs.core.nth.call(null,vec__15439,0,null);var ks = cljs.core.nthnext.call(null,vec__15439,1);if(ks)
{return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f));
} else
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
});
var update_in__4 = (function (m,p__15430,f,a){var vec__15440 = p__15430;var k = cljs.core.nth.call(null,vec__15440,0,null);var ks = cljs.core.nthnext.call(null,vec__15440,1);if(ks)
{return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a));
} else
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a));
}
});
var update_in__5 = (function (m,p__15431,f,a,b){var vec__15441 = p__15431;var k = cljs.core.nth.call(null,vec__15441,0,null);var ks = cljs.core.nthnext.call(null,vec__15441,1);if(ks)
{return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a,b));
} else
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a,b));
}
});
var update_in__6 = (function (m,p__15432,f,a,b,c){var vec__15442 = p__15432;var k = cljs.core.nth.call(null,vec__15442,0,null);var ks = cljs.core.nthnext.call(null,vec__15442,1);if(ks)
{return cljs.core.assoc.call(null,m,k,update_in.call(null,cljs.core.get.call(null,m,k),ks,f,a,b,c));
} else
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),a,b,c));
}
});
var update_in__7 = (function() { 
var G__15444__delegate = function (m,p__15433,f,a,b,c,args){var vec__15443 = p__15433;var k = cljs.core.nth.call(null,vec__15443,0,null);var ks = cljs.core.nthnext.call(null,vec__15443,1);if(ks)
{return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k),ks,f,a,b,c,args));
} else
{return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),a,b,c,args));
}
};
var G__15444 = function (m,p__15433,f,a,b,c,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__15444__delegate.call(this,m,p__15433,f,a,b,c,args);};
G__15444.cljs$lang$maxFixedArity = 6;
G__15444.cljs$lang$applyTo = (function (arglist__15445){
var m = cljs.core.first(arglist__15445);
arglist__15445 = cljs.core.next(arglist__15445);
var p__15433 = cljs.core.first(arglist__15445);
arglist__15445 = cljs.core.next(arglist__15445);
var f = cljs.core.first(arglist__15445);
arglist__15445 = cljs.core.next(arglist__15445);
var a = cljs.core.first(arglist__15445);
arglist__15445 = cljs.core.next(arglist__15445);
var b = cljs.core.first(arglist__15445);
arglist__15445 = cljs.core.next(arglist__15445);
var c = cljs.core.first(arglist__15445);
var args = cljs.core.rest(arglist__15445);
return G__15444__delegate(m,p__15433,f,a,b,c,args);
});
G__15444.cljs$core$IFn$_invoke$arity$variadic = G__15444__delegate;
return G__15444;
})()
;
update_in = function(m,p__15433,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__15433,f);
case 4:
return update_in__4.call(this,m,p__15433,f,a);
case 5:
return update_in__5.call(this,m,p__15433,f,a,b);
case 6:
return update_in__6.call(this,m,p__15433,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__15433,f,a,b,c, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_in.cljs$lang$maxFixedArity = 6;
update_in.cljs$lang$applyTo = update_in__7.cljs$lang$applyTo;
update_in.cljs$core$IFn$_invoke$arity$3 = update_in__3;
update_in.cljs$core$IFn$_invoke$arity$4 = update_in__4;
update_in.cljs$core$IFn$_invoke$arity$5 = update_in__5;
update_in.cljs$core$IFn$_invoke$arity$6 = update_in__6;
update_in.cljs$core$IFn$_invoke$arity$variadic = update_in__7.cljs$core$IFn$_invoke$arity$variadic;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorStr = "cljs.core/VectorNode";
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__3838__auto__,writer__3839__auto__,opts__3840__auto__){return cljs.core._write.call(null,writer__3839__auto__,"cljs.core/VectorNode");
});
cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){return (new cljs.core.VectorNode(edit,arr));
});
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){return (new cljs.core.VectorNode(edit,(new Array(32))));
});
cljs.core.pv_aget = (function pv_aget(node,idx){return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tail_off = (function tail_off(pv){var cnt = pv.cnt;if((cnt < 32))
{return 0;
} else
{return (((cnt - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){var ll = level;var ret = node;while(true){
if((ll === 0))
{return ret;
} else
{var embed = ret;var r = cljs.core.pv_fresh_node.call(null,edit);var _ = cljs.core.pv_aset.call(null,r,0,embed);{
var G__15446 = (ll - 5);
var G__15447 = r;
ll = G__15446;
ret = G__15447;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){var ret = cljs.core.pv_clone_node.call(null,parent);var subidx = (((pv.cnt - 1) >>> level) & 31);if((5 === level))
{cljs.core.pv_aset.call(null,ret,subidx,tailnode);
return ret;
} else
{var child = cljs.core.pv_aget.call(null,parent,subidx);if(!((child == null)))
{var node_to_insert = push_tail.call(null,pv,(level - 5),child,tailnode);cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljs.core.new_path.call(null,null,(level - 5),tailnode);cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(cnt)].join('')));
});
cljs.core.array_for = (function array_for(pv,i){if(((0 <= i)) && ((i < pv.cnt)))
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node = pv.root;var level = pv.shift;while(true){
if((level > 0))
{{
var G__15448 = cljs.core.pv_aget.call(null,node,((i >>> level) & 31));
var G__15449 = (level - 5);
node = G__15448;
level = G__15449;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{return cljs.core.vector_index_out_of_bounds.call(null,i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){var ret = cljs.core.pv_clone_node.call(null,node);if((level === 0))
{cljs.core.pv_aset.call(null,ret,(i & 31),val);
return ret;
} else
{var subidx = ((i >>> level) & 31);cljs.core.pv_aset.call(null,ret,subidx,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx),i,val));
return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){var subidx = (((pv.cnt - 2) >>> level) & 31);if((level > 5))
{var new_child = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx));if(((new_child == null)) && ((subidx === 0)))
{return null;
} else
{var ret = cljs.core.pv_clone_node.call(null,node);cljs.core.pv_aset.call(null,ret,subidx,new_child);
return ret;
}
} else
{if((subidx === 0))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var ret = cljs.core.pv_clone_node.call(null,node);cljs.core.pv_aset.call(null,ret,subidx,null);
return ret;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorStr = "cljs.core/PersistentVector";
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientVector(self__.cnt,self__.shift,cljs.core.tv_editable_root.call(null,self__.root),cljs.core.tv_editable_tail.call(null,self__.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(((0 <= k)) && ((k < self__.cnt)))
{if((cljs.core.tail_off.call(null,coll__$1) <= k))
{var new_tail = cljs.core.aclone.call(null,self__.tail);(new_tail[(k & 31)] = v);
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc.call(null,coll__$1,self__.shift,self__.root,k,v),self__.tail,null));
}
} else
{if((k === self__.cnt))
{return cljs.core._conj.call(null,coll__$1,v);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__15451 = null;
var G__15451__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__15451__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__15451 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15451__2.call(this,self__,k);
case 3:
return G__15451__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15451;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (self__,args15450){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15450)));
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){var self__ = this;
var v__$1 = this;var step_init = [0,init];var i = 0;while(true){
if((i < self__.cnt))
{var arr = cljs.core.array_for.call(null,v__$1,i);var len = arr.length;var init__$1 = (function (){var j = 0;var init__$1 = (step_init[1]);while(true){
if((j < len))
{var init__$2 = f.call(null,init__$1,(j + i),(arr[j]));if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return init__$2;
} else
{{
var G__15452 = (j + 1);
var G__15453 = init__$2;
j = G__15452;
init__$1 = G__15453;
continue;
}
}
} else
{(step_init[0] = len);
(step_init[1] = init__$1);
return init__$1;
}
break;
}
})();if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{{
var G__15454 = (i + (step_init[0]));
i = G__15454;
continue;
}
}
} else
{return (step_init[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(((self__.cnt - cljs.core.tail_off.call(null,coll__$1)) < 32))
{var len = self__.tail.length;var new_tail = (new Array((len + 1)));var n__4114__auto___15455 = len;var i_15456 = 0;while(true){
if((i_15456 < n__4114__auto___15455))
{(new_tail[i_15456] = (self__.tail[i_15456]));
{
var G__15457 = (i_15456 + 1);
i_15456 = G__15457;
continue;
}
} else
{}
break;
}
(new_tail[len] = o);
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + 1),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> 5) > (1 << self__.shift));var new_shift = ((root_overflow_QMARK_)?(self__.shift + 5):self__.shift);var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node.call(null,null);cljs.core.pv_aset.call(null,n_r,0,self__.root);
cljs.core.pv_aset.call(null,n_r,1,cljs.core.new_path.call(null,null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));
return n_r;
})():cljs.core.push_tail.call(null,coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + 1),new_shift,new_root,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > 0))
{return (new cljs.core.RSeq(coll__$1,(self__.cnt - 1),null));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.call(null,v__$1,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.call(null,v__$1,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === 0))
{return null;
} else
{if((self__.cnt < 32))
{return cljs.core.array_seq.call(null,self__.tail);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.chunked_seq.call(null,coll__$1,0,0);
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > 0))
{return cljs.core._nth.call(null,coll__$1,(self__.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if((1 < (self__.cnt - cljs.core.tail_off.call(null,coll__$1))))
{return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - 1),self__.shift,self__.root,self__.tail.slice(0,-1),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_tail = cljs.core.array_for.call(null,coll__$1,(self__.cnt - 2));var nr = cljs.core.pop_tail.call(null,coll__$1,self__.shift,self__.root);var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);var cnt_1 = (self__.cnt - 1);if(((5 < self__.shift)) && ((cljs.core.pv_aget.call(null,new_root,1) == null)))
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - 5),cljs.core.pv_aget.call(null,new_root,0),new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;return cljs.core._assoc.call(null,coll__$1,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;return (cljs.core.array_for.call(null,coll__$1,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((0 <= n)) && ((n < self__.cnt)))
{return cljs.core._nth.call(null,coll__$1,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});
cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,(new Array(32))));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){var l = xs.length;var xs__$1 = ((no_clone)?xs:cljs.core.aclone.call(null,xs));if((l < 32))
{return (new cljs.core.PersistentVector(null,l,5,cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice(0,32);var v = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node,null));var i = 32;var out = cljs.core._as_transient.call(null,v);while(true){
if((i < l))
{{
var G__15458 = (i + 1);
var G__15459 = cljs.core.conj_BANG_.call(null,out,(xs__$1[i]));
i = G__15458;
out = G__15459;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){if((args instanceof cljs.core.IndexedSeq))
{return cljs.core.PersistentVector.fromArray.call(null,args.arr,true);
} else
{return cljs.core.vec.call(null,args);
}
};
var vector = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__15460){
var args = cljs.core.seq(arglist__15460);
return vector__delegate(args);
});
vector.cljs$core$IFn$_invoke$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 32243948;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorStr = "cljs.core/ChunkedSeq";
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + 1) < self__.node.length))
{var s = cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));if((s == null))
{return null;
} else
{return s;
}
} else
{return cljs.core._chunked_next.call(null,coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.ChunkedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count.call(null,self__.vec)),f,start);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + 1) < self__.node.length))
{var s = cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return cljs.core._chunked_rest.call(null,coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var l = self__.node.length;var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?cljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0):null);if((s == null))
{return null;
} else
{return s;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.array_chunk.call(null,self__.node,self__.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var l = self__.node.length;var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?cljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0):null);if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
});
cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for.call(null,vec,i),i,off,null,null));
});
var chunked_seq__4 = (function (vec,node,i,off){return (new cljs.core.ChunkedSeq(vec,node,i,off,null,null));
});
var chunked_seq__5 = (function (vec,node,i,off,meta){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$core$IFn$_invoke$arity$3 = chunked_seq__3;
chunked_seq.cljs$core$IFn$_invoke$arity$4 = chunked_seq__4;
chunked_seq.cljs$core$IFn$_invoke$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorStr = "cljs.core/Subvec";
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){var self__ = this;
var coll__$1 = this;var v_pos = (self__.start + key);return cljs.core.build_subvec.call(null,self__.meta,cljs.core.assoc.call(null,self__.v,v_pos,val),self__.start,(function (){var x__3598__auto__ = self__.end;var y__3599__auto__ = (v_pos + 1);return ((x__3598__auto__ > y__3599__auto__) ? x__3598__auto__ : y__3599__auto__);
})(),null);
});
cljs.core.Subvec.prototype.call = (function() {
var G__15462 = null;
var G__15462__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__15462__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__15462 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15462__2.call(this,self__,k);
case 3:
return G__15462__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15462;
})()
;
cljs.core.Subvec.prototype.apply = (function (self__,args15461){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15461)));
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.build_subvec.call(null,self__.meta,cljs.core._assoc_n.call(null,self__.v,self__.end,o),self__.start,(self__.end + 1),null);
});
cljs.core.Subvec.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,coll__$1,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.call(null,coll__$1,f,start__$1);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var subvec_seq = (function subvec_seq(i){if((i === self__.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,self__.v,i),(new cljs.core.LazySeq(null,(function (){return subvec_seq.call(null,(i + 1));
}),null,null)));
}
});return subvec_seq.call(null,self__.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.end - self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,self__.v,(self__.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{return cljs.core.build_subvec.call(null,self__.meta,self__.v,self__.start,(self__.end - 1),null);
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;return cljs.core._assoc.call(null,coll__$1,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return cljs.core.build_subvec.call(null,meta__$1,self__.v,self__.start,self__.end,self__.__hash);
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(((n < 0)) || ((self__.end <= (self__.start + n))))
{return cljs.core.vector_index_out_of_bounds.call(null,n,(self__.end - self__.start));
} else
{return cljs.core._nth.call(null,self__.v,(self__.start + n));
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((n < 0)) || ((self__.end <= (self__.start + n))))
{return not_found;
} else
{return cljs.core._nth.call(null,self__.v,(self__.start + n),not_found);
}
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){return (new cljs.core.Subvec(meta,v,start,end,__hash));
});
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){while(true){
if((v instanceof cljs.core.Subvec))
{{
var G__15463 = meta;
var G__15464 = v.v;
var G__15465 = (v.start + start);
var G__15466 = (v.start + end);
var G__15467 = __hash;
meta = G__15463;
v = G__15464;
start = G__15465;
end = G__15466;
__hash = G__15467;
continue;
}
} else
{var c = cljs.core.count.call(null,v);if(((start < 0)) || ((end < 0)) || ((start > c)) || ((end > c)))
{throw (new Error("Index out of bounds"));
} else
{}
return (new cljs.core.Subvec(meta,v,start,end,__hash));
}
break;
}
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){return cljs.core.build_subvec.call(null,null,v,start,end,null);
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$core$IFn$_invoke$arity$2 = subvec__2;
subvec.cljs$core$IFn$_invoke$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,cljs.core.aclone.call(null,node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){return (new cljs.core.VectorNode((function (){var obj15471 = {};return obj15471;
})(),cljs.core.aclone.call(null,node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){var ret = (new Array(32));cljs.core.array_copy.call(null,tl,0,ret,0,tl.length);
return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){var ret = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);var subidx = (((tv.cnt - 1) >>> level) & 31);cljs.core.pv_aset.call(null,ret,subidx,(((level === 5))?tail_node:(function (){var child = cljs.core.pv_aget.call(null,ret,subidx);if(!((child == null)))
{return tv_push_tail.call(null,tv,(level - 5),child,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){var node__$1 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);var subidx = (((tv.cnt - 2) >>> level) & 31);if((level > 5))
{var new_child = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__$1,subidx));if(((new_child == null)) && ((subidx === 0)))
{return null;
} else
{cljs.core.pv_aset.call(null,node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === 0))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cljs.core.pv_aset.call(null,node__$1,subidx,null);
return node__$1;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){if(((0 <= i)) && ((i < tv.cnt)))
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root = tv.root;var node = root;var level = tv.shift;while(true){
if((level > 0))
{{
var G__15472 = cljs.core.tv_ensure_editable.call(null,root.edit,cljs.core.pv_aget.call(null,node,((i >>> level) & 31)));
var G__15473 = (level - 5);
node = G__15472;
level = G__15473;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorStr = "cljs.core/TransientVector";
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__15475 = null;
var G__15475__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15475__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15475 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15475__2.call(this,self__,k);
case 3:
return G__15475__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15475;
})()
;
cljs.core.TransientVector.prototype.apply = (function (self__,args15474){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15474)));
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return (cljs.core.array_for.call(null,coll__$1,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((0 <= n)) && ((n < self__.cnt)))
{return cljs.core._nth.call(null,coll__$1,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if(((0 <= n)) && ((n < self__.cnt)))
{if((cljs.core.tail_off.call(null,tcoll__$1) <= n))
{(self__.tail[(n & 31)] = val);
return tcoll__$1;
} else
{var new_root = (function go(level,node){var node__$1 = cljs.core.tv_ensure_editable.call(null,self__.root.edit,node);if((level === 0))
{cljs.core.pv_aset.call(null,node__$1,(n & 31),val);
return node__$1;
} else
{var subidx = ((n >>> level) & 31);cljs.core.pv_aset.call(null,node__$1,subidx,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__$1,subidx)));
return node__$1;
}
}).call(null,self__.shift,self__.root);self__.root = new_root;
return tcoll__$1;
}
} else
{if((n === self__.cnt))
{return cljs.core._conj_BANG_.call(null,tcoll__$1,val);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{self__.cnt = 0;
return tcoll__$1;
} else
{if((((self__.cnt - 1) & 31) > 0))
{self__.cnt = (self__.cnt - 1);
return tcoll__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_tail = cljs.core.editable_array_for.call(null,tcoll__$1,(self__.cnt - 2));var new_root = (function (){var nr = cljs.core.tv_pop_tail.call(null,tcoll__$1,self__.shift,self__.root);if(!((nr == null)))
{return nr;
} else
{return (new cljs.core.VectorNode(self__.root.edit,(new Array(32))));
}
})();if(((5 < self__.shift)) && ((cljs.core.pv_aget.call(null,new_root,1) == null)))
{var new_root__$1 = cljs.core.tv_ensure_editable.call(null,self__.root.edit,cljs.core.pv_aget.call(null,new_root,0));self__.root = new_root__$1;
self__.shift = (self__.shift - 5);
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll__$1;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll__$1;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;return cljs.core._assoc_n_BANG_.call(null,tcoll__$1,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if(((self__.cnt - cljs.core.tail_off.call(null,tcoll__$1)) < 32))
{(self__.tail[(self__.cnt & 31)] = o);
self__.cnt = (self__.cnt + 1);
return tcoll__$1;
} else
{var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));var new_tail = (new Array(32));(new_tail[0] = o);
self__.tail = new_tail;
if(((self__.cnt >>> 5) > (1 << self__.shift)))
{var new_root_array = (new Array(32));var new_shift = (self__.shift + 5);(new_root_array[0] = self__.root);
(new_root_array[1] = cljs.core.new_path.call(null,self__.root.edit,self__.shift,tail_node));
self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + 1);
return tcoll__$1;
} else
{var new_root = cljs.core.tv_push_tail.call(null,tcoll__$1,self__.shift,self__.root,tail_node);self__.root = new_root;
self__.cnt = (self__.cnt + 1);
return tcoll__$1;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - cljs.core.tail_off.call(null,tcoll__$1));var trimmed_tail = (new Array(len));cljs.core.array_copy.call(null,self__.tail,0,trimmed_tail,0,len);
return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientVector = (function __GT_TransientVector(cnt,shift,root,tail){return (new cljs.core.TransientVector(cnt,shift,root,tail));
});

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorStr = "cljs.core/PersistentQueueSeq";
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first.call(null,self__.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var temp__4090__auto__ = cljs.core.next.call(null,self__.front);if(temp__4090__auto__)
{var f1 = temp__4090__auto__;return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return cljs.core._empty.call(null,coll__$1);
} else
{return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_PersistentQueueSeq = (function __GT_PersistentQueueSeq(meta,front,rear,__hash){return (new cljs.core.PersistentQueueSeq(meta,front,rear,__hash));
});

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorStr = "cljs.core/PersistentQueue";
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + 1),self__.front,cljs.core.conj.call(null,(function (){var or__3291__auto__ = self__.rear;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + 1),cljs.core.conj.call(null,self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var rear__$1 = cljs.core.seq.call(null,self__.rear);if(cljs.core.truth_((function (){var or__3291__auto__ = self__.front;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq.call(null,rear__$1),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first.call(null,self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{var temp__4090__auto__ = cljs.core.next.call(null,self__.front);if(temp__4090__auto__)
{var f1 = temp__4090__auto__;return (new cljs.core.PersistentQueue(self__.meta,(self__.count - 1),f1,self__.rear,null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count - 1),cljs.core.seq.call(null,self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll__$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first.call(null,self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.rest.call(null,cljs.core.seq.call(null,coll__$1));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.__GT_PersistentQueue = (function __GT_PersistentQueue(meta,count,front,rear,__hash){return (new cljs.core.PersistentQueue(meta,count,front,rear,__hash));
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorStr = "cljs.core/NeverEquiv";
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return false;
});
cljs.core.__GT_NeverEquiv = (function __GT_NeverEquiv(){return (new cljs.core.NeverEquiv());
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){var len = array.length;var i = 0;while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__15476 = (i + incr);
i = G__15476;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){var a__$1 = cljs.core.hash.call(null,a);var b__$1 = cljs.core.hash.call(null,b);if((a__$1 < b__$1))
{return -1;
} else
{if((a__$1 > b__$1))
{return 1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){var ks = m.keys;var len = ks.length;var so = m.strobj;var mm = cljs.core.meta.call(null,m);var i = 0;var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{var k__$1 = (ks[i]);{
var G__15477 = (i + 1);
var G__15478 = cljs.core.assoc_BANG_.call(null,out,k__$1,(so[k__$1]));
i = G__15477;
out = G__15478;
continue;
}
} else
{return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){var new_obj = (function (){var obj15482 = {};return obj15482;
})();var l = ks.length;var i_15483 = 0;while(true){
if((i_15483 < l))
{var k_15484 = (ks[i_15483]);(new_obj[k_15484] = (obj[k_15484]));
{
var G__15485 = (i_15483 + 1);
i_15483 = G__15485;
continue;
}
} else
{}
break;
}
return new_obj;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorStr = "cljs.core/ObjMap";
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll__$1));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_imap.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if((goog.isString(k)) && (!((cljs.core.scan_array.call(null,1,k,self__.keys) == null))))
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(goog.isString(k))
{if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD)))
{return cljs.core.obj_map__GT_hash_map.call(null,coll__$1,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,self__.keys) == null)))
{var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);(new_strobj[k] = v);
return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + 1),null));
} else
{var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);var new_keys = cljs.core.aclone.call(null,self__.keys);(new_strobj[k] = v);
new_keys.push(k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll__$1,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((goog.isString(k)) && (!((cljs.core.scan_array.call(null,1,k,self__.keys) == null))))
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__15488 = null;
var G__15488__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15488__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15488 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15488__2.call(this,self__,k);
case 3:
return G__15488__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15488;
})()
;
cljs.core.ObjMap.prototype.apply = (function (self__,args15487){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15487)));
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.keys.length;var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);var init__$1 = init;while(true){
if(cljs.core.seq.call(null,keys__$1))
{var k = cljs.core.first.call(null,keys__$1);var init__$2 = f.call(null,init__$1,k,(self__.strobj[k]));if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__15489 = cljs.core.rest.call(null,keys__$1);
var G__15490 = init__$2;
keys__$1 = G__15489;
init__$1 = G__15490;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll__$1,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__15486_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__15486_SHARP_,(self__.strobj[p1__15486_SHARP_])],null));
}),self__.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map.call(null,coll__$1,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,self__.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((goog.isString(k)) && (!((cljs.core.scan_array.call(null,1,k,self__.keys) == null))))
{var new_keys = cljs.core.aclone.call(null,self__.keys);var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);new_keys.splice(cljs.core.scan_array.call(null,1,k,new_keys),1);
delete new_strobj[k];
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
} else
{return coll__$1;
}
});
cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj15492 = {};return obj15492;
})(),0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 8;
cljs.core.ObjMap.fromObject = (function (ks,obj){return (new cljs.core.ObjMap(null,ks,obj,0,null));
});
cljs.core.array_map_index_of_nil_QMARK_ = (function array_map_index_of_nil_QMARK_(arr,m,k){var len = arr.length;var i = 0;while(true){
if((len <= i))
{return -1;
} else
{if(((arr[i]) == null))
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__15493 = (i + 2);
i = G__15493;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.array_map_index_of_keyword_QMARK_ = (function array_map_index_of_keyword_QMARK_(arr,m,k){var len = arr.length;var kstr = k.fqn;var i = 0;while(true){
if((len <= i))
{return -1;
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Keyword)) && ((kstr === k_SINGLEQUOTE_.fqn));
})())
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__15494 = (i + 2);
i = G__15494;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.array_map_index_of_symbol_QMARK_ = (function array_map_index_of_symbol_QMARK_(arr,m,k){var len = arr.length;var kstr = k.str;var i = 0;while(true){
if((len <= i))
{return -1;
} else
{if((function (){var k_SINGLEQUOTE_ = (arr[i]);return ((k_SINGLEQUOTE_ instanceof cljs.core.Symbol)) && ((kstr === k_SINGLEQUOTE_.str));
})())
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__15495 = (i + 2);
i = G__15495;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.array_map_index_of_identical_QMARK_ = (function array_map_index_of_identical_QMARK_(arr,m,k){var len = arr.length;var i = 0;while(true){
if((len <= i))
{return -1;
} else
{if((k === (arr[i])))
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__15496 = (i + 2);
i = G__15496;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.array_map_index_of_equiv_QMARK_ = (function array_map_index_of_equiv_QMARK_(arr,m,k){var len = arr.length;var i = 0;while(true){
if((len <= i))
{return -1;
} else
{if(cljs.core._EQ_.call(null,k,(arr[i])))
{return i;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__15497 = (i + 2);
i = G__15497;
continue;
}
} else
{return null;
}
}
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){var arr = m.arr;if((k instanceof cljs.core.Keyword))
{return cljs.core.array_map_index_of_keyword_QMARK_.call(null,arr,m,k);
} else
{if((goog.isString(k)) || (typeof k === 'number'))
{return cljs.core.array_map_index_of_identical_QMARK_.call(null,arr,m,k);
} else
{if((k instanceof cljs.core.Symbol))
{return cljs.core.array_map_index_of_symbol_QMARK_.call(null,arr,m,k);
} else
{if((k == null))
{return cljs.core.array_map_index_of_nil_QMARK_.call(null,arr,m,k);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.array_map_index_of_equiv_QMARK_.call(null,arr,m,k);
} else
{return null;
}
}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){var arr = m.arr;var l = arr.length;var narr = (new Array((l + 2)));var i_15498 = 0;while(true){
if((i_15498 < l))
{(narr[i_15498] = (arr[i_15498]));
{
var G__15499 = (i_15498 + 1);
i_15498 = G__15499;
continue;
}
} else
{}
break;
}
(narr[l] = k);
(narr[(l + 1)] = v);
return narr;
});

/**
* @constructor
*/
cljs.core.PersistentArrayMapSeq = (function (arr,i,_meta){
this.arr = arr;
this.i = i;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374990;
})
cljs.core.PersistentArrayMapSeq.cljs$lang$type = true;
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentArrayMapSeq";
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/PersistentArrayMapSeq");
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_coll.call(null,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - 2)))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + 2),self__._meta));
} else
{return null;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return ((self__.arr.length - self__.i) / 2);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[self__.i]),(self__.arr[(self__.i + 1)])], null);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - 2)))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + 2),self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta);
});
cljs.core.__GT_PersistentArrayMapSeq = (function __GT_PersistentArrayMapSeq(arr,i,_meta){return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
});
cljs.core.persistent_array_map_seq = (function persistent_array_map_seq(arr,i,_meta){if((i <= (arr.length - 2)))
{return (new cljs.core.PersistentArrayMapSeq(arr,i,_meta));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorStr = "cljs.core/PersistentArrayMap";
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientArrayMap((function (){var obj15502 = {};return obj15502;
})(),self__.arr.length,cljs.core.aclone.call(null,self__.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_imap.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of.call(null,coll__$1,k);if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of.call(null,coll__$1,k);if((idx === -1))
{if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr__$1 = cljs.core.array_map_extend_kv.call(null,coll__$1,k,v);return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + 1),arr__$1,null));
} else
{return cljs.core._with_meta.call(null,cljs.core._assoc.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else
{if((v === (self__.arr[(idx + 1)])))
{return coll__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var arr__$1 = (function (){var G__15503 = cljs.core.aclone.call(null,self__.arr);(G__15503[(idx + 1)] = v);
return G__15503;
})();return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((cljs.core.array_map_index_of.call(null,coll__$1,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__15504 = null;
var G__15504__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15504__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15504 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15504__2.call(this,self__,k);
case 3:
return G__15504__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15504;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args15500){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15500)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.arr.length;var i = 0;var init__$1 = init;while(true){
if((i < len))
{var init__$2 = f.call(null,init__$1,(self__.arr[i]),(self__.arr[(i + 1)]));if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__15505 = (i + 2);
var G__15506 = init__$2;
i = G__15505;
init__$1 = G__15506;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll__$1,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.persistent_array_map_seq.call(null,self__.arr,0,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map.call(null,coll__$1,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of.call(null,coll__$1,k);if((idx >= 0))
{var len = self__.arr.length;var new_len = (len - 2);if((new_len === 0))
{return cljs.core._empty.call(null,coll__$1);
} else
{var new_arr = (new Array(new_len));var s = 0;var d = 0;while(true){
if((s >= len))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - 1),new_arr,null));
} else
{if(cljs.core._EQ_.call(null,k,(self__.arr[s])))
{{
var G__15507 = (s + 2);
var G__15508 = d;
s = G__15507;
d = G__15508;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + 1)] = (self__.arr[(s + 1)]));
{
var G__15509 = (s + 2);
var G__15510 = (d + 2);
s = G__15509;
d = G__15510;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll__$1;
}
});
cljs.core.__GT_PersistentArrayMap = (function __GT_PersistentArrayMap(meta,cnt,arr,__hash){return (new cljs.core.PersistentArrayMap(meta,cnt,arr,__hash));
});
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 8;
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){var arr__$1 = ((no_clone)?arr:cljs.core.aclone.call(null,arr));if(no_check)
{var cnt = (arr__$1.length / 2);return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else
{var len = arr__$1.length;var i = 0;var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__15511 = (i + 2);
var G__15512 = cljs.core._assoc_BANG_.call(null,ret,(arr__$1[i]),(arr__$1[(i + 1)]));
i = G__15511;
ret = G__15512;
continue;
}
} else
{return cljs.core._persistent_BANG_.call(null,ret);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorStr = "cljs.core/TransientArrayMap";
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll__$1,key);if((idx >= 0))
{(self__.arr[idx] = (self__.arr[(self__.len - 2)]));
(self__.arr[(idx + 1)] = (self__.arr[(self__.len - 1)]));
var G__15513_15515 = self__.arr;G__15513_15515.pop();
G__15513_15515.pop();
self__.len = (self__.len - 2);
} else
{}
return tcoll__$1;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll__$1,key);if((idx === -1))
{if(((self__.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + 2);
self__.arr.push(key);
self__.arr.push(val);
return tcoll__$1;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,self__.len,self__.arr),key,val);
}
} else
{if((val === (self__.arr[(idx + 1)])))
{return tcoll__$1;
} else
{(self__.arr[(idx + 1)] = val);
return tcoll__$1;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{if((function (){var G__15514 = o;if(G__15514)
{var bit__3917__auto__ = (G__15514.cljs$lang$protocol_mask$partition0$ & 2048);if((bit__3917__auto__) || (G__15514.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__15514.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__15514);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__15514);
}
})())
{return cljs.core._assoc_BANG_.call(null,tcoll__$1,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es = cljs.core.seq.call(null,o);var tcoll__$2 = tcoll__$1;while(true){
var temp__4090__auto__ = cljs.core.first.call(null,es);if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;{
var G__15516 = cljs.core.next.call(null,es);
var G__15517 = cljs.core._assoc_BANG_.call(null,tcoll__$2,cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__15516;
tcoll__$2 = G__15517;
continue;
}
} else
{return tcoll__$2;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,self__.len,2),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.call(null,tcoll__$1,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll__$1,k);if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{return cljs.core.quot.call(null,self__.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);var i = 0;while(true){
if((i < len))
{{
var G__15518 = cljs.core.assoc_BANG_.call(null,out,(arr[i]),(arr[(i + 1)]));
var G__15519 = (i + 2);
out = G__15518;
i = G__15519;
continue;
}
} else
{return out;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorStr = "cljs.core/Box";
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__3838__auto__,writer__3839__auto__,opts__3840__auto__){return cljs.core._write.call(null,writer__3839__auto__,"cljs.core/Box");
});
cljs.core.__GT_Box = (function __GT_Box(val){return (new cljs.core.Box(val));
});
cljs.core.key_test = (function key_test(key,other){if((key === other))
{return true;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,key,other))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._EQ_.call(null,key,other);
} else
{return null;
}
}
}
});
cljs.core.mask = (function mask(hash,shift){return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){var G__15522 = cljs.core.aclone.call(null,arr);(G__15522[i] = a);
return G__15522;
});
var clone_and_set__5 = (function (arr,i,a,j,b){var G__15523 = cljs.core.aclone.call(null,arr);(G__15523[i] = a);
(G__15523[j] = b);
return G__15523;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$core$IFn$_invoke$arity$3 = clone_and_set__3;
clone_and_set.cljs$core$IFn$_invoke$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){var new_arr = (new Array((arr.length - 2)));cljs.core.array_copy.call(null,arr,0,new_arr,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr,(2 * i),(new_arr.length - (2 * i)));
return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){var editable = inode.ensure_editable(edit);(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$core$IFn$_invoke$arity$4 = edit_and_set__4;
edit_and_set.cljs$core$IFn$_invoke$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){var len = arr.length;var i = 0;var init__$1 = init;while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);if(!((k == null)))
{return f.call(null,init__$1,k,(arr[(i + 1)]));
} else
{var node = (arr[(i + 1)]);if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__15524 = (i + 2);
var G__15525 = init__$2;
i = G__15524;
init__$1 = G__15525;
continue;
}
}
} else
{return init__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorStr = "cljs.core/BitmapIndexedNode";
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){var self__ = this;
var inode = this;if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);var earr = editable.arr;var len = earr.length;editable.bitmap = (bit ^ editable.bitmap);
cljs.core.array_copy.call(null,earr,(2 * (i + 1)),earr,(2 * i),(len - (2 * (i + 1))));
(earr[(len - 2)] = null);
(earr[(len - 1)] = null);
return editable;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);if(((self__.bitmap & bit) === 0))
{var n = cljs.core.bit_count.call(null,self__.bitmap);if(((2 * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr,(2 * idx),earr,(2 * (idx + 1)),(2 * (n - idx)));
(earr[(2 * idx)] = key);
(earr[((2 * idx) + 1)] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= 16))
{var nodes = (new Array(32));var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i_15526 = 0;var j_15527 = 0;while(true){
if((i_15526 < 32))
{if((((self__.bitmap >>> i_15526) & 1) === 0))
{{
var G__15528 = (i_15526 + 1);
var G__15529 = j_15527;
i_15526 = G__15528;
j_15527 = G__15529;
continue;
}
} else
{(nodes[i_15526] = ((!(((self__.arr[j_15527]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),cljs.core.hash.call(null,(self__.arr[j_15527])),(self__.arr[j_15527]),(self__.arr[(j_15527 + 1)]),added_leaf_QMARK_):(self__.arr[(j_15527 + 1)])));
{
var G__15530 = (i_15526 + 1);
var G__15531 = (j_15527 + 2);
i_15526 = G__15530;
j_15527 = G__15531;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit__$1,(n + 1),nodes));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_arr = (new Array((2 * (n + 4))));cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljs.core.array_copy.call(null,self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{return null;
}
}
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);var val_or_node = (self__.arr[((2 * idx) + 1)]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),n);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),val);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode,edit__$1,(2 * idx),null,((2 * idx) + 1),cljs.core.create_node.call(null,edit__$1,(shift + 5),key_or_nil,val_or_node,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;return cljs.core.create_inode_seq.call(null,self__.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil = (self__.arr[(2 * idx)]);var val_or_node = (self__.arr[((2 * idx) + 1)]);if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{(removed_leaf_QMARK_[0] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return inode;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var n = cljs.core.bit_count.call(null,self__.bitmap);var new_arr = (new Array((((n < 0))?4:(2 * (n + 1)))));cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * n));
return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil = (self__.arr[(2 * idx)]);var val_or_node = (self__.arr[((2 * idx) + 1)]);if((key_or_nil == null))
{return val_or_node.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil = (self__.arr[(2 * idx)]);var val_or_node = (self__.arr[((2 * idx) + 1)]);if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + 5),hash,key);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair.call(null,self__.arr,idx)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair.call(null,self__.arr,idx)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return inode;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);if(((self__.bitmap & bit) === 0))
{var n = cljs.core.bit_count.call(null,self__.bitmap);if((n >= 16))
{var nodes = (new Array(32));var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i_15532 = 0;var j_15533 = 0;while(true){
if((i_15532 < 32))
{if((((self__.bitmap >>> i_15532) & 1) === 0))
{{
var G__15534 = (i_15532 + 1);
var G__15535 = j_15533;
i_15532 = G__15534;
j_15533 = G__15535;
continue;
}
} else
{(nodes[i_15532] = ((!(((self__.arr[j_15533]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(self__.arr[j_15533])),(self__.arr[j_15533]),(self__.arr[(j_15533 + 1)]),added_leaf_QMARK_):(self__.arr[(j_15533 + 1)])));
{
var G__15536 = (i_15532 + 1);
var G__15537 = (j_15533 + 2);
i_15532 = G__15536;
j_15533 = G__15537;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n + 1),nodes));
} else
{var new_arr = (new Array((2 * (n + 1))));cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljs.core.array_copy.call(null,self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);var val_or_node = (self__.arr[((2 * idx) + 1)]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),n)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),val)));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,(2 * idx),null,((2 * idx) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil,val_or_node,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);var key_or_nil = (self__.arr[(2 * idx)]);var val_or_node = (self__.arr[((2 * idx) + 1)]);if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return val_or_node;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.__GT_BitmapIndexedNode = (function __GT_BitmapIndexedNode(edit,bitmap,arr){return (new cljs.core.BitmapIndexedNode(edit,bitmap,arr));
});
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,(new Array(0))));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){var arr = array_node.arr;var len = (2 * (array_node.cnt - 1));var new_arr = (new Array(len));var i = 0;var j = 1;var bitmap = 0;while(true){
if((i < len))
{if((!((i === idx))) && (!(((arr[i]) == null))))
{(new_arr[j] = (arr[i]));
{
var G__15538 = (i + 1);
var G__15539 = (j + 2);
var G__15540 = (bitmap | (1 << i));
i = G__15538;
j = G__15539;
bitmap = G__15540;
continue;
}
} else
{{
var G__15541 = (i + 1);
var G__15542 = j;
var G__15543 = bitmap;
i = G__15541;
j = G__15542;
bitmap = G__15543;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorStr = "cljs.core/ArrayNode";
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));editable.cnt = (editable.cnt + 1);
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;return cljs.core.create_array_node_seq.call(null,self__.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode,edit__$1,idx);
} else
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);editable.cnt = (editable.cnt - 1);
return editable;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone.call(null,self__.arr)));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;var len = self__.arr.length;var i = 0;var init__$1 = init;while(true){
if((i < len))
{var node = (self__.arr[i]);if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__15544 = (i + 1);
var G__15545 = init__$2;
i = G__15544;
init__$1 = G__15545;
continue;
}
}
} else
{{
var G__15546 = (i + 1);
var G__15547 = init__$1;
i = G__15546;
init__$1 = G__15547;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{var n = node.inode_without((shift + 5),hash,key);if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode,null,idx);
} else
{return (new cljs.core.ArrayNode(null,(self__.cnt - 1),cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
} else
{return null;
}
}
}
} else
{return inode;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{return (new cljs.core.ArrayNode(null,(self__.cnt + 1),cljs.core.clone_and_set.call(null,self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if(!((node == null)))
{return node.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.__GT_ArrayNode = (function __GT_ArrayNode(edit,cnt,arr){return (new cljs.core.ArrayNode(edit,cnt,arr));
});
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){var lim = (2 * cnt);var i = 0;while(true){
if((i < lim))
{if(cljs.core.key_test.call(null,key,(arr[i])))
{return i;
} else
{{
var G__15548 = (i + 2);
i = G__15548;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorStr = "cljs.core/HashCollisionNode";
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx === -1))
{if((self__.arr.length > (2 * self__.cnt)))
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,(2 * self__.cnt),key,((2 * self__.cnt) + 1),val);added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var len = self__.arr.length;var new_arr = (new Array((len + 2)));cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + 1),new_arr);
}
} else
{if(((self__.arr[(idx + 1)]) === val))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,(idx + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;return cljs.core.create_inode_seq.call(null,self__.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx === -1))
{return inode;
} else
{(removed_leaf_QMARK_[0] = true);
if((self__.cnt === 1))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;(earr[idx] = (earr[((2 * self__.cnt) - 2)]));
(earr[(idx + 1)] = (earr[((2 * self__.cnt) - 1)]));
(earr[((2 * self__.cnt) - 1)] = null);
(earr[((2 * self__.cnt) - 2)] = null);
editable.cnt = (editable.cnt - 1);
return editable;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){var self__ = this;
var inode = this;if((e === self__.edit))
{return inode;
} else
{var new_arr = (new Array((2 * (self__.cnt + 1))));cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * self__.cnt));
return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(self__.arr[idx])))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + 1)])], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx === -1))
{return inode;
} else
{if((self__.cnt === 1))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - 1),cljs.core.remove_pair.call(null,self__.arr,cljs.core.quot.call(null,idx,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx === -1))
{var len = (2 * self__.cnt);var new_arr = (new Array((len + 2)));cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + 1),new_arr));
} else
{if(cljs.core._EQ_.call(null,(self__.arr[idx]),val))
{return inode;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,(idx + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);if((idx < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(self__.arr[idx])))
{return (self__.arr[(idx + 1)]);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){var self__ = this;
var inode = this;if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
cljs.core.__GT_HashCollisionNode = (function __GT_HashCollisionNode(edit,collision_hash,cnt,arr){return (new cljs.core.HashCollisionNode(edit,collision_hash,cnt,arr));
});
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash.call(null,key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash.call(null,key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$core$IFn$_invoke$arity$6 = create_node__6;
create_node.cljs$core$IFn$_invoke$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorStr = "cljs.core/NodeSeq";
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.NodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + 1)])], null);
} else
{return cljs.core.first.call(null,self__.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{return cljs.core.create_inode_seq.call(null,self__.nodes,(self__.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__4090__auto__ = (nodes[(j + 1)]);if(cljs.core.truth_(temp__4090__auto__))
{var node = temp__4090__auto__;var temp__4090__auto____$1 = node.inode_seq();if(cljs.core.truth_(temp__4090__auto____$1))
{var node_seq = temp__4090__auto____$1;return (new cljs.core.NodeSeq(null,nodes,(j + 2),node_seq,null));
} else
{{
var G__15549 = (j + 2);
j = G__15549;
continue;
}
}
} else
{{
var G__15550 = (j + 2);
j = G__15550;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$core$IFn$_invoke$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$core$IFn$_invoke$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374860;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorStr = "cljs.core/ArrayNodeSeq";
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first.call(null,self__.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.create_array_node_seq.call(null,null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{var temp__4090__auto__ = (nodes[j]);if(cljs.core.truth_(temp__4090__auto__))
{var nj = temp__4090__auto__;var temp__4090__auto____$1 = nj.inode_seq();if(cljs.core.truth_(temp__4090__auto____$1))
{var ns = temp__4090__auto____$1;return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + 1),ns,null));
} else
{{
var G__15551 = (j + 1);
j = G__15551;
continue;
}
}
} else
{{
var G__15552 = (j + 1);
j = G__15552;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$core$IFn$_invoke$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$core$IFn$_invoke$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorStr = "cljs.core/PersistentHashMap";
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashMap((function (){var obj15555 = {};return obj15555;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_imap.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if((k == null))
{if((self__.has_nil_QMARK_) && ((v === self__.nil_val)))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + 1)),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + 1):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return !((self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__15556 = null;
var G__15556__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15556__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15556 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15556__2.call(this,self__,k);
case 3:
return G__15556__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15556;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (self__,args15553){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15553)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var init__$1 = ((self__.has_nil_QMARK_)?f.call(null,init,null,self__.nil_val):init);if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return init__$1;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll__$1,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > 0))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);if(self__.has_nil_QMARK_)
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
} else
{return s;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map.call(null,coll__$1,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,self__.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - 1),self__.root,false,null,null));
} else
{return coll__$1;
}
} else
{if((self__.root == null))
{return coll__$1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var new_root = self__.root.inode_without(0,cljs.core.hash.call(null,k),k);if((new_root === self__.root))
{return coll__$1;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - 1),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.__GT_PersistentHashMap = (function __GT_PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash){return (new cljs.core.PersistentHashMap(meta,cnt,root,has_nil_QMARK_,nil_val,__hash));
});
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){var len = ks.length;var i = 0;var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{{
var G__15557 = (i + 1);
var G__15558 = cljs.core._assoc_BANG_.call(null,out,(ks[i]),(vs[i]));
i = G__15557;
out = G__15558;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorStr = "cljs.core/TransientHashMap";
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return tcoll__$1.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){var self__ = this;
var tcoll = this;if(self__.edit)
{if((function (){var G__15559 = o;if(G__15559)
{var bit__3917__auto__ = (G__15559.cljs$lang$protocol_mask$partition0$ & 2048);if((bit__3917__auto__) || (G__15559.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__15559.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__15559);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,G__15559);
}
})())
{return tcoll.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es = cljs.core.seq.call(null,o);var tcoll__$1 = tcoll;while(true){
var temp__4090__auto__ = cljs.core.first.call(null,es);if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;{
var G__15560 = cljs.core.next.call(null,es);
var G__15561 = tcoll__$1.assoc_BANG_(cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__15560;
tcoll__$1 = G__15561;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + 1);
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + 1);
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){var self__ = this;
var tcoll = this;if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - 1);
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new cljs.core.Box(false));var node = self__.root.inode_without_BANG_(self__.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK_);if((node === self__.root))
{} else
{self__.root = node;
}
if(cljs.core.truth_((removed_leaf_QMARK_[0])))
{self__.count = (self__.count - 1);
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){var self__ = this;
var tcoll = this;if(self__.edit)
{self__.edit = null;
return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.__GT_TransientHashMap = (function __GT_TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val){return (new cljs.core.TransientHashMap(edit,root,count,has_nil_QMARK_,nil_val));
});
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){var t = node;var stack__$1 = stack;while(true){
if(!((t == null)))
{{
var G__15562 = ((ascending_QMARK_)?t.left:t.right);
var G__15563 = cljs.core.conj.call(null,stack__$1,t);
t = G__15562;
stack__$1 = G__15563;
continue;
}
} else
{return stack__$1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr = "cljs.core/PersistentTreeMapSeq";
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll__$1)) + 1);
} else
{return self__.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.peek.call(null,self__.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var t = cljs.core.first.call(null,self__.stack);var next_stack = cljs.core.tree_map_seq_push.call(null,((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next.call(null,self__.stack),self__.ascending_QMARK_);if(!((next_stack == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){if((ins instanceof cljs.core.RedNode))
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){if((ins instanceof cljs.core.RedNode))
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if((right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){if((del instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if((left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init):init);if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{var init__$2 = f.call(null,init__$1,node.key,node.val);if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__$2):init__$2);if(cljs.core.reduced_QMARK_.call(null,init__$3))
{return cljs.core.deref.call(null,init__$3);
} else
{return init__$3;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorStr = "cljs.core/BlackNode";
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.call(null,node__$1,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.call(null,node__$1,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__15565 = null;
var G__15565__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15565__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15565 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15565__2.call(this,self__,k);
case 3:
return G__15565__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15565;
})()
;
cljs.core.BlackNode.prototype.apply = (function (self__,args15564){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15564)));
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return ins.balance_right(node);
});
cljs.core.BlackNode.prototype.redden = (function (){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return cljs.core.balance_right_del.call(null,self__.key,self__.val,self__.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce.call(null,node,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return cljs.core.balance_left_del.call(null,self__.key,self__.val,del,self__.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return ins.balance_left(node);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
cljs.core.BlackNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){var self__ = this;
var node = this;return node;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.call(null,node__$1,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.call(null,node__$1,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.__GT_BlackNode = (function __GT_BlackNode(key,val,left,right,__hash){return (new cljs.core.BlackNode(key,val,left,right,__hash));
});

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorStr = "cljs.core/RedNode";
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.call(null,node__$1,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.call(null,node__$1,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__15567 = null;
var G__15567__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15567__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15567 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15567__2.call(this,self__,k);
case 3:
return G__15567__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15567;
})()
;
cljs.core.RedNode.prototype.apply = (function (self__,args15566){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15566)));
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var node = this;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val,o], null);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){var self__ = this;
var node = this;throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce.call(null,node,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){var self__ = this;
var node = this;return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){var self__ = this;
var node = this;if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.balance_right = (function (parent){var self__ = this;
var node = this;if((self__.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if((self__.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){var self__ = this;
var node = this;return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.call(null,node__$1,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.call(null,node__$1,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key], null);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){var self__ = this;
var node__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null).cljs$core$IVector$_assoc_n$arity$3(null,n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){var self__ = this;
var node__$1 = this;if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){var self__ = this;
var node__$1 = this;if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core.PersistentVector.EMPTY;
});
cljs.core.__GT_RedNode = (function __GT_RedNode(key,val,left,right,__hash){return (new cljs.core.RedNode(key,val,left,right,__hash));
});
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c = comp.call(null,k,tree.key);if((c === 0))
{(found[0] = tree);
return null;
} else
{if((c < 0))
{var ins = tree_map_add.call(null,comp,tree.left,k,v,found);if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var ins = tree_map_add.call(null,comp,tree.right,k,v,found);if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if((left instanceof cljs.core.RedNode))
{if((right instanceof cljs.core.RedNode))
{var app = tree_map_append.call(null,left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if((right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var app = tree_map_append.call(null,left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){if(!((tree == null)))
{var c = comp.call(null,k,tree.key);if((c === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c < 0))
{var del = tree_map_remove.call(null,comp,tree.left,k,found);if((!((del == null))) || (!(((found[0]) == null))))
{if((tree.left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var del = tree_map_remove.call(null,comp,tree.right,k,found);if((!((del == null))) || (!(((found[0]) == null))))
{if((tree.right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){var tk = tree.key;var c = comp.call(null,k,tk);if((c === 0))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < 0))
{return tree.replace(tk,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return tree.replace(tk,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorStr = "cljs.core/PersistentTreeMap";
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_imap.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var n = coll__$1.entry_at(k);if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_add.call(null,self__.comp,self__.tree,k,v,found);if((t == null))
{var found_node = cljs.core.nth.call(null,found,0);if(cljs.core._EQ_.call(null,v,found_node.val))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace.call(null,self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + 1),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((coll__$1.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__15569 = null;
var G__15569__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15569__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15569 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15569__2.call(this,self__,k);
case 3:
return G__15569__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15569;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args15568){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15568)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;if(!((self__.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,self__.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_.call(null,entry))
{return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll__$1,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){var self__ = this;
var coll = this;var t = self__.tree;while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);if((c === 0))
{return t;
} else
{if((c < 0))
{{
var G__15570 = t.left;
t = G__15570;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{{
var G__15571 = t.right;
t = G__15571;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > 0))
{var stack = null;var t = self__.tree;while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);if((c === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack,t),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < 0))
{{
var G__15572 = cljs.core.conj.call(null,stack,t);
var G__15573 = t.left;
stack = G__15572;
t = G__15573;
continue;
}
} else
{{
var G__15574 = stack;
var G__15575 = t.right;
stack = G__15574;
t = G__15575;
continue;
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((c > 0))
{{
var G__15576 = cljs.core.conj.call(null,stack,t);
var G__15577 = t.right;
stack = G__15576;
t = G__15577;
continue;
}
} else
{{
var G__15578 = stack;
var G__15579 = t.left;
stack = G__15578;
t = G__15579;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack == null))
{return null;
} else
{return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,-1,null));
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map.call(null,coll__$1,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_remove.call(null,self__.comp,self__.tree,k,found);if((t == null))
{if((cljs.core.nth.call(null,found,0) == null))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,null,0,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - 1),self__.meta,null));
}
});
cljs.core.__GT_PersistentTreeMap = (function __GT_PersistentTreeMap(comp,tree,cnt,meta,__hash){return (new cljs.core.PersistentTreeMap(comp,tree,cnt,meta,__hash));
});
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);while(true){
if(in$)
{{
var G__15580 = cljs.core.nnext.call(null,in$);
var G__15581 = cljs.core.assoc_BANG_.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__15580;
out = G__15581;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__15582){
var keyvals = cljs.core.seq(arglist__15582);
return hash_map__delegate(keyvals);
});
hash_map.cljs$core$IFn$_invoke$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__15583){
var keyvals = cljs.core.seq(arglist__15583);
return array_map__delegate(keyvals);
});
array_map.cljs$core$IFn$_invoke$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){var ks = [];var obj = (function (){var obj15587 = {};return obj15587;
})();var kvs = cljs.core.seq.call(null,keyvals);while(true){
if(kvs)
{ks.push(cljs.core.first.call(null,kvs));
(obj[cljs.core.first.call(null,kvs)] = cljs.core.second.call(null,kvs));
{
var G__15588 = cljs.core.nnext.call(null,kvs);
kvs = G__15588;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__15589){
var keyvals = cljs.core.seq(arglist__15589);
return obj_map__delegate(keyvals);
});
obj_map.cljs$core$IFn$_invoke$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = cljs.core.PersistentTreeMap.EMPTY;while(true){
if(in$)
{{
var G__15590 = cljs.core.nnext.call(null,in$);
var G__15591 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__15590;
out = G__15591;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_map__delegate.call(this,keyvals);};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__15592){
var keyvals = cljs.core.seq(arglist__15592);
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$core$IFn$_invoke$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq.call(null,keyvals);var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator.call(null,comparator),null,0,null,0));while(true){
if(in$)
{{
var G__15593 = cljs.core.nnext.call(null,in$);
var G__15594 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__15593;
out = G__15594;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;if (arguments.length > 1) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_map_by__delegate.call(this,comparator,keyvals);};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__15595){
var comparator = cljs.core.first(arglist__15595);
var keyvals = cljs.core.rest(arglist__15595);
return sorted_map_by__delegate(comparator,keyvals);
});
sorted_map_by.cljs$core$IFn$_invoke$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;

/**
* @constructor
*/
cljs.core.KeySeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.KeySeq.cljs$lang$type = true;
cljs.core.KeySeq.cljs$lang$ctorStr = "cljs.core/KeySeq";
cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/KeySeq");
});
cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_coll.call(null,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15596 = self__.mseq;if(G__15596)
{var bit__3917__auto__ = (G__15596.cljs$lang$protocol_mask$partition0$ & 128);if((bit__3917__auto__) || (G__15596.cljs$core$INext$))
{return true;
} else
{if((!G__15596.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__15596);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__15596);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.KeySeq(nseq,self__._meta));
}
});
cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.KeySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = cljs.core._first.call(null,self__.mseq);return cljs.core._key.call(null,me);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15597 = self__.mseq;if(G__15597)
{var bit__3917__auto__ = (G__15597.cljs$lang$protocol_mask$partition0$ & 128);if((bit__3917__auto__) || (G__15597.cljs$core$INext$))
{return true;
} else
{if((!G__15597.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__15597);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__15597);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));if(!((nseq == null)))
{return (new cljs.core.KeySeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.KeySeq(self__.mseq,new_meta));
});
cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta);
});
cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){return (new cljs.core.KeySeq(mseq,_meta));
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){var temp__4092__auto__ = cljs.core.seq.call(null,hash_map);if(temp__4092__auto__)
{var mseq = temp__4092__auto__;return (new cljs.core.KeySeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){return cljs.core._key.call(null,map_entry);
});

/**
* @constructor
*/
cljs.core.ValSeq = (function (mseq,_meta){
this.mseq = mseq;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32374988;
})
cljs.core.ValSeq.cljs$lang$type = true;
cljs.core.ValSeq.cljs$lang$ctorStr = "cljs.core/ValSeq";
cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/ValSeq");
});
cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_coll.call(null,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15598 = self__.mseq;if(G__15598)
{var bit__3917__auto__ = (G__15598.cljs$lang$protocol_mask$partition0$ & 128);if((bit__3917__auto__) || (G__15598.cljs$core$INext$))
{return true;
} else
{if((!G__15598.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__15598);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__15598);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.ValSeq(nseq,self__._meta));
}
});
cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.ValSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = cljs.core._first.call(null,self__.mseq);return cljs.core._val.call(null,me);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__15599 = self__.mseq;if(G__15599)
{var bit__3917__auto__ = (G__15599.cljs$lang$protocol_mask$partition0$ & 128);if((bit__3917__auto__) || (G__15599.cljs$core$INext$))
{return true;
} else
{if((!G__15599.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__15599);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,G__15599);
}
})())?cljs.core._next.call(null,self__.mseq):cljs.core.next.call(null,self__.mseq));if(!((nseq == null)))
{return (new cljs.core.ValSeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.ValSeq(self__.mseq,new_meta));
});
cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__._meta);
});
cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){return (new cljs.core.ValSeq(mseq,_meta));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){var temp__4092__auto__ = cljs.core.seq.call(null,hash_map);if(temp__4092__auto__)
{var mseq = temp__4092__auto__;return (new cljs.core.ValSeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__15600_SHARP_,p2__15601_SHARP_){return cljs.core.conj.call(null,(function (){var or__3291__auto__ = p1__15600_SHARP_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__15601_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge__delegate.call(this,maps);};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__15602){
var maps = cljs.core.seq(arglist__15602);
return merge__delegate(maps);
});
merge.cljs$core$IFn$_invoke$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry = (function (m,e){var k = cljs.core.first.call(null,e);var v = cljs.core.second.call(null,e);if(cljs.core.contains_QMARK_.call(null,m,k))
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else
{return cljs.core.assoc.call(null,m,k,v);
}
});var merge2 = ((function (merge_entry){
return (function (m1,m2){return cljs.core.reduce.call(null,merge_entry,(function (){var or__3291__auto__ = m1;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;return cljs.core.reduce.call(null,merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__15603){
var f = cljs.core.first(arglist__15603);
var maps = cljs.core.rest(arglist__15603);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){var ret = cljs.core.PersistentArrayMap.EMPTY;var keys = cljs.core.seq.call(null,keyseq);while(true){
if(keys)
{var key = cljs.core.first.call(null,keys);var entry = cljs.core.get.call(null,map,key,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",4155500789));{
var G__15604 = ((cljs.core.not_EQ_.call(null,entry,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",4155500789)))?cljs.core.assoc.call(null,ret,key,entry):ret);
var G__15605 = cljs.core.next.call(null,keys);
ret = G__15604;
keys = G__15605;
continue;
}
} else
{return ret;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorStr = "cljs.core/PersistentHashSet";
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashSet(cljs.core._as_transient.call(null,self__.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_iset.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core._contains_key_QMARK_.call(null,self__.hash_map,v))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__15608 = null;
var G__15608__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15608__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15608 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15608__2.call(this,self__,k);
case 3:
return G__15608__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15608;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (self__,args15607){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15607)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.call(null,self__.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys.call(null,self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc.call(null,self__.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._count.call(null,self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_.call(null,other)) && ((cljs.core.count.call(null,coll__$1) === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,(function (p1__15606_SHARP_){return cljs.core.contains_QMARK_.call(null,coll__$1,p1__15606_SHARP_);
}),other));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,self__.meta);
});
cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,0));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){var len = items.length;if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr = ((no_clone)?items:cljs.core.aclone.call(null,items));var i = 0;var out = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__15609 = (i + 1);
var G__15610 = cljs.core._assoc_BANG_.call(null,out,(items[i]),null);
i = G__15609;
out = G__15610;
continue;
}
} else
{return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_.call(null,out),null));
}
break;
}
} else
{var i = 0;var out = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < len))
{{
var G__15611 = (i + 2);
var G__15612 = cljs.core._conj_BANG_.call(null,out,(items[i]));
i = G__15611;
out = G__15612;
continue;
}
} else
{return cljs.core._persistent_BANG_.call(null,out);
}
break;
}
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorStr = "cljs.core/TransientHashSet";
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__15614 = null;
var G__15614__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__15614__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__15614 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15614__2.call(this,self__,k);
case 3:
return G__15614__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15614;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (self__,args15613){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15613)));
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var tcoll = this;if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var tcoll = this;if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.call(null,tcoll__$1,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){var self__ = this;
var tcoll__$1 = this;if((cljs.core._lookup.call(null,self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return cljs.core.count.call(null,self__.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.dissoc_BANG_.call(null,self__.transient_map,v);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.assoc_BANG_.call(null,self__.transient_map,o,null);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,self__.transient_map),null));
});
cljs.core.__GT_TransientHashSet = (function __GT_TransientHashSet(transient_map){return (new cljs.core.TransientHashSet(transient_map));
});

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorStr = "cljs.core/PersistentTreeSet";
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_iset.call(null,coll__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;var n = self__.tree_map.entry_at(v);if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__15617 = null;
var G__15617__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15617__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15617 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15617__2.call(this,self__,k);
case 3:
return G__15617__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15617;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args15616){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15616)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.call(null,self__.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core.count.call(null,self__.tree_map) > 0))
{return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,self__.tree_map));
} else
{return null;
}
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,self__.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,self__.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._comparator.call(null,self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys.call(null,self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.call(null,self__.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.count.call(null,self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_.call(null,other)) && ((cljs.core.count.call(null,coll__$1) === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,(function (p1__15615_SHARP_){return cljs.core.contains_QMARK_.call(null,coll__$1,p1__15615_SHARP_);
}),other));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,0));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){var arr = iseq.arr;var ret = (function (){var a__4108__auto__ = arr;var i = 0;var res = cljs.core._as_transient.call(null,cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < a__4108__auto__.length))
{{
var G__15618 = (i + 1);
var G__15619 = cljs.core._conj_BANG_.call(null,res,(arr[i]));
i = G__15618;
res = G__15619;
continue;
}
} else
{return res;
}
break;
}
})();return cljs.core._persistent_BANG_.call(null,ret);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){var in$ = cljs.core.seq.call(null,coll);if((in$ == null))
{return cljs.core.PersistentHashSet.EMPTY;
} else
{if((in$ instanceof cljs.core.IndexedSeq))
{return cljs.core.set_from_indexed_seq.call(null,in$);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var in$__$1 = in$;var out = cljs.core._as_transient.call(null,cljs.core.PersistentHashSet.EMPTY);while(true){
if(!((in$__$1 == null)))
{{
var G__15620 = cljs.core._next.call(null,in$__$1);
var G__15621 = cljs.core._conj_BANG_.call(null,out,cljs.core._first.call(null,in$__$1));
in$__$1 = G__15620;
out = G__15621;
continue;
}
} else
{return cljs.core._persistent_BANG_.call(null,out);
}
break;
}
} else
{return null;
}
}
}
});
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__15622__delegate = function (keys){return cljs.core.set.call(null,keys);
};
var G__15622 = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15622__delegate.call(this,keys);};
G__15622.cljs$lang$maxFixedArity = 0;
G__15622.cljs$lang$applyTo = (function (arglist__15623){
var keys = cljs.core.seq(arglist__15623);
return G__15622__delegate(keys);
});
G__15622.cljs$core$IFn$_invoke$arity$variadic = G__15622__delegate;
return G__15622;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$core$IFn$_invoke$arity$0 = hash_set__0;
hash_set.cljs$core$IFn$_invoke$arity$variadic = hash_set__1.cljs$core$IFn$_invoke$arity$variadic;
return hash_set;
})()
;
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__15624){
var keys = cljs.core.seq(arglist__15624);
return sorted_set__delegate(keys);
});
sorted_set.cljs$core$IFn$_invoke$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__15625){
var comparator = cljs.core.first(arglist__15625);
var keys = cljs.core.rest(arglist__15625);
return sorted_set_by__delegate(comparator,keys);
});
sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){if(cljs.core.vector_QMARK_.call(null,coll))
{var n = cljs.core.count.call(null,coll);return cljs.core.reduce.call(null,(function (v,i){var temp__4090__auto__ = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__15626_SHARP_){var temp__4090__auto__ = cljs.core.find.call(null,smap,p1__15626_SHARP_);if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;return cljs.core.second.call(null,e);
} else
{return p1__15626_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__15633,seen__$1){while(true){
var vec__15634 = p__15633;var f = cljs.core.nth.call(null,vec__15634,0,null);var xs__$1 = vec__15634;var temp__4092__auto__ = cljs.core.seq.call(null,xs__$1);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.contains_QMARK_.call(null,seen__$1,f))
{{
var G__15635 = cljs.core.rest.call(null,s);
var G__15636 = seen__$1;
p__15633 = G__15635;
seen__$1 = G__15636;
continue;
}
} else
{return cljs.core.cons.call(null,f,step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){var ret = cljs.core.PersistentVector.EMPTY;var s__$1 = s;while(true){
if(cljs.core.next.call(null,s__$1))
{{
var G__15637 = cljs.core.conj.call(null,ret,cljs.core.first.call(null,s__$1));
var G__15638 = cljs.core.next.call(null,s__$1);
ret = G__15637;
s__$1 = G__15638;
continue;
}
} else
{return cljs.core.seq.call(null,ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){if((function (){var G__15640 = x;if(G__15640)
{var bit__3910__auto__ = (G__15640.cljs$lang$protocol_mask$partition1$ & 4096);if((bit__3910__auto__) || (G__15640.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._name.call(null,x);
} else
{if(typeof x === 'string')
{return x;
} else
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){var map = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);var ks = cljs.core.seq.call(null,keys);var vs = cljs.core.seq.call(null,vals);while(true){
if((ks) && (vs))
{{
var G__15641 = cljs.core.assoc_BANG_.call(null,map,cljs.core.first.call(null,ks),cljs.core.first.call(null,vs));
var G__15642 = cljs.core.next.call(null,ks);
var G__15643 = cljs.core.next.call(null,vs);
map = G__15641;
ks = G__15642;
vs = G__15643;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,map);
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){return x;
});
var max_key__3 = (function (k,x,y){if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__15646__delegate = function (k,x,y,more){return cljs.core.reduce.call(null,(function (p1__15644_SHARP_,p2__15645_SHARP_){return max_key.call(null,k,p1__15644_SHARP_,p2__15645_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__15646 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15646__delegate.call(this,k,x,y,more);};
G__15646.cljs$lang$maxFixedArity = 3;
G__15646.cljs$lang$applyTo = (function (arglist__15647){
var k = cljs.core.first(arglist__15647);
arglist__15647 = cljs.core.next(arglist__15647);
var x = cljs.core.first(arglist__15647);
arglist__15647 = cljs.core.next(arglist__15647);
var y = cljs.core.first(arglist__15647);
var more = cljs.core.rest(arglist__15647);
return G__15646__delegate(k,x,y,more);
});
G__15646.cljs$core$IFn$_invoke$arity$variadic = G__15646__delegate;
return G__15646;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$core$IFn$_invoke$arity$2 = max_key__2;
max_key.cljs$core$IFn$_invoke$arity$3 = max_key__3;
max_key.cljs$core$IFn$_invoke$arity$variadic = max_key__4.cljs$core$IFn$_invoke$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){return x;
});
var min_key__3 = (function (k,x,y){if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__15650__delegate = function (k,x,y,more){return cljs.core.reduce.call(null,(function (p1__15648_SHARP_,p2__15649_SHARP_){return min_key.call(null,k,p1__15648_SHARP_,p2__15649_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__15650 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15650__delegate.call(this,k,x,y,more);};
G__15650.cljs$lang$maxFixedArity = 3;
G__15650.cljs$lang$applyTo = (function (arglist__15651){
var k = cljs.core.first(arglist__15651);
arglist__15651 = cljs.core.next(arglist__15651);
var x = cljs.core.first(arglist__15651);
arglist__15651 = cljs.core.next(arglist__15651);
var y = cljs.core.first(arglist__15651);
var more = cljs.core.rest(arglist__15651);
return G__15650__delegate(k,x,y,more);
});
G__15650.cljs$core$IFn$_invoke$arity$variadic = G__15650__delegate;
return G__15650;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$core$IFn$_invoke$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$core$IFn$_invoke$arity$2 = min_key__2;
min_key.cljs$core$IFn$_invoke$arity$3 = min_key__3;
min_key.cljs$core$IFn$_invoke$arity$variadic = min_key__4.cljs$core$IFn$_invoke$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;return cljs.core.cons.call(null,cljs.core.take.call(null,n,s),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s)));
} else
{return null;
}
}),null,null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$core$IFn$_invoke$arity$2 = partition_all__2;
partition_all.cljs$core$IFn$_invoke$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_while.call(null,pred,cljs.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){return (function (e){var comp = cljs.core._comparator.call(null,sc);return test.call(null,comp.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn.call(null,sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test)))
{var temp__4092__auto__ = cljs.core._sorted_seq_from.call(null,sc,key,true);if(cljs.core.truth_(temp__4092__auto__))
{var vec__15654 = temp__4092__auto__;var e = cljs.core.nth.call(null,vec__15654,0,null);var s = vec__15654;if(cljs.core.truth_(include.call(null,e)))
{return s;
} else
{return cljs.core.next.call(null,s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4092__auto__ = cljs.core._sorted_seq_from.call(null,sc,start_key,true);if(cljs.core.truth_(temp__4092__auto__))
{var vec__15655 = temp__4092__auto__;var e = cljs.core.nth.call(null,vec__15655,0,null);var s = vec__15655;return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e))?s:cljs.core.next.call(null,s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$core$IFn$_invoke$arity$3 = subseq__3;
subseq.cljs$core$IFn$_invoke$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn.call(null,sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test)))
{var temp__4092__auto__ = cljs.core._sorted_seq_from.call(null,sc,key,false);if(cljs.core.truth_(temp__4092__auto__))
{var vec__15658 = temp__4092__auto__;var e = cljs.core.nth.call(null,vec__15658,0,null);var s = vec__15658;if(cljs.core.truth_(include.call(null,e)))
{return s;
} else
{return cljs.core.next.call(null,s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4092__auto__ = cljs.core._sorted_seq_from.call(null,sc,end_key,false);if(cljs.core.truth_(temp__4092__auto__))
{var vec__15659 = temp__4092__auto__;var e = cljs.core.nth.call(null,vec__15659,0,null);var s = vec__15659;return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e))?s:cljs.core.next.call(null,s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$core$IFn$_invoke$arity$3 = rsubseq__3;
rsubseq.cljs$core$IFn$_invoke$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorStr = "cljs.core/Range";
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_coll.call(null,rng__$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > 0))
{if(((self__.start + self__.step) < self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){var self__ = this;
var rng__$1 = this;return cljs.core.cons.call(null,o,rng__$1);
});
cljs.core.Range.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.call(null,rng__$1,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.call(null,rng__$1,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((self__.step > 0))
{if((self__.start < self__.end))
{return rng__$1;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng__$1;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(cljs.core.not.call(null,cljs.core._seq.call(null,rng__$1)))
{return 0;
} else
{return Math.ceil(((self__.end - self__.start) / self__.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return self__.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(!((cljs.core._seq.call(null,rng__$1) == null)))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){var self__ = this;
var rng__$1 = this;return cljs.core.equiv_sequential.call(null,rng__$1,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){var self__ = this;
var rng__$1 = this;return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return self__.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count.call(null,rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === 0)))
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count.call(null,rng__$1)))
{return (self__.start + (n * self__.step));
} else
{if(((self__.start > self__.end)) && ((self__.step === 0)))
{return self__.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_Range = (function __GT_Range(meta,start,end,step,__hash){return (new cljs.core.Range(meta,start,end,step,__hash));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){return range.call(null,0,end,1);
});
var range__2 = (function (start,end){return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$core$IFn$_invoke$arity$0 = range__0;
range.cljs$core$IFn$_invoke$arity$1 = range__1;
range.cljs$core$IFn$_invoke$arity$2 = range__2;
range.cljs$core$IFn$_invoke$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_nth.call(null,n,cljs.core.drop.call(null,n,s)));
} else
{return null;
}
}),null,null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;var fst = cljs.core.first.call(null,s);var fv = f.call(null,fst);var run = cljs.core.cons.call(null,fst,cljs.core.take_while.call(null,((function (fst,fv){
return (function (p1__15660_SHARP_){return cljs.core._EQ_.call(null,fv,f.call(null,p1__15660_SHARP_));
});})(fst,fv))
,cljs.core.next.call(null,s)));return cljs.core.cons.call(null,run,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run),s))));
} else
{return null;
}
}),null,null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4090__auto__ = cljs.core.seq.call(null,coll);if(temp__4090__auto__)
{var s = temp__4090__auto__;return reductions.call(null,f,cljs.core.first.call(null,s),cljs.core.rest.call(null,s));
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,f.call(null));
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq.call(null,coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s)),cljs.core.rest.call(null,s));
} else
{return null;
}
}),null,null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$core$IFn$_invoke$arity$2 = reductions__2;
reductions.cljs$core$IFn$_invoke$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){return (function() {
var G__15671 = null;
var G__15671__0 = (function (){return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null)],null));
});
var G__15671__1 = (function (x){return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x)],null));
});
var G__15671__2 = (function (x,y){return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y)],null));
});
var G__15671__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z)],null));
});
var G__15671__4 = (function() { 
var G__15672__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args)],null));
};
var G__15672 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15672__delegate.call(this,x,y,z,args);};
G__15672.cljs$lang$maxFixedArity = 3;
G__15672.cljs$lang$applyTo = (function (arglist__15673){
var x = cljs.core.first(arglist__15673);
arglist__15673 = cljs.core.next(arglist__15673);
var y = cljs.core.first(arglist__15673);
arglist__15673 = cljs.core.next(arglist__15673);
var z = cljs.core.first(arglist__15673);
var args = cljs.core.rest(arglist__15673);
return G__15672__delegate(x,y,z,args);
});
G__15672.cljs$core$IFn$_invoke$arity$variadic = G__15672__delegate;
return G__15672;
})()
;
G__15671 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15671__0.call(this);
case 1:
return G__15671__1.call(this,x);
case 2:
return G__15671__2.call(this,x,y);
case 3:
return G__15671__3.call(this,x,y,z);
default:
return G__15671__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15671.cljs$lang$maxFixedArity = 3;
G__15671.cljs$lang$applyTo = G__15671__4.cljs$lang$applyTo;
return G__15671;
})()
});
var juxt__2 = (function (f,g){return (function() {
var G__15674 = null;
var G__15674__0 = (function (){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null),g.call(null)],null));
});
var G__15674__1 = (function (x){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x),g.call(null,x)],null));
});
var G__15674__2 = (function (x,y){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y),g.call(null,x,y)],null));
});
var G__15674__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z),g.call(null,x,y,z)],null));
});
var G__15674__4 = (function() { 
var G__15675__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args)],null));
};
var G__15675 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15675__delegate.call(this,x,y,z,args);};
G__15675.cljs$lang$maxFixedArity = 3;
G__15675.cljs$lang$applyTo = (function (arglist__15676){
var x = cljs.core.first(arglist__15676);
arglist__15676 = cljs.core.next(arglist__15676);
var y = cljs.core.first(arglist__15676);
arglist__15676 = cljs.core.next(arglist__15676);
var z = cljs.core.first(arglist__15676);
var args = cljs.core.rest(arglist__15676);
return G__15675__delegate(x,y,z,args);
});
G__15675.cljs$core$IFn$_invoke$arity$variadic = G__15675__delegate;
return G__15675;
})()
;
G__15674 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15674__0.call(this);
case 1:
return G__15674__1.call(this,x);
case 2:
return G__15674__2.call(this,x,y);
case 3:
return G__15674__3.call(this,x,y,z);
default:
return G__15674__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15674.cljs$lang$maxFixedArity = 3;
G__15674.cljs$lang$applyTo = G__15674__4.cljs$lang$applyTo;
return G__15674;
})()
});
var juxt__3 = (function (f,g,h){return (function() {
var G__15677 = null;
var G__15677__0 = (function (){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null),g.call(null),h.call(null)],null));
});
var G__15677__1 = (function (x){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x),g.call(null,x),h.call(null,x)],null));
});
var G__15677__2 = (function (x,y){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y),g.call(null,x,y),h.call(null,x,y)],null));
});
var G__15677__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z)],null));
});
var G__15677__4 = (function() { 
var G__15678__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args)],null));
};
var G__15678 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15678__delegate.call(this,x,y,z,args);};
G__15678.cljs$lang$maxFixedArity = 3;
G__15678.cljs$lang$applyTo = (function (arglist__15679){
var x = cljs.core.first(arglist__15679);
arglist__15679 = cljs.core.next(arglist__15679);
var y = cljs.core.first(arglist__15679);
arglist__15679 = cljs.core.next(arglist__15679);
var z = cljs.core.first(arglist__15679);
var args = cljs.core.rest(arglist__15679);
return G__15678__delegate(x,y,z,args);
});
G__15678.cljs$core$IFn$_invoke$arity$variadic = G__15678__delegate;
return G__15678;
})()
;
G__15677 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15677__0.call(this);
case 1:
return G__15677__1.call(this,x);
case 2:
return G__15677__2.call(this,x,y);
case 3:
return G__15677__3.call(this,x,y,z);
default:
return G__15677__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15677.cljs$lang$maxFixedArity = 3;
G__15677.cljs$lang$applyTo = G__15677__4.cljs$lang$applyTo;
return G__15677;
})()
});
var juxt__4 = (function() { 
var G__15680__delegate = function (f,g,h,fs){var fs__$1 = cljs.core.list_STAR_.call(null,f,g,h,fs);return (function() {
var G__15681 = null;
var G__15681__0 = (function (){return cljs.core.reduce.call(null,(function (p1__15661_SHARP_,p2__15662_SHARP_){return cljs.core.conj.call(null,p1__15661_SHARP_,p2__15662_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15681__1 = (function (x){return cljs.core.reduce.call(null,(function (p1__15663_SHARP_,p2__15664_SHARP_){return cljs.core.conj.call(null,p1__15663_SHARP_,p2__15664_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15681__2 = (function (x,y){return cljs.core.reduce.call(null,(function (p1__15665_SHARP_,p2__15666_SHARP_){return cljs.core.conj.call(null,p1__15665_SHARP_,p2__15666_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15681__3 = (function (x,y,z){return cljs.core.reduce.call(null,(function (p1__15667_SHARP_,p2__15668_SHARP_){return cljs.core.conj.call(null,p1__15667_SHARP_,p2__15668_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__15681__4 = (function() { 
var G__15682__delegate = function (x,y,z,args){return cljs.core.reduce.call(null,(function (p1__15669_SHARP_,p2__15670_SHARP_){return cljs.core.conj.call(null,p1__15669_SHARP_,cljs.core.apply.call(null,p2__15670_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__15682 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15682__delegate.call(this,x,y,z,args);};
G__15682.cljs$lang$maxFixedArity = 3;
G__15682.cljs$lang$applyTo = (function (arglist__15683){
var x = cljs.core.first(arglist__15683);
arglist__15683 = cljs.core.next(arglist__15683);
var y = cljs.core.first(arglist__15683);
arglist__15683 = cljs.core.next(arglist__15683);
var z = cljs.core.first(arglist__15683);
var args = cljs.core.rest(arglist__15683);
return G__15682__delegate(x,y,z,args);
});
G__15682.cljs$core$IFn$_invoke$arity$variadic = G__15682__delegate;
return G__15682;
})()
;
G__15681 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__15681__0.call(this);
case 1:
return G__15681__1.call(this,x);
case 2:
return G__15681__2.call(this,x,y);
case 3:
return G__15681__3.call(this,x,y,z);
default:
return G__15681__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15681.cljs$lang$maxFixedArity = 3;
G__15681.cljs$lang$applyTo = G__15681__4.cljs$lang$applyTo;
return G__15681;
})()
};
var G__15680 = function (f,g,h,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15680__delegate.call(this,f,g,h,fs);};
G__15680.cljs$lang$maxFixedArity = 3;
G__15680.cljs$lang$applyTo = (function (arglist__15684){
var f = cljs.core.first(arglist__15684);
arglist__15684 = cljs.core.next(arglist__15684);
var g = cljs.core.first(arglist__15684);
arglist__15684 = cljs.core.next(arglist__15684);
var h = cljs.core.first(arglist__15684);
var fs = cljs.core.rest(arglist__15684);
return G__15680__delegate(f,g,h,fs);
});
G__15680.cljs$core$IFn$_invoke$arity$variadic = G__15680__delegate;
return G__15680;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$core$IFn$_invoke$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$core$IFn$_invoke$arity$1 = juxt__1;
juxt.cljs$core$IFn$_invoke$arity$2 = juxt__2;
juxt.cljs$core$IFn$_invoke$arity$3 = juxt__3;
juxt.cljs$core$IFn$_invoke$arity$variadic = juxt__4.cljs$core$IFn$_invoke$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__15685 = cljs.core.next.call(null,coll);
coll = G__15685;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){while(true){
if((cljs.core.seq.call(null,coll)) && ((n > 0)))
{{
var G__15686 = (n - 1);
var G__15687 = cljs.core.next.call(null,coll);
n = G__15686;
coll = G__15687;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$core$IFn$_invoke$arity$1 = dorun__1;
dorun.cljs$core$IFn$_invoke$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$core$IFn$_invoke$arity$1 = doall__1;
doall.cljs$core$IFn$_invoke$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){return (o instanceof RegExp);
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){var matches = re.exec(s);if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches),s))
{if((cljs.core.count.call(null,matches) === 1))
{return cljs.core.first.call(null,matches);
} else
{return cljs.core.vec.call(null,matches);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){var matches = re.exec(s);if((matches == null))
{return null;
} else
{if((cljs.core.count.call(null,matches) === 1))
{return cljs.core.first.call(null,matches);
} else
{return cljs.core.vec.call(null,matches);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){var match_data = cljs.core.re_find.call(null,re,s);var match_idx = s.search(re);var match_str = ((cljs.core.coll_QMARK_.call(null,match_data))?cljs.core.first.call(null,match_data):match_data);var post_match = cljs.core.subs.call(null,s,(match_idx + cljs.core.count.call(null,match_str)));if(cljs.core.truth_(match_data))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,match_data,((cljs.core.seq.call(null,post_match))?re_seq.call(null,re,post_match):null));
}),null,null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){var vec__15689 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);var _ = cljs.core.nth.call(null,vec__15689,0,null);var flags = cljs.core.nth.call(null,vec__15689,1,null);var pattern = cljs.core.nth.call(null,vec__15689,2,null);return (new RegExp(pattern,flags));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var coll_15690__$1 = cljs.core.next.call(null,coll);var n_15691 = new cljs.core.Keyword(null,"print-length","print-length",3960797560).cljs$core$IFn$_invoke$arity$1(opts);while(true){
if((coll_15690__$1) && (((n_15691 == null)) || (!((n_15691 === 0)))))
{cljs.core._write.call(null,writer,sep);
print_one.call(null,cljs.core.first.call(null,coll_15690__$1),writer,opts);
{
var G__15692 = cljs.core.next.call(null,coll_15690__$1);
var G__15693 = (n_15691 - 1);
coll_15690__$1 = G__15692;
n_15691 = G__15693;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(new cljs.core.Keyword(null,"print-length","print-length",3960797560).cljs$core$IFn$_invoke$arity$1(opts)))
{cljs.core._write.call(null,writer,sep);
print_one.call(null,"...",writer,opts);
} else
{}
return cljs.core._write.call(null,writer,end);
});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){var seq__15698 = cljs.core.seq.call(null,ss);var chunk__15699 = null;var count__15700 = 0;var i__15701 = 0;while(true){
if((i__15701 < count__15700))
{var s = cljs.core._nth.call(null,chunk__15699,i__15701);cljs.core._write.call(null,writer,s);
{
var G__15702 = seq__15698;
var G__15703 = chunk__15699;
var G__15704 = count__15700;
var G__15705 = (i__15701 + 1);
seq__15698 = G__15702;
chunk__15699 = G__15703;
count__15700 = G__15704;
i__15701 = G__15705;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15698);if(temp__4092__auto__)
{var seq__15698__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15698__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__15698__$1);{
var G__15706 = cljs.core.chunk_rest.call(null,seq__15698__$1);
var G__15707 = c__4015__auto__;
var G__15708 = cljs.core.count.call(null,c__4015__auto__);
var G__15709 = 0;
seq__15698 = G__15706;
chunk__15699 = G__15707;
count__15700 = G__15708;
i__15701 = G__15709;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__15698__$1);cljs.core._write.call(null,writer,s);
{
var G__15710 = cljs.core.next.call(null,seq__15698__$1);
var G__15711 = null;
var G__15712 = 0;
var G__15713 = 0;
seq__15698 = G__15710;
chunk__15699 = G__15711;
count__15700 = G__15712;
i__15701 = G__15713;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;if (arguments.length > 1) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return write_all__delegate.call(this,writer,ss);};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__15714){
var writer = cljs.core.first(arglist__15714);
var ss = cljs.core.rest(arglist__15714);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){return null;
});
cljs.core.char_escapes = (function (){var obj15716 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj15716;
})();
cljs.core.quote_string = (function quote_string(s){return [cljs.core.str("\""),cljs.core.str(s.replace(RegExp("[\\\\\"\b\f\n\r\t]","g"),(function (match){return (cljs.core.char_escapes[match]);
}))),cljs.core.str("\"")].join('');
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){if((obj == null))
{return cljs.core._write.call(null,writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write.call(null,writer,"#<undefined>");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"meta","meta",1017252215));if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = (function (){var G__15722 = obj;if(G__15722)
{var bit__3917__auto__ = (G__15722.cljs$lang$protocol_mask$partition0$ & 131072);if((bit__3917__auto__) || (G__15722.cljs$core$IMeta$))
{return true;
} else
{if((!G__15722.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__15722);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__15722);
}
})();if(and__3279__auto____$1)
{return cljs.core.meta.call(null,obj);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((obj == null))
{return cljs.core._write.call(null,writer,"nil");
} else
{if(obj.cljs$lang$type)
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__15723 = obj;if(G__15723)
{var bit__3910__auto__ = (G__15723.cljs$lang$protocol_mask$partition0$ & 2147483648);if((bit__3910__auto__) || (G__15723.cljs$core$IPrintWithWriter$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if(((cljs.core.type.call(null,obj) === Boolean)) || (typeof obj === 'number'))
{return cljs.core._write.call(null,writer,[cljs.core.str(obj)].join(''));
} else
{if(obj instanceof Array)
{return cljs.core.pr_sequential_writer.call(null,writer,pr_writer,"#<Array [",", ","]>",opts,obj);
} else
{if(goog.isString(obj))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"readably","readably",4441712502).cljs$core$IFn$_invoke$arity$1(opts)))
{return cljs.core._write.call(null,writer,cljs.core.quote_string.call(null,obj));
} else
{return cljs.core._write.call(null,writer,obj);
}
} else
{if(cljs.core.fn_QMARK_.call(null,obj))
{return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(obj)].join(''),">");
} else
{if((obj instanceof Date))
{var normalize = (function (n,len){var ns = [cljs.core.str(n)].join('');while(true){
if((cljs.core.count.call(null,ns) < len))
{{
var G__15725 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__15725;
continue;
}
} else
{return ns;
}
break;
}
});return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(obj.getUTCFullYear())].join(''),"-",normalize.call(null,(obj.getUTCMonth() + 1),2),"-",normalize.call(null,obj.getUTCDate(),2),"T",normalize.call(null,obj.getUTCHours(),2),":",normalize.call(null,obj.getUTCMinutes(),2),":",normalize.call(null,obj.getUTCSeconds(),2),".",normalize.call(null,obj.getUTCMilliseconds(),3),"-","00:00\"");
} else
{if(cljs.core.regexp_QMARK_.call(null,obj))
{return cljs.core.write_all.call(null,writer,"#\"",obj.source,"\"");
} else
{if((function (){var G__15724 = obj;if(G__15724)
{var bit__3917__auto__ = (G__15724.cljs$lang$protocol_mask$partition0$ & 2147483648);if((bit__3917__auto__) || (G__15724.cljs$core$IPrintWithWriter$))
{return true;
} else
{if((!G__15724.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,G__15724);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,G__15724);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(obj)].join(''),">");
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
} else
{return null;
}
}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){cljs.core.pr_writer.call(null,cljs.core.first.call(null,objs),writer,opts);
var seq__15730 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));var chunk__15731 = null;var count__15732 = 0;var i__15733 = 0;while(true){
if((i__15733 < count__15732))
{var obj = cljs.core._nth.call(null,chunk__15731,i__15733);cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj,writer,opts);
{
var G__15734 = seq__15730;
var G__15735 = chunk__15731;
var G__15736 = count__15732;
var G__15737 = (i__15733 + 1);
seq__15730 = G__15734;
chunk__15731 = G__15735;
count__15732 = G__15736;
i__15733 = G__15737;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15730);if(temp__4092__auto__)
{var seq__15730__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15730__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__15730__$1);{
var G__15738 = cljs.core.chunk_rest.call(null,seq__15730__$1);
var G__15739 = c__4015__auto__;
var G__15740 = cljs.core.count.call(null,c__4015__auto__);
var G__15741 = 0;
seq__15730 = G__15738;
chunk__15731 = G__15739;
count__15732 = G__15740;
i__15733 = G__15741;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__15730__$1);cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj,writer,opts);
{
var G__15742 = cljs.core.next.call(null,seq__15730__$1);
var G__15743 = null;
var G__15744 = 0;
var G__15745 = 0;
seq__15730 = G__15742;
chunk__15731 = G__15743;
count__15732 = G__15744;
i__15733 = G__15745;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core.pr_seq_writer.call(null,objs,writer,opts);
cljs.core._flush.call(null,writer);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_.call(null,objs))
{return "";
} else
{return [cljs.core.str(cljs.core.pr_sb_with_opts.call(null,objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_.call(null,objs))
{return "\n";
} else
{var sb = cljs.core.pr_sb_with_opts.call(null,objs,opts);sb.append("\n");
return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){return cljs.core.string_print.call(null,cljs.core.pr_str_with_opts.call(null,objs,opts));
});
cljs.core.newline = (function newline(opts){cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",4338025857))))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__15746){
var objs = cljs.core.seq(arglist__15746);
return pr_str__delegate(objs);
});
pr_str.cljs$core$IFn$_invoke$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__15747){
var objs = cljs.core.seq(arglist__15747);
return prn_str__delegate(objs);
});
prn_str.cljs$core$IFn$_invoke$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__15748){
var objs = cljs.core.seq(arglist__15748);
return pr__delegate(objs);
});
pr.cljs$core$IFn$_invoke$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),false));
};
var cljs_core_print = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__15749){
var objs = cljs.core.seq(arglist__15749);
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$core$IFn$_invoke$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),false));
};
var print_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__15750){
var objs = cljs.core.seq(arglist__15750);
return print_str__delegate(objs);
});
print_str.cljs$core$IFn$_invoke$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),false));
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
} else
{return null;
}
};
var println = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__15751){
var objs = cljs.core.seq(arglist__15751);
return println__delegate(objs);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),false));
};
var println_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__15752){
var objs = cljs.core.seq(arglist__15752);
return println_str__delegate(objs);
});
println_str.cljs$core$IFn$_invoke$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
} else
{return null;
}
};
var prn = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__15753){
var objs = cljs.core.seq(arglist__15753);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;var pr_pair = (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;var pr_pair = (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll__$1));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;var pr_pair = (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core._write.call(null,writer,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;var pr_pair = (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.call(null,x__$1,y);
});
cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;
cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.call(null,x__$1,y);
});
cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;
cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols.call(null,x__$1,y);
});
cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;
cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols.call(null,x__$1,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorStr = "cljs.core/Atom";
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__15754 = cljs.core.seq.call(null,self__.watches);var chunk__15755 = null;var count__15756 = 0;var i__15757 = 0;while(true){
if((i__15757 < count__15756))
{var vec__15758 = cljs.core._nth.call(null,chunk__15755,i__15757);var key = cljs.core.nth.call(null,vec__15758,0,null);var f = cljs.core.nth.call(null,vec__15758,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__15760 = seq__15754;
var G__15761 = chunk__15755;
var G__15762 = count__15756;
var G__15763 = (i__15757 + 1);
seq__15754 = G__15760;
chunk__15755 = G__15761;
count__15756 = G__15762;
i__15757 = G__15763;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15754);if(temp__4092__auto__)
{var seq__15754__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15754__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__15754__$1);{
var G__15764 = cljs.core.chunk_rest.call(null,seq__15754__$1);
var G__15765 = c__4015__auto__;
var G__15766 = cljs.core.count.call(null,c__4015__auto__);
var G__15767 = 0;
seq__15754 = G__15764;
chunk__15755 = G__15765;
count__15756 = G__15766;
i__15757 = G__15767;
continue;
}
} else
{var vec__15759 = cljs.core.first.call(null,seq__15754__$1);var key = cljs.core.nth.call(null,vec__15759,0,null);var f = cljs.core.nth.call(null,vec__15759,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__15768 = cljs.core.next.call(null,seq__15754__$1);
var G__15769 = null;
var G__15770 = 0;
var G__15771 = 0;
seq__15754 = G__15768;
chunk__15755 = G__15769;
count__15756 = G__15770;
i__15757 = G__15771;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cljs.core.__GT_Atom = (function __GT_Atom(state,meta,validator,watches){return (new cljs.core.Atom(state,meta,validator,watches));
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__15775__delegate = function (x,p__15772){var map__15774 = p__15772;var map__15774__$1 = ((cljs.core.seq_QMARK_.call(null,map__15774))?cljs.core.apply.call(null,cljs.core.hash_map,map__15774):map__15774);var validator = cljs.core.get.call(null,map__15774__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__15774__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new cljs.core.Atom(x,meta,validator,null));
};
var G__15775 = function (x,var_args){
var p__15772 = null;if (arguments.length > 1) {
  p__15772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15775__delegate.call(this,x,p__15772);};
G__15775.cljs$lang$maxFixedArity = 1;
G__15775.cljs$lang$applyTo = (function (arglist__15776){
var x = cljs.core.first(arglist__15776);
var p__15772 = cljs.core.rest(arglist__15776);
return G__15775__delegate(x,p__15772);
});
G__15775.cljs$core$IFn$_invoke$arity$variadic = G__15775__delegate;
return G__15775;
})()
;
atom = function(x,var_args){
var p__15772 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){var temp__4092__auto___15777 = a.validator;if(cljs.core.truth_(temp__4092__auto___15777))
{var validate_15778 = temp__4092__auto___15777;if(cljs.core.truth_(validate_15778.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1233162959,null),new cljs.core.Symbol(null,"new-value","new-value",972165309,null))))].join('')));
}
} else
{}
var old_value_15779 = a.state;a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value_15779,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__15780__delegate = function (a,f,x,y,z,more){return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__15780 = function (a,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__15780__delegate.call(this,a,f,x,y,z,more);};
G__15780.cljs$lang$maxFixedArity = 5;
G__15780.cljs$lang$applyTo = (function (arglist__15781){
var a = cljs.core.first(arglist__15781);
arglist__15781 = cljs.core.next(arglist__15781);
var f = cljs.core.first(arglist__15781);
arglist__15781 = cljs.core.next(arglist__15781);
var x = cljs.core.first(arglist__15781);
arglist__15781 = cljs.core.next(arglist__15781);
var y = cljs.core.first(arglist__15781);
arglist__15781 = cljs.core.next(arglist__15781);
var z = cljs.core.first(arglist__15781);
var more = cljs.core.rest(arglist__15781);
return G__15780__delegate(a,f,x,y,z,more);
});
G__15780.cljs$core$IFn$_invoke$arity$variadic = G__15780__delegate;
return G__15780;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_BANG___2;
swap_BANG_.cljs$core$IFn$_invoke$arity$3 = swap_BANG___3;
swap_BANG_.cljs$core$IFn$_invoke$arity$4 = swap_BANG___4;
swap_BANG_.cljs$core$IFn$_invoke$arity$5 = swap_BANG___5;
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15782){
var iref = cljs.core.first(arglist__15782);
arglist__15782 = cljs.core.next(arglist__15782);
var f = cljs.core.first(arglist__15782);
var args = cljs.core.rest(arglist__15782);
return alter_meta_BANG___delegate(iref,f,args);
});
alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$core$IFn$_invoke$arity$0 = gensym__0;
gensym.cljs$core$IFn$_invoke$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorStr = "cljs.core/Delay";
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){var self__ = this;
var d__$1 = this;return new cljs.core.Keyword(null,"done","done",1016993524).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,self__.state,(function (p__15783){var map__15784 = p__15783;var map__15784__$1 = ((cljs.core.seq_QMARK_.call(null,map__15784))?cljs.core.apply.call(null,cljs.core.hash_map,map__15784):map__15784);var curr_state = map__15784__$1;var done = cljs.core.get.call(null,map__15784__$1,new cljs.core.Keyword(null,"done","done",1016993524));if(cljs.core.truth_(done))
{return curr_state;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),true,new cljs.core.Keyword(null,"value","value",1125876963),self__.f.call(null)], null);
}
})));
});
cljs.core.__GT_Delay = (function __GT_Delay(state,f){return (new cljs.core.Delay(state,f));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){return (x instanceof cljs.core.Delay);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){return cljs.core._realized_QMARK_.call(null,d);
});
cljs.core.IEncodeJS = (function (){var obj15786 = {};return obj15786;
})();
cljs.core._clj__GT_js = (function _clj__GT_js(x){if((function (){var and__3279__auto__ = x;if(and__3279__auto__)
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else
{return and__3279__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else
{var x__3894__auto__ = (((x == null))?null:x);return (function (){var or__3291__auto__ = (cljs.core._clj__GT_js[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._clj__GT_js["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});
cljs.core._key__GT_js = (function _key__GT_js(x){if((function (){var and__3279__auto__ = x;if(and__3279__auto__)
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else
{return and__3279__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else
{var x__3894__auto__ = (((x == null))?null:x);return (function (){var or__3291__auto__ = (cljs.core._key__GT_js[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._key__GT_js["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});
cljs.core.key__GT_js = (function key__GT_js(k){if((function (){var G__15788 = k;if(G__15788)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15788.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__15788.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__15788);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__15788);
}
})())
{return cljs.core._clj__GT_js.call(null,k);
} else
{if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)))
{return cljs.core.clj__GT_js.call(null,k);
} else
{return cljs.core.pr_str.call(null,k);
}
}
});
/**
* Recursively transforms ClojureScript values to JavaScript.
* sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
* Maps become Objects. Arbitrary keys are encoded to by key->js.
*/
cljs.core.clj__GT_js = (function clj__GT_js(x){if((x == null))
{return null;
} else
{if((function (){var G__15798 = x;if(G__15798)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15798.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__15798.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__15798);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,G__15798);
}
})())
{return cljs.core._clj__GT_js.call(null,x);
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name.call(null,x);
} else
{if((x instanceof cljs.core.Symbol))
{return [cljs.core.str(x)].join('');
} else
{if(cljs.core.map_QMARK_.call(null,x))
{var m = (function (){var obj15800 = {};return obj15800;
})();var seq__15801_15807 = cljs.core.seq.call(null,x);var chunk__15802_15808 = null;var count__15803_15809 = 0;var i__15804_15810 = 0;while(true){
if((i__15804_15810 < count__15803_15809))
{var vec__15805_15811 = cljs.core._nth.call(null,chunk__15802_15808,i__15804_15810);var k_15812 = cljs.core.nth.call(null,vec__15805_15811,0,null);var v_15813 = cljs.core.nth.call(null,vec__15805_15811,1,null);(m[cljs.core.key__GT_js.call(null,k_15812)] = clj__GT_js.call(null,v_15813));
{
var G__15814 = seq__15801_15807;
var G__15815 = chunk__15802_15808;
var G__15816 = count__15803_15809;
var G__15817 = (i__15804_15810 + 1);
seq__15801_15807 = G__15814;
chunk__15802_15808 = G__15815;
count__15803_15809 = G__15816;
i__15804_15810 = G__15817;
continue;
}
} else
{var temp__4092__auto___15818 = cljs.core.seq.call(null,seq__15801_15807);if(temp__4092__auto___15818)
{var seq__15801_15819__$1 = temp__4092__auto___15818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15801_15819__$1))
{var c__4015__auto___15820 = cljs.core.chunk_first.call(null,seq__15801_15819__$1);{
var G__15821 = cljs.core.chunk_rest.call(null,seq__15801_15819__$1);
var G__15822 = c__4015__auto___15820;
var G__15823 = cljs.core.count.call(null,c__4015__auto___15820);
var G__15824 = 0;
seq__15801_15807 = G__15821;
chunk__15802_15808 = G__15822;
count__15803_15809 = G__15823;
i__15804_15810 = G__15824;
continue;
}
} else
{var vec__15806_15825 = cljs.core.first.call(null,seq__15801_15819__$1);var k_15826 = cljs.core.nth.call(null,vec__15806_15825,0,null);var v_15827 = cljs.core.nth.call(null,vec__15806_15825,1,null);(m[cljs.core.key__GT_js.call(null,k_15826)] = clj__GT_js.call(null,v_15827));
{
var G__15828 = cljs.core.next.call(null,seq__15801_15819__$1);
var G__15829 = null;
var G__15830 = 0;
var G__15831 = 0;
seq__15801_15807 = G__15828;
chunk__15802_15808 = G__15829;
count__15803_15809 = G__15830;
i__15804_15810 = G__15831;
continue;
}
}
} else
{}
}
break;
}
return m;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x;
} else
{return null;
}
}
}
}
}
}
}
});
cljs.core.IEncodeClojure = (function (){var obj15833 = {};return obj15833;
})();
cljs.core._js__GT_clj = (function _js__GT_clj(x,options){if((function (){var and__3279__auto__ = x;if(and__3279__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else
{return and__3279__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else
{var x__3894__auto__ = (((x == null))?null:x);return (function (){var or__3291__auto__ = (cljs.core._js__GT_clj[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._js__GT_clj["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEncodeClojure.-js->clj",x);
}
}
})().call(null,x,options);
}
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() {
var js__GT_clj = null;
var js__GT_clj__1 = (function (x){return js__GT_clj.call(null,x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),false], null));
});
var js__GT_clj__2 = (function() { 
var G__15854__delegate = function (x,opts){if((function (){var G__15844 = x;if(G__15844)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15844.cljs$core$IEncodeClojure$;
}
})()))
{return true;
} else
{if((!G__15844.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,G__15844);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,G__15844);
}
})())
{return cljs.core._js__GT_clj.call(null,x,cljs.core.apply.call(null,cljs.core.array_map,opts));
} else
{if(cljs.core.seq.call(null,opts))
{var map__15845 = opts;var map__15845__$1 = ((cljs.core.seq_QMARK_.call(null,map__15845))?cljs.core.apply.call(null,cljs.core.hash_map,map__15845):map__15845);var keywordize_keys = cljs.core.get.call(null,map__15845__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672));var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);var f = ((function (map__15845,map__15845__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){if(cljs.core.seq_QMARK_.call(null,x__$1))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x__$1));
} else
{if(cljs.core.coll_QMARK_.call(null,x__$1))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x__$1),cljs.core.map.call(null,thisfn,x__$1));
} else
{if(x__$1 instanceof Array)
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x__$1));
} else
{if((cljs.core.type.call(null,x__$1) === Object))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__3984__auto__ = ((function (map__15845,map__15845__$1,keywordize_keys,keyfn){
return (function iter__15850(s__15851){return (new cljs.core.LazySeq(null,((function (map__15845,map__15845__$1,keywordize_keys,keyfn){
return (function (){var s__15851__$1 = s__15851;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15851__$1);if(temp__4092__auto__)
{var s__15851__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15851__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__15851__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__15853 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__15852 = 0;while(true){
if((i__15852 < size__3983__auto__))
{var k = cljs.core._nth.call(null,c__3982__auto__,i__15852);cljs.core.chunk_append.call(null,b__15853,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyfn.call(null,k),thisfn.call(null,(x__$1[k]))], null));
{
var G__15855 = (i__15852 + 1);
i__15852 = G__15855;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15853),iter__15850.call(null,cljs.core.chunk_rest.call(null,s__15851__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15853),null);
}
} else
{var k = cljs.core.first.call(null,s__15851__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keyfn.call(null,k),thisfn.call(null,(x__$1[k]))], null),iter__15850.call(null,cljs.core.rest.call(null,s__15851__$2)));
}
} else
{return null;
}
break;
}
});})(map__15845,map__15845__$1,keywordize_keys,keyfn))
,null,null));
});})(map__15845,map__15845__$1,keywordize_keys,keyfn))
;return iter__3984__auto__.call(null,cljs.core.js_keys.call(null,x__$1));
})());
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x__$1;
} else
{return null;
}
}
}
}
}
});})(map__15845,map__15845__$1,keywordize_keys,keyfn))
;return f.call(null,x);
} else
{return null;
}
}
};
var G__15854 = function (x,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15854__delegate.call(this,x,opts);};
G__15854.cljs$lang$maxFixedArity = 1;
G__15854.cljs$lang$applyTo = (function (arglist__15856){
var x = cljs.core.first(arglist__15856);
var opts = cljs.core.rest(arglist__15856);
return G__15854__delegate(x,opts);
});
G__15854.cljs$core$IFn$_invoke$arity$variadic = G__15854__delegate;
return G__15854;
})()
;
js__GT_clj = function(x,var_args){
var opts = var_args;
switch(arguments.length){
case 1:
return js__GT_clj__1.call(this,x);
default:
return js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = js__GT_clj__2.cljs$lang$applyTo;
js__GT_clj.cljs$core$IFn$_invoke$arity$1 = js__GT_clj__1;
js__GT_clj.cljs$core$IFn$_invoke$arity$variadic = js__GT_clj__2.cljs$core$IFn$_invoke$arity$variadic;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return (function() { 
var G__15857__delegate = function (args){var temp__4090__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mem),args);if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;return v;
} else
{var ret = cljs.core.apply.call(null,f,args);cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,args,ret);
return ret;
}
};
var G__15857 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15857__delegate.call(this,args);};
G__15857.cljs$lang$maxFixedArity = 0;
G__15857.cljs$lang$applyTo = (function (arglist__15858){
var args = cljs.core.seq(arglist__15858);
return G__15857__delegate(args);
});
G__15857.cljs$core$IFn$_invoke$arity$variadic = G__15857__delegate;
return G__15857;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){while(true){
var ret = f.call(null);if(cljs.core.fn_QMARK_.call(null,ret))
{{
var G__15859 = ret;
f = G__15859;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__15860__delegate = function (f,args){return trampoline.call(null,(function (){return cljs.core.apply.call(null,f,args);
}));
};
var G__15860 = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15860__delegate.call(this,f,args);};
G__15860.cljs$lang$maxFixedArity = 1;
G__15860.cljs$lang$applyTo = (function (arglist__15861){
var f = cljs.core.first(arglist__15861);
var args = cljs.core.rest(arglist__15861);
return G__15860__delegate(f,args);
});
G__15860.cljs$core$IFn$_invoke$arity$variadic = G__15860__delegate;
return G__15860;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$core$IFn$_invoke$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$core$IFn$_invoke$arity$1 = trampoline__1;
trampoline.cljs$core$IFn$_invoke$arity$variadic = trampoline__2.cljs$core$IFn$_invoke$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return rand.call(null,1);
});
var rand__1 = (function (n){return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){return cljs.core.reduce.call(null,(function (ret,x){var k = f.call(null,x);return cljs.core.assoc.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parents","parents",4515496059),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"descendants","descendants",768214664),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ancestors","ancestors",889955442),cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){if((cljs.core._global_hierarchy == null))
{cljs.core._global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
} else
{}
return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){return cljs.core.apply.call(null,cljs.core.swap_BANG_,cljs.core.get_global_hierarchy.call(null),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__15862){
var f = cljs.core.first(arglist__15862);
var args = cljs.core.rest(arglist__15862);
return swap_global_hierarchy_BANG___delegate(f,args);
});
swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_global_hierarchy_BANG___delegate;
return swap_global_hierarchy_BANG_;
})()
;
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){var or__3291__auto__ = cljs.core._EQ_.call(null,child,parent);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ancestors","ancestors",889955442).cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{var and__3279__auto__ = cljs.core.vector_QMARK_.call(null,parent);if(and__3279__auto__)
{var and__3279__auto____$1 = cljs.core.vector_QMARK_.call(null,child);if(and__3279__auto____$1)
{var and__3279__auto____$2 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));if(and__3279__auto____$2)
{var ret = true;var i = 0;while(true){
if((!(ret)) || ((i === cljs.core.count.call(null,parent))))
{return ret;
} else
{{
var G__15863 = isa_QMARK_.call(null,h,child.call(null,i),parent.call(null,i));
var G__15864 = (i + 1);
ret = G__15863;
i = G__15864;
continue;
}
}
break;
}
} else
{return and__3279__auto____$2;
}
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$core$IFn$_invoke$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$core$IFn$_invoke$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){return parents.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag);
});
var parents__2 = (function (h,tag){return cljs.core.not_empty.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"parents","parents",4515496059).cljs$core$IFn$_invoke$arity$1(h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$core$IFn$_invoke$arity$1 = parents__1;
parents.cljs$core$IFn$_invoke$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){return ancestors.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag);
});
var ancestors__2 = (function (h,tag){return cljs.core.not_empty.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"ancestors","ancestors",889955442).cljs$core$IFn$_invoke$arity$1(h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$core$IFn$_invoke$arity$1 = ancestors__1;
ancestors.cljs$core$IFn$_invoke$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){return descendants.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),tag);
});
var descendants__2 = (function (h,tag){return cljs.core.not_empty.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"descendants","descendants",768214664).cljs$core$IFn$_invoke$arity$1(h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$core$IFn$_invoke$arity$1 = descendants__1;
descendants.cljs$core$IFn$_invoke$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",-388313324,null),new cljs.core.Symbol(null,"parent","parent",1659011683,null))))].join('')));
}
cljs.core.swap_global_hierarchy_BANG_.call(null,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",-1637144189,null),new cljs.core.Symbol(null,"tag","tag",-1640416941,null),new cljs.core.Symbol(null,"parent","parent",1659011683,null))))].join('')));
}
var tp = new cljs.core.Keyword(null,"parents","parents",4515496059).cljs$core$IFn$_invoke$arity$1(h);var td = new cljs.core.Keyword(null,"descendants","descendants",768214664).cljs$core$IFn$_invoke$arity$1(h);var ta = new cljs.core.Keyword(null,"ancestors","ancestors",889955442).cljs$core$IFn$_invoke$arity$1(h);var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){return cljs.core.reduce.call(null,((function (tp,td,ta){
return (function (ret,k){return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
});})(tp,td,ta))
,m,cljs.core.cons.call(null,source,sources.call(null,source)));
});})(tp,td,ta))
;var or__3291__auto__ = ((cljs.core.contains_QMARK_.call(null,tp.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parents","parents",4515496059),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"parents","parents",4515496059).cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),new cljs.core.Keyword(null,"ancestors","ancestors",889955442),tf.call(null,new cljs.core.Keyword(null,"ancestors","ancestors",889955442).cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),new cljs.core.Keyword(null,"descendants","descendants",768214664),tf.call(null,new cljs.core.Keyword(null,"descendants","descendants",768214664).cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})());if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$core$IFn$_invoke$arity$2 = derive__2;
derive.cljs$core$IFn$_invoke$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){cljs.core.swap_global_hierarchy_BANG_.call(null,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){var parentMap = new cljs.core.Keyword(null,"parents","parents",4515496059).cljs$core$IFn$_invoke$arity$1(h);var childsParents = (cljs.core.truth_(parentMap.call(null,tag))?cljs.core.disj.call(null,parentMap.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);var newParents = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents))?cljs.core.assoc.call(null,parentMap,tag,childsParents):cljs.core.dissoc.call(null,parentMap,tag));var deriv_seq = cljs.core.flatten.call(null,cljs.core.map.call(null,((function (parentMap,childsParents,newParents){
return (function (p1__15865_SHARP_){return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15865_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15865_SHARP_),cljs.core.second.call(null,p1__15865_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq.call(null,newParents)));if(cljs.core.contains_QMARK_.call(null,parentMap.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__15866_SHARP_,p2__15867_SHARP_){return cljs.core.apply.call(null,cljs.core.derive,p1__15866_SHARP_,p2__15867_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$core$IFn$_invoke$arity$2 = underive__2;
underive.cljs$core$IFn$_invoke$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){cljs.core.swap_BANG_.call(null,method_cache,(function (_){return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){var xprefs = cljs.core.deref.call(null,prefer_table).call(null,x);var or__3291__auto__ = (cljs.core.truth_((function (){var and__3279__auto__ = xprefs;if(cljs.core.truth_(and__3279__auto__))
{return xprefs.call(null,y);
} else
{return and__3279__auto__;
}
})())?true:null);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (function (){var ps = cljs.core.parents.call(null,y);while(true){
if((cljs.core.count.call(null,ps) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps),prefer_table)))
{} else
{}
{
var G__15868 = cljs.core.rest.call(null,ps);
ps = G__15868;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__3291__auto____$1))
{return or__3291__auto____$1;
} else
{var or__3291__auto____$2 = (function (){var ps = cljs.core.parents.call(null,x);while(true){
if((cljs.core.count.call(null,ps) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps),y,prefer_table)))
{} else
{}
{
var G__15869 = cljs.core.rest.call(null,ps);
ps = G__15869;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__3291__auto____$2))
{return or__3291__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){var or__3291__auto__ = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){var best_entry = cljs.core.reduce.call(null,(function (be,p__15872){var vec__15873 = p__15872;var k = cljs.core.nth.call(null,vec__15873,0,null);var _ = cljs.core.nth.call(null,vec__15873,1,null);var e = vec__15873;if(cljs.core.isa_QMARK_.call(null,cljs.core.deref.call(null,hierarchy),dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__3291__auto__ = (be == null);if(or__3291__auto__)
{return or__3291__auto__;
} else
{return cljs.core.dominates.call(null,k,cljs.core.first.call(null,be),prefer_table);
}
})())?e:be);if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2),k,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry));
return cljs.core.second.call(null,best_entry);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = (function (){var obj15875 = {};return obj15875;
})();
cljs.core._reset = (function _reset(mf){if((function (){var and__3279__auto__ = mf;if(and__3279__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3279__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__3894__auto__ = (((mf == null))?null:mf);return (function (){var or__3291__auto__ = (cljs.core._reset[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._reset["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){if((function (){var and__3279__auto__ = mf;if(and__3279__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3279__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__3894__auto__ = (((mf == null))?null:mf);return (function (){var or__3291__auto__ = (cljs.core._add_method[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._add_method["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){if((function (){var and__3279__auto__ = mf;if(and__3279__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3279__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__3894__auto__ = (((mf == null))?null:mf);return (function (){var or__3291__auto__ = (cljs.core._remove_method[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._remove_method["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){if((function (){var and__3279__auto__ = mf;if(and__3279__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3279__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__3894__auto__ = (((mf == null))?null:mf);return (function (){var or__3291__auto__ = (cljs.core._prefer_method[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._prefer_method["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){if((function (){var and__3279__auto__ = mf;if(and__3279__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3279__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__3894__auto__ = (((mf == null))?null:mf);return (function (){var or__3291__auto__ = (cljs.core._get_method[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._get_method["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){if((function (){var and__3279__auto__ = mf;if(and__3279__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3279__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__3894__auto__ = (((mf == null))?null:mf);return (function (){var or__3291__auto__ = (cljs.core._methods[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._methods["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){if((function (){var and__3279__auto__ = mf;if(and__3279__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3279__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__3894__auto__ = (((mf == null))?null:mf);return (function (){var or__3291__auto__ = (cljs.core._prefers[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._prefers["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){if((function (){var and__3279__auto__ = mf;if(and__3279__auto__)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3279__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__3894__auto__ = (((mf == null))?null:mf);return (function (){var or__3291__auto__ = (cljs.core._dispatch[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core._dispatch["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,name,dispatch_fn,args){var dispatch_val = cljs.core.apply.call(null,dispatch_fn,args);var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
}
return cljs.core.apply.call(null,target_fn,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorStr = "cljs.core/MultiFn";
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.call(null,self__.method_table,(function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,self__.method_cache,(function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,self__.prefer_table,(function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,self__.cached_hierarchy,(function (mf__$2){return null;
}));
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.cached_hierarchy),cljs.core.deref.call(null,self__.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4090__auto__ = cljs.core.deref.call(null,self__.method_cache).call(null,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var target_fn = temp__4090__auto__;return target_fn;
} else
{var temp__4090__auto____$1 = cljs.core.find_and_cache_best_method.call(null,self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);if(cljs.core.truth_(temp__4090__auto____$1))
{var target_fn = temp__4090__auto____$1;return target_fn;
} else
{return cljs.core.deref.call(null,self__.method_table).call(null,self__.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){var self__ = this;
var mf__$1 = this;if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,self__.prefer_table,(function (old){return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;return cljs.core.deref.call(null,self__.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;return cljs.core.deref.call(null,self__.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){var self__ = this;
var mf__$1 = this;return cljs.core.do_dispatch.call(null,mf__$1,self__.name,self__.dispatch_fn,args);
});
cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__15876__delegate = function (_,args){var self = this;return cljs.core._dispatch.call(null,self,args);
};
var G__15876 = function (_,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__15876__delegate.call(this,_,args);};
G__15876.cljs$lang$maxFixedArity = 1;
G__15876.cljs$lang$applyTo = (function (arglist__15877){
var _ = cljs.core.first(arglist__15877);
var args = cljs.core.rest(arglist__15877);
return G__15876__delegate(_,args);
});
G__15876.cljs$core$IFn$_invoke$arity$variadic = G__15876__delegate;
return G__15876;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){var self = this;return cljs.core._dispatch.call(null,self,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorStr = "cljs.core/UUID";
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.string.hashCode(cljs.core.pr_str.call(null,this$__$1));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){var self__ = this;
var ___$2 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});
cljs.core.__GT_UUID = (function __GT_UUID(uuid){return (new cljs.core.UUID(uuid));
});

/**
* @constructor
*/
cljs.core.ExceptionInfo = (function (message,data,cause){
this.message = message;
this.data = data;
this.cause = cause;
})
cljs.core.ExceptionInfo.cljs$lang$type = true;
cljs.core.ExceptionInfo.cljs$lang$ctorStr = "cljs.core/ExceptionInfo";
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__3838__auto__,writer__3839__auto__,opts__3840__auto__){return cljs.core._write.call(null,writer__3839__auto__,"cljs.core/ExceptionInfo");
});
cljs.core.__GT_ExceptionInfo = (function __GT_ExceptionInfo(message,data,cause){return (new cljs.core.ExceptionInfo(message,data,cause));
});
cljs.core.ExceptionInfo.prototype = (new Error());
cljs.core.ExceptionInfo.prototype.constructor = cljs.core.ExceptionInfo;
/**
* Alpha - subject to change.
* Create an instance of ExceptionInfo, an Error type that carries a
* map of additional data.
*/
cljs.core.ex_info = (function() {
var ex_info = null;
var ex_info__2 = (function (msg,map){return (new cljs.core.ExceptionInfo(msg,map,null));
});
var ex_info__3 = (function (msg,map,cause){return (new cljs.core.ExceptionInfo(msg,map,cause));
});
ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return ex_info__2.call(this,msg,map);
case 3:
return ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ex_info.cljs$core$IFn$_invoke$arity$2 = ex_info__2;
ex_info.cljs$core$IFn$_invoke$arity$3 = ex_info__3;
return ex_info;
})()
;
/**
* Alpha - subject to change.
* Returns exception data (a map) if ex is an ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_data = (function ex_data(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.data;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns the message attached to the given Error / ExceptionInfo object.
* For non-Errors returns nil.
*/
cljs.core.ex_message = (function ex_message(ex){if((ex instanceof Error))
{return ex.message;
} else
{return null;
}
});
/**
* Alpha - subject to change.
* Returns exception cause (an Error / ExceptionInfo) if ex is an
* ExceptionInfo.
* Otherwise returns nil.
*/
cljs.core.ex_cause = (function ex_cause(ex){if((ex instanceof cljs.core.ExceptionInfo))
{return ex.cause;
} else
{return null;
}
});
/**
* Returns an JavaScript compatible comparator based upon pred.
*/
cljs.core.comparator = (function comparator(pred){return (function (x,y){if(cljs.core.truth_(pred.call(null,x,y)))
{return -1;
} else
{if(cljs.core.truth_(pred.call(null,y,x)))
{return 1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return 0;
} else
{return null;
}
}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"deftype*","deftype*",-978581244,null),null,new cljs.core.Symbol(null,"new","new",-1640422567,null),null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null),null,new cljs.core.Symbol(null,"&","&",-1640531489,null),null,new cljs.core.Symbol(null,"set!","set!",-1637004872,null),null,new cljs.core.Symbol(null,"recur","recur",-1532142362,null),null,new cljs.core.Symbol(null,".",".",-1640531481,null),null,new cljs.core.Symbol(null,"ns","ns",-1640528002,null),null,new cljs.core.Symbol(null,"do","do",-1640528316,null),null,new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),null,new cljs.core.Symbol(null,"throw","throw",-1530191713,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",1548249632,null),null,new cljs.core.Symbol(null,"js*","js*",-1640426054,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",774272013,null),null,new cljs.core.Symbol(null,"let*","let*",-1637213400,null),null,new cljs.core.Symbol(null,"loop*","loop*",-1537374273,null),null,new cljs.core.Symbol(null,"try","try",-1640416396,null),null,new cljs.core.Symbol(null,"if","if",-1640528170,null),null,new cljs.core.Symbol(null,"def","def",-1640432194,null),null], null), null),x);
});

//# sourceMappingURL=core.js.map