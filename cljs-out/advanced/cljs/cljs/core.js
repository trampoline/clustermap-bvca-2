// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2138";
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
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$232,cljs.core._STAR_flush_on_newline_STAR_,cljs.core.constant$keyword$233,cljs.core._STAR_print_readably_STAR_,cljs.core.constant$keyword$234,cljs.core._STAR_print_meta_STAR_,cljs.core.constant$keyword$235,cljs.core._STAR_print_dup_STAR_,cljs.core.constant$keyword$236,cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){cljs.core._STAR_print_newline_STAR_ = false;
return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23290__delegate = function (args){return console.log.apply(console,(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args) : cljs.core.into_array.call(null,args)));
};
var G__23290 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23290__delegate.call(this,args);};
G__23290.cljs$lang$maxFixedArity = 0;
G__23290.cljs$lang$applyTo = (function (arglist__23291){
var args = cljs.core.seq(arglist__23291);
return G__23290__delegate(args);
});
G__23290.cljs$core$IFn$_invoke$arity$variadic = G__23290__delegate;
return G__23290;
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
cljs.core.object_QMARK_ = (function object_QMARK_(x){if(!((x == null)))
{return (x.constructor === Object);
} else
{return false;
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
{if(cljs.core.constant$keyword$237)
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
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type(obj);var ty__$1 = (cljs.core.truth_((function (){var and__3394__auto__ = ty;if(cljs.core.truth_(and__3394__auto__))
{return ty.cljs$lang$type;
} else
{return and__3394__auto__;
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
var make_array__2 = (function (type,size){return make_array.cljs$core$IFn$_invoke$arity$1(size);
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
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__4248__auto___23292 = len;var i_23293 = 0;while(true){
if((i_23293 < n__4248__auto___23292))
{(new_arr[i_23293] = (arr[i_23293]));
{
var G__23294 = (i_23293 + 1);
i_23293 = G__23294;
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
var G__23295__delegate = function (array,i,idxs){return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$3(aget,aget.cljs$core$IFn$_invoke$arity$2(array,i),idxs) : cljs.core.apply.call(null,aget,aget.cljs$core$IFn$_invoke$arity$2(array,i),idxs));
};
var G__23295 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23295__delegate.call(this,array,i,idxs);};
G__23295.cljs$lang$maxFixedArity = 2;
G__23295.cljs$lang$applyTo = (function (arglist__23296){
var array = cljs.core.first(arglist__23296);
arglist__23296 = cljs.core.next(arglist__23296);
var i = cljs.core.first(arglist__23296);
var idxs = cljs.core.rest(arglist__23296);
return G__23295__delegate(array,i,idxs);
});
G__23295.cljs$core$IFn$_invoke$arity$variadic = G__23295__delegate;
return G__23295;
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
var G__23297__delegate = function (array,idx,idx2,idxv){return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$4(aset,(array[idx]),idx2,idxv) : cljs.core.apply.call(null,aset,(array[idx]),idx2,idxv));
};
var G__23297 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23297__delegate.call(this,array,idx,idx2,idxv);};
G__23297.cljs$lang$maxFixedArity = 3;
G__23297.cljs$lang$applyTo = (function (arglist__23298){
var array = cljs.core.first(arglist__23298);
arglist__23298 = cljs.core.next(arglist__23298);
var idx = cljs.core.first(arglist__23298);
arglist__23298 = cljs.core.next(arglist__23298);
var idx2 = cljs.core.first(arglist__23298);
var idxv = cljs.core.rest(arglist__23298);
return G__23297__delegate(array,idx,idx2,idxv);
});
G__23297.cljs$core$IFn$_invoke$arity$variadic = G__23297__delegate;
return G__23297;
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
var into_array__1 = (function (aseq){return into_array.cljs$core$IFn$_invoke$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,x){a.push(x);
return a;
}),[],aseq) : cljs.core.reduce.call(null,(function (a,x){a.push(x);
return a;
}),[],aseq));
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
cljs.core.Fn = (function (){var obj23300 = {};return obj23300;
})();
cljs.core.IFn = (function (){var obj23302 = {};return obj23302;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._invoke[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._invoke["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
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
cljs.core.ICloneable = (function (){var obj23304 = {};return obj23304;
})();
cljs.core._clone = (function _clone(value){if((function (){var and__3394__auto__ = value;if(and__3394__auto__)
{return value.cljs$core$ICloneable$_clone$arity$1;
} else
{return and__3394__auto__;
}
})())
{return value.cljs$core$ICloneable$_clone$arity$1(value);
} else
{var x__4027__auto__ = (((value == null))?null:value);return (function (){var or__3406__auto__ = (cljs.core._clone[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._clone["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ICloneable.-clone",value);
}
}
})().call(null,value);
}
});
cljs.core.ICounted = (function (){var obj23306 = {};return obj23306;
})();
cljs.core._count = (function _count(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._count[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._count["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj23308 = {};return obj23308;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._empty[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._empty["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj23310 = {};return obj23310;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._conj[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._conj["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj23312 = {};return obj23312;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._nth[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._nth["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._nth[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._nth["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
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
cljs.core.ASeq = (function (){var obj23314 = {};return obj23314;
})();
cljs.core.ISeq = (function (){var obj23316 = {};return obj23316;
})();
cljs.core._first = (function _first(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._first[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._first["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._rest[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._rest["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj23318 = {};return obj23318;
})();
cljs.core._next = (function _next(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._next[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._next["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj23320 = {};return obj23320;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__3394__auto__ = o;if(and__3394__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3394__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__4027__auto__ = (((o == null))?null:o);return (function (){var or__3406__auto__ = (cljs.core._lookup[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._lookup["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__3394__auto__ = o;if(and__3394__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3394__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__4027__auto__ = (((o == null))?null:o);return (function (){var or__3406__auto__ = (cljs.core._lookup[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._lookup["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
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
cljs.core.IAssociative = (function (){var obj23322 = {};return obj23322;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._contains_key_QMARK_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._assoc[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._assoc["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj23324 = {};return obj23324;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._dissoc[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._dissoc["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj23326 = {};return obj23326;
})();
cljs.core._key = (function _key(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._key[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._key["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._val[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._val["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj23328 = {};return obj23328;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._disjoin[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._disjoin["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj23330 = {};return obj23330;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._peek[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._peek["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._pop[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._pop["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj23332 = {};return obj23332;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._assoc_n[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._assoc_n["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj23334 = {};return obj23334;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__3394__auto__ = o;if(and__3394__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3394__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__4027__auto__ = (((o == null))?null:o);return (function (){var or__3406__auto__ = (cljs.core._deref[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._deref["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj23336 = {};return obj23336;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__3394__auto__ = o;if(and__3394__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3394__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__4027__auto__ = (((o == null))?null:o);return (function (){var or__3406__auto__ = (cljs.core._deref_with_timeout[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj23338 = {};return obj23338;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__3394__auto__ = o;if(and__3394__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3394__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__4027__auto__ = (((o == null))?null:o);return (function (){var or__3406__auto__ = (cljs.core._meta[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._meta["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj23340 = {};return obj23340;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__3394__auto__ = o;if(and__3394__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3394__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__4027__auto__ = (((o == null))?null:o);return (function (){var or__3406__auto__ = (cljs.core._with_meta[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._with_meta["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj23342 = {};return obj23342;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._reduce[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._reduce["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._reduce[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._reduce["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
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
cljs.core.IKVReduce = (function (){var obj23344 = {};return obj23344;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._kv_reduce[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj23346 = {};return obj23346;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__3394__auto__ = o;if(and__3394__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3394__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__4027__auto__ = (((o == null))?null:o);return (function (){var or__3406__auto__ = (cljs.core._equiv[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._equiv["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj23348 = {};return obj23348;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__3394__auto__ = o;if(and__3394__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3394__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__4027__auto__ = (((o == null))?null:o);return (function (){var or__3406__auto__ = (cljs.core._hash[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._hash["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj23350 = {};return obj23350;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__3394__auto__ = o;if(and__3394__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3394__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__4027__auto__ = (((o == null))?null:o);return (function (){var or__3406__auto__ = (cljs.core._seq[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._seq["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj23352 = {};return obj23352;
})();
cljs.core.IList = (function (){var obj23354 = {};return obj23354;
})();
cljs.core.IRecord = (function (){var obj23356 = {};return obj23356;
})();
cljs.core.IReversible = (function (){var obj23358 = {};return obj23358;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._rseq[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._rseq["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj23360 = {};return obj23360;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._sorted_seq[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._sorted_seq_from[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._entry_key[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._entry_key["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._comparator[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._comparator["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj23362 = {};return obj23362;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__3394__auto__ = writer;if(and__3394__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3394__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__4027__auto__ = (((writer == null))?null:writer);return (function (){var or__3406__auto__ = (cljs.core._write[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._write["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__3394__auto__ = writer;if(and__3394__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3394__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__4027__auto__ = (((writer == null))?null:writer);return (function (){var or__3406__auto__ = (cljs.core._flush[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._flush["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj23364 = {};return obj23364;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__3394__auto__ = o;if(and__3394__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3394__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__4027__auto__ = (((o == null))?null:o);return (function (){var or__3406__auto__ = (cljs.core._pr_writer[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._pr_writer["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj23366 = {};return obj23366;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__3394__auto__ = d;if(and__3394__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__4027__auto__ = (((d == null))?null:d);return (function (){var or__3406__auto__ = (cljs.core._realized_QMARK_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj23368 = {};return obj23368;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._notify_watches[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._notify_watches["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._add_watch[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._add_watch["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3394__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (cljs.core._remove_watch[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._remove_watch["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj23370 = {};return obj23370;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._as_transient[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._as_transient["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj23372 = {};return obj23372;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__3394__auto__ = tcoll;if(and__3394__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__4027__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3406__auto__ = (cljs.core._conj_BANG_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__3394__auto__ = tcoll;if(and__3394__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__4027__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3406__auto__ = (cljs.core._persistent_BANG_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj23374 = {};return obj23374;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__3394__auto__ = tcoll;if(and__3394__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__4027__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3406__auto__ = (cljs.core._assoc_BANG_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj23376 = {};return obj23376;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__3394__auto__ = tcoll;if(and__3394__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__4027__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3406__auto__ = (cljs.core._dissoc_BANG_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj23378 = {};return obj23378;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__3394__auto__ = tcoll;if(and__3394__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__4027__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3406__auto__ = (cljs.core._assoc_n_BANG_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__3394__auto__ = tcoll;if(and__3394__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__4027__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3406__auto__ = (cljs.core._pop_BANG_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj23380 = {};return obj23380;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__3394__auto__ = tcoll;if(and__3394__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__4027__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3406__auto__ = (cljs.core._disjoin_BANG_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj23382 = {};return obj23382;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__3394__auto__ = x;if(and__3394__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3394__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__4027__auto__ = (((x == null))?null:x);return (function (){var or__3406__auto__ = (cljs.core._compare[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._compare["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj23384 = {};return obj23384;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._drop_first[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._drop_first["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj23386 = {};return obj23386;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._chunked_first[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._chunked_first["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._chunked_rest[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj23388 = {};return obj23388;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__3394__auto__ = coll;if(and__3394__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3394__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__4027__auto__ = (((coll == null))?null:coll);return (function (){var or__3406__auto__ = (cljs.core._chunked_next[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._chunked_next["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj23390 = {};return obj23390;
})();
cljs.core._name = (function _name(x){if((function (){var and__3394__auto__ = x;if(and__3394__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__3394__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__4027__auto__ = (((x == null))?null:x);return (function (){var or__3406__auto__ = (cljs.core._name[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._name["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__3394__auto__ = x;if(and__3394__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__3394__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__4027__auto__ = (((x == null))?null:x);return (function (){var or__3406__auto__ = (cljs.core._namespace[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._namespace["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("INamed.-namespace",x);
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
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/StringBufferWriter");
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
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,cljs.core.pr_opts());
writer.cljs$core$IWriter$_flush$arity$1(null);
return [cljs.core.str(sb)].join('');
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){return (cljs.core.hash_combine.cljs$core$IFn$_invoke$arity$2 ? cljs.core.hash_combine.cljs$core$IFn$_invoke$arity$2((cljs.core.hash.cljs$core$IFn$_invoke$arity$1 ? cljs.core.hash.cljs$core$IFn$_invoke$arity$1(sym.ns) : cljs.core.hash.call(null,sym.ns)),(cljs.core.hash.cljs$core$IFn$_invoke$arity$1 ? cljs.core.hash.cljs$core$IFn$_invoke$arity$1(sym.name) : cljs.core.hash.call(null,sym.name))) : cljs.core.hash_combine.call(null,(cljs.core.hash.cljs$core$IFn$_invoke$arity$1 ? cljs.core.hash.cljs$core$IFn$_invoke$arity$1(sym.ns) : cljs.core.hash.call(null,sym.ns)),(cljs.core.hash.cljs$core$IFn$_invoke$arity$1 ? cljs.core.hash.cljs$core$IFn$_invoke$arity$1(sym.name) : cljs.core.hash.call(null,sym.name))));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b) : cljs.core._EQ_.call(null,a,b))))
{return 0;
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(a.ns);if(and__3394__auto__)
{return b.ns;
} else
{return and__3394__auto__;
}
})()))
{return -1;
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not(b.ns))
{return 1;
} else
{var nsc = (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(a.ns,b.ns) : cljs.core.compare.call(null,a.ns,b.ns));if((nsc === 0))
{return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(a.name,b.name) : cljs.core.compare.call(null,a.name,b.name));
} else
{return nsc;
}
}
} else
{if(cljs.core.constant$keyword$238)
{return (cljs.core.compare.cljs$core$IFn$_invoke$arity$2 ? cljs.core.compare.cljs$core$IFn$_invoke$arity$2(a.name,b.name) : cljs.core.compare.call(null,a.name,b.name));
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
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/Symbol");
});
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,self__.str);
});
cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){var self__ = this;
var sym__$1 = this;var h__3817__auto__ = self__._hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_symbol(sym__$1);self__._hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__23392 = null;
var G__23392__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
var G__23392__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
G__23392 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__23392__2.call(this,self__,coll);
case 3:
return G__23392__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23392;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args23391){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23391)));
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,null);
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var sym = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll,sym,not_found);
});
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Symbol))
{return (self__.str === other.str);
} else
{return false;
}
});
cljs.core.Symbol.prototype.cljs$core$ICloneable$ = true;
cljs.core.Symbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,self__._meta));
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
{return symbol.cljs$core$IFn$_invoke$arity$2(null,name);
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
cljs.core.clone = (function clone(value){return cljs.core._clone(value);
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){if((coll == null))
{return null;
} else
{if((function (){var G__23394 = coll;if(G__23394)
{var bit__4043__auto__ = (G__23394.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4043__auto__) || (G__23394.cljs$core$ISeqable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeqable$_seq$arity$1(null);
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
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,coll))
{return cljs.core._seq(coll);
} else
{if(cljs.core.constant$keyword$237)
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
{if((function (){var G__23396 = coll;if(G__23396)
{var bit__4043__auto__ = (G__23396.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4043__auto__) || (G__23396.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(null);
} else
{var s = cljs.core.seq(coll);if((s == null))
{return null;
} else
{return cljs.core._first(s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){if(!((coll == null)))
{if((function (){var G__23398 = coll;if(G__23398)
{var bit__4043__auto__ = (G__23398.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4043__auto__) || (G__23398.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(null);
} else
{var s = cljs.core.seq(coll);if(s)
{return cljs.core._rest(s);
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
{if((function (){var G__23400 = coll;if(G__23400)
{var bit__4043__auto__ = (G__23400.cljs$lang$protocol_mask$partition0$ & 128);if((bit__4043__auto__) || (G__23400.cljs$core$INext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$INext$_next$arity$1(null);
} else
{return cljs.core.seq(cljs.core.rest(coll));
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
var _EQ___2 = (function (x,y){if((x == null))
{return (y == null);
} else
{return ((x === y)) || (cljs.core._equiv(x,y));
}
});
var _EQ___3 = (function() { 
var G__23401__delegate = function (x,y,more){while(true){
if(_EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__23402 = y;
var G__23403 = cljs.core.first(more);
var G__23404 = cljs.core.next(more);
x = G__23402;
y = G__23403;
more = G__23404;
continue;
}
} else
{return _EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__23401 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23401__delegate.call(this,x,y,more);};
G__23401.cljs$lang$maxFixedArity = 2;
G__23401.cljs$lang$applyTo = (function (arglist__23405){
var x = cljs.core.first(arglist__23405);
arglist__23405 = cljs.core.next(arglist__23405);
var y = cljs.core.first(arglist__23405);
var more = cljs.core.rest(arglist__23405);
return G__23401__delegate(x,y,more);
});
G__23401.cljs$core$IFn$_invoke$arity$variadic = G__23401__delegate;
return G__23401;
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
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){return 0;
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
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/Reduced");
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
var ci_reduce__2 = (function (cicoll,f){var cnt = cljs.core._count(cicoll);if((cnt === 0))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,0);var n = 1;while(true){
if((n < cnt))
{var nval = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(val,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n)) : f.call(null,val,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n)));if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__23406 = nval;
var G__23407 = (n + 1);
val = G__23406;
n = G__23407;
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
var ci_reduce__3 = (function (cicoll,f,val){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = 0;while(true){
if((n < cnt))
{var nval = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(val__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n)) : f.call(null,val__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n)));if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__23408 = nval;
var G__23409 = (n + 1);
val__$1 = G__23408;
n = G__23409;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){var cnt = cljs.core._count(cicoll);var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(val__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n)) : f.call(null,val__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(cicoll,n)));if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__23410 = nval;
var G__23411 = (n + 1);
val__$1 = G__23410;
n = G__23411;
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
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var val = (arr[0]);var n = 1;while(true){
if((n < cnt))
{var nval = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(val,(arr[n])) : f.call(null,val,(arr[n])));if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__23412 = nval;
var G__23413 = (n + 1);
val = G__23412;
n = G__23413;
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
{var nval = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(val__$1,(arr[n])) : f.call(null,val__$1,(arr[n])));if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__23414 = nval;
var G__23415 = (n + 1);
val__$1 = G__23414;
n = G__23415;
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
{var nval = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(val__$1,(arr[n])) : f.call(null,val__$1,(arr[n])));if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__23416 = nval;
var G__23417 = (n + 1);
val__$1 = G__23416;
n = G__23417;
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
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__23419 = x;if(G__23419)
{var bit__4050__auto__ = (G__23419.cljs$lang$protocol_mask$partition0$ & 2);if((bit__4050__auto__) || (G__23419.cljs$core$ICounted$))
{return true;
} else
{if((!G__23419.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__23419);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,G__23419);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__23421 = x;if(G__23421)
{var bit__4050__auto__ = (G__23421.cljs$lang$protocol_mask$partition0$ & 16);if((bit__4050__auto__) || (G__23421.cljs$core$IIndexed$))
{return true;
} else
{if((!G__23421.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__23421);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,G__23421);
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
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (cljs.core.hash_coll.cljs$core$IFn$_invoke$arity$1 ? cljs.core.hash_coll.cljs$core$IFn$_invoke$arity$1(coll__$1) : cljs.core.hash_coll.call(null,coll__$1));
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + 1) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(o,coll__$1) : cljs.core.cons.call(null,o,coll__$1));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var c = cljs.core._count(coll__$1);if((c > 0))
{return (new cljs.core.RSeq(coll__$1,(c - 1),null));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.i]),(self__.i + 1));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.i);
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
var coll__$1 = this;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(coll__$1,other) : cljs.core.equiv_sequential.call(null,coll__$1,other));
});
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.IndexedSeq(self__.arr,self__.i));
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
var prim_seq__1 = (function (prim){return prim_seq.cljs$core$IFn$_invoke$arity$2(prim,0);
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
var array_seq__1 = (function (array){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,0);
});
var array_seq__2 = (function (array,i){return cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(array,i);
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
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (cljs.core.hash_coll.cljs$core$IFn$_invoke$arity$1 ? cljs.core.hash_coll.cljs$core$IFn$_invoke$arity$1(coll__$1) : cljs.core.hash_coll.call(null,coll__$1));
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (cljs.core.cons.cljs$core$IFn$_invoke$arity$2 ? cljs.core.cons.cljs$core$IFn$_invoke$arity$2(o,coll__$1) : cljs.core.cons.call(null,o,coll__$1));
});
cljs.core.RSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,col__$1) : cljs.core.seq_reduce.call(null,f,col__$1));
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;return (cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,col__$1) : cljs.core.seq_reduce.call(null,f,start,col__$1));
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > 0))
{return (new cljs.core.RSeq(self__.ci,(self__.i - 1),null));
} else
{return null;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2 ? cljs.core.equiv_sequential.cljs$core$IFn$_invoke$arity$2(coll__$1,other) : cljs.core.equiv_sequential.call(null,coll__$1,other));
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$ICloneable$ = true;
cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.core.with_meta.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,self__.meta) : cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta));
});
cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){return (new cljs.core.RSeq(ci,i,meta));
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){while(true){
var sn = cljs.core.next(s);if(!((sn == null)))
{{
var G__23422 = sn;
s = G__23422;
continue;
}
} else
{return cljs.core.first(s);
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
{return cljs.core._conj(coll,x);
} else
{return cljs.core._conj(cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__23423__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__23424 = conj.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__23425 = cljs.core.first(xs);
var G__23426 = cljs.core.next(xs);
coll = G__23424;
x = G__23425;
xs = G__23426;
continue;
}
} else
{return conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__23423 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23423__delegate.call(this,coll,x,xs);};
G__23423.cljs$lang$maxFixedArity = 2;
G__23423.cljs$lang$applyTo = (function (arglist__23427){
var coll = cljs.core.first(arglist__23427);
arglist__23427 = cljs.core.next(arglist__23427);
var x = cljs.core.first(arglist__23427);
var xs = cljs.core.rest(arglist__23427);
return G__23423__delegate(coll,x,xs);
});
G__23423.cljs$core$IFn$_invoke$arity$variadic = G__23423__delegate;
return G__23423;
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
cljs.core.empty = (function empty(coll){if((coll == null))
{return null;
} else
{return cljs.core._empty(coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){var s = cljs.core.seq(coll);var acc = 0;while(true){
if(cljs.core.counted_QMARK_(s))
{return (acc + cljs.core._count(s));
} else
{{
var G__23428 = cljs.core.next(s);
var G__23429 = (acc + 1);
s = G__23428;
acc = G__23429;
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
{if((function (){var G__23431 = coll;if(G__23431)
{var bit__4043__auto__ = (G__23431.cljs$lang$protocol_mask$partition0$ & 2);if((bit__4043__auto__) || (G__23431.cljs$core$ICounted$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(null);
} else
{if(coll instanceof Array)
{return coll.length;
} else
{if(typeof coll === 'string')
{return coll.length;
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ICounted,coll))
{return cljs.core._count(coll);
} else
{if(cljs.core.constant$keyword$237)
{return cljs.core.accumulating_seq_count(coll);
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
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{{
var G__23432 = cljs.core.next(coll);
var G__23433 = (n - 1);
coll = G__23432;
n = G__23433;
continue;
}
} else
{if(cljs.core.constant$keyword$237)
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
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{{
var G__23434 = cljs.core.next(coll);
var G__23435 = (n - 1);
var G__23436 = not_found;
coll = G__23434;
n = G__23435;
not_found = G__23436;
continue;
}
} else
{if(cljs.core.constant$keyword$237)
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
{if((function (){var G__23441 = coll;if(G__23441)
{var bit__4043__auto__ = (G__23441.cljs$lang$protocol_mask$partition0$ & 16);if((bit__4043__auto__) || (G__23441.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(null,n);
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
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if(cljs.core.constant$keyword$237)
{if((function (){var G__23442 = coll;if(G__23442)
{var bit__4050__auto__ = (G__23442.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4050__auto__) || (G__23442.cljs$core$ISeq$))
{return true;
} else
{if((!G__23442.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__23442);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__23442);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));
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
{if((function (){var G__23443 = coll;if(G__23443)
{var bit__4043__auto__ = (G__23443.cljs$lang$protocol_mask$partition0$ & 16);if((bit__4043__auto__) || (G__23443.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
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
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,coll))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll,n);
} else
{if(cljs.core.constant$keyword$237)
{if((function (){var G__23444 = coll;if(G__23444)
{var bit__4050__auto__ = (G__23444.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4050__auto__) || (G__23444.cljs$core$ISeq$))
{return true;
} else
{if((!G__23444.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__23444);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__23444);
}
})())
{return cljs.core.linear_traversal_nth.cljs$core$IFn$_invoke$arity$3(coll,n,not_found);
} else
{throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str(cljs.core.type(coll)))].join('')));
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
{if((function (){var G__23447 = o;if(G__23447)
{var bit__4043__auto__ = (G__23447.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4043__auto__) || (G__23447.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(null,k);
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
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o,k);
} else
{if(cljs.core.constant$keyword$237)
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
{if((function (){var G__23448 = o;if(G__23448)
{var bit__4043__auto__ = (G__23448.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4043__auto__) || (G__23448.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
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
{if(cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,o))
{return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(o,k,not_found);
} else
{if(cljs.core.constant$keyword$237)
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
{return cljs.core._assoc(coll,k,v);
} else
{return (cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2([k],[v]) : cljs.core.PersistentHashMap.fromArrays.call(null,[k],[v]));
}
});
var assoc__4 = (function() { 
var G__23449__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__23450 = ret;
var G__23451 = cljs.core.first(kvs);
var G__23452 = cljs.core.second(kvs);
var G__23453 = cljs.core.nnext(kvs);
coll = G__23450;
k = G__23451;
v = G__23452;
kvs = G__23453;
continue;
}
} else
{return ret;
}
break;
}
};
var G__23449 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23449__delegate.call(this,coll,k,v,kvs);};
G__23449.cljs$lang$maxFixedArity = 3;
G__23449.cljs$lang$applyTo = (function (arglist__23454){
var coll = cljs.core.first(arglist__23454);
arglist__23454 = cljs.core.next(arglist__23454);
var k = cljs.core.first(arglist__23454);
arglist__23454 = cljs.core.next(arglist__23454);
var v = cljs.core.first(arglist__23454);
var kvs = cljs.core.rest(arglist__23454);
return G__23449__delegate(coll,k,v,kvs);
});
G__23449.cljs$core$IFn$_invoke$arity$variadic = G__23449__delegate;
return G__23449;
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
var dissoc__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._dissoc(coll,k);
}
});
var dissoc__3 = (function() { 
var G__23455__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = dissoc.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__23456 = ret;
var G__23457 = cljs.core.first(ks);
var G__23458 = cljs.core.next(ks);
coll = G__23456;
k = G__23457;
ks = G__23458;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__23455 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23455__delegate.call(this,coll,k,ks);};
G__23455.cljs$lang$maxFixedArity = 2;
G__23455.cljs$lang$applyTo = (function (arglist__23459){
var coll = cljs.core.first(arglist__23459);
arglist__23459 = cljs.core.next(arglist__23459);
var k = cljs.core.first(arglist__23459);
var ks = cljs.core.rest(arglist__23459);
return G__23455__delegate(coll,k,ks);
});
G__23455.cljs$core$IFn$_invoke$arity$variadic = G__23455__delegate;
return G__23455;
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
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__3406__auto__ = goog.isFunction(f);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var G__23463 = f;if(G__23463)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto____$1 = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return G__23463.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__23463.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__23463);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.Fn,G__23463);
}
}
});
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_(o)) && (!((function (){var G__23471 = o;if(G__23471)
{var bit__4050__auto__ = (G__23471.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__4050__auto__) || (G__23471.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__23471.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__23471);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,G__23471);
}
})())))
{return with_meta((function (){if(typeof cljs.core.t23472 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.t23472 = (function (meta,o,with_meta,meta23473){
this.meta = meta;
this.o = o;
this.with_meta = with_meta;
this.meta23473 = meta23473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.t23472.cljs$lang$type = true;
cljs.core.t23472.cljs$lang$ctorStr = "cljs.core/t23472";
cljs.core.t23472.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/t23472");
});
cljs.core.t23472.prototype.call = (function() { 
var G__23476__delegate = function (self__,args){var self____$1 = this;var _ = self____$1;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.o,args) : cljs.core.apply.call(null,self__.o,args));
};
var G__23476 = function (self__,var_args){
var self__ = this;
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__23476__delegate.call(this,self__,args);};
G__23476.cljs$lang$maxFixedArity = 1;
G__23476.cljs$lang$applyTo = (function (arglist__23477){
var self__ = cljs.core.first(arglist__23477);
var args = cljs.core.rest(arglist__23477);
return G__23476__delegate(self__,args);
});
G__23476.cljs$core$IFn$_invoke$arity$variadic = G__23476__delegate;
return G__23476;
})()
;
cljs.core.t23472.prototype.apply = (function (self__,args23475){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23475)));
});
cljs.core.t23472.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__23478__delegate = function (args){var _ = this;return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.o,args) : cljs.core.apply.call(null,self__.o,args));
};
var G__23478 = function (var_args){
var self__ = this;
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23478__delegate.call(this,args);};
G__23478.cljs$lang$maxFixedArity = 0;
G__23478.cljs$lang$applyTo = (function (arglist__23479){
var args = cljs.core.seq(arglist__23479);
return G__23478__delegate(args);
});
G__23478.cljs$core$IFn$_invoke$arity$variadic = G__23478__delegate;
return G__23478;
})()
;
cljs.core.t23472.prototype.cljs$core$Fn$ = true;
cljs.core.t23472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23474){var self__ = this;
var _23474__$1 = this;return self__.meta23473;
});
cljs.core.t23472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23474,meta23473__$1){var self__ = this;
var _23474__$1 = this;return (new cljs.core.t23472(self__.meta,self__.o,self__.with_meta,meta23473__$1));
});
cljs.core.__GT_t23472 = (function __GT_t23472(meta__$1,o__$1,with_meta__$1,meta23473){return (new cljs.core.t23472(meta__$1,o__$1,with_meta__$1,meta23473));
});
}
return (new cljs.core.t23472(meta,o,with_meta,null));
})(),meta);
} else
{if((o == null))
{return null;
} else
{return cljs.core._with_meta(o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){if((function (){var and__3394__auto__ = !((o == null));if(and__3394__auto__)
{var G__23483 = o;if(G__23483)
{var bit__4050__auto__ = (G__23483.cljs$lang$protocol_mask$partition0$ & 131072);if((bit__4050__auto__) || (G__23483.cljs$core$IMeta$))
{return true;
} else
{if((!G__23483.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__23483);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__23483);
}
} else
{return and__3394__auto__;
}
})())
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){if((coll == null))
{return null;
} else
{return cljs.core._peek(coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){if((coll == null))
{return null;
} else
{return cljs.core._pop(coll);
}
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
var disj__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._disjoin(coll,k);
}
});
var disj__3 = (function() { 
var G__23484__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = disj.cljs$core$IFn$_invoke$arity$2(coll,k);if(cljs.core.truth_(ks))
{{
var G__23485 = ret;
var G__23486 = cljs.core.first(ks);
var G__23487 = cljs.core.next(ks);
coll = G__23485;
k = G__23486;
ks = G__23487;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__23484 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23484__delegate.call(this,coll,k,ks);};
G__23484.cljs$lang$maxFixedArity = 2;
G__23484.cljs$lang$applyTo = (function (arglist__23488){
var coll = cljs.core.first(arglist__23488);
arglist__23488 = cljs.core.next(arglist__23488);
var k = cljs.core.first(arglist__23488);
var ks = cljs.core.rest(arglist__23488);
return G__23484__delegate(coll,k,ks);
});
G__23484.cljs$core$IFn$_invoke$arity$variadic = G__23484__delegate;
return G__23484;
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
cljs.core.string_hash_cache = (function (){var obj23490 = {};return obj23490;
})();
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){var h = goog.string.hashCode(k);(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = (function (){var obj23494 = {};return obj23494;
})();
cljs.core.string_hash_cache_count = 0;
} else
{}
var h = (cljs.core.string_hash_cache[k]);if(typeof h === 'number')
{return h;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function hash(o){if((function (){var G__23496 = o;if(G__23496)
{var bit__4043__auto__ = (G__23496.cljs$lang$protocol_mask$partition0$ & 4194304);if((bit__4043__auto__) || (G__23496.cljs$core$IHash$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(null);
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
{return cljs.core.check_string_hash_cache(o);
} else
{if((o == null))
{return 0;
} else
{if(cljs.core.constant$keyword$237)
{return cljs.core._hash(o);
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
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){return ((coll == null)) || (cljs.core.not(cljs.core.seq(coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){if((x == null))
{return false;
} else
{var G__23498 = x;if(G__23498)
{var bit__4050__auto__ = (G__23498.cljs$lang$protocol_mask$partition0$ & 8);if((bit__4050__auto__) || (G__23498.cljs$core$ICollection$))
{return true;
} else
{if((!G__23498.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__23498);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICollection,G__23498);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__23500 = x;if(G__23500)
{var bit__4050__auto__ = (G__23500.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__4050__auto__) || (G__23500.cljs$core$ISet$))
{return true;
} else
{if((!G__23500.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__23500);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__23500);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__23502 = x;if(G__23502)
{var bit__4050__auto__ = (G__23502.cljs$lang$protocol_mask$partition0$ & 512);if((bit__4050__auto__) || (G__23502.cljs$core$IAssociative$))
{return true;
} else
{if((!G__23502.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__23502);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAssociative,G__23502);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__23504 = x;if(G__23504)
{var bit__4050__auto__ = (G__23504.cljs$lang$protocol_mask$partition0$ & 16777216);if((bit__4050__auto__) || (G__23504.cljs$core$ISequential$))
{return true;
} else
{if((!G__23504.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__23504);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,G__23504);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){var G__23506 = x;if(G__23506)
{var bit__4050__auto__ = (G__23506.cljs$lang$protocol_mask$partition0$ & 268435456);if((bit__4050__auto__) || (G__23506.cljs$core$ISorted$))
{return true;
} else
{if((!G__23506.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__23506);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISorted,G__23506);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__23508 = x;if(G__23508)
{var bit__4050__auto__ = (G__23508.cljs$lang$protocol_mask$partition0$ & 524288);if((bit__4050__auto__) || (G__23508.cljs$core$IReduce$))
{return true;
} else
{if((!G__23508.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__23508);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,G__23508);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__23510 = x;if(G__23510)
{var bit__4050__auto__ = (G__23510.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__4050__auto__) || (G__23510.cljs$core$IMap$))
{return true;
} else
{if((!G__23510.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__23510);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__23510);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__23512 = x;if(G__23512)
{var bit__4050__auto__ = (G__23512.cljs$lang$protocol_mask$partition0$ & 16384);if((bit__4050__auto__) || (G__23512.cljs$core$IVector$))
{return true;
} else
{if((!G__23512.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__23512);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__23512);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__23514 = x;if(G__23514)
{var bit__4043__auto__ = (G__23514.cljs$lang$protocol_mask$partition1$ & 512);if((bit__4043__auto__) || (G__23514.cljs$core$IChunkedSeq$))
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
var js_obj__0 = (function (){var obj23518 = {};return obj23518;
});
var js_obj__1 = (function() { 
var G__23519__delegate = function (keyvals){return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2 ? cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.create,keyvals) : cljs.core.apply.call(null,goog.object.create,keyvals));
};
var G__23519 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23519__delegate.call(this,keyvals);};
G__23519.cljs$lang$maxFixedArity = 0;
G__23519.cljs$lang$applyTo = (function (arglist__23520){
var keyvals = cljs.core.seq(arglist__23520);
return G__23519__delegate(keyvals);
});
G__23519.cljs$core$IFn$_invoke$arity$variadic = G__23519__delegate;
return G__23519;
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
var G__23521 = (i__$1 + 1);
var G__23522 = (j__$1 + 1);
var G__23523 = (len__$1 - 1);
i__$1 = G__23521;
j__$1 = G__23522;
len__$1 = G__23523;
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
var G__23524 = (i__$1 - 1);
var G__23525 = (j__$1 - 1);
var G__23526 = (len__$1 - 1);
i__$1 = G__23524;
j__$1 = G__23525;
len__$1 = G__23526;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj23528 = {};return obj23528;
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
{var G__23530 = s;if(G__23530)
{var bit__4050__auto__ = (G__23530.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4050__auto__) || (G__23530.cljs$core$ISeq$))
{return true;
} else
{if((!G__23530.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__23530);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeq,G__23530);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__23532 = s;if(G__23532)
{var bit__4050__auto__ = (G__23532.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__23532.cljs$core$ISeqable$))
{return true;
} else
{if((!G__23532.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__23532);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__23532);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__3406__auto__ = cljs.core.fn_QMARK_(f);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var G__23536 = f;if(G__23536)
{var bit__4050__auto__ = (G__23536.cljs$lang$protocol_mask$partition0$ & 1);if((bit__4050__auto__) || (G__23536.cljs$core$IFn$))
{return true;
} else
{if((!G__23536.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__23536);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IFn,G__23536);
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
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){if((cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){if((!((coll == null))) && (cljs.core.associative_QMARK_(coll)) && (cljs.core.contains_QMARK_(coll,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,k)], null);
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
var distinct_QMARK___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__23537__delegate = function (x,y,more){if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([y,x], true);var xs = more;while(true){
var x__$1 = cljs.core.first(xs);var etc = cljs.core.next(xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_(s,x__$1))
{return false;
} else
{{
var G__23538 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,x__$1);
var G__23539 = etc;
s = G__23538;
xs = G__23539;
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
var G__23537 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23537__delegate.call(this,x,y,more);};
G__23537.cljs$lang$maxFixedArity = 2;
G__23537.cljs$lang$applyTo = (function (arglist__23540){
var x = cljs.core.first(arglist__23540);
arglist__23540 = cljs.core.next(arglist__23540);
var y = cljs.core.first(arglist__23540);
var more = cljs.core.rest(arglist__23540);
return G__23537__delegate(x,y,more);
});
G__23537.cljs$core$IFn$_invoke$arity$variadic = G__23537__delegate;
return G__23537;
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
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){if(cljs.core.seq_QMARK_(coll))
{return coll;
} else
{var or__3406__auto__ = cljs.core.seq(coll);if(or__3406__auto__)
{return or__3406__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
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
{if((cljs.core.type(x) === cljs.core.type(y)))
{if((function (){var G__23542 = x;if(G__23542)
{var bit__4043__auto__ = (G__23542.cljs$lang$protocol_mask$partition1$ & 2048);if((bit__4043__auto__) || (G__23542.cljs$core$IComparable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(null,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if(cljs.core.constant$keyword$237)
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
var compare_indexed__2 = (function (xs,ys){var xl = cljs.core.count(xs);var yl = cljs.core.count(ys);if((xl < yl))
{return -1;
} else
{if((xl > yl))
{return 1;
} else
{if(cljs.core.constant$keyword$237)
{return compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));if(((d === 0)) && (((n + 1) < len)))
{{
var G__23543 = xs;
var G__23544 = ys;
var G__23545 = len;
var G__23546 = (n + 1);
xs = G__23543;
ys = G__23544;
len = G__23545;
n = G__23546;
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
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){var r = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return -1;
} else
{if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(y,x) : f.call(null,y,x))))
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
var sort__1 = (function (coll){return sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){if(cljs.core.seq(coll))
{var a = (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.to_array.call(null,coll));goog.array.stableSort(a,cljs.core.fn__GT_comparator(comp));
return cljs.core.seq(a);
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
var sort_by__2 = (function (keyfn,coll){return sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){return cljs.core.fn__GT_comparator(comp).call(null,(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(x) : keyfn.call(null,x)),(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(y) : keyfn.call(null,y)));
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
var seq_reduce__2 = (function (f,coll){var temp__4090__auto__ = cljs.core.seq(coll);if(temp__4090__auto__)
{var s = temp__4090__auto__;return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$3 ? cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.next(s)) : cljs.core.reduce.call(null,f,cljs.core.first(s),cljs.core.next(s)));
} else
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq(coll);while(true){
if(coll__$1)
{var nval = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(val__$1,cljs.core.first(coll__$1)) : f.call(null,val__$1,cljs.core.first(coll__$1)));if(cljs.core.reduced_QMARK_(nval))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nval) : cljs.core.deref.call(null,nval));
} else
{{
var G__23547 = nval;
var G__23548 = cljs.core.next(coll__$1);
val__$1 = G__23547;
coll__$1 = G__23548;
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
cljs.core.shuffle = (function shuffle(coll){var a = (cljs.core.to_array.cljs$core$IFn$_invoke$arity$1 ? cljs.core.to_array.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.to_array.call(null,coll));goog.array.shuffle(a);
return (cljs.core.vec.cljs$core$IFn$_invoke$arity$1 ? cljs.core.vec.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.vec.call(null,a));
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
var reduce__2 = (function (f,coll){if((function (){var G__23551 = coll;if(G__23551)
{var bit__4043__auto__ = (G__23551.cljs$lang$protocol_mask$partition0$ & 524288);if((bit__4043__auto__) || (G__23551.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(null,f);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$2(coll,f);
} else
{if(cljs.core.constant$keyword$237)
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll);
} else
{return null;
}
}
}
}
}
});
var reduce__3 = (function (f,val,coll){if((function (){var G__23552 = coll;if(G__23552)
{var bit__4043__auto__ = (G__23552.cljs$lang$protocol_mask$partition0$ & 524288);if((bit__4043__auto__) || (G__23552.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(null,f,val);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(cljs.core.native_satisfies_QMARK_(cljs.core.IReduce,coll))
{return cljs.core._reduce.cljs$core$IFn$_invoke$arity$3(coll,f,val);
} else
{if(cljs.core.constant$keyword$237)
{return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,val,coll);
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
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){if(!((coll == null)))
{return cljs.core._kv_reduce(coll,f,init);
} else
{return init;
}
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
var G__23553__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_PLUS_,(x + y),more);
};
var G__23553 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23553__delegate.call(this,x,y,more);};
G__23553.cljs$lang$maxFixedArity = 2;
G__23553.cljs$lang$applyTo = (function (arglist__23554){
var x = cljs.core.first(arglist__23554);
arglist__23554 = cljs.core.next(arglist__23554);
var y = cljs.core.first(arglist__23554);
var more = cljs.core.rest(arglist__23554);
return G__23553__delegate(x,y,more);
});
G__23553.cljs$core$IFn$_invoke$arity$variadic = G__23553__delegate;
return G__23553;
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
var G__23555__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_,(x - y),more);
};
var G__23555 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23555__delegate.call(this,x,y,more);};
G__23555.cljs$lang$maxFixedArity = 2;
G__23555.cljs$lang$applyTo = (function (arglist__23556){
var x = cljs.core.first(arglist__23556);
arglist__23556 = cljs.core.next(arglist__23556);
var y = cljs.core.first(arglist__23556);
var more = cljs.core.rest(arglist__23556);
return G__23555__delegate(x,y,more);
});
G__23555.cljs$core$IFn$_invoke$arity$variadic = G__23555__delegate;
return G__23555;
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
var G__23557__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,(x * y),more);
};
var G__23557 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23557__delegate.call(this,x,y,more);};
G__23557.cljs$lang$maxFixedArity = 2;
G__23557.cljs$lang$applyTo = (function (arglist__23558){
var x = cljs.core.first(arglist__23558);
arglist__23558 = cljs.core.next(arglist__23558);
var y = cljs.core.first(arglist__23558);
var more = cljs.core.rest(arglist__23558);
return G__23557__delegate(x,y,more);
});
G__23557.cljs$core$IFn$_invoke$arity$variadic = G__23557__delegate;
return G__23557;
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
var _SLASH___1 = (function (x){return _SLASH_.cljs$core$IFn$_invoke$arity$2(1,x);
});
var _SLASH___2 = (function (x,y){return (x / y);
});
var _SLASH___3 = (function() { 
var G__23559__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_SLASH_,_SLASH_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__23559 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23559__delegate.call(this,x,y,more);};
G__23559.cljs$lang$maxFixedArity = 2;
G__23559.cljs$lang$applyTo = (function (arglist__23560){
var x = cljs.core.first(arglist__23560);
arglist__23560 = cljs.core.next(arglist__23560);
var y = cljs.core.first(arglist__23560);
var more = cljs.core.rest(arglist__23560);
return G__23559__delegate(x,y,more);
});
G__23559.cljs$core$IFn$_invoke$arity$variadic = G__23559__delegate;
return G__23559;
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
var G__23561__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__23562 = y;
var G__23563 = cljs.core.first(more);
var G__23564 = cljs.core.next(more);
x = G__23562;
y = G__23563;
more = G__23564;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__23561 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23561__delegate.call(this,x,y,more);};
G__23561.cljs$lang$maxFixedArity = 2;
G__23561.cljs$lang$applyTo = (function (arglist__23565){
var x = cljs.core.first(arglist__23565);
arglist__23565 = cljs.core.next(arglist__23565);
var y = cljs.core.first(arglist__23565);
var more = cljs.core.rest(arglist__23565);
return G__23561__delegate(x,y,more);
});
G__23561.cljs$core$IFn$_invoke$arity$variadic = G__23561__delegate;
return G__23561;
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
var G__23566__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__23567 = y;
var G__23568 = cljs.core.first(more);
var G__23569 = cljs.core.next(more);
x = G__23567;
y = G__23568;
more = G__23569;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__23566 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23566__delegate.call(this,x,y,more);};
G__23566.cljs$lang$maxFixedArity = 2;
G__23566.cljs$lang$applyTo = (function (arglist__23570){
var x = cljs.core.first(arglist__23570);
arglist__23570 = cljs.core.next(arglist__23570);
var y = cljs.core.first(arglist__23570);
var more = cljs.core.rest(arglist__23570);
return G__23566__delegate(x,y,more);
});
G__23566.cljs$core$IFn$_invoke$arity$variadic = G__23566__delegate;
return G__23566;
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
var G__23571__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__23572 = y;
var G__23573 = cljs.core.first(more);
var G__23574 = cljs.core.next(more);
x = G__23572;
y = G__23573;
more = G__23574;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__23571 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23571__delegate.call(this,x,y,more);};
G__23571.cljs$lang$maxFixedArity = 2;
G__23571.cljs$lang$applyTo = (function (arglist__23575){
var x = cljs.core.first(arglist__23575);
arglist__23575 = cljs.core.next(arglist__23575);
var y = cljs.core.first(arglist__23575);
var more = cljs.core.rest(arglist__23575);
return G__23571__delegate(x,y,more);
});
G__23571.cljs$core$IFn$_invoke$arity$variadic = G__23571__delegate;
return G__23571;
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
var G__23576__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__23577 = y;
var G__23578 = cljs.core.first(more);
var G__23579 = cljs.core.next(more);
x = G__23577;
y = G__23578;
more = G__23579;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__23576 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23576__delegate.call(this,x,y,more);};
G__23576.cljs$lang$maxFixedArity = 2;
G__23576.cljs$lang$applyTo = (function (arglist__23580){
var x = cljs.core.first(arglist__23580);
arglist__23580 = cljs.core.next(arglist__23580);
var y = cljs.core.first(arglist__23580);
var more = cljs.core.rest(arglist__23580);
return G__23576__delegate(x,y,more);
});
G__23576.cljs$core$IFn$_invoke$arity$variadic = G__23576__delegate;
return G__23576;
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
var max__2 = (function (x,y){var x__3713__auto__ = x;var y__3714__auto__ = y;return ((x__3713__auto__ > y__3714__auto__) ? x__3713__auto__ : y__3714__auto__);
});
var max__3 = (function() { 
var G__23581__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(max,(function (){var x__3713__auto__ = x;var y__3714__auto__ = y;return ((x__3713__auto__ > y__3714__auto__) ? x__3713__auto__ : y__3714__auto__);
})(),more);
};
var G__23581 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23581__delegate.call(this,x,y,more);};
G__23581.cljs$lang$maxFixedArity = 2;
G__23581.cljs$lang$applyTo = (function (arglist__23582){
var x = cljs.core.first(arglist__23582);
arglist__23582 = cljs.core.next(arglist__23582);
var y = cljs.core.first(arglist__23582);
var more = cljs.core.rest(arglist__23582);
return G__23581__delegate(x,y,more);
});
G__23581.cljs$core$IFn$_invoke$arity$variadic = G__23581__delegate;
return G__23581;
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
var min__2 = (function (x,y){var x__3720__auto__ = x;var y__3721__auto__ = y;return ((x__3720__auto__ < y__3721__auto__) ? x__3720__auto__ : y__3721__auto__);
});
var min__3 = (function() { 
var G__23583__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(min,(function (){var x__3720__auto__ = x;var y__3721__auto__ = y;return ((x__3720__auto__ < y__3721__auto__) ? x__3720__auto__ : y__3721__auto__);
})(),more);
};
var G__23583 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23583__delegate.call(this,x,y,more);};
G__23583.cljs$lang$maxFixedArity = 2;
G__23583.cljs$lang$applyTo = (function (arglist__23584){
var x = cljs.core.first(arglist__23584);
arglist__23584 = cljs.core.next(arglist__23584);
var y = cljs.core.first(arglist__23584);
var more = cljs.core.rest(arglist__23584);
return G__23583__delegate(x,y,more);
});
G__23583.cljs$core$IFn$_invoke$arity$variadic = G__23583__delegate;
return G__23583;
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
{if(cljs.core.constant$keyword$237)
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
var G__23585__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add,(x + y),more);
};
var G__23585 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23585__delegate.call(this,x,y,more);};
G__23585.cljs$lang$maxFixedArity = 2;
G__23585.cljs$lang$applyTo = (function (arglist__23586){
var x = cljs.core.first(arglist__23586);
arglist__23586 = cljs.core.next(arglist__23586);
var y = cljs.core.first(arglist__23586);
var more = cljs.core.rest(arglist__23586);
return G__23585__delegate(x,y,more);
});
G__23585.cljs$core$IFn$_invoke$arity$variadic = G__23585__delegate;
return G__23585;
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
var G__23587__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_add_int,(x + y),more);
};
var G__23587 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23587__delegate.call(this,x,y,more);};
G__23587.cljs$lang$maxFixedArity = 2;
G__23587.cljs$lang$applyTo = (function (arglist__23588){
var x = cljs.core.first(arglist__23588);
arglist__23588 = cljs.core.next(arglist__23588);
var y = cljs.core.first(arglist__23588);
var more = cljs.core.rest(arglist__23588);
return G__23587__delegate(x,y,more);
});
G__23587.cljs$core$IFn$_invoke$arity$variadic = G__23587__delegate;
return G__23587;
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
var unchecked_divide_int__1 = (function (x){return unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(1,x);
});
var unchecked_divide_int__2 = (function (x,y){return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__23589__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_divide_int,unchecked_divide_int.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__23589 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23589__delegate.call(this,x,y,more);};
G__23589.cljs$lang$maxFixedArity = 2;
G__23589.cljs$lang$applyTo = (function (arglist__23590){
var x = cljs.core.first(arglist__23590);
arglist__23590 = cljs.core.next(arglist__23590);
var y = cljs.core.first(arglist__23590);
var more = cljs.core.rest(arglist__23590);
return G__23589__delegate(x,y,more);
});
G__23589.cljs$core$IFn$_invoke$arity$variadic = G__23589__delegate;
return G__23589;
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
var G__23591__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply,(x * y),more);
};
var G__23591 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23591__delegate.call(this,x,y,more);};
G__23591.cljs$lang$maxFixedArity = 2;
G__23591.cljs$lang$applyTo = (function (arglist__23592){
var x = cljs.core.first(arglist__23592);
arglist__23592 = cljs.core.next(arglist__23592);
var y = cljs.core.first(arglist__23592);
var more = cljs.core.rest(arglist__23592);
return G__23591__delegate(x,y,more);
});
G__23591.cljs$core$IFn$_invoke$arity$variadic = G__23591__delegate;
return G__23591;
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
var G__23593__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_multiply_int,(x * y),more);
};
var G__23593 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23593__delegate.call(this,x,y,more);};
G__23593.cljs$lang$maxFixedArity = 2;
G__23593.cljs$lang$applyTo = (function (arglist__23594){
var x = cljs.core.first(arglist__23594);
arglist__23594 = cljs.core.next(arglist__23594);
var y = cljs.core.first(arglist__23594);
var more = cljs.core.rest(arglist__23594);
return G__23593__delegate(x,y,more);
});
G__23593.cljs$core$IFn$_invoke$arity$variadic = G__23593__delegate;
return G__23593;
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
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){return (cljs.core.mod.cljs$core$IFn$_invoke$arity$2 ? cljs.core.mod.cljs$core$IFn$_invoke$arity$2(x,n) : cljs.core.mod.call(null,x,n));
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
var G__23595__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_substract,(x - y),more);
};
var G__23595 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23595__delegate.call(this,x,y,more);};
G__23595.cljs$lang$maxFixedArity = 2;
G__23595.cljs$lang$applyTo = (function (arglist__23596){
var x = cljs.core.first(arglist__23596);
arglist__23596 = cljs.core.next(arglist__23596);
var y = cljs.core.first(arglist__23596);
var more = cljs.core.rest(arglist__23596);
return G__23595__delegate(x,y,more);
});
G__23595.cljs$core$IFn$_invoke$arity$variadic = G__23595__delegate;
return G__23595;
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
var G__23597__delegate = function (x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(unchecked_substract_int,(x - y),more);
};
var G__23597 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23597__delegate.call(this,x,y,more);};
G__23597.cljs$lang$maxFixedArity = 2;
G__23597.cljs$lang$applyTo = (function (arglist__23598){
var x = cljs.core.first(arglist__23598);
arglist__23598 = cljs.core.next(arglist__23598);
var y = cljs.core.first(arglist__23598);
var more = cljs.core.rest(arglist__23598);
return G__23597__delegate(x,y,more);
});
G__23597.cljs$core$IFn$_invoke$arity$variadic = G__23597__delegate;
return G__23597;
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
{return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(q) : Math.floor.call(null,q));
} else
{return (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1(q) : Math.ceil.call(null,q));
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
cljs.core.unchecked_int = (function unchecked_int(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){return cljs.core.fix(x);
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
cljs.core.quot = (function quot(n,d){var rem = (n % d);return cljs.core.fix(((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){var q = cljs.core.quot(n,d);return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return (Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){return (n * rand.cljs$core$IFn$_invoke$arity$0());
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
cljs.core.rand_int = (function rand_int(n){return cljs.core.fix(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(n));
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
var _EQ__EQ___2 = (function (x,y){return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__23599__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y))
{if(cljs.core.next(more))
{{
var G__23600 = y;
var G__23601 = cljs.core.first(more);
var G__23602 = cljs.core.next(more);
x = G__23600;
y = G__23601;
more = G__23602;
continue;
}
} else
{return _EQ__EQ_.cljs$core$IFn$_invoke$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__23599 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23599__delegate.call(this,x,y,more);};
G__23599.cljs$lang$maxFixedArity = 2;
G__23599.cljs$lang$applyTo = (function (arglist__23603){
var x = cljs.core.first(arglist__23603);
arglist__23603 = cljs.core.next(arglist__23603);
var y = cljs.core.first(arglist__23603);
var more = cljs.core.rest(arglist__23603);
return G__23599__delegate(x,y,more);
});
G__23599.cljs$core$IFn$_invoke$arity$variadic = G__23599__delegate;
return G__23599;
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
cljs.core.nthnext = (function nthnext(coll,n){var n__$1 = n;var xs = cljs.core.seq(coll);while(true){
if((xs) && ((n__$1 > 0)))
{{
var G__23604 = (n__$1 - 1);
var G__23605 = cljs.core.next(xs);
n__$1 = G__23604;
xs = G__23605;
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
var G__23606__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.cljs$core$IFn$_invoke$arity$1(x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__23607 = sb.append(str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(more)));
var G__23608 = cljs.core.next(more);
sb = G__23607;
more = G__23608;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__23606 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__23606__delegate.call(this,x,ys);};
G__23606.cljs$lang$maxFixedArity = 1;
G__23606.cljs$lang$applyTo = (function (arglist__23609){
var x = cljs.core.first(arglist__23609);
var ys = cljs.core.rest(arglist__23609);
return G__23606__delegate(x,ys);
});
G__23606.cljs$core$IFn$_invoke$arity$variadic = G__23606__delegate;
return G__23606;
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
cljs.core.equiv_sequential = (function equiv_sequential(x,y){return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(function (){var xs = cljs.core.seq(x);var ys = cljs.core.seq(y);while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys)))
{{
var G__23610 = cljs.core.next(xs);
var G__23611 = cljs.core.next(ys);
xs = G__23610;
ys = G__23611;
continue;
}
} else
{if(cljs.core.constant$keyword$237)
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
cljs.core.hash_coll = (function hash_coll(coll){if(cljs.core.seq(coll))
{var res = cljs.core.hash(cljs.core.first(coll));var s = cljs.core.next(coll);while(true){
if((s == null))
{return res;
} else
{{
var G__23612 = cljs.core.hash_combine(res,cljs.core.hash(cljs.core.first(s)));
var G__23613 = cljs.core.next(s);
res = G__23612;
s = G__23613;
continue;
}
}
break;
}
} else
{return 0;
}
});
cljs.core.hash_imap = (function hash_imap(m){var h = 0;var s = cljs.core.seq(m);while(true){
if(s)
{var e = cljs.core.first(s);{
var G__23614 = ((h + (cljs.core.hash((cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.key.call(null,e))) ^ cljs.core.hash((cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.val.call(null,e))))) % 4503599627370496);
var G__23615 = cljs.core.next(s);
h = G__23614;
s = G__23615;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){var h = 0;var s__$1 = cljs.core.seq(s);while(true){
if(s__$1)
{var e = cljs.core.first(s__$1);{
var G__23616 = ((h + cljs.core.hash(e)) % 4503599627370496);
var G__23617 = cljs.core.next(s__$1);
h = G__23616;
s__$1 = G__23617;
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
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__23624_23630 = cljs.core.seq(fn_map);var chunk__23625_23631 = null;var count__23626_23632 = 0;var i__23627_23633 = 0;while(true){
if((i__23627_23633 < count__23626_23632))
{var vec__23628_23634 = chunk__23625_23631.cljs$core$IIndexed$_nth$arity$2(null,i__23627_23633);var key_name_23635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23628_23634,0,null);var f_23636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23628_23634,1,null);var str_name_23637 = (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(key_name_23635) : cljs.core.name.call(null,key_name_23635));(obj[str_name_23637] = f_23636);
{
var G__23638 = seq__23624_23630;
var G__23639 = chunk__23625_23631;
var G__23640 = count__23626_23632;
var G__23641 = (i__23627_23633 + 1);
seq__23624_23630 = G__23638;
chunk__23625_23631 = G__23639;
count__23626_23632 = G__23640;
i__23627_23633 = G__23641;
continue;
}
} else
{var temp__4092__auto___23642 = cljs.core.seq(seq__23624_23630);if(temp__4092__auto___23642)
{var seq__23624_23643__$1 = temp__4092__auto___23642;if(cljs.core.chunked_seq_QMARK_(seq__23624_23643__$1))
{var c__4148__auto___23644 = (cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_first.cljs$core$IFn$_invoke$arity$1(seq__23624_23643__$1) : cljs.core.chunk_first.call(null,seq__23624_23643__$1));{
var G__23645 = (cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1 ? cljs.core.chunk_rest.cljs$core$IFn$_invoke$arity$1(seq__23624_23643__$1) : cljs.core.chunk_rest.call(null,seq__23624_23643__$1));
var G__23646 = c__4148__auto___23644;
var G__23647 = cljs.core.count(c__4148__auto___23644);
var G__23648 = 0;
seq__23624_23630 = G__23645;
chunk__23625_23631 = G__23646;
count__23626_23632 = G__23647;
i__23627_23633 = G__23648;
continue;
}
} else
{var vec__23629_23649 = cljs.core.first(seq__23624_23643__$1);var key_name_23650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23629_23649,0,null);var f_23651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23629_23649,1,null);var str_name_23652 = (cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(key_name_23650) : cljs.core.name.call(null,key_name_23650));(obj[str_name_23652] = f_23651);
{
var G__23653 = cljs.core.next(seq__23624_23643__$1);
var G__23654 = null;
var G__23655 = 0;
var G__23656 = 0;
seq__23624_23630 = G__23653;
chunk__23625_23631 = G__23654;
count__23626_23632 = G__23655;
i__23627_23633 = G__23656;
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
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
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
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
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
var coll__$1 = this;return cljs.core._rest(coll__$1);
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
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$ICloneable$ = true;
cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
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
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/EmptyList");
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
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
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
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$ICloneable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.EmptyList(self__.meta));
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
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__23658 = coll;if(G__23658)
{var bit__4050__auto__ = (G__23658.cljs$lang$protocol_mask$partition0$ & 134217728);if((bit__4050__auto__) || (G__23658.cljs$core$IReversible$))
{return true;
} else
{if((!G__23658.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__23658);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IReversible,G__23658);
}
});
cljs.core.rseq = (function rseq(coll){return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === 0)))?xs.arr:(function (){var arr = [];var xs__$1 = xs;while(true){
if(!((xs__$1 == null)))
{arr.push(xs__$1.cljs$core$ISeq$_first$arity$1(null));
{
var G__23659 = xs__$1.cljs$core$INext$_next$arity$1(null);
xs__$1 = G__23659;
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
var G__23660 = (i - 1);
var G__23661 = r.cljs$core$ICollection$_conj$arity$2(null,(arr[(i - 1)]));
i = G__23660;
r = G__23661;
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
list.cljs$lang$applyTo = (function (arglist__23662){
var xs = cljs.core.seq(arglist__23662);
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
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return null;
} else
{return cljs.core.seq(self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});
cljs.core.Cons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
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
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$ICloneable$ = true;
cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){return (new cljs.core.Cons(meta,first,rest,__hash));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){if((function (){var or__3406__auto__ = (coll == null);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var G__23666 = coll;if(G__23666)
{var bit__4043__auto__ = (G__23666.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4043__auto__) || (G__23666.cljs$core$ISeq$))
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
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){var G__23668 = x;if(G__23668)
{var bit__4050__auto__ = (G__23668.cljs$lang$protocol_mask$partition0$ & 33554432);if((bit__4050__auto__) || (G__23668.cljs$core$IList$))
{return true;
} else
{if((!G__23668.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__23668);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IList,G__23668);
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
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write(writer,[cljs.core.str(":"),cljs.core.str(self__.fqn)].join(''));
});
cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if((self__._hash == null))
{self__._hash = (cljs.core.hash_combine(cljs.core.hash(self__.ns),cljs.core.hash(self__.name)) + 2654435769);
return self__._hash;
} else
{return self__._hash;
}
});
cljs.core.Keyword.prototype.call = (function() {
var G__23670 = null;
var G__23670__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
var G__23670__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var kw = self____$1;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
G__23670 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__23670__2.call(this,self__,coll);
case 3:
return G__23670__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23670;
})()
;
cljs.core.Keyword.prototype.apply = (function (self__,args23669){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23669)));
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,kw);
});
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var kw = this;return cljs.core.get.cljs$core$IFn$_invoke$arity$3(coll,kw,not_found);
});
cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Keyword))
{return (self__.fqn === other.fqn);
} else
{return false;
}
});
cljs.core.Keyword.prototype.cljs$core$ICloneable$ = true;
cljs.core.Keyword.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Keyword(self__.ns,self__.name,self__.fqn,self__._hash));
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
cljs.core.namespace = (function namespace(x){if((function (){var G__23672 = x;if(G__23672)
{var bit__4043__auto__ = (G__23672.cljs$lang$protocol_mask$partition1$ & 4096);if((bit__4043__auto__) || (G__23672.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(null);
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
{return (new cljs.core.Keyword(cljs.core.namespace(name),(cljs.core.name.cljs$core$IFn$_invoke$arity$1 ? cljs.core.name.cljs$core$IFn$_invoke$arity$1(name) : cljs.core.name.call(null,name)),name.str,null));
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
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.next(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.LazySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.LazySeq.prototype.sval = (function (){var self__ = this;
var coll = this;if((self__.fn == null))
{return self__.s;
} else
{self__.s = (self__.fn.cljs$core$IFn$_invoke$arity$0 ? self__.fn.cljs$core$IFn$_invoke$arity$0() : self__.fn.call(null));
self__.fn = null;
return self__.s;
}
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;coll__$1.sval();
if((self__.s == null))
{return null;
} else
{var ls = self__.s;while(true){
if((ls instanceof cljs.core.LazySeq))
{{
var G__23673 = ls.sval();
ls = G__23673;
continue;
}
} else
{self__.s = ls;
return cljs.core.seq(self__.s);
}
break;
}
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if((self__.s == null))
{return null;
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;cljs.core._seq(coll__$1);
if(!((self__.s == null)))
{return cljs.core.rest(self__.s);
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.LazySeq(meta__$1,self__.fn,self__.s,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/ChunkBuffer");
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
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,(self__.arr[self__.off]),(self__.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.cljs$core$IFn$_invoke$arity$4(self__.arr,f,start,self__.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
} else
{var more__$1 = cljs.core._seq(self__.more);if((more__$1 == null))
{return null;
} else
{return more__$1;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return cljs.core.cons(o,this$__$1);
});
cljs.core.ChunkedCons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core._count(self__.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(self__.chunk),self__.more,self__.meta,null));
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
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
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
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){if((cljs.core._count(chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){return b.add(x);
});
cljs.core.chunk = (function chunk(b){return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){if((function (){var G__23675 = s;if(G__23675)
{var bit__4043__auto__ = (G__23675.cljs$lang$protocol_mask$partition1$ & 1024);if((bit__4043__auto__) || (G__23675.cljs$core$IChunkedNext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){var ary = [];var s__$1 = s;while(true){
if(cljs.core.seq(s__$1))
{ary.push(cljs.core.first(s__$1));
{
var G__23676 = cljs.core.next(s__$1);
s__$1 = G__23676;
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
cljs.core.to_array_2d = (function to_array_2d(coll){var ret = (new Array(cljs.core.count(coll)));var i_23677 = 0;var xs_23678 = cljs.core.seq(coll);while(true){
if(xs_23678)
{(ret[i_23677] = cljs.core.to_array(cljs.core.first(xs_23678)));
{
var G__23679 = (i_23677 + 1);
var G__23680 = cljs.core.next(xs_23678);
i_23677 = G__23679;
xs_23678 = G__23680;
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
{return int_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var int_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = 0;var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__23681 = (i + 1);
var G__23682 = cljs.core.next(s__$1);
i = G__23681;
s__$1 = G__23682;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4248__auto___23683 = size;var i_23684 = 0;while(true){
if((i_23684 < n__4248__auto___23683))
{(a[i_23684] = init_val_or_seq);
{
var G__23685 = (i_23684 + 1);
i_23684 = G__23685;
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
{return long_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var long_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = 0;var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__23686 = (i + 1);
var G__23687 = cljs.core.next(s__$1);
i = G__23686;
s__$1 = G__23687;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4248__auto___23688 = size;var i_23689 = 0;while(true){
if((i_23689 < n__4248__auto___23688))
{(a[i_23689] = init_val_or_seq);
{
var G__23690 = (i_23689 + 1);
i_23689 = G__23690;
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
{return double_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var double_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = 0;var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__23691 = (i + 1);
var G__23692 = cljs.core.next(s__$1);
i = G__23691;
s__$1 = G__23692;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4248__auto___23693 = size;var i_23694 = 0;while(true){
if((i_23694 < n__4248__auto___23693))
{(a[i_23694] = init_val_or_seq);
{
var G__23695 = (i_23694 + 1);
i_23694 = G__23695;
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
{return object_array.cljs$core$IFn$_invoke$arity$2(size_or_seq,null);
} else
{return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(size_or_seq);
}
});
var object_array__2 = (function (size,init_val_or_seq){var a = (new Array(size));if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s = cljs.core.seq(init_val_or_seq);var i = 0;var s__$1 = s;while(true){
if((s__$1) && ((i < size)))
{(a[i] = cljs.core.first(s__$1));
{
var G__23696 = (i + 1);
var G__23697 = cljs.core.next(s__$1);
i = G__23696;
s__$1 = G__23697;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__4248__auto___23698 = size;var i_23699 = 0;while(true){
if((i_23699 < n__4248__auto___23698))
{(a[i_23699] = init_val_or_seq);
{
var G__23700 = (i_23699 + 1);
i_23699 = G__23700;
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
cljs.core.bounded_count = (function bounded_count(s,n){if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__$1 = s;var i = n;var sum = 0;while(true){
if(((i > 0)) && (cljs.core.seq(s__$1)))
{{
var G__23701 = cljs.core.next(s__$1);
var G__23702 = (i - 1);
var G__23703 = (sum + 1);
s__$1 = G__23701;
i = G__23702;
sum = G__23703;
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
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{if(cljs.core.constant$keyword$237)
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));
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
var concat__2 = (function (x,y){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.seq(x);if(s)
{if(cljs.core.chunked_seq_QMARK_(s))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.chunk_rest(s),y));
} else
{return cljs.core.cons(cljs.core.first(s),concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s),y));
}
} else
{return y;
}
}),null,null));
});
var concat__3 = (function() { 
var G__23704__delegate = function (x,y,zs){var cat = (function cat(xys,zs__$1){return (new cljs.core.LazySeq(null,(function (){var xys__$1 = cljs.core.seq(xys);if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_(xys__$1))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__$1),cat(cljs.core.chunk_rest(xys__$1),zs__$1));
} else
{return cljs.core.cons(cljs.core.first(xys__$1),cat(cljs.core.rest(xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat(cljs.core.first(zs__$1),cljs.core.next(zs__$1));
} else
{return null;
}
}
}),null,null));
});return cat(concat.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__23704 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23704__delegate.call(this,x,y,zs);};
G__23704.cljs$lang$maxFixedArity = 2;
G__23704.cljs$lang$applyTo = (function (arglist__23705){
var x = cljs.core.first(arglist__23705);
arglist__23705 = cljs.core.next(arglist__23705);
var y = cljs.core.first(arglist__23705);
var zs = cljs.core.rest(arglist__23705);
return G__23704__delegate(x,y,zs);
});
G__23704.cljs$core$IFn$_invoke$arity$variadic = G__23704__delegate;
return G__23704;
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
var list_STAR___1 = (function (args){return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__23706__delegate = function (a,b,c,d,more){return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__23706 = function (a,b,c,d,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__23706__delegate.call(this,a,b,c,d,more);};
G__23706.cljs$lang$maxFixedArity = 4;
G__23706.cljs$lang$applyTo = (function (arglist__23707){
var a = cljs.core.first(arglist__23707);
arglist__23707 = cljs.core.next(arglist__23707);
var b = cljs.core.first(arglist__23707);
arglist__23707 = cljs.core.next(arglist__23707);
var c = cljs.core.first(arglist__23707);
arglist__23707 = cljs.core.next(arglist__23707);
var d = cljs.core.first(arglist__23707);
var more = cljs.core.rest(arglist__23707);
return G__23706__delegate(a,b,c,d,more);
});
G__23706.cljs$core$IFn$_invoke$arity$variadic = G__23706__delegate;
return G__23706;
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
cljs.core.transient$ = (function transient$(coll){return cljs.core._as_transient(coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){return cljs.core._persistent_BANG_(tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){return cljs.core._conj_BANG_(tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){return cljs.core._assoc_BANG_(tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){return cljs.core._dissoc_BANG_(tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){return cljs.core._pop_BANG_(tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){return cljs.core._disjoin_BANG_(tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){var args__$1 = cljs.core.seq(args);if((argc === 0))
{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else
{var a = cljs.core._first(args__$1);var args__$2 = cljs.core._rest(args__$1);if((argc === 1))
{if(f.cljs$core$IFn$_invoke$arity$1)
{return f.cljs$core$IFn$_invoke$arity$1(a);
} else
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
}
} else
{var b = cljs.core._first(args__$2);var args__$3 = cljs.core._rest(args__$2);if((argc === 2))
{if(f.cljs$core$IFn$_invoke$arity$2)
{return f.cljs$core$IFn$_invoke$arity$2(a,b);
} else
{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,b) : f.call(null,a,b));
}
} else
{var c = cljs.core._first(args__$3);var args__$4 = cljs.core._rest(args__$3);if((argc === 3))
{if(f.cljs$core$IFn$_invoke$arity$3)
{return f.cljs$core$IFn$_invoke$arity$3(a,b,c);
} else
{return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(a,b,c) : f.call(null,a,b,c));
}
} else
{var d = cljs.core._first(args__$4);var args__$5 = cljs.core._rest(args__$4);if((argc === 4))
{if(f.cljs$core$IFn$_invoke$arity$4)
{return f.cljs$core$IFn$_invoke$arity$4(a,b,c,d);
} else
{return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : f.call(null,a,b,c,d));
}
} else
{var e = cljs.core._first(args__$5);var args__$6 = cljs.core._rest(args__$5);if((argc === 5))
{if(f.cljs$core$IFn$_invoke$arity$5)
{return f.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e);
} else
{return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : f.call(null,a,b,c,d,e));
}
} else
{var f__$1 = cljs.core._first(args__$6);var args__$7 = cljs.core._rest(args__$6);if((argc === 6))
{if(f__$1.cljs$core$IFn$_invoke$arity$6)
{return f__$1.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$6 ? f__$1.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : f__$1.call(null,a,b,c,d,e,f__$1));
}
} else
{var g = cljs.core._first(args__$7);var args__$8 = cljs.core._rest(args__$7);if((argc === 7))
{if(f__$1.cljs$core$IFn$_invoke$arity$7)
{return f__$1.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$7 ? f__$1.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : f__$1.call(null,a,b,c,d,e,f__$1,g));
}
} else
{var h = cljs.core._first(args__$8);var args__$9 = cljs.core._rest(args__$8);if((argc === 8))
{if(f__$1.cljs$core$IFn$_invoke$arity$8)
{return f__$1.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$8 ? f__$1.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : f__$1.call(null,a,b,c,d,e,f__$1,g,h));
}
} else
{var i = cljs.core._first(args__$9);var args__$10 = cljs.core._rest(args__$9);if((argc === 9))
{if(f__$1.cljs$core$IFn$_invoke$arity$9)
{return f__$1.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$9 ? f__$1.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i));
}
} else
{var j = cljs.core._first(args__$10);var args__$11 = cljs.core._rest(args__$10);if((argc === 10))
{if(f__$1.cljs$core$IFn$_invoke$arity$10)
{return f__$1.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$10 ? f__$1.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j));
}
} else
{var k = cljs.core._first(args__$11);var args__$12 = cljs.core._rest(args__$11);if((argc === 11))
{if(f__$1.cljs$core$IFn$_invoke$arity$11)
{return f__$1.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$11 ? f__$1.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
}
} else
{var l = cljs.core._first(args__$12);var args__$13 = cljs.core._rest(args__$12);if((argc === 12))
{if(f__$1.cljs$core$IFn$_invoke$arity$12)
{return f__$1.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$12 ? f__$1.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
}
} else
{var m = cljs.core._first(args__$13);var args__$14 = cljs.core._rest(args__$13);if((argc === 13))
{if(f__$1.cljs$core$IFn$_invoke$arity$13)
{return f__$1.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$13 ? f__$1.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
}
} else
{var n = cljs.core._first(args__$14);var args__$15 = cljs.core._rest(args__$14);if((argc === 14))
{if(f__$1.cljs$core$IFn$_invoke$arity$14)
{return f__$1.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$14 ? f__$1.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
}
} else
{var o = cljs.core._first(args__$15);var args__$16 = cljs.core._rest(args__$15);if((argc === 15))
{if(f__$1.cljs$core$IFn$_invoke$arity$15)
{return f__$1.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$15 ? f__$1.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
}
} else
{var p = cljs.core._first(args__$16);var args__$17 = cljs.core._rest(args__$16);if((argc === 16))
{if(f__$1.cljs$core$IFn$_invoke$arity$16)
{return f__$1.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$16 ? f__$1.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
}
} else
{var q = cljs.core._first(args__$17);var args__$18 = cljs.core._rest(args__$17);if((argc === 17))
{if(f__$1.cljs$core$IFn$_invoke$arity$17)
{return f__$1.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$17 ? f__$1.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
}
} else
{var r = cljs.core._first(args__$18);var args__$19 = cljs.core._rest(args__$18);if((argc === 18))
{if(f__$1.cljs$core$IFn$_invoke$arity$18)
{return f__$1.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$18 ? f__$1.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
}
} else
{var s = cljs.core._first(args__$19);var args__$20 = cljs.core._rest(args__$19);if((argc === 19))
{if(f__$1.cljs$core$IFn$_invoke$arity$19)
{return f__$1.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$19 ? f__$1.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
}
} else
{var t = cljs.core._first(args__$20);var args__$21 = cljs.core._rest(args__$20);if((argc === 20))
{if(f__$1.cljs$core$IFn$_invoke$arity$20)
{return f__$1.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{return (f__$1.cljs$core$IFn$_invoke$arity$20 ? f__$1.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
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
{var bc = cljs.core.bounded_count(args,(fixed_arity + 1));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + 1));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__4 = (function (f,x,y,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + 1));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__5 = (function (f,x,y,z,args){var arglist = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args);var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + 1));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
});
var apply__6 = (function() { 
var G__23708__delegate = function (f,a,b,c,d,args){var arglist = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));var fixed_arity = f.cljs$lang$maxFixedArity;if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count(arglist,(fixed_arity + 1));if((bc <= fixed_arity))
{return cljs.core.apply_to(f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array(arglist));
}
};
var G__23708 = function (f,a,b,c,d,var_args){
var args = null;if (arguments.length > 5) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__23708__delegate.call(this,f,a,b,c,d,args);};
G__23708.cljs$lang$maxFixedArity = 5;
G__23708.cljs$lang$applyTo = (function (arglist__23709){
var f = cljs.core.first(arglist__23709);
arglist__23709 = cljs.core.next(arglist__23709);
var a = cljs.core.first(arglist__23709);
arglist__23709 = cljs.core.next(arglist__23709);
var b = cljs.core.first(arglist__23709);
arglist__23709 = cljs.core.next(arglist__23709);
var c = cljs.core.first(arglist__23709);
arglist__23709 = cljs.core.next(arglist__23709);
var d = cljs.core.first(arglist__23709);
var args = cljs.core.rest(arglist__23709);
return G__23708__delegate(f,a,b,c,d,args);
});
G__23708.cljs$core$IFn$_invoke$arity$variadic = G__23708__delegate;
return G__23708;
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
var vary_meta = null;
var vary_meta__2 = (function (obj,f){return cljs.core.with_meta(obj,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj)) : f.call(null,cljs.core.meta(obj))));
});
var vary_meta__3 = (function (obj,f,a){return cljs.core.with_meta(obj,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(obj),a) : f.call(null,cljs.core.meta(obj),a)));
});
var vary_meta__4 = (function (obj,f,a,b){return cljs.core.with_meta(obj,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(obj),a,b) : f.call(null,cljs.core.meta(obj),a,b)));
});
var vary_meta__5 = (function (obj,f,a,b,c){return cljs.core.with_meta(obj,(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(cljs.core.meta(obj),a,b,c) : f.call(null,cljs.core.meta(obj),a,b,c)));
});
var vary_meta__6 = (function (obj,f,a,b,c,d){return cljs.core.with_meta(obj,(f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(cljs.core.meta(obj),a,b,c,d) : f.call(null,cljs.core.meta(obj),a,b,c,d)));
});
var vary_meta__7 = (function() { 
var G__23710__delegate = function (obj,f,a,b,c,d,args){return cljs.core.with_meta(obj,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.meta(obj),a,b,c,cljs.core.array_seq([d,args], 0)));
};
var G__23710 = function (obj,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__23710__delegate.call(this,obj,f,a,b,c,d,args);};
G__23710.cljs$lang$maxFixedArity = 6;
G__23710.cljs$lang$applyTo = (function (arglist__23711){
var obj = cljs.core.first(arglist__23711);
arglist__23711 = cljs.core.next(arglist__23711);
var f = cljs.core.first(arglist__23711);
arglist__23711 = cljs.core.next(arglist__23711);
var a = cljs.core.first(arglist__23711);
arglist__23711 = cljs.core.next(arglist__23711);
var b = cljs.core.first(arglist__23711);
arglist__23711 = cljs.core.next(arglist__23711);
var c = cljs.core.first(arglist__23711);
arglist__23711 = cljs.core.next(arglist__23711);
var d = cljs.core.first(arglist__23711);
var args = cljs.core.rest(arglist__23711);
return G__23710__delegate(obj,f,a,b,c,d,args);
});
G__23710.cljs$core$IFn$_invoke$arity$variadic = G__23710__delegate;
return G__23710;
})()
;
vary_meta = function(obj,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return vary_meta__2.call(this,obj,f);
case 3:
return vary_meta__3.call(this,obj,f,a);
case 4:
return vary_meta__4.call(this,obj,f,a,b);
case 5:
return vary_meta__5.call(this,obj,f,a,b,c);
case 6:
return vary_meta__6.call(this,obj,f,a,b,c,d);
default:
return vary_meta__7.cljs$core$IFn$_invoke$arity$variadic(obj,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vary_meta.cljs$lang$maxFixedArity = 6;
vary_meta.cljs$lang$applyTo = vary_meta__7.cljs$lang$applyTo;
vary_meta.cljs$core$IFn$_invoke$arity$2 = vary_meta__2;
vary_meta.cljs$core$IFn$_invoke$arity$3 = vary_meta__3;
vary_meta.cljs$core$IFn$_invoke$arity$4 = vary_meta__4;
vary_meta.cljs$core$IFn$_invoke$arity$5 = vary_meta__5;
vary_meta.cljs$core$IFn$_invoke$arity$6 = vary_meta__6;
vary_meta.cljs$core$IFn$_invoke$arity$variadic = vary_meta__7.cljs$core$IFn$_invoke$arity$variadic;
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
var not_EQ___2 = (function (x,y){return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__23712__delegate = function (x,y,more){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._EQ_,x,y,more));
};
var G__23712 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23712__delegate.call(this,x,y,more);};
G__23712.cljs$lang$maxFixedArity = 2;
G__23712.cljs$lang$applyTo = (function (arglist__23713){
var x = cljs.core.first(arglist__23713);
arglist__23713 = cljs.core.next(arglist__23713);
var y = cljs.core.first(arglist__23713);
var more = cljs.core.rest(arglist__23713);
return G__23712__delegate(x,y,more);
});
G__23712.cljs$core$IFn$_invoke$arity$variadic = G__23712__delegate;
return G__23712;
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
cljs.core.not_empty = (function not_empty(coll){if(cljs.core.seq(coll))
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
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)))))
{{
var G__23714 = pred;
var G__23715 = cljs.core.next(coll);
pred = G__23714;
coll = G__23715;
continue;
}
} else
{if(cljs.core.constant$keyword$237)
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
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){while(true){
if(cljs.core.seq(coll))
{var or__3406__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{{
var G__23716 = pred;
var G__23717 = cljs.core.next(coll);
pred = G__23716;
coll = G__23717;
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
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){if(cljs.core.integer_QMARK_(n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){return !(cljs.core.even_QMARK_(n));
});
cljs.core.identity = (function identity(x){return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){return (function() {
var G__23718 = null;
var G__23718__0 = (function (){return cljs.core.not((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});
var G__23718__1 = (function (x){return cljs.core.not((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
});
var G__23718__2 = (function (x,y){return cljs.core.not((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)));
});
var G__23718__3 = (function() { 
var G__23719__delegate = function (x,y,zs){return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,x,y,zs));
};
var G__23719 = function (x,y,var_args){
var zs = null;if (arguments.length > 2) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23719__delegate.call(this,x,y,zs);};
G__23719.cljs$lang$maxFixedArity = 2;
G__23719.cljs$lang$applyTo = (function (arglist__23720){
var x = cljs.core.first(arglist__23720);
arglist__23720 = cljs.core.next(arglist__23720);
var y = cljs.core.first(arglist__23720);
var zs = cljs.core.rest(arglist__23720);
return G__23719__delegate(x,y,zs);
});
G__23719.cljs$core$IFn$_invoke$arity$variadic = G__23719__delegate;
return G__23719;
})()
;
G__23718 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__23718__0.call(this);
case 1:
return G__23718__1.call(this,x);
case 2:
return G__23718__2.call(this,x,y);
default:
return G__23718__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23718.cljs$lang$maxFixedArity = 2;
G__23718.cljs$lang$applyTo = G__23718__3.cljs$lang$applyTo;
return G__23718;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){return (function() { 
var G__23721__delegate = function (args){return x;
};
var G__23721 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23721__delegate.call(this,args);};
G__23721.cljs$lang$maxFixedArity = 0;
G__23721.cljs$lang$applyTo = (function (arglist__23722){
var args = cljs.core.seq(arglist__23722);
return G__23721__delegate(args);
});
G__23721.cljs$core$IFn$_invoke$arity$variadic = G__23721__delegate;
return G__23721;
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
var G__23723 = null;
var G__23723__0 = (function (){return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null))) : f.call(null,(g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null))));
});
var G__23723__1 = (function (x){return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x))) : f.call(null,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x))));
});
var G__23723__2 = (function (x,y){return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(x,y) : g.call(null,x,y))) : f.call(null,(g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(x,y) : g.call(null,x,y))));
});
var G__23723__3 = (function (x,y,z){return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(x,y,z) : g.call(null,x,y,z))) : f.call(null,(g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(x,y,z) : g.call(null,x,y,z))));
});
var G__23723__4 = (function() { 
var G__23724__delegate = function (x,y,z,args){return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)) : f.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)));
};
var G__23724 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23724__delegate.call(this,x,y,z,args);};
G__23724.cljs$lang$maxFixedArity = 3;
G__23724.cljs$lang$applyTo = (function (arglist__23725){
var x = cljs.core.first(arglist__23725);
arglist__23725 = cljs.core.next(arglist__23725);
var y = cljs.core.first(arglist__23725);
arglist__23725 = cljs.core.next(arglist__23725);
var z = cljs.core.first(arglist__23725);
var args = cljs.core.rest(arglist__23725);
return G__23724__delegate(x,y,z,args);
});
G__23724.cljs$core$IFn$_invoke$arity$variadic = G__23724__delegate;
return G__23724;
})()
;
G__23723 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__23723__0.call(this);
case 1:
return G__23723__1.call(this,x);
case 2:
return G__23723__2.call(this,x,y);
case 3:
return G__23723__3.call(this,x,y,z);
default:
return G__23723__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23723.cljs$lang$maxFixedArity = 3;
G__23723.cljs$lang$applyTo = G__23723__4.cljs$lang$applyTo;
return G__23723;
})()
});
var comp__3 = (function (f,g,h){return (function() {
var G__23726 = null;
var G__23726__0 = (function (){return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1((h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null))) : g.call(null,(h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null))))) : f.call(null,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1((h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null))) : g.call(null,(h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null))))));
});
var G__23726__1 = (function (x){return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1((h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(x) : h.call(null,x))))) : f.call(null,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1((h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(x) : h.call(null,x))))));
});
var G__23726__2 = (function (x,y){return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1((h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(x,y) : h.call(null,x,y))))) : f.call(null,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1((h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(x,y) : h.call(null,x,y))))));
});
var G__23726__3 = (function (x,y,z){return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1((h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(x,y,z) : h.call(null,x,y,z))))) : f.call(null,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1((h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(x,y,z) : h.call(null,x,y,z))))));
});
var G__23726__4 = (function() { 
var G__23727__delegate = function (x,y,z,args){return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)))) : f.call(null,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)))));
};
var G__23727 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23727__delegate.call(this,x,y,z,args);};
G__23727.cljs$lang$maxFixedArity = 3;
G__23727.cljs$lang$applyTo = (function (arglist__23728){
var x = cljs.core.first(arglist__23728);
arglist__23728 = cljs.core.next(arglist__23728);
var y = cljs.core.first(arglist__23728);
arglist__23728 = cljs.core.next(arglist__23728);
var z = cljs.core.first(arglist__23728);
var args = cljs.core.rest(arglist__23728);
return G__23727__delegate(x,y,z,args);
});
G__23727.cljs$core$IFn$_invoke$arity$variadic = G__23727__delegate;
return G__23727;
})()
;
G__23726 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__23726__0.call(this);
case 1:
return G__23726__1.call(this,x);
case 2:
return G__23726__2.call(this,x,y);
case 3:
return G__23726__3.call(this,x,y,z);
default:
return G__23726__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23726.cljs$lang$maxFixedArity = 3;
G__23726.cljs$lang$applyTo = G__23726__4.cljs$lang$applyTo;
return G__23726;
})()
});
var comp__4 = (function() { 
var G__23729__delegate = function (f1,f2,f3,fs){var fs__$1 = cljs.core.reverse(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f1,f2,f3,fs));return (function() { 
var G__23730__delegate = function (args){var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fs__$1),args);var fs__$2 = cljs.core.next(fs__$1);while(true){
if(fs__$2)
{{
var G__23731 = cljs.core.first(fs__$2).call(null,ret);
var G__23732 = cljs.core.next(fs__$2);
ret = G__23731;
fs__$2 = G__23732;
continue;
}
} else
{return ret;
}
break;
}
};
var G__23730 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23730__delegate.call(this,args);};
G__23730.cljs$lang$maxFixedArity = 0;
G__23730.cljs$lang$applyTo = (function (arglist__23733){
var args = cljs.core.seq(arglist__23733);
return G__23730__delegate(args);
});
G__23730.cljs$core$IFn$_invoke$arity$variadic = G__23730__delegate;
return G__23730;
})()
;
};
var G__23729 = function (f1,f2,f3,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23729__delegate.call(this,f1,f2,f3,fs);};
G__23729.cljs$lang$maxFixedArity = 3;
G__23729.cljs$lang$applyTo = (function (arglist__23734){
var f1 = cljs.core.first(arglist__23734);
arglist__23734 = cljs.core.next(arglist__23734);
var f2 = cljs.core.first(arglist__23734);
arglist__23734 = cljs.core.next(arglist__23734);
var f3 = cljs.core.first(arglist__23734);
var fs = cljs.core.rest(arglist__23734);
return G__23729__delegate(f1,f2,f3,fs);
});
G__23729.cljs$core$IFn$_invoke$arity$variadic = G__23729__delegate;
return G__23729;
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
var G__23735__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg1,args);
};
var G__23735 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23735__delegate.call(this,args);};
G__23735.cljs$lang$maxFixedArity = 0;
G__23735.cljs$lang$applyTo = (function (arglist__23736){
var args = cljs.core.seq(arglist__23736);
return G__23735__delegate(args);
});
G__23735.cljs$core$IFn$_invoke$arity$variadic = G__23735__delegate;
return G__23735;
})()
;
});
var partial__3 = (function (f,arg1,arg2){return (function() { 
var G__23737__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,arg1,arg2,args);
};
var G__23737 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23737__delegate.call(this,args);};
G__23737.cljs$lang$maxFixedArity = 0;
G__23737.cljs$lang$applyTo = (function (arglist__23738){
var args = cljs.core.seq(arglist__23738);
return G__23737__delegate(args);
});
G__23737.cljs$core$IFn$_invoke$arity$variadic = G__23737__delegate;
return G__23737;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){return (function() { 
var G__23739__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,args);
};
var G__23739 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23739__delegate.call(this,args);};
G__23739.cljs$lang$maxFixedArity = 0;
G__23739.cljs$lang$applyTo = (function (arglist__23740){
var args = cljs.core.seq(arglist__23740);
return G__23739__delegate(args);
});
G__23739.cljs$core$IFn$_invoke$arity$variadic = G__23739__delegate;
return G__23739;
})()
;
});
var partial__5 = (function() { 
var G__23741__delegate = function (f,arg1,arg2,arg3,more){return (function() { 
var G__23742__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(more,args));
};
var G__23742 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__23742__delegate.call(this,args);};
G__23742.cljs$lang$maxFixedArity = 0;
G__23742.cljs$lang$applyTo = (function (arglist__23743){
var args = cljs.core.seq(arglist__23743);
return G__23742__delegate(args);
});
G__23742.cljs$core$IFn$_invoke$arity$variadic = G__23742__delegate;
return G__23742;
})()
;
};
var G__23741 = function (f,arg1,arg2,arg3,var_args){
var more = null;if (arguments.length > 4) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__23741__delegate.call(this,f,arg1,arg2,arg3,more);};
G__23741.cljs$lang$maxFixedArity = 4;
G__23741.cljs$lang$applyTo = (function (arglist__23744){
var f = cljs.core.first(arglist__23744);
arglist__23744 = cljs.core.next(arglist__23744);
var arg1 = cljs.core.first(arglist__23744);
arglist__23744 = cljs.core.next(arglist__23744);
var arg2 = cljs.core.first(arglist__23744);
arglist__23744 = cljs.core.next(arglist__23744);
var arg3 = cljs.core.first(arglist__23744);
var more = cljs.core.rest(arglist__23744);
return G__23741__delegate(f,arg1,arg2,arg3,more);
});
G__23741.cljs$core$IFn$_invoke$arity$variadic = G__23741__delegate;
return G__23741;
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
var G__23745 = null;
var G__23745__1 = (function (a){return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((((a == null))?x:a)) : f.call(null,(((a == null))?x:a)));
});
var G__23745__2 = (function (a,b){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2((((a == null))?x:a),b) : f.call(null,(((a == null))?x:a),b));
});
var G__23745__3 = (function (a,b,c){return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3((((a == null))?x:a),b,c) : f.call(null,(((a == null))?x:a),b,c));
});
var G__23745__4 = (function() { 
var G__23746__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__23746 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23746__delegate.call(this,a,b,c,ds);};
G__23746.cljs$lang$maxFixedArity = 3;
G__23746.cljs$lang$applyTo = (function (arglist__23747){
var a = cljs.core.first(arglist__23747);
arglist__23747 = cljs.core.next(arglist__23747);
var b = cljs.core.first(arglist__23747);
arglist__23747 = cljs.core.next(arglist__23747);
var c = cljs.core.first(arglist__23747);
var ds = cljs.core.rest(arglist__23747);
return G__23746__delegate(a,b,c,ds);
});
G__23746.cljs$core$IFn$_invoke$arity$variadic = G__23746__delegate;
return G__23746;
})()
;
G__23745 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__23745__1.call(this,a);
case 2:
return G__23745__2.call(this,a,b);
case 3:
return G__23745__3.call(this,a,b,c);
default:
return G__23745__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23745.cljs$lang$maxFixedArity = 3;
G__23745.cljs$lang$applyTo = G__23745__4.cljs$lang$applyTo;
return G__23745;
})()
});
var fnil__3 = (function (f,x,y){return (function() {
var G__23748 = null;
var G__23748__2 = (function (a,b){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__23748__3 = (function (a,b,c){return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3((((a == null))?x:a),(((b == null))?y:b),c) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),c));
});
var G__23748__4 = (function() { 
var G__23749__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__23749 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23749__delegate.call(this,a,b,c,ds);};
G__23749.cljs$lang$maxFixedArity = 3;
G__23749.cljs$lang$applyTo = (function (arglist__23750){
var a = cljs.core.first(arglist__23750);
arglist__23750 = cljs.core.next(arglist__23750);
var b = cljs.core.first(arglist__23750);
arglist__23750 = cljs.core.next(arglist__23750);
var c = cljs.core.first(arglist__23750);
var ds = cljs.core.rest(arglist__23750);
return G__23749__delegate(a,b,c,ds);
});
G__23749.cljs$core$IFn$_invoke$arity$variadic = G__23749__delegate;
return G__23749;
})()
;
G__23748 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__23748__2.call(this,a,b);
case 3:
return G__23748__3.call(this,a,b,c);
default:
return G__23748__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23748.cljs$lang$maxFixedArity = 3;
G__23748.cljs$lang$applyTo = G__23748__4.cljs$lang$applyTo;
return G__23748;
})()
});
var fnil__4 = (function (f,x,y,z){return (function() {
var G__23751 = null;
var G__23751__2 = (function (a,b){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__23751__3 = (function (a,b,c){return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3((((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)));
});
var G__23751__4 = (function() { 
var G__23752__delegate = function (a,b,c,ds){return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__23752 = function (a,b,c,var_args){
var ds = null;if (arguments.length > 3) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23752__delegate.call(this,a,b,c,ds);};
G__23752.cljs$lang$maxFixedArity = 3;
G__23752.cljs$lang$applyTo = (function (arglist__23753){
var a = cljs.core.first(arglist__23753);
arglist__23753 = cljs.core.next(arglist__23753);
var b = cljs.core.first(arglist__23753);
arglist__23753 = cljs.core.next(arglist__23753);
var c = cljs.core.first(arglist__23753);
var ds = cljs.core.rest(arglist__23753);
return G__23752__delegate(a,b,c,ds);
});
G__23752.cljs$core$IFn$_invoke$arity$variadic = G__23752__delegate;
return G__23752;
})()
;
G__23751 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__23751__2.call(this,a,b);
case 3:
return G__23751__3.call(this,a,b,c);
default:
return G__23751__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23751.cljs$lang$maxFixedArity = 3;
G__23751.cljs$lang$applyTo = G__23751__4.cljs$lang$applyTo;
return G__23751;
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
cljs.core.map_indexed = (function map_indexed(f,coll){var mapi = (function mapi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll__$1);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4248__auto___23754 = size;var i_23755 = 0;while(true){
if((i_23755 < n__4248__auto___23754))
{cljs.core.chunk_append(b,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2((idx + i_23755),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23755)) : f.call(null,(idx + i_23755),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23755))));
{
var G__23756 = (i_23755 + 1);
i_23755 = G__23756;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),mapi((idx + size),cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.first(s)) : f.call(null,idx,cljs.core.first(s))),mapi((idx + 1),cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
return mapi(0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4248__auto___23757 = size;var i_23758 = 0;while(true){
if((i_23758 < n__4248__auto___23757))
{var x_23759 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23758)) : f.call(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23758)));if((x_23759 == null))
{} else
{cljs.core.chunk_append(b,x_23759);
}
{
var G__23760 = (i_23758 + 1);
i_23758 = G__23760;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keep(f,cljs.core.chunk_rest(s)));
} else
{var x = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s)) : f.call(null,cljs.core.first(s)));if((x == null))
{return keep(f,cljs.core.rest(s));
} else
{return cljs.core.cons(x,keep(f,cljs.core.rest(s)));
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
cljs.core.keep_indexed = (function keep_indexed(f,coll){var keepi = (function keepi(idx,coll__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll__$1);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4248__auto___23761 = size;var i_23762 = 0;while(true){
if((i_23762 < n__4248__auto___23761))
{var x_23763 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2((idx + i_23762),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23762)) : f.call(null,(idx + i_23762),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23762)));if((x_23763 == null))
{} else
{cljs.core.chunk_append(b,x_23763);
}
{
var G__23764 = (i_23762 + 1);
i_23762 = G__23764;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),keepi((idx + size),cljs.core.chunk_rest(s)));
} else
{var x = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.first(s)) : f.call(null,idx,cljs.core.first(s)));if((x == null))
{return keepi((idx + 1),cljs.core.rest(s));
} else
{return cljs.core.cons(x,keepi((idx + 1),cljs.core.rest(s)));
}
}
} else
{return null;
}
}),null,null));
});
return keepi(0,coll);
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
var ep1__1 = (function (x){return cljs.core.boolean$((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x)));
});
var ep1__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3394__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));if(cljs.core.truth_(and__3394__auto__))
{return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(y) : p.call(null,y));
} else
{return and__3394__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3394__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(y) : p.call(null,y));if(cljs.core.truth_(and__3394__auto____$1))
{return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(z) : p.call(null,z));
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__23771__delegate = function (x,y,z,args){return cljs.core.boolean$((ep1.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_(p,args)));
};
var G__23771 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23771__delegate.call(this,x,y,z,args);};
G__23771.cljs$lang$maxFixedArity = 3;
G__23771.cljs$lang$applyTo = (function (arglist__23772){
var x = cljs.core.first(arglist__23772);
arglist__23772 = cljs.core.next(arglist__23772);
var y = cljs.core.first(arglist__23772);
arglist__23772 = cljs.core.next(arglist__23772);
var z = cljs.core.first(arglist__23772);
var args = cljs.core.rest(arglist__23772);
return G__23771__delegate(x,y,z,args);
});
G__23771.cljs$core$IFn$_invoke$arity$variadic = G__23771__delegate;
return G__23771;
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
var ep2__1 = (function (x){return cljs.core.boolean$((function (){var and__3394__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(and__3394__auto__))
{return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
} else
{return and__3394__auto__;
}
})());
});
var ep2__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3394__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));if(cljs.core.truth_(and__3394__auto____$1))
{var and__3394__auto____$2 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));if(cljs.core.truth_(and__3394__auto____$2))
{return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));
} else
{return and__3394__auto____$2;
}
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3394__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));if(cljs.core.truth_(and__3394__auto____$1))
{var and__3394__auto____$2 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(z) : p1.call(null,z));if(cljs.core.truth_(and__3394__auto____$2))
{var and__3394__auto____$3 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));if(cljs.core.truth_(and__3394__auto____$3))
{var and__3394__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));if(cljs.core.truth_(and__3394__auto____$4))
{return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(z) : p2.call(null,z));
} else
{return and__3394__auto____$4;
}
} else
{return and__3394__auto____$3;
}
} else
{return and__3394__auto____$2;
}
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__23773__delegate = function (x,y,z,args){return cljs.core.boolean$((ep2.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__23765_SHARP_){var and__3394__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(p1__23765_SHARP_) : p1.call(null,p1__23765_SHARP_));if(cljs.core.truth_(and__3394__auto__))
{return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(p1__23765_SHARP_) : p2.call(null,p1__23765_SHARP_));
} else
{return and__3394__auto__;
}
}),args)));
};
var G__23773 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23773__delegate.call(this,x,y,z,args);};
G__23773.cljs$lang$maxFixedArity = 3;
G__23773.cljs$lang$applyTo = (function (arglist__23774){
var x = cljs.core.first(arglist__23774);
arglist__23774 = cljs.core.next(arglist__23774);
var y = cljs.core.first(arglist__23774);
arglist__23774 = cljs.core.next(arglist__23774);
var z = cljs.core.first(arglist__23774);
var args = cljs.core.rest(arglist__23774);
return G__23773__delegate(x,y,z,args);
});
G__23773.cljs$core$IFn$_invoke$arity$variadic = G__23773__delegate;
return G__23773;
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
var ep3__1 = (function (x){return cljs.core.boolean$((function (){var and__3394__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));if(cljs.core.truth_(and__3394__auto____$1))
{return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})());
});
var ep3__2 = (function (x,y){return cljs.core.boolean$((function (){var and__3394__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));if(cljs.core.truth_(and__3394__auto____$1))
{var and__3394__auto____$2 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));if(cljs.core.truth_(and__3394__auto____$2))
{var and__3394__auto____$3 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));if(cljs.core.truth_(and__3394__auto____$3))
{var and__3394__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));if(cljs.core.truth_(and__3394__auto____$4))
{return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(y) : p3.call(null,y));
} else
{return and__3394__auto____$4;
}
} else
{return and__3394__auto____$3;
}
} else
{return and__3394__auto____$2;
}
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){return cljs.core.boolean$((function (){var and__3394__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));if(cljs.core.truth_(and__3394__auto____$1))
{var and__3394__auto____$2 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));if(cljs.core.truth_(and__3394__auto____$2))
{var and__3394__auto____$3 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));if(cljs.core.truth_(and__3394__auto____$3))
{var and__3394__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));if(cljs.core.truth_(and__3394__auto____$4))
{var and__3394__auto____$5 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(y) : p3.call(null,y));if(cljs.core.truth_(and__3394__auto____$5))
{var and__3394__auto____$6 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(z) : p1.call(null,z));if(cljs.core.truth_(and__3394__auto____$6))
{var and__3394__auto____$7 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(z) : p2.call(null,z));if(cljs.core.truth_(and__3394__auto____$7))
{return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(z) : p3.call(null,z));
} else
{return and__3394__auto____$7;
}
} else
{return and__3394__auto____$6;
}
} else
{return and__3394__auto____$5;
}
} else
{return and__3394__auto____$4;
}
} else
{return and__3394__auto____$3;
}
} else
{return and__3394__auto____$2;
}
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__23775__delegate = function (x,y,z,args){return cljs.core.boolean$((ep3.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__23766_SHARP_){var and__3394__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(p1__23766_SHARP_) : p1.call(null,p1__23766_SHARP_));if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(p1__23766_SHARP_) : p2.call(null,p1__23766_SHARP_));if(cljs.core.truth_(and__3394__auto____$1))
{return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(p1__23766_SHARP_) : p3.call(null,p1__23766_SHARP_));
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
}),args)));
};
var G__23775 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23775__delegate.call(this,x,y,z,args);};
G__23775.cljs$lang$maxFixedArity = 3;
G__23775.cljs$lang$applyTo = (function (arglist__23776){
var x = cljs.core.first(arglist__23776);
arglist__23776 = cljs.core.next(arglist__23776);
var y = cljs.core.first(arglist__23776);
arglist__23776 = cljs.core.next(arglist__23776);
var z = cljs.core.first(arglist__23776);
var args = cljs.core.rest(arglist__23776);
return G__23775__delegate(x,y,z,args);
});
G__23775.cljs$core$IFn$_invoke$arity$variadic = G__23775__delegate;
return G__23775;
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
var G__23777__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return (function() {
var epn = null;
var epn__0 = (function (){return true;
});
var epn__1 = (function (x){return cljs.core.every_QMARK_((function (p1__23767_SHARP_){return (p1__23767_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23767_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__23767_SHARP_.call(null,x));
}),ps__$1);
});
var epn__2 = (function (x,y){return cljs.core.every_QMARK_((function (p1__23768_SHARP_){var and__3394__auto__ = (p1__23768_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23768_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__23768_SHARP_.call(null,x));if(cljs.core.truth_(and__3394__auto__))
{return (p1__23768_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23768_SHARP_.cljs$core$IFn$_invoke$arity$1(y) : p1__23768_SHARP_.call(null,y));
} else
{return and__3394__auto__;
}
}),ps__$1);
});
var epn__3 = (function (x,y,z){return cljs.core.every_QMARK_((function (p1__23769_SHARP_){var and__3394__auto__ = (p1__23769_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23769_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__23769_SHARP_.call(null,x));if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = (p1__23769_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23769_SHARP_.cljs$core$IFn$_invoke$arity$1(y) : p1__23769_SHARP_.call(null,y));if(cljs.core.truth_(and__3394__auto____$1))
{return (p1__23769_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23769_SHARP_.cljs$core$IFn$_invoke$arity$1(z) : p1__23769_SHARP_.call(null,z));
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
}),ps__$1);
});
var epn__4 = (function() { 
var G__23778__delegate = function (x,y,z,args){return cljs.core.boolean$((epn.cljs$core$IFn$_invoke$arity$3(x,y,z)) && (cljs.core.every_QMARK_((function (p1__23770_SHARP_){return cljs.core.every_QMARK_(p1__23770_SHARP_,args);
}),ps__$1)));
};
var G__23778 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23778__delegate.call(this,x,y,z,args);};
G__23778.cljs$lang$maxFixedArity = 3;
G__23778.cljs$lang$applyTo = (function (arglist__23779){
var x = cljs.core.first(arglist__23779);
arglist__23779 = cljs.core.next(arglist__23779);
var y = cljs.core.first(arglist__23779);
arglist__23779 = cljs.core.next(arglist__23779);
var z = cljs.core.first(arglist__23779);
var args = cljs.core.rest(arglist__23779);
return G__23778__delegate(x,y,z,args);
});
G__23778.cljs$core$IFn$_invoke$arity$variadic = G__23778__delegate;
return G__23778;
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
var G__23777 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23777__delegate.call(this,p1,p2,p3,ps);};
G__23777.cljs$lang$maxFixedArity = 3;
G__23777.cljs$lang$applyTo = (function (arglist__23780){
var p1 = cljs.core.first(arglist__23780);
arglist__23780 = cljs.core.next(arglist__23780);
var p2 = cljs.core.first(arglist__23780);
arglist__23780 = cljs.core.next(arglist__23780);
var p3 = cljs.core.first(arglist__23780);
var ps = cljs.core.rest(arglist__23780);
return G__23777__delegate(p1,p2,p3,ps);
});
G__23777.cljs$core$IFn$_invoke$arity$variadic = G__23777__delegate;
return G__23777;
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
var sp1__1 = (function (x){return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));
});
var sp1__2 = (function (x,y){var or__3406__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(y) : p.call(null,y));
}
});
var sp1__3 = (function (x,y,z){var or__3406__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(y) : p.call(null,y));if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(z) : p.call(null,z));
}
}
});
var sp1__4 = (function() { 
var G__23787__delegate = function (x,y,z,args){var or__3406__auto__ = sp1.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.some(p,args);
}
};
var G__23787 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23787__delegate.call(this,x,y,z,args);};
G__23787.cljs$lang$maxFixedArity = 3;
G__23787.cljs$lang$applyTo = (function (arglist__23788){
var x = cljs.core.first(arglist__23788);
arglist__23788 = cljs.core.next(arglist__23788);
var y = cljs.core.first(arglist__23788);
arglist__23788 = cljs.core.next(arglist__23788);
var z = cljs.core.first(arglist__23788);
var args = cljs.core.rest(arglist__23788);
return G__23787__delegate(x,y,z,args);
});
G__23787.cljs$core$IFn$_invoke$arity$variadic = G__23787__delegate;
return G__23787;
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
var sp2__1 = (function (x){var or__3406__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));
}
});
var sp2__2 = (function (x,y){var or__3406__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{var or__3406__auto____$2 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));if(cljs.core.truth_(or__3406__auto____$2))
{return or__3406__auto____$2;
} else
{return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));
}
}
}
});
var sp2__3 = (function (x,y,z){var or__3406__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{var or__3406__auto____$2 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(z) : p1.call(null,z));if(cljs.core.truth_(or__3406__auto____$2))
{return or__3406__auto____$2;
} else
{var or__3406__auto____$3 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));if(cljs.core.truth_(or__3406__auto____$3))
{return or__3406__auto____$3;
} else
{var or__3406__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));if(cljs.core.truth_(or__3406__auto____$4))
{return or__3406__auto____$4;
} else
{return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(z) : p2.call(null,z));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__23789__delegate = function (x,y,z,args){var or__3406__auto__ = sp2.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.some((function (p1__23781_SHARP_){var or__3406__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(p1__23781_SHARP_) : p1.call(null,p1__23781_SHARP_));if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(p1__23781_SHARP_) : p2.call(null,p1__23781_SHARP_));
}
}),args);
}
};
var G__23789 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23789__delegate.call(this,x,y,z,args);};
G__23789.cljs$lang$maxFixedArity = 3;
G__23789.cljs$lang$applyTo = (function (arglist__23790){
var x = cljs.core.first(arglist__23790);
arglist__23790 = cljs.core.next(arglist__23790);
var y = cljs.core.first(arglist__23790);
arglist__23790 = cljs.core.next(arglist__23790);
var z = cljs.core.first(arglist__23790);
var args = cljs.core.rest(arglist__23790);
return G__23789__delegate(x,y,z,args);
});
G__23789.cljs$core$IFn$_invoke$arity$variadic = G__23789__delegate;
return G__23789;
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
var sp3__1 = (function (x){var or__3406__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));
}
}
});
var sp3__2 = (function (x,y){var or__3406__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{var or__3406__auto____$2 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));if(cljs.core.truth_(or__3406__auto____$2))
{return or__3406__auto____$2;
} else
{var or__3406__auto____$3 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));if(cljs.core.truth_(or__3406__auto____$3))
{return or__3406__auto____$3;
} else
{var or__3406__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));if(cljs.core.truth_(or__3406__auto____$4))
{return or__3406__auto____$4;
} else
{return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(y) : p3.call(null,y));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){var or__3406__auto__ = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(x) : p1.call(null,x));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(x) : p2.call(null,x));if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{var or__3406__auto____$2 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(x) : p3.call(null,x));if(cljs.core.truth_(or__3406__auto____$2))
{return or__3406__auto____$2;
} else
{var or__3406__auto____$3 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(y) : p1.call(null,y));if(cljs.core.truth_(or__3406__auto____$3))
{return or__3406__auto____$3;
} else
{var or__3406__auto____$4 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(y) : p2.call(null,y));if(cljs.core.truth_(or__3406__auto____$4))
{return or__3406__auto____$4;
} else
{var or__3406__auto____$5 = (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(y) : p3.call(null,y));if(cljs.core.truth_(or__3406__auto____$5))
{return or__3406__auto____$5;
} else
{var or__3406__auto____$6 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(z) : p1.call(null,z));if(cljs.core.truth_(or__3406__auto____$6))
{return or__3406__auto____$6;
} else
{var or__3406__auto____$7 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(z) : p2.call(null,z));if(cljs.core.truth_(or__3406__auto____$7))
{return or__3406__auto____$7;
} else
{return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(z) : p3.call(null,z));
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
var G__23791__delegate = function (x,y,z,args){var or__3406__auto__ = sp3.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.some((function (p1__23782_SHARP_){var or__3406__auto____$1 = (p1.cljs$core$IFn$_invoke$arity$1 ? p1.cljs$core$IFn$_invoke$arity$1(p1__23782_SHARP_) : p1.call(null,p1__23782_SHARP_));if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{var or__3406__auto____$2 = (p2.cljs$core$IFn$_invoke$arity$1 ? p2.cljs$core$IFn$_invoke$arity$1(p1__23782_SHARP_) : p2.call(null,p1__23782_SHARP_));if(cljs.core.truth_(or__3406__auto____$2))
{return or__3406__auto____$2;
} else
{return (p3.cljs$core$IFn$_invoke$arity$1 ? p3.cljs$core$IFn$_invoke$arity$1(p1__23782_SHARP_) : p3.call(null,p1__23782_SHARP_));
}
}
}),args);
}
};
var G__23791 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23791__delegate.call(this,x,y,z,args);};
G__23791.cljs$lang$maxFixedArity = 3;
G__23791.cljs$lang$applyTo = (function (arglist__23792){
var x = cljs.core.first(arglist__23792);
arglist__23792 = cljs.core.next(arglist__23792);
var y = cljs.core.first(arglist__23792);
arglist__23792 = cljs.core.next(arglist__23792);
var z = cljs.core.first(arglist__23792);
var args = cljs.core.rest(arglist__23792);
return G__23791__delegate(x,y,z,args);
});
G__23791.cljs$core$IFn$_invoke$arity$variadic = G__23791__delegate;
return G__23791;
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
var G__23793__delegate = function (p1,p2,p3,ps){var ps__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(p1,p2,p3,ps);return (function() {
var spn = null;
var spn__0 = (function (){return null;
});
var spn__1 = (function (x){return cljs.core.some((function (p1__23783_SHARP_){return (p1__23783_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23783_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__23783_SHARP_.call(null,x));
}),ps__$1);
});
var spn__2 = (function (x,y){return cljs.core.some((function (p1__23784_SHARP_){var or__3406__auto__ = (p1__23784_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23784_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__23784_SHARP_.call(null,x));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (p1__23784_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23784_SHARP_.cljs$core$IFn$_invoke$arity$1(y) : p1__23784_SHARP_.call(null,y));
}
}),ps__$1);
});
var spn__3 = (function (x,y,z){return cljs.core.some((function (p1__23785_SHARP_){var or__3406__auto__ = (p1__23785_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23785_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p1__23785_SHARP_.call(null,x));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (p1__23785_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23785_SHARP_.cljs$core$IFn$_invoke$arity$1(y) : p1__23785_SHARP_.call(null,y));if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return (p1__23785_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23785_SHARP_.cljs$core$IFn$_invoke$arity$1(z) : p1__23785_SHARP_.call(null,z));
}
}
}),ps__$1);
});
var spn__4 = (function() { 
var G__23794__delegate = function (x,y,z,args){var or__3406__auto__ = spn.cljs$core$IFn$_invoke$arity$3(x,y,z);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.some((function (p1__23786_SHARP_){return cljs.core.some(p1__23786_SHARP_,args);
}),ps__$1);
}
};
var G__23794 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23794__delegate.call(this,x,y,z,args);};
G__23794.cljs$lang$maxFixedArity = 3;
G__23794.cljs$lang$applyTo = (function (arglist__23795){
var x = cljs.core.first(arglist__23795);
arglist__23795 = cljs.core.next(arglist__23795);
var y = cljs.core.first(arglist__23795);
arglist__23795 = cljs.core.next(arglist__23795);
var z = cljs.core.first(arglist__23795);
var args = cljs.core.rest(arglist__23795);
return G__23794__delegate(x,y,z,args);
});
G__23794.cljs$core$IFn$_invoke$arity$variadic = G__23794__delegate;
return G__23794;
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
var G__23793 = function (p1,p2,p3,var_args){
var ps = null;if (arguments.length > 3) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23793__delegate.call(this,p1,p2,p3,ps);};
G__23793.cljs$lang$maxFixedArity = 3;
G__23793.cljs$lang$applyTo = (function (arglist__23796){
var p1 = cljs.core.first(arglist__23796);
arglist__23796 = cljs.core.next(arglist__23796);
var p2 = cljs.core.first(arglist__23796);
arglist__23796 = cljs.core.next(arglist__23796);
var p3 = cljs.core.first(arglist__23796);
var ps = cljs.core.rest(arglist__23796);
return G__23793__delegate(p1,p2,p3,ps);
});
G__23793.cljs$core$IFn$_invoke$arity$variadic = G__23793__delegate;
return G__23793;
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
var map__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4248__auto___23798 = size;var i_23799 = 0;while(true){
if((i_23799 < n__4248__auto___23798))
{cljs.core.chunk_append(b,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23799)) : f.call(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23799))));
{
var G__23800 = (i_23799 + 1);
i_23799 = G__23800;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.chunk_rest(s)));
} else
{return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s)) : f.call(null,cljs.core.first(s))),map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.rest(s)));
}
} else
{return null;
}
}),null,null));
});
var map__3 = (function (f,c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s1),cljs.core.first(s2)) : f.call(null,cljs.core.first(s1),cljs.core.first(s2))),map.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else
{return null;
}
}),null,null));
});
var map__4 = (function (f,c1,c2,c3){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);var s3 = cljs.core.seq(c3);if((s1) && (s2) && (s3))
{return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cljs.core.first(s1),cljs.core.first(s2),cljs.core.first(s3)) : f.call(null,cljs.core.first(s1),cljs.core.first(s2),cljs.core.first(s3))),map.cljs$core$IFn$_invoke$arity$4(f,cljs.core.rest(s1),cljs.core.rest(s2),cljs.core.rest(s3)));
} else
{return null;
}
}),null,null));
});
var map__5 = (function() { 
var G__23801__delegate = function (f,c1,c2,c3,colls){var step = (function step(cs){return (new cljs.core.LazySeq(null,(function (){var ss = map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cs);if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.cons(map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),step(map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
});return map.cljs$core$IFn$_invoke$arity$2((function (p1__23797_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__23797_SHARP_);
}),step(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))));
};
var G__23801 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__23801__delegate.call(this,f,c1,c2,c3,colls);};
G__23801.cljs$lang$maxFixedArity = 4;
G__23801.cljs$lang$applyTo = (function (arglist__23802){
var f = cljs.core.first(arglist__23802);
arglist__23802 = cljs.core.next(arglist__23802);
var c1 = cljs.core.first(arglist__23802);
arglist__23802 = cljs.core.next(arglist__23802);
var c2 = cljs.core.first(arglist__23802);
arglist__23802 = cljs.core.next(arglist__23802);
var c3 = cljs.core.first(arglist__23802);
var colls = cljs.core.rest(arglist__23802);
return G__23801__delegate(f,c1,c2,c3,colls);
});
G__23801.cljs$core$IFn$_invoke$arity$variadic = G__23801__delegate;
return G__23801;
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
{var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;return cljs.core.cons(cljs.core.first(s),take((n - 1),cljs.core.rest(s)));
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
var s = cljs.core.seq(coll__$1);if(((n__$1 > 0)) && (s))
{{
var G__23803 = (n__$1 - 1);
var G__23804 = cljs.core.rest(s);
n__$1 = G__23803;
coll__$1 = G__23804;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,(function (){return step(n,coll);
}),null,null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){return drop_last.cljs$core$IFn$_invoke$arity$2(1,s);
});
var drop_last__2 = (function (n,s){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,_){return x;
}),s,cljs.core.drop(n,s));
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
cljs.core.take_last = (function take_last(n,coll){var s = cljs.core.seq(coll);var lead = cljs.core.seq(cljs.core.drop(n,coll));while(true){
if(lead)
{{
var G__23805 = cljs.core.next(s);
var G__23806 = cljs.core.next(lead);
s = G__23805;
lead = G__23806;
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
var s = cljs.core.seq(coll__$1);if(cljs.core.truth_((function (){var and__3394__auto__ = s;if(and__3394__auto__)
{return (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s)) : pred__$1.call(null,cljs.core.first(s)));
} else
{return and__3394__auto__;
}
})()))
{{
var G__23807 = pred__$1;
var G__23808 = cljs.core.rest(s);
pred__$1 = G__23807;
coll__$1 = G__23808;
continue;
}
} else
{return s;
}
break;
}
});return (new cljs.core.LazySeq(null,(function (){return step(pred,coll);
}),null,null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(s,cycle(s));
} else
{return null;
}
}),null,null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take(n,coll),cljs.core.drop(n,coll)], null);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(x,repeat.cljs$core$IFn$_invoke$arity$1(x));
}),null,null));
});
var repeat__2 = (function (n,x){return cljs.core.take(n,repeat.cljs$core$IFn$_invoke$arity$1(x));
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
cljs.core.replicate = (function replicate(n,x){return cljs.core.take(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),repeatedly.cljs$core$IFn$_invoke$arity$1(f));
}),null,null));
});
var repeatedly__2 = (function (n,f){return cljs.core.take(n,repeatedly.cljs$core$IFn$_invoke$arity$1(f));
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
cljs.core.iterate = (function iterate(f,x){return cljs.core.cons(x,(new cljs.core.LazySeq(null,(function (){return iterate(f,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
}),null,null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){return (new cljs.core.LazySeq(null,(function (){var s1 = cljs.core.seq(c1);var s2 = cljs.core.seq(c2);if((s1) && (s2))
{return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else
{return null;
}
}),null,null));
});
var interleave__3 = (function() { 
var G__23809__delegate = function (c1,c2,colls){return (new cljs.core.LazySeq(null,(function (){var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));if(cljs.core.every_QMARK_(cljs.core.identity,ss))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(interleave,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else
{return null;
}
}),null,null));
};
var G__23809 = function (c1,c2,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23809__delegate.call(this,c1,c2,colls);};
G__23809.cljs$lang$maxFixedArity = 2;
G__23809.cljs$lang$applyTo = (function (arglist__23810){
var c1 = cljs.core.first(arglist__23810);
arglist__23810 = cljs.core.next(arglist__23810);
var c2 = cljs.core.first(arglist__23810);
var colls = cljs.core.rest(arglist__23810);
return G__23809__delegate(c1,c2,colls);
});
G__23809.cljs$core$IFn$_invoke$arity$variadic = G__23809__delegate;
return G__23809;
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
cljs.core.interpose = (function interpose(sep,coll){return cljs.core.drop(1,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){var cat = (function cat(coll,colls__$1){return (new cljs.core.LazySeq(null,(function (){var temp__4090__auto__ = cljs.core.seq(coll);if(temp__4090__auto__)
{var coll__$1 = temp__4090__auto__;return cljs.core.cons(cljs.core.first(coll__$1),cat(cljs.core.rest(coll__$1),colls__$1));
} else
{if(cljs.core.seq(colls__$1))
{return cat(cljs.core.first(colls__$1),cljs.core.rest(colls__$1));
} else
{return null;
}
}
}),null,null));
});return cat(null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){return cljs.core.flatten1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
});
var mapcat__3 = (function() { 
var G__23811__delegate = function (f,coll,colls){return cljs.core.flatten1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.map,f,coll,colls));
};
var G__23811 = function (f,coll,var_args){
var colls = null;if (arguments.length > 2) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23811__delegate.call(this,f,coll,colls);};
G__23811.cljs$lang$maxFixedArity = 2;
G__23811.cljs$lang$applyTo = (function (arglist__23812){
var f = cljs.core.first(arglist__23812);
arglist__23812 = cljs.core.next(arglist__23812);
var coll = cljs.core.first(arglist__23812);
var colls = cljs.core.rest(arglist__23812);
return G__23811__delegate(f,coll,colls);
});
G__23811.cljs$core$IFn$_invoke$arity$variadic = G__23811__delegate;
return G__23811;
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
cljs.core.filter = (function filter(pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s))
{var c = cljs.core.chunk_first(s);var size = cljs.core.count(c);var b = cljs.core.chunk_buffer(size);var n__4248__auto___23813 = size;var i_23814 = 0;while(true){
if((i_23814 < n__4248__auto___23813))
{if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23814)) : pred.call(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23814)))))
{cljs.core.chunk_append(b,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c,i_23814));
} else
{}
{
var G__23815 = (i_23814 + 1);
i_23814 = G__23815;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b),filter(pred,cljs.core.chunk_rest(s)));
} else
{var f = cljs.core.first(s);var r = cljs.core.rest(s);if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(f) : pred.call(null,f))))
{return cljs.core.cons(f,filter(pred,r));
} else
{return filter(pred,r);
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
cljs.core.remove = (function remove(pred,coll){return cljs.core.filter(cljs.core.complement(pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){var walk = (function walk(node){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(node,(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(walk,(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node))):null));
}),null,null));
});return walk(root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){return cljs.core.filter((function (p1__23816_SHARP_){return !(cljs.core.sequential_QMARK_(p1__23816_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){if(!((to == null)))
{if((function (){var G__23818 = to;if(G__23818)
{var bit__4043__auto__ = (G__23818.cljs$lang$protocol_mask$partition1$ & 4);if((bit__4043__auto__) || (G__23818.cljs$core$IEditableCollection$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,to,from);
}
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.List.EMPTY,from);
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
var mapv__2 = (function (f,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){return cljs.core.conj_BANG_(v,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(o) : f.call(null,o)));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__23819__delegate = function (f,c1,c2,c3,colls){return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__23819 = function (f,c1,c2,c3,var_args){
var colls = null;if (arguments.length > 4) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return G__23819__delegate.call(this,f,c1,c2,c3,colls);};
G__23819.cljs$lang$maxFixedArity = 4;
G__23819.cljs$lang$applyTo = (function (arglist__23820){
var f = cljs.core.first(arglist__23820);
arglist__23820 = cljs.core.next(arglist__23820);
var c1 = cljs.core.first(arglist__23820);
arglist__23820 = cljs.core.next(arglist__23820);
var c2 = cljs.core.first(arglist__23820);
arglist__23820 = cljs.core.next(arglist__23820);
var c3 = cljs.core.first(arglist__23820);
var colls = cljs.core.rest(arglist__23820);
return G__23819__delegate(f,c1,c2,c3,colls);
});
G__23819.cljs$core$IFn$_invoke$arity$variadic = G__23819__delegate;
return G__23819;
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
cljs.core.filterv = (function filterv(pred,coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,o){if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(o) : pred.call(null,o))))
{return cljs.core.conj_BANG_(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
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
var partition__2 = (function (n,coll){return partition.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;var p = cljs.core.take(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop(step,s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
var partition__4 = (function (n,step,pad,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;var p = cljs.core.take(n,s);if((n === cljs.core.count(p)))
{return cljs.core.cons(p,partition.cljs$core$IFn$_invoke$arity$4(n,step,pad,cljs.core.drop(step,s)));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.take(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p,pad)));
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
var get_in__2 = (function (m,ks){return get_in.cljs$core$IFn$_invoke$arity$3(m,ks,null);
});
var get_in__3 = (function (m,ks,not_found){var sentinel = cljs.core.lookup_sentinel;var m__$1 = m;var ks__$1 = cljs.core.seq(ks);while(true){
if(ks__$1)
{if(!((function (){var G__23822 = m__$1;if(G__23822)
{var bit__4050__auto__ = (G__23822.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4050__auto__) || (G__23822.cljs$core$ILookup$))
{return true;
} else
{if((!G__23822.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__23822);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,G__23822);
}
})()))
{return not_found;
} else
{var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.first(ks__$1),sentinel);if((sentinel === m__$2))
{return not_found;
} else
{{
var G__23823 = sentinel;
var G__23824 = m__$2;
var G__23825 = cljs.core.next(ks__$1);
sentinel = G__23823;
m__$1 = G__23824;
ks__$1 = G__23825;
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
cljs.core.assoc_in = (function assoc_in(m,p__23826,v){var vec__23828 = p__23826;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23828,0,null);var ks = cljs.core.nthnext(vec__23828,1);if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,assoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,v));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
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
var update_in__3 = (function (m,p__23829,f){var vec__23839 = p__23829;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23839,0,null);var ks = cljs.core.nthnext(vec__23839,1);if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k))));
}
});
var update_in__4 = (function (m,p__23830,f,a){var vec__23840 = p__23830;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23840,0,null);var ks = cljs.core.nthnext(vec__23840,1);if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a)));
}
});
var update_in__5 = (function (m,p__23831,f,a,b){var vec__23841 = p__23831;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23841,0,null);var ks = cljs.core.nthnext(vec__23841,1);if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b)));
}
});
var update_in__6 = (function (m,p__23832,f,a,b,c){var vec__23842 = p__23832;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23842,0,null);var ks = cljs.core.nthnext(vec__23842,1);if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,b,c));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c)));
}
});
var update_in__7 = (function() { 
var G__23844__delegate = function (m,p__23833,f,a,b,c,args){var vec__23843 = p__23833;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23843,0,null);var ks = cljs.core.nthnext(vec__23843,1);if(ks)
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(update_in,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks,f,a,cljs.core.array_seq([b,c,args], 0)));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),a,b,c,cljs.core.array_seq([args], 0)));
}
};
var G__23844 = function (m,p__23833,f,a,b,c,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__23844__delegate.call(this,m,p__23833,f,a,b,c,args);};
G__23844.cljs$lang$maxFixedArity = 6;
G__23844.cljs$lang$applyTo = (function (arglist__23845){
var m = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var p__23833 = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var f = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var a = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var b = cljs.core.first(arglist__23845);
arglist__23845 = cljs.core.next(arglist__23845);
var c = cljs.core.first(arglist__23845);
var args = cljs.core.rest(arglist__23845);
return G__23844__delegate(m,p__23833,f,a,b,c,args);
});
G__23844.cljs$core$IFn$_invoke$arity$variadic = G__23844__delegate;
return G__23844;
})()
;
update_in = function(m,p__23833,f,a,b,c,var_args){
var args = var_args;
switch(arguments.length){
case 3:
return update_in__3.call(this,m,p__23833,f);
case 4:
return update_in__4.call(this,m,p__23833,f,a);
case 5:
return update_in__5.call(this,m,p__23833,f,a,b);
case 6:
return update_in__6.call(this,m,p__23833,f,a,b,c);
default:
return update_in__7.cljs$core$IFn$_invoke$arity$variadic(m,p__23833,f,a,b,c, cljs.core.array_seq(arguments, 6));
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
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opts__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core/VectorNode");
});
cljs.core.__GT_VectorNode = (function __GT_VectorNode(edit,arr){return (new cljs.core.VectorNode(edit,arr));
});
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){return (new cljs.core.VectorNode(edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
});
cljs.core.pv_aget = (function pv_aget(node,idx){return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
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
{var embed = ret;var r = cljs.core.pv_fresh_node(edit);var _ = cljs.core.pv_aset(r,0,embed);{
var G__23846 = (ll - 5);
var G__23847 = r;
ll = G__23846;
ret = G__23847;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){var ret = cljs.core.pv_clone_node(parent);var subidx = (((pv.cnt - 1) >>> level) & 31);if((5 === level))
{cljs.core.pv_aset(ret,subidx,tailnode);
return ret;
} else
{var child = cljs.core.pv_aget(parent,subidx);if(!((child == null)))
{var node_to_insert = push_tail(pv,(level - 5),child,tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljs.core.new_path(null,(level - 5),tailnode);cljs.core.pv_aset(ret,subidx,node_to_insert);
return ret;
}
}
});
cljs.core.vector_index_out_of_bounds = (function vector_index_out_of_bounds(i,cnt){throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(cnt)].join('')));
});
cljs.core.array_for = (function array_for(pv,i){if(((0 <= i)) && ((i < pv.cnt)))
{if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node = pv.root;var level = pv.shift;while(true){
if((level > 0))
{{
var G__23848 = cljs.core.pv_aget(node,((i >>> level) & 31));
var G__23849 = (level - 5);
node = G__23848;
level = G__23849;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{return cljs.core.vector_index_out_of_bounds(i,pv.cnt);
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){var ret = cljs.core.pv_clone_node(node);if((level === 0))
{cljs.core.pv_aset(ret,(i & 31),val);
return ret;
} else
{var subidx = ((i >>> level) & 31);cljs.core.pv_aset(ret,subidx,do_assoc(pv,(level - 5),cljs.core.pv_aget(node,subidx),i,val));
return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){var subidx = (((pv.cnt - 2) >>> level) & 31);if((level > 5))
{var new_child = pop_tail(pv,(level - 5),cljs.core.pv_aget(node,subidx));if(((new_child == null)) && ((subidx === 0)))
{return null;
} else
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,new_child);
return ret;
}
} else
{if((subidx === 0))
{return null;
} else
{if(cljs.core.constant$keyword$237)
{var ret = cljs.core.pv_clone_node(node);cljs.core.pv_aset(ret,subidx,null);
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
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientVector(self__.cnt,self__.shift,(cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_root.cljs$core$IFn$_invoke$arity$1(self__.root) : cljs.core.tv_editable_root.call(null,self__.root)),(cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1 ? cljs.core.tv_editable_tail.cljs$core$IFn$_invoke$arity$1(self__.tail) : cljs.core.tv_editable_tail.call(null,self__.tail))));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(((0 <= k)) && ((k < self__.cnt)))
{if((cljs.core.tail_off(coll__$1) <= k))
{var new_tail = cljs.core.aclone(self__.tail);(new_tail[(k & 31)] = v);
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc(coll__$1,self__.shift,self__.root,k,v),self__.tail,null));
}
} else
{if((k === self__.cnt))
{return cljs.core._conj(coll__$1,v);
} else
{if(cljs.core.constant$keyword$237)
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__23851 = null;
var G__23851__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__23851__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__23851 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23851__2.call(this,self__,k);
case 3:
return G__23851__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23851;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (self__,args23850){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23850)));
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
{var arr = cljs.core.array_for(v__$1,i);var len = arr.length;var init__$1 = (function (){var j = 0;var init__$1 = (step_init[1]);while(true){
if((j < len))
{var init__$2 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(init__$1,(j + i),(arr[j])) : f.call(null,init__$1,(j + i),(arr[j])));if(cljs.core.reduced_QMARK_(init__$2))
{return init__$2;
} else
{{
var G__23852 = (j + 1);
var G__23853 = init__$2;
j = G__23852;
init__$1 = G__23853;
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
})();if(cljs.core.reduced_QMARK_(init__$1))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$1) : cljs.core.deref.call(null,init__$1));
} else
{{
var G__23854 = (i + (step_init[0]));
i = G__23854;
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
var coll__$1 = this;if(((self__.cnt - cljs.core.tail_off(coll__$1)) < 32))
{var len = self__.tail.length;var new_tail = (new Array((len + 1)));var n__4248__auto___23855 = len;var i_23856 = 0;while(true){
if((i_23856 < n__4248__auto___23855))
{(new_tail[i_23856] = (self__.tail[i_23856]));
{
var G__23857 = (i_23856 + 1);
i_23856 = G__23857;
continue;
}
} else
{}
break;
}
(new_tail[len] = o);
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + 1),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> 5) > (1 << self__.shift));var new_shift = ((root_overflow_QMARK_)?(self__.shift + 5):self__.shift);var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node(null);cljs.core.pv_aset(n_r,0,self__.root);
cljs.core.pv_aset(n_r,1,cljs.core.new_path(null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));
return n_r;
})():cljs.core.push_tail(coll__$1,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + 1),new_shift,new_root,[o],null));
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
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(v__$1,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){var self__ = this;
var v__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(v__$1,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === 0))
{return null;
} else
{if((self__.cnt < 32))
{return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(self__.tail);
} else
{if(cljs.core.constant$keyword$237)
{return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$3(coll__$1,0,0) : cljs.core.chunked_seq.call(null,coll__$1,0,0));
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
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,(self__.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if((1 < (self__.cnt - cljs.core.tail_off(coll__$1))))
{return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - 1),self__.shift,self__.root,self__.tail.slice(0,-1),null));
} else
{if(cljs.core.constant$keyword$237)
{var new_tail = cljs.core.array_for(coll__$1,(self__.cnt - 2));var nr = cljs.core.pop_tail(coll__$1,self__.shift,self__.root);var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);var cnt_1 = (self__.cnt - 1);if(((5 < self__.shift)) && ((cljs.core.pv_aget(new_root,1) == null)))
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - 5),cljs.core.pv_aget(new_root,0),new_tail,null));
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
var coll__$1 = this;return cljs.core._assoc(coll__$1,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICloneable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;return (cljs.core.array_for(coll__$1,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((0 <= n)) && ((n < self__.cnt)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.__GT_PersistentVector = (function __GT_PersistentVector(meta,cnt,shift,root,tail,__hash){return (new cljs.core.PersistentVector(meta,cnt,shift,root,tail,__hash));
});
cljs.core.PersistentVector.EMPTY_NODE = (new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){var l = xs.length;var xs__$1 = ((no_clone)?xs:cljs.core.aclone(xs));if((l < 32))
{return (new cljs.core.PersistentVector(null,l,5,cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice(0,32);var v = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node,null));var i = 32;var out = v.cljs$core$IEditableCollection$_as_transient$arity$1(null);while(true){
if((i < l))
{{
var G__23858 = (i + 1);
var G__23859 = cljs.core.conj_BANG_(out,(xs__$1[i]));
i = G__23858;
out = G__23859;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){if(((args instanceof cljs.core.IndexedSeq)) && ((args.i === 0)))
{return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(args.arr,true) : cljs.core.PersistentVector.fromArray.call(null,args.arr,true));
} else
{return cljs.core.vec(args);
}
};
var vector = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return vector__delegate.call(this,args);};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__23860){
var args = cljs.core.seq(arglist__23860);
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + 1) < self__.node.length))
{var s = (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(self__.vec,self__.node,self__.i,(self__.off + 1)) : cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1)));if((s == null))
{return null;
} else
{return s;
}
} else
{return cljs.core._chunked_next(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.ChunkedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec)) : cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec))),f);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((cljs.core.subvec.cljs$core$IFn$_invoke$arity$3 ? cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec)) : cljs.core.subvec.call(null,self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec))),f,start);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(((self__.off + 1) < self__.node.length))
{var s = (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$4(self__.vec,self__.node,self__.i,(self__.off + 1)) : cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1)));if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return cljs.core._chunked_rest(coll__$1);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var l = self__.node.length;var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + l),0) : cljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0)):null);if((s == null))
{return null;
} else
{return s;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){var self__ = this;
var coll__$1 = this;return (cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$5(self__.vec,self__.node,self__.i,self__.off,m) : cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m));
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var l = self__.node.length;var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.chunked_seq.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + l),0) : cljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0)):null);if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
});
cljs.core.__GT_ChunkedSeq = (function __GT_ChunkedSeq(vec,node,i,off,meta,__hash){return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,__hash));
});
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){return (new cljs.core.ChunkedSeq(vec,cljs.core.array_for(vec,i),i,off,null,null));
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
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){var self__ = this;
var coll__$1 = this;var v_pos = (self__.start + key);return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val),self__.start,(function (){var x__3713__auto__ = self__.end;var y__3714__auto__ = (v_pos + 1);return ((x__3713__auto__ > y__3714__auto__) ? x__3713__auto__ : y__3714__auto__);
})(),null) : cljs.core.build_subvec.call(null,self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.v,v_pos,val),self__.start,(function (){var x__3713__auto__ = self__.end;var y__3714__auto__ = (v_pos + 1);return ((x__3713__auto__ > y__3714__auto__) ? x__3713__auto__ : y__3714__auto__);
})(),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__23862 = null;
var G__23862__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__23862__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__23862 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23862__2.call(this,self__,k);
case 3:
return G__23862__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23862;
})()
;
cljs.core.Subvec.prototype.apply = (function (self__,args23861){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23861)));
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$2(null,k);
});
cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(self__.meta,cljs.core._assoc_n(self__.v,self__.end,o),self__.start,(self__.end + 1),null) : cljs.core.build_subvec.call(null,self__.meta,cljs.core._assoc_n(self__.v,self__.end,o),self__.start,(self__.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(coll__$1,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){var self__ = this;
var coll__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(coll__$1,f,start__$1);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var subvec_seq = (function subvec_seq(i){if((i === self__.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,i),(new cljs.core.LazySeq(null,(function (){return subvec_seq((i + 1));
}),null,null)));
}
});return subvec_seq(self__.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.end - self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(self__.meta,self__.v,self__.start,(self__.end - 1),null) : cljs.core.build_subvec.call(null,self__.meta,self__.v,self__.start,(self__.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){var self__ = this;
var coll__$1 = this;return cljs.core._assoc(coll__$1,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5 ? cljs.core.build_subvec.cljs$core$IFn$_invoke$arity$5(meta__$1,self__.v,self__.start,self__.end,self__.__hash) : cljs.core.build_subvec.call(null,meta__$1,self__.v,self__.start,self__.end,self__.__hash));
});
cljs.core.Subvec.prototype.cljs$core$ICloneable$ = true;
cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,self__.end,self__.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(((n < 0)) || ((self__.end <= (self__.start + n))))
{return cljs.core.vector_index_out_of_bounds(n,(self__.end - self__.start));
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.v,(self__.start + n));
}
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((n < 0)) || ((self__.end <= (self__.start + n))))
{return not_found;
} else
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.v,(self__.start + n),not_found);
}
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.__GT_Subvec = (function __GT_Subvec(meta,v,start,end,__hash){return (new cljs.core.Subvec(meta,v,start,end,__hash));
});
cljs.core.build_subvec = (function build_subvec(meta,v,start,end,__hash){while(true){
if((v instanceof cljs.core.Subvec))
{{
var G__23863 = meta;
var G__23864 = v.v;
var G__23865 = (v.start + start);
var G__23866 = (v.start + end);
var G__23867 = __hash;
meta = G__23863;
v = G__23864;
start = G__23865;
end = G__23866;
__hash = G__23867;
continue;
}
} else
{var c = cljs.core.count(v);if(((start < 0)) || ((end < 0)) || ((start > c)) || ((end > c)))
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
var subvec__2 = (function (v,start){return subvec.cljs$core$IFn$_invoke$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){return cljs.core.build_subvec(null,v,start,end,null);
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
{return (new cljs.core.VectorNode(edit,cljs.core.aclone(node.arr)));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){return (new cljs.core.VectorNode((function (){var obj23871 = {};return obj23871;
})(),cljs.core.aclone(node.arr)));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];cljs.core.array_copy(tl,0,ret,0,tl.length);
return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){var ret = cljs.core.tv_ensure_editable(tv.root.edit,parent);var subidx = (((tv.cnt - 1) >>> level) & 31);cljs.core.pv_aset(ret,subidx,(((level === 5))?tail_node:(function (){var child = cljs.core.pv_aget(ret,subidx);if(!((child == null)))
{return tv_push_tail(tv,(level - 5),child,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - 5),tail_node);
}
})()));
return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){var node__$1 = cljs.core.tv_ensure_editable(tv.root.edit,node);var subidx = (((tv.cnt - 2) >>> level) & 31);if((level > 5))
{var new_child = tv_pop_tail(tv,(level - 5),cljs.core.pv_aget(node__$1,subidx));if(((new_child == null)) && ((subidx === 0)))
{return null;
} else
{cljs.core.pv_aset(node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === 0))
{return null;
} else
{if(cljs.core.constant$keyword$237)
{cljs.core.pv_aset(node__$1,subidx,null);
return node__$1;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){if(((0 <= i)) && ((i < tv.cnt)))
{if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root = tv.root;var node = root;var level = tv.shift;while(true){
if((level > 0))
{{
var G__23872 = cljs.core.tv_ensure_editable(root.edit,cljs.core.pv_aget(node,((i >>> level) & 31)));
var G__23873 = (level - 5);
node = G__23872;
level = G__23873;
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
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__23875 = null;
var G__23875__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23875__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23875 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23875__2.call(this,self__,k);
case 3:
return G__23875__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23875;
})()
;
cljs.core.TransientVector.prototype.apply = (function (self__,args23874){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23874)));
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(coll__$1,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;if(self__.root.edit)
{return (cljs.core.array_for(coll__$1,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;if(((0 <= n)) && ((n < self__.cnt)))
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
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
{if((cljs.core.tail_off(tcoll__$1) <= n))
{(self__.tail[(n & 31)] = val);
return tcoll__$1;
} else
{var new_root = (function go(level,node){var node__$1 = cljs.core.tv_ensure_editable(self__.root.edit,node);if((level === 0))
{cljs.core.pv_aset(node__$1,(n & 31),val);
return node__$1;
} else
{var subidx = ((n >>> level) & 31);cljs.core.pv_aset(node__$1,subidx,go((level - 5),cljs.core.pv_aget(node__$1,subidx)));
return node__$1;
}
}).call(null,self__.shift,self__.root);self__.root = new_root;
return tcoll__$1;
}
} else
{if((n === self__.cnt))
{return cljs.core._conj_BANG_(tcoll__$1,val);
} else
{if(cljs.core.constant$keyword$237)
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
{if(cljs.core.constant$keyword$237)
{var new_tail = cljs.core.editable_array_for(tcoll__$1,(self__.cnt - 2));var new_root = (function (){var nr = cljs.core.tv_pop_tail(tcoll__$1,self__.shift,self__.root);if(!((nr == null)))
{return nr;
} else
{return (new cljs.core.VectorNode(self__.root.edit,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]));
}
})();if(((5 < self__.shift)) && ((cljs.core.pv_aget(new_root,1) == null)))
{var new_root__$1 = cljs.core.tv_ensure_editable(self__.root.edit,cljs.core.pv_aget(new_root,0));self__.root = new_root__$1;
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
var tcoll__$1 = this;return cljs.core._assoc_n_BANG_(tcoll__$1,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;if(self__.root.edit)
{if(((self__.cnt - cljs.core.tail_off(tcoll__$1)) < 32))
{(self__.tail[(self__.cnt & 31)] = o);
self__.cnt = (self__.cnt + 1);
return tcoll__$1;
} else
{var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(new_tail[0] = o);
self__.tail = new_tail;
if(((self__.cnt >>> 5) > (1 << self__.shift)))
{var new_root_array = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var new_shift = (self__.shift + 5);(new_root_array[0] = self__.root);
(new_root_array[1] = cljs.core.new_path(self__.root.edit,self__.shift,tail_node));
self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + 1);
return tcoll__$1;
} else
{var new_root = cljs.core.tv_push_tail(tcoll__$1,self__.shift,self__.root,tail_node);self__.root = new_root;
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
var len = (self__.cnt - cljs.core.tail_off(tcoll__$1));var trimmed_tail = (new Array(len));cljs.core.array_copy(self__.tail,0,trimmed_tail,0,len);
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var temp__4090__auto__ = cljs.core.next(self__.front);if(temp__4090__auto__)
{var f1 = temp__4090__auto__;return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return cljs.core._empty(coll__$1);
} else
{return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + 1),self__.front,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3406__auto__ = self__.rear;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + 1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var rear__$1 = cljs.core.seq(self__.rear);if(cljs.core.truth_((function (){var or__3406__auto__ = self__.front;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq(rear__$1),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if(cljs.core.truth_(self__.front))
{var temp__4090__auto__ = cljs.core.next(self__.front);if(temp__4090__auto__)
{var f1 = temp__4090__auto__;return (new cljs.core.PersistentQueue(self__.meta,(self__.count - 1),f1,self__.rear,null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count - 1),cljs.core.seq(self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll__$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.rest(cljs.core.seq(coll__$1));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentQueue(self__.meta,self__.count,self__.front,self__.rear,self__.__hash));
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
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/NeverEquiv");
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
cljs.core.equiv_map = (function equiv_map(x,y){return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xkv){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){var len = array.length;var i = 0;while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__23876 = (i + incr);
i = G__23876;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){var a__$1 = cljs.core.hash(a);var b__$1 = cljs.core.hash(b);if((a__$1 < b__$1))
{return -1;
} else
{if((a__$1 > b__$1))
{return 1;
} else
{if(cljs.core.constant$keyword$237)
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){var ks = m.keys;var len = ks.length;var so = m.strobj;var mm = cljs.core.meta(m);var i = 0;var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{var k__$1 = (ks[i]);{
var G__23877 = (i + 1);
var G__23878 = cljs.core.assoc_BANG_(out,k__$1,(so[k__$1]));
i = G__23877;
out = G__23878;
continue;
}
} else
{return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(out,k,v)),mm);
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){var new_obj = (function (){var obj23882 = {};return obj23882;
})();var l = ks.length;var i_23883 = 0;while(true){
if((i_23883 < l))
{var k_23884 = (ks[i_23883]);(new_obj[k_23884] = (obj[k_23884]));
{
var G__23885 = (i_23883 + 1);
i_23883 = G__23885;
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
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.transient$(cljs.core.into(cljs.core.PersistentHashMap.EMPTY,coll__$1));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_imap(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;if((goog.isString(k)) && (!((cljs.core.scan_array(1,k,self__.keys) == null))))
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;if(goog.isString(k))
{if(((self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD)) || ((self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD)))
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
} else
{if(!((cljs.core.scan_array(1,k,self__.keys) == null)))
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);(new_strobj[k] = v);
return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + 1),null));
} else
{var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);var new_keys = cljs.core.aclone(self__.keys);(new_strobj[k] = v);
new_keys.push(k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll__$1,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((goog.isString(k)) && (!((cljs.core.scan_array(1,k,self__.keys) == null))))
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__23888 = null;
var G__23888__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23888__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23888 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23888__2.call(this,self__,k);
case 3:
return G__23888__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23888;
})()
;
cljs.core.ObjMap.prototype.apply = (function (self__,args23887){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23887)));
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var len = self__.keys.length;var keys__$1 = self__.keys.sort(cljs.core.obj_map_compare_keys);var init__$1 = init;while(true){
if(cljs.core.seq(keys__$1))
{var k = cljs.core.first(keys__$1);var init__$2 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(init__$1,k,(self__.strobj[k])) : f.call(null,init__$1,k,(self__.strobj[k])));if(cljs.core.reduced_QMARK_(init__$2))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else
{{
var G__23889 = cljs.core.rest(keys__$1);
var G__23890 = init__$2;
keys__$1 = G__23889;
init__$1 = G__23890;
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
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.keys.length > 0))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23886_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__23886_SHARP_,(self__.strobj[p1__23886_SHARP_])],null));
}),self__.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,self__.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;if((goog.isString(k)) && (!((cljs.core.scan_array(1,k,self__.keys) == null))))
{var new_keys = cljs.core.aclone(self__.keys);var new_strobj = cljs.core.obj_clone(self__.strobj,self__.keys);new_keys.splice(cljs.core.scan_array(1,k,new_keys),1);
delete new_strobj[k];
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
} else
{return coll__$1;
}
});
cljs.core.__GT_ObjMap = (function __GT_ObjMap(meta,keys,strobj,update_count,__hash){return (new cljs.core.ObjMap(meta,keys,strobj,update_count,__hash));
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],(function (){var obj23892 = {};return obj23892;
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
{if(cljs.core.constant$keyword$237)
{{
var G__23893 = (i + 2);
i = G__23893;
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
{if(cljs.core.constant$keyword$237)
{{
var G__23894 = (i + 2);
i = G__23894;
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
{if(cljs.core.constant$keyword$237)
{{
var G__23895 = (i + 2);
i = G__23895;
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
{if(cljs.core.constant$keyword$237)
{{
var G__23896 = (i + 2);
i = G__23896;
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
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(arr[i])))
{return i;
} else
{if(cljs.core.constant$keyword$237)
{{
var G__23897 = (i + 2);
i = G__23897;
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
{return cljs.core.array_map_index_of_keyword_QMARK_(arr,m,k);
} else
{if((goog.isString(k)) || (typeof k === 'number'))
{return cljs.core.array_map_index_of_identical_QMARK_(arr,m,k);
} else
{if((k instanceof cljs.core.Symbol))
{return cljs.core.array_map_index_of_symbol_QMARK_(arr,m,k);
} else
{if((k == null))
{return cljs.core.array_map_index_of_nil_QMARK_(arr,m,k);
} else
{if(cljs.core.constant$keyword$237)
{return cljs.core.array_map_index_of_equiv_QMARK_(arr,m,k);
} else
{return null;
}
}
}
}
}
});
cljs.core.array_map_extend_kv = (function array_map_extend_kv(m,k,v){var arr = m.arr;var l = arr.length;var narr = (new Array((l + 2)));var i_23898 = 0;while(true){
if((i_23898 < l))
{(narr[i_23898] = (arr[i_23898]));
{
var G__23899 = (i_23898 + 1);
i_23898 = G__23899;
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
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/PersistentArrayMapSeq");
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_coll(coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i < (self__.arr.length - 2)))
{return (new cljs.core.PersistentArrayMapSeq(self__.arr,(self__.i + 2),self__._meta));
} else
{return null;
}
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
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
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMapSeq(self__.arr,self__.i,new_meta));
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientArrayMap((function (){var obj23902 = {};return obj23902;
})(),self__.arr.length,cljs.core.aclone(self__.arr)));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_imap(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx === -1))
{if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr__$1 = cljs.core.array_map_extend_kv(coll__$1,k,v);return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + 1),arr__$1,null));
} else
{return cljs.core._with_meta(cljs.core._assoc(cljs.core.into(cljs.core.PersistentHashMap.EMPTY,coll__$1),k,v),self__.meta);
}
} else
{if((v === (self__.arr[(idx + 1)])))
{return coll__$1;
} else
{if(cljs.core.constant$keyword$237)
{var arr__$1 = (function (){var G__23903 = cljs.core.aclone(self__.arr);(G__23903[(idx + 1)] = v);
return G__23903;
})();return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,arr__$1,null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((cljs.core.array_map_index_of(coll__$1,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__23904 = null;
var G__23904__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23904__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23904 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23904__2.call(this,self__,k);
case 3:
return G__23904__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23904;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (self__,args23900){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23900)));
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
{var init__$2 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(init__$1,(self__.arr[i]),(self__.arr[(i + 1)])) : f.call(null,init__$1,(self__.arr[i]),(self__.arr[(i + 1)])));if(cljs.core.reduced_QMARK_(init__$2))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else
{{
var G__23905 = (i + 2);
var G__23906 = init__$2;
i = G__23905;
init__$1 = G__23906;
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
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.persistent_array_map_seq(self__.arr,0,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var idx = cljs.core.array_map_index_of(coll__$1,k);if((idx >= 0))
{var len = self__.arr.length;var new_len = (len - 2);if((new_len === 0))
{return cljs.core._empty(coll__$1);
} else
{var new_arr = (new Array(new_len));var s = 0;var d = 0;while(true){
if((s >= len))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - 1),new_arr,null));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(self__.arr[s])))
{{
var G__23907 = (s + 2);
var G__23908 = d;
s = G__23907;
d = G__23908;
continue;
}
} else
{if(cljs.core.constant$keyword$237)
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + 1)] = (self__.arr[(s + 1)]));
{
var G__23909 = (s + 2);
var G__23910 = (d + 2);
s = G__23909;
d = G__23910;
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
cljs.core.PersistentArrayMap.fromArray = (function (arr,no_clone,no_check){var arr__$1 = ((no_clone)?arr:cljs.core.aclone(arr));if(no_check)
{var cnt = (arr__$1.length / 2);return (new cljs.core.PersistentArrayMap(null,cnt,arr__$1,null));
} else
{var len = arr__$1.length;var i = 0;var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__23911 = (i + 2);
var G__23912 = cljs.core._assoc_BANG_(ret,(arr__$1[i]),(arr__$1[(i + 1)]));
i = G__23911;
ret = G__23912;
continue;
}
} else
{return cljs.core._persistent_BANG_(ret);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx >= 0))
{(self__.arr[idx] = (self__.arr[(self__.len - 2)]));
(self__.arr[(idx + 1)] = (self__.arr[(self__.len - 1)]));
var G__23913_23915 = self__.arr;G__23913_23915.pop();
G__23913_23915.pop();
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
{var idx = cljs.core.array_map_index_of(tcoll__$1,key);if((idx === -1))
{if(((self__.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + 2);
self__.arr.push(key);
self__.arr.push(val);
return tcoll__$1;
} else
{return cljs.core.assoc_BANG_((cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2 ? cljs.core.array__GT_transient_hash_map.cljs$core$IFn$_invoke$arity$2(self__.len,self__.arr) : cljs.core.array__GT_transient_hash_map.call(null,self__.len,self__.arr)),key,val);
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
{if((function (){var G__23914 = o;if(G__23914)
{var bit__4050__auto__ = (G__23914.cljs$lang$protocol_mask$partition0$ & 2048);if((bit__4050__auto__) || (G__23914.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__23914.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__23914);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__23914);
}
})())
{return cljs.core._assoc_BANG_(tcoll__$1,(cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.key.call(null,o)),(cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.val.call(null,o)));
} else
{var es = cljs.core.seq(o);var tcoll__$2 = tcoll__$1;while(true){
var temp__4090__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;{
var G__23916 = cljs.core.next(es);
var G__23917 = cljs.core._assoc_BANG_(tcoll__$2,(cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.key.call(null,e)),(cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.val.call(null,e)));
es = G__23916;
tcoll__$2 = G__23917;
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
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(self__.len,2),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){var self__ = this;
var tcoll__$1 = this;if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of(tcoll__$1,k);if((idx === -1))
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
{return cljs.core.quot(self__.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.__GT_TransientArrayMap = (function __GT_TransientArrayMap(editable_QMARK_,len,arr){return (new cljs.core.TransientArrayMap(editable_QMARK_,len,arr));
});
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);var i = 0;while(true){
if((i < len))
{{
var G__23918 = cljs.core.assoc_BANG_(out,(arr[i]),(arr[(i + 1)]));
var G__23919 = (i + 2);
out = G__23918;
i = G__23919;
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
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opts__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core/Box");
});
cljs.core.__GT_Box = (function __GT_Box(val){return (new cljs.core.Box(val));
});
cljs.core.key_test = (function key_test(key,other){if((key === other))
{return true;
} else
{if(cljs.core.keyword_identical_QMARK_(key,other))
{return true;
} else
{if(cljs.core.constant$keyword$237)
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,other);
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
var clone_and_set__3 = (function (arr,i,a){var G__23922 = cljs.core.aclone(arr);(G__23922[i] = a);
return G__23922;
});
var clone_and_set__5 = (function (arr,i,a,j,b){var G__23923 = cljs.core.aclone(arr);(G__23923[i] = a);
(G__23923[j] = b);
return G__23923;
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
cljs.core.remove_pair = (function remove_pair(arr,i){var new_arr = (new Array((arr.length - 2)));cljs.core.array_copy(arr,0,new_arr,0,(2 * i));
cljs.core.array_copy(arr,(2 * (i + 1)),new_arr,(2 * i),(new_arr.length - (2 * i)));
return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){return cljs.core.bit_count((bitmap & (bit - 1)));
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
{return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(init__$1,k,(arr[(i + 1)])) : f.call(null,init__$1,k,(arr[(i + 1)])));
} else
{var node = (arr[(i + 1)]);if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();if(cljs.core.reduced_QMARK_(init__$2))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else
{{
var G__23924 = (i + 2);
var G__23925 = init__$2;
i = G__23924;
init__$1 = G__23925;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){var self__ = this;
var inode = this;if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);var earr = editable.arr;var len = earr.length;editable.bitmap = (bit ^ editable.bitmap);
cljs.core.array_copy(earr,(2 * (i + 1)),earr,(2 * i),(len - (2 * (i + 1))));
(earr[(len - 2)] = null);
(earr[(len - 1)] = null);
return editable;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === 0))
{var n = cljs.core.bit_count(self__.bitmap);if(((2 * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);var earr = editable.arr;added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr,(2 * idx),earr,(2 * (idx + 1)),(2 * (n - idx)));
(earr[(2 * idx)] = key);
(earr[((2 * idx) + 1)] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= 16))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i_23926 = 0;var j_23927 = 0;while(true){
if((i_23926 < 32))
{if((((self__.bitmap >>> i_23926) & 1) === 0))
{{
var G__23928 = (i_23926 + 1);
var G__23929 = j_23927;
i_23926 = G__23928;
j_23927 = G__23929;
continue;
}
} else
{(nodes[i_23926] = ((!(((self__.arr[j_23927]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),cljs.core.hash((self__.arr[j_23927])),(self__.arr[j_23927]),(self__.arr[(j_23927 + 1)]),added_leaf_QMARK_):(self__.arr[(j_23927 + 1)])));
{
var G__23930 = (i_23926 + 1);
var G__23931 = (j_23927 + 2);
i_23926 = G__23930;
j_23927 = G__23931;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit__$1,(n + 1),nodes));
} else
{if(cljs.core.constant$keyword$237)
{var new_arr = (new Array((2 * (n + 4))));cljs.core.array_copy(self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljs.core.array_copy(self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
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
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,((2 * idx) + 1),n);
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,((2 * idx) + 1),val);
}
} else
{if(cljs.core.constant$keyword$237)
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,(2 * idx),null,((2 * idx) + 1),(cljs.core.create_node.cljs$core$IFn$_invoke$arity$7 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$7(edit__$1,(shift + 5),key_or_nil,val_or_node,hash,key,val) : cljs.core.create_node.call(null,edit__$1,(shift + 5),key_or_nil,val_or_node,hash,key,val)));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(self__.arr) : cljs.core.create_inode_seq.call(null,self__.arr));
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[(2 * idx)]);var val_or_node = (self__.arr[((2 * idx) + 1)]);if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,((2 * idx) + 1),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{if(cljs.core.constant$keyword$237)
{return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{(removed_leaf_QMARK_[0] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{if(cljs.core.constant$keyword$237)
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
{var n = cljs.core.bit_count(self__.bitmap);var new_arr = (new Array((((n < 0))?4:(2 * (n + 1)))));cljs.core.array_copy(self__.arr,0,new_arr,0,(2 * n));
return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[(2 * idx)]);var val_or_node = (self__.arr[((2 * idx) + 1)]);if((key_or_nil == null))
{return val_or_node.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_nil,val_or_node], null);
} else
{if(cljs.core.constant$keyword$237)
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
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[(2 * idx)]);var val_or_node = (self__.arr[((2 * idx) + 1)]);if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + 5),hash,key);if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,((2 * idx) + 1),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{if(cljs.core.constant$keyword$237)
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair(self__.arr,idx)));
} else
{if(cljs.core.constant$keyword$237)
{return inode;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var bit = (1 << ((hash >>> shift) & 0x01f));var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);if(((self__.bitmap & bit) === 0))
{var n = cljs.core.bit_count(self__.bitmap);if((n >= 16))
{var nodes = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];var jdx = ((hash >>> shift) & 0x01f);(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i_23932 = 0;var j_23933 = 0;while(true){
if((i_23932 < 32))
{if((((self__.bitmap >>> i_23932) & 1) === 0))
{{
var G__23934 = (i_23932 + 1);
var G__23935 = j_23933;
i_23932 = G__23934;
j_23933 = G__23935;
continue;
}
} else
{(nodes[i_23932] = ((!(((self__.arr[j_23933]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash((self__.arr[j_23933])),(self__.arr[j_23933]),(self__.arr[(j_23933 + 1)]),added_leaf_QMARK_):(self__.arr[(j_23933 + 1)])));
{
var G__23936 = (i_23932 + 1);
var G__23937 = (j_23933 + 2);
i_23932 = G__23936;
j_23933 = G__23937;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n + 1),nodes));
} else
{var new_arr = (new Array((2 * (n + 1))));cljs.core.array_copy(self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljs.core.array_copy(self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);var val_or_node = (self__.arr[((2 * idx) + 1)]);if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);if((n === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,((2 * idx) + 1),n)));
}
} else
{if(cljs.core.key_test(key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,((2 * idx) + 1),val)));
}
} else
{if(cljs.core.constant$keyword$237)
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$5(self__.arr,(2 * idx),null,((2 * idx) + 1),(cljs.core.create_node.cljs$core$IFn$_invoke$arity$6 ? cljs.core.create_node.cljs$core$IFn$_invoke$arity$6((shift + 5),key_or_nil,val_or_node,hash,key,val) : cljs.core.create_node.call(null,(shift + 5),key_or_nil,val_or_node,hash,key,val)))));
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
{var idx = cljs.core.bitmap_indexed_node_index(self__.bitmap,bit);var key_or_nil = (self__.arr[(2 * idx)]);var val_or_node = (self__.arr[((2 * idx) + 1)]);if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil))
{return val_or_node;
} else
{if(cljs.core.constant$keyword$237)
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
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,[]));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){var arr = array_node.arr;var len = (2 * (array_node.cnt - 1));var new_arr = (new Array(len));var i = 0;var j = 1;var bitmap = 0;while(true){
if((i < len))
{if((!((i === idx))) && (!(((arr[i]) == null))))
{(new_arr[j] = (arr[i]));
{
var G__23938 = (i + 1);
var G__23939 = (j + 2);
var G__23940 = (bitmap | (1 << i));
i = G__23938;
j = G__23939;
bitmap = G__23940;
continue;
}
} else
{{
var G__23941 = (i + 1);
var G__23942 = j;
var G__23943 = bitmap;
i = G__23941;
j = G__23942;
bitmap = G__23943;
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
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;var idx = ((hash >>> shift) & 0x01f);var node = (self__.arr[idx]);if((node == null))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));editable.cnt = (editable.cnt + 1);
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$1(self__.arr) : cljs.core.create_array_node_seq.call(null,self__.arr));
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
{return cljs.core.pack_array_node(inode,edit__$1,idx);
} else
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);editable.cnt = (editable.cnt - 1);
return editable;
}
} else
{if(cljs.core.constant$keyword$237)
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,idx,n);
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
{return (new cljs.core.ArrayNode(e,self__.cnt,cljs.core.aclone(self__.arr)));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;var len = self__.arr.length;var i = 0;var init__$1 = init;while(true){
if((i < len))
{var node = (self__.arr[i]);if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);if(cljs.core.reduced_QMARK_(init__$2))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else
{{
var G__23944 = (i + 1);
var G__23945 = init__$2;
i = G__23944;
init__$1 = G__23945;
continue;
}
}
} else
{{
var G__23946 = (i + 1);
var G__23947 = init__$1;
i = G__23946;
init__$1 = G__23947;
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
{return cljs.core.pack_array_node(inode,null,idx);
} else
{return (new cljs.core.ArrayNode(null,(self__.cnt - 1),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
}
} else
{if(cljs.core.constant$keyword$237)
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
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
{return (new cljs.core.ArrayNode(null,(self__.cnt + 1),cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);if((n === node))
{return inode;
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,idx,n)));
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
{if(cljs.core.key_test(key,(arr[i])))
{return i;
} else
{{
var G__23948 = (i + 2);
i = G__23948;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === -1))
{if((self__.arr.length > (2 * self__.cnt)))
{var editable = cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$6(inode,edit__$1,(2 * self__.cnt),key,((2 * self__.cnt) + 1),val);added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var len = self__.arr.length;var new_arr = (new Array((len + 2)));cljs.core.array_copy(self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + 1),new_arr);
}
} else
{if(((self__.arr[(idx + 1)]) === val))
{return inode;
} else
{return cljs.core.edit_and_set.cljs$core$IFn$_invoke$arity$4(inode,edit__$1,(idx + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){var self__ = this;
var inode = this;return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$1(self__.arr) : cljs.core.create_inode_seq.call(null,self__.arr));
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === -1))
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
{var new_arr = (new Array((2 * (self__.cnt + 1))));cljs.core.array_copy(self__.arr,0,new_arr,0,(2 * self__.cnt));
return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var inode = this;return cljs.core.inode_kv_reduce(self__.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[idx]),(self__.arr[(idx + 1)])], null);
} else
{if(cljs.core.constant$keyword$237)
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === -1))
{return inode;
} else
{if((self__.cnt === 1))
{return null;
} else
{if(cljs.core.constant$keyword$237)
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - 1),cljs.core.remove_pair(self__.arr,cljs.core.quot(idx,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){var self__ = this;
var inode = this;if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx === -1))
{var len = (2 * self__.cnt);var new_arr = (new Array((len + 2)));cljs.core.array_copy(self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + 1),new_arr));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.arr[idx]),val))
{return inode;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.cljs$core$IFn$_invoke$arity$3(self__.arr,(idx + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){var self__ = this;
var inode = this;var idx = cljs.core.hash_collision_node_find_index(self__.arr,self__.cnt,key);if((idx < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(self__.arr[idx])))
{return (self__.arr[(idx + 1)]);
} else
{if(cljs.core.constant$keyword$237)
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
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){var key1hash = cljs.core.hash(key1);if((key1hash === key2hash))
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
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.NodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.nodes[self__.i]),(self__.nodes[(self__.i + 1)])], null);
} else
{return cljs.core.first(self__.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.s == null))
{return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(self__.nodes,(self__.i + 2),null) : cljs.core.create_inode_seq.call(null,self__.nodes,(self__.i + 2),null));
} else
{return (cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.core.create_inode_seq.cljs$core$IFn$_invoke$arity$3(self__.nodes,self__.i,cljs.core.next(self__.s)) : cljs.core.create_inode_seq.call(null,self__.nodes,self__.i,cljs.core.next(self__.s)));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_NodeSeq = (function __GT_NodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.NodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){return create_inode_seq.cljs$core$IFn$_invoke$arity$3(nodes,0,null);
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
var G__23949 = (j + 2);
j = G__23949;
continue;
}
}
} else
{{
var G__23950 = (j + 2);
j = G__23950;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.first(self__.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4 ? cljs.core.create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,self__.nodes,self__.i,cljs.core.next(self__.s)) : cljs.core.create_array_node_seq.call(null,null,self__.nodes,self__.i,cljs.core.next(self__.s)));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_ArrayNodeSeq = (function __GT_ArrayNodeSeq(meta,nodes,i,s,__hash){return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,__hash));
});
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){return create_array_node_seq.cljs$core$IFn$_invoke$arity$4(null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){if((s == null))
{var len = nodes.length;var j = i;while(true){
if((j < len))
{var temp__4090__auto__ = (nodes[j]);if(cljs.core.truth_(temp__4090__auto__))
{var nj = temp__4090__auto__;var temp__4090__auto____$1 = nj.inode_seq();if(cljs.core.truth_(temp__4090__auto____$1))
{var ns = temp__4090__auto____$1;return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + 1),ns,null));
} else
{{
var G__23951 = (j + 1);
j = G__23951;
continue;
}
}
} else
{{
var G__23952 = (j + 1);
j = G__23952;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashMap((function (){var obj23955 = {};return obj23955;
})(),self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_imap(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
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
{if(cljs.core.constant$keyword$237)
{return self__.root.inode_lookup(0,cljs.core.hash(k),k,not_found);
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
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc(0,cljs.core.hash(k),k,v,added_leaf_QMARK_);if((new_root === self__.root))
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
{if(cljs.core.constant$keyword$237)
{return !((self__.root.inode_lookup(0,cljs.core.hash(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__23956 = null;
var G__23956__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23956__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23956 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23956__2.call(this,self__,k);
case 3:
return G__23956__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23956;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (self__,args23953){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23953)));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;var init__$1 = ((self__.has_nil_QMARK_)?(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(init,null,self__.nil_val) : f.call(null,init,null,self__.nil_val)):init);if(cljs.core.reduced_QMARK_(init__$1))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$1) : cljs.core.deref.call(null,init__$1));
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{if(cljs.core.constant$keyword$237)
{return init__$1;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > 0))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);if(self__.has_nil_QMARK_)
{return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,self__.nil_val], null),s);
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
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashMap(self__.meta,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,self__.meta);
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
{if(cljs.core.constant$keyword$237)
{var new_root = self__.root.inode_without(0,cljs.core.hash(k),k);if((new_root === self__.root))
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
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){var len = ks.length;var i = 0;var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if((i < len))
{{
var G__23957 = (i + 1);
var G__23958 = out.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(ks[i]),(vs[i]));
i = G__23957;
out = G__23958;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/TransientHashMap");
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
{return self__.root.inode_lookup(0,cljs.core.hash(k),k);
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
{return self__.root.inode_lookup(0,cljs.core.hash(k),k,not_found);
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
{if((function (){var G__23959 = o;if(G__23959)
{var bit__4050__auto__ = (G__23959.cljs$lang$protocol_mask$partition0$ & 2048);if((bit__4050__auto__) || (G__23959.cljs$core$IMapEntry$))
{return true;
} else
{if((!G__23959.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__23959);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMapEntry,G__23959);
}
})())
{return tcoll.assoc_BANG_((cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.key.call(null,o)),(cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.val.call(null,o)));
} else
{var es = cljs.core.seq(o);var tcoll__$1 = tcoll;while(true){
var temp__4090__auto__ = cljs.core.first(es);if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;{
var G__23960 = cljs.core.next(es);
var G__23961 = tcoll__$1.assoc_BANG_((cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.key.call(null,e)),(cljs.core.val.cljs$core$IFn$_invoke$arity$1 ? cljs.core.val.cljs$core$IFn$_invoke$arity$1(e) : cljs.core.val.call(null,e)));
es = G__23960;
tcoll__$1 = G__23961;
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
{var added_leaf_QMARK_ = (new cljs.core.Box(false));var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,0,cljs.core.hash(k),k,v,added_leaf_QMARK_);if((node === self__.root))
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
{var removed_leaf_QMARK_ = (new cljs.core.Box(false));var node = self__.root.inode_without_BANG_(self__.edit,0,cljs.core.hash(k),k,removed_leaf_QMARK_);if((node === self__.root))
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
var G__23962 = ((ascending_QMARK_)?t.left:t.right);
var G__23963 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,t);
t = G__23962;
stack__$1 = G__23963;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt < 0))
{return (cljs.core.count(cljs.core.next(coll__$1)) + 1);
} else
{return self__.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.peek(self__.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var t = cljs.core.first(self__.stack);var next_stack = cljs.core.tree_map_seq_push(((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next(self__.stack),self__.ascending_QMARK_);if(!((next_stack == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_PersistentTreeMapSeq = (function __GT_PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash){return (new cljs.core.PersistentTreeMapSeq(meta,stack,ascending_QMARK_,cnt,__hash));
});
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){if((ins instanceof cljs.core.RedNode))
{if((ins.left instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if((ins.right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if(cljs.core.constant$keyword$237)
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
{if(cljs.core.constant$keyword$237)
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
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if(((right instanceof cljs.core.RedNode)) && ((right.left instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if(cljs.core.constant$keyword$237)
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
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if(((left instanceof cljs.core.RedNode)) && ((left.right instanceof cljs.core.BlackNode)))
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if(cljs.core.constant$keyword$237)
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){var init__$1 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init):init);if(cljs.core.reduced_QMARK_(init__$1))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$1) : cljs.core.deref.call(null,init__$1));
} else
{var init__$2 = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(init__$1,node.key,node.val) : f.call(null,init__$1,node.key,node.val));if(cljs.core.reduced_QMARK_(init__$2))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__$2):init__$2);if(cljs.core.reduced_QMARK_(init__$3))
{return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$3) : cljs.core.deref.call(null,init__$3));
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
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__23965 = null;
var G__23965__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23965__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23965 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23965__2.call(this,self__,k);
case 3:
return G__23965__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23965;
})()
;
cljs.core.BlackNode.prototype.apply = (function (self__,args23964){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23964)));
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
var node = this;return cljs.core.balance_right_del(self__.key,self__.val,self__.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){var self__ = this;
var node = this;return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){var self__ = this;
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){var self__ = this;
var node = this;return cljs.core.balance_left_del(self__.key,self__.val,del,self__.right);
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
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
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
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
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
{if(cljs.core.constant$keyword$237)
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
{if(cljs.core.constant$keyword$237)
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
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){var self__ = this;
var node__$1 = this;return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(node__$1,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){var self__ = this;
var node__$1 = this;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__23967 = null;
var G__23967__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23967__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var node = self____$1;return node.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23967 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23967__2.call(this,self__,k);
case 3:
return G__23967__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23967;
})()
;
cljs.core.RedNode.prototype.apply = (function (self__,args23966){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23966)));
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
var node = this;return cljs.core.tree_map_kv_reduce(node,f,init);
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
{if(cljs.core.constant$keyword$237)
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
{if(cljs.core.constant$keyword$237)
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
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(node__$1,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){var self__ = this;
var node__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(node__$1,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){var self__ = this;
var node__$1 = this;return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.val),self__.key);
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
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){var self__ = this;
var node__$1 = this;return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,self__.val], null),meta);
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
{if(cljs.core.constant$keyword$237)
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
{if(cljs.core.constant$keyword$237)
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
{var c = (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(k,tree.key) : comp.call(null,k,tree.key));if((c === 0))
{(found[0] = tree);
return null;
} else
{if((c < 0))
{var ins = tree_map_add(comp,tree.left,k,v,found);if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{if(cljs.core.constant$keyword$237)
{var ins = tree_map_add(comp,tree.right,k,v,found);if(!((ins == null)))
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
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if((right instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{if(cljs.core.constant$keyword$237)
{var app = tree_map_append(left.right,right.left);if((app instanceof cljs.core.RedNode))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
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
{var c = (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(k,tree.key) : comp.call(null,k,tree.key));if((c === 0))
{(found[0] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c < 0))
{var del = tree_map_remove(comp,tree.left,k,found);if((!((del == null))) || (!(((found[0]) == null))))
{if((tree.left instanceof cljs.core.BlackNode))
{return cljs.core.balance_left_del(tree.key,tree.val,del,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{if(cljs.core.constant$keyword$237)
{var del = tree_map_remove(comp,tree.right,k,found);if((!((del == null))) || (!(((found[0]) == null))))
{if((tree.right instanceof cljs.core.BlackNode))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del);
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
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){var tk = tree.key;var c = (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(k,tk) : comp.call(null,k,tk));if((c === 0))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < 0))
{return tree.replace(tk,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{if(cljs.core.constant$keyword$237)
{return tree.replace(tk,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_imap(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){var self__ = this;
var coll__$1 = this;var n = coll__$1.entry_at(k);if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_add(self__.comp,self__.tree,k,v,found);if((t == null))
{var found_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,found_node.val))
{return coll__$1;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace(self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + 1),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;return !((coll__$1.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__23969 = null;
var G__23969__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__23969__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__23969 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__23969__2.call(this,self__,k);
case 3:
return G__23969__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__23969;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (self__,args23968){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23968)));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){var self__ = this;
var coll__$1 = this;if(!((self__.tree == null)))
{return cljs.core.tree_map_kv_reduce(self__.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;if(cljs.core.vector_QMARK_(entry))
{return cljs.core._assoc(coll__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,coll__$1,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq(self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){var self__ = this;
var coll = this;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(k,t.key) : self__.comp.call(null,k,t.key));if((c === 0))
{return t;
} else
{if((c < 0))
{{
var G__23970 = t.left;
t = G__23970;
continue;
}
} else
{if(cljs.core.constant$keyword$237)
{{
var G__23971 = t.right;
t = G__23971;
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
{return cljs.core.create_tree_map_seq(self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;if((self__.cnt > 0))
{var stack = null;var t = self__.tree;while(true){
if(!((t == null)))
{var c = (self__.comp.cljs$core$IFn$_invoke$arity$2 ? self__.comp.cljs$core$IFn$_invoke$arity$2(k,t.key) : self__.comp.call(null,k,t.key));if((c === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < 0))
{{
var G__23972 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__23973 = t.left;
stack = G__23972;
t = G__23973;
continue;
}
} else
{{
var G__23974 = stack;
var G__23975 = t.right;
stack = G__23974;
t = G__23975;
continue;
}
}
} else
{if(cljs.core.constant$keyword$237)
{if((c > 0))
{{
var G__23976 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,t);
var G__23977 = t.right;
stack = G__23976;
t = G__23977;
continue;
}
} else
{{
var G__23978 = stack;
var G__23979 = t.left;
stack = G__23978;
t = G__23979;
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
var coll__$1 = this;return (cljs.core.key.cljs$core$IFn$_invoke$arity$1 ? cljs.core.key.cljs$core$IFn$_invoke$arity$1(entry) : cljs.core.key.call(null,entry));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq(self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_map(coll__$1,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,self__.meta,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){var self__ = this;
var coll__$1 = this;var found = [null];var t = cljs.core.tree_map_remove(self__.comp,self__.tree,k,found);if((t == null))
{if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(found,0) == null))
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
var hash_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);while(true){
if(in$)
{{
var G__23980 = cljs.core.nnext(in$);
var G__23981 = cljs.core.assoc_BANG_(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__23980;
out = G__23981;
continue;
}
} else
{return cljs.core.persistent_BANG_(out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hash_map__delegate.call(this,keyvals);};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__23982){
var keyvals = cljs.core.seq(arglist__23982);
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
var array_map__delegate = function (keyvals){return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),2),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return array_map__delegate.call(this,keyvals);};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__23983){
var keyvals = cljs.core.seq(arglist__23983);
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
var obj_map__delegate = function (keyvals){var ks = [];var obj = (function (){var obj23987 = {};return obj23987;
})();var kvs = cljs.core.seq(keyvals);while(true){
if(kvs)
{ks.push(cljs.core.first(kvs));
(obj[cljs.core.first(kvs)] = cljs.core.second(kvs));
{
var G__23988 = cljs.core.nnext(kvs);
kvs = G__23988;
continue;
}
} else
{return (cljs.core.ObjMap.fromObject.cljs$core$IFn$_invoke$arity$2 ? cljs.core.ObjMap.fromObject.cljs$core$IFn$_invoke$arity$2(ks,obj) : cljs.core.ObjMap.fromObject.call(null,ks,obj));
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return obj_map__delegate.call(this,keyvals);};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__23989){
var keyvals = cljs.core.seq(arglist__23989);
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
var sorted_map__delegate = function (keyvals){var in$ = cljs.core.seq(keyvals);var out = cljs.core.PersistentTreeMap.EMPTY;while(true){
if(in$)
{{
var G__23990 = cljs.core.nnext(in$);
var G__23991 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__23990;
out = G__23991;
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
sorted_map.cljs$lang$applyTo = (function (arglist__23992){
var keyvals = cljs.core.seq(arglist__23992);
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
var sorted_map_by__delegate = function (comparator,keyvals){var in$ = cljs.core.seq(keyvals);var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator(comparator),null,0,null,0));while(true){
if(in$)
{{
var G__23993 = cljs.core.nnext(in$);
var G__23994 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__23993;
out = G__23994;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__23995){
var comparator = cljs.core.first(arglist__23995);
var keyvals = cljs.core.rest(arglist__23995);
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
cljs.core.KeySeq.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/KeySeq");
});
cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_coll(coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__23996 = self__.mseq;if(G__23996)
{var bit__4050__auto__ = (G__23996.cljs$lang$protocol_mask$partition0$ & 128);if((bit__4050__auto__) || (G__23996.cljs$core$INext$))
{return true;
} else
{if((!G__23996.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23996);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23996);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.KeySeq(nseq,self__._meta));
}
});
cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.KeySeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_key$arity$1(null);
});
cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__23997 = self__.mseq;if(G__23997)
{var bit__4050__auto__ = (G__23997.cljs$lang$protocol_mask$partition0$ & 128);if((bit__4050__auto__) || (G__23997.cljs$core$INext$))
{return true;
} else
{if((!G__23997.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23997);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23997);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.KeySeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.KeySeq(self__.mseq,new_meta));
});
cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.__GT_KeySeq = (function __GT_KeySeq(mseq,_meta){return (new cljs.core.KeySeq(mseq,_meta));
});
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){var temp__4092__auto__ = cljs.core.seq(hash_map);if(temp__4092__auto__)
{var mseq = temp__4092__auto__;return (new cljs.core.KeySeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){return cljs.core._key(map_entry);
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
cljs.core.ValSeq.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/ValSeq");
});
cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_coll(coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__23998 = self__.mseq;if(G__23998)
{var bit__4050__auto__ = (G__23998.cljs$lang$protocol_mask$partition0$ & 128);if((bit__4050__auto__) || (G__23998.cljs$core$INext$))
{return true;
} else
{if((!G__23998.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23998);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23998);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if((nseq == null))
{return null;
} else
{return (new cljs.core.ValSeq(nseq,self__._meta));
}
});
cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons(o,coll__$1);
});
cljs.core.ValSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$2(f,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.cljs$core$IFn$_invoke$arity$3(f,start,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var me = self__.mseq.cljs$core$ISeq$_first$arity$1(null);return me.cljs$core$IMapEntry$_val$arity$1(null);
});
cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var nseq = (((function (){var G__23999 = self__.mseq;if(G__23999)
{var bit__4050__auto__ = (G__23999.cljs$lang$protocol_mask$partition0$ & 128);if((bit__4050__auto__) || (G__23999.cljs$core$INext$))
{return true;
} else
{if((!G__23999.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23999);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.INext,G__23999);
}
})())?self__.mseq.cljs$core$INext$_next$arity$1(null):cljs.core.next(self__.mseq));if(!((nseq == null)))
{return (new cljs.core.ValSeq(nseq,self__._meta));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential(coll__$1,other);
});
cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.ValSeq(self__.mseq,new_meta));
});
cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__._meta;
});
cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__._meta);
});
cljs.core.__GT_ValSeq = (function __GT_ValSeq(mseq,_meta){return (new cljs.core.ValSeq(mseq,_meta));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){var temp__4092__auto__ = cljs.core.seq(hash_map);if(temp__4092__auto__)
{var mseq = temp__4092__auto__;return (new cljs.core.ValSeq(mseq,null));
} else
{return null;
}
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24000_SHARP_,p2__24001_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3406__auto__ = p1__24000_SHARP_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p2__24001_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__24002){
var maps = cljs.core.seq(arglist__24002);
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
var merge_with__delegate = function (f,maps){if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry = (function (m,e){var k = cljs.core.first(e);var v = cljs.core.second(e);if(cljs.core.contains_QMARK_(m,k))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),v) : f.call(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),v)));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});var merge2 = ((function (merge_entry){
return (function (m1,m2){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__3406__auto__ = m1;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(m2));
});})(merge_entry))
;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;if (arguments.length > 1) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return merge_with__delegate.call(this,f,maps);};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__24003){
var f = cljs.core.first(arglist__24003);
var maps = cljs.core.rest(arglist__24003);
return merge_with__delegate(f,maps);
});
merge_with.cljs$core$IFn$_invoke$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){var ret = cljs.core.PersistentArrayMap.EMPTY;var keys = cljs.core.seq(keyseq);while(true){
if(keys)
{var key = cljs.core.first(keys);var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map,key,cljs.core.constant$keyword$239);{
var G__24004 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entry,cljs.core.constant$keyword$239))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,entry):ret);
var G__24005 = cljs.core.next(keys);
ret = G__24004;
keys = G__24005;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (new cljs.core.TransientHashSet(cljs.core._as_transient(self__.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_iset(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;if(cljs.core._contains_key_QMARK_(self__.hash_map,v))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__24008 = null;
var G__24008__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24008__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24008 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24008__2.call(this,self__,k);
case 3:
return G__24008__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__24008;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (self__,args24007){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24007)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,cljs.core._dissoc(self__.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._count(self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_((function (p1__24006_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__24006_SHARP_);
}),other));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentHashSet(self__.meta,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,self__.meta);
});
cljs.core.__GT_PersistentHashSet = (function __GT_PersistentHashSet(meta,hash_map,__hash){return (new cljs.core.PersistentHashSet(meta,hash_map,__hash));
});
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,0));
cljs.core.PersistentHashSet.fromArray = (function (items,no_clone){var len = items.length;if((len <= cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{var arr = ((no_clone)?items:cljs.core.aclone(items));var i = 0;var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < len))
{{
var G__24009 = (i + 1);
var G__24010 = cljs.core._assoc_BANG_(out,(items[i]),null);
i = G__24009;
out = G__24010;
continue;
}
} else
{return (new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_(out),null));
}
break;
}
} else
{var i = 0;var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < len))
{{
var G__24011 = (i + 1);
var G__24012 = cljs.core._conj_BANG_(out,(items[i]));
i = G__24011;
out = G__24012;
continue;
}
} else
{return cljs.core._persistent_BANG_(out);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__24014 = null;
var G__24014__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__24014__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var tcoll = self____$1;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__24014 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24014__2.call(this,self__,k);
case 3:
return G__24014__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__24014;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (self__,args24013){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24013)));
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var tcoll = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(tcoll__$1,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){var self__ = this;
var tcoll__$1 = this;if((cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return cljs.core.count(self__.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.dissoc_BANG_(self__.transient_map,v);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){var self__ = this;
var tcoll__$1 = this;self__.transient_map = cljs.core.assoc_BANG_(self__.transient_map,o,null);
return tcoll__$1;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){var self__ = this;
var tcoll__$1 = this;return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(self__.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_iset(coll__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(coll__$1,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){var self__ = this;
var coll__$1 = this;var n = self__.tree_map.entry_at(v);if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__24017 = null;
var G__24017__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__24017__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var coll = self____$1;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__24017 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24017__2.call(this,self__,k);
case 3:
return G__24017__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__24017;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (self__,args24016){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args24016)));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$2(null,k);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var coll = this;return coll.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((cljs.core.count(self__.tree_map) > 0))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.rseq(self__.tree_map));
} else
{return null;
}
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq(self__.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){var self__ = this;
var coll__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core._sorted_seq_from(self__.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){var self__ = this;
var coll__$1 = this;return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._comparator(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.keys(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.count(self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return (cljs.core.set_QMARK_(other)) && ((cljs.core.count(coll__$1) === cljs.core.count(other))) && (cljs.core.every_QMARK_((function (p1__24015_SHARP_){return cljs.core.contains_QMARK_(coll__$1,p1__24015_SHARP_);
}),other));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.PersistentTreeSet(self__.meta,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljs.core.__GT_PersistentTreeSet = (function __GT_PersistentTreeSet(meta,tree_map,__hash){return (new cljs.core.PersistentTreeSet(meta,tree_map,__hash));
});
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,0));
cljs.core.set_from_indexed_seq = (function set_from_indexed_seq(iseq){var arr = iseq.arr;var ret = (function (){var a__4242__auto__ = arr;var i = 0;var res = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if((i < a__4242__auto__.length))
{{
var G__24018 = (i + 1);
var G__24019 = res.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,(arr[i]));
i = G__24018;
res = G__24019;
continue;
}
} else
{return res;
}
break;
}
})();return ret.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
});
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){var in$ = cljs.core.seq(coll);if((in$ == null))
{return cljs.core.PersistentHashSet.EMPTY;
} else
{if(((in$ instanceof cljs.core.IndexedSeq)) && ((in$.i === 0)))
{return cljs.core.set_from_indexed_seq(in$);
} else
{if(cljs.core.constant$keyword$237)
{var in$__$1 = in$;var out = cljs.core._as_transient(cljs.core.PersistentHashSet.EMPTY);while(true){
if(!((in$__$1 == null)))
{{
var G__24020 = in$__$1.cljs$core$INext$_next$arity$1(null);
var G__24021 = out.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,in$__$1.cljs$core$ISeq$_first$arity$1(null));
in$__$1 = G__24020;
out = G__24021;
continue;
}
} else
{return out.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(null);
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
var G__24022__delegate = function (keys){return cljs.core.set(keys);
};
var G__24022 = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24022__delegate.call(this,keys);};
G__24022.cljs$lang$maxFixedArity = 0;
G__24022.cljs$lang$applyTo = (function (arglist__24023){
var keys = cljs.core.seq(arglist__24023);
return G__24022__delegate(keys);
});
G__24022.cljs$core$IFn$_invoke$arity$variadic = G__24022__delegate;
return G__24022;
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
var sorted_set__delegate = function (keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;if (arguments.length > 0) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sorted_set__delegate.call(this,keys);};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__24024){
var keys = cljs.core.seq(arglist__24024);
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
var sorted_set_by__delegate = function (comparator,keys){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;if (arguments.length > 1) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return sorted_set_by__delegate.call(this,comparator,keys);};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__24025){
var comparator = cljs.core.first(arglist__24025);
var keys = cljs.core.rest(arglist__24025);
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
cljs.core.replace = (function replace(smap,coll){if(cljs.core.vector_QMARK_(coll))
{var n = cljs.core.count(coll);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,i){var temp__4090__auto__ = cljs.core.find(smap,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,cljs.core.second(e));
} else
{return v;
}
}),coll,cljs.core.take(n,cljs.core.iterate(cljs.core.inc,0)));
} else
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24026_SHARP_){var temp__4090__auto__ = cljs.core.find(smap,p1__24026_SHARP_);if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;return cljs.core.second(e);
} else
{return p1__24026_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__24033,seen__$1){while(true){
var vec__24034 = p__24033;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24034,0,null);var xs__$1 = vec__24034;var temp__4092__auto__ = cljs.core.seq(xs__$1);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.contains_QMARK_(seen__$1,f))
{{
var G__24035 = cljs.core.rest(s);
var G__24036 = seen__$1;
p__24033 = G__24035;
seen__$1 = G__24036;
continue;
}
} else
{return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){var ret = cljs.core.PersistentVector.EMPTY;var s__$1 = s;while(true){
if(cljs.core.next(s__$1))
{{
var G__24037 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.first(s__$1));
var G__24038 = cljs.core.next(s__$1);
ret = G__24037;
s__$1 = G__24038;
continue;
}
} else
{return cljs.core.seq(ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){if((function (){var G__24040 = x;if(G__24040)
{var bit__4043__auto__ = (G__24040.cljs$lang$protocol_mask$partition1$ & 4096);if((bit__4043__auto__) || (G__24040.cljs$core$INamed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return x.cljs$core$INamed$_name$arity$1(null);
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
cljs.core.zipmap = (function zipmap(keys,vals){var map = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);var ks = cljs.core.seq(keys);var vs = cljs.core.seq(vals);while(true){
if((ks) && (vs))
{{
var G__24041 = cljs.core.assoc_BANG_(map,cljs.core.first(ks),cljs.core.first(vs));
var G__24042 = cljs.core.next(ks);
var G__24043 = cljs.core.next(vs);
map = G__24041;
ks = G__24042;
vs = G__24043;
continue;
}
} else
{return cljs.core.persistent_BANG_(map);
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
var max_key__3 = (function (k,x,y){if(((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(x) : k.call(null,x)) > (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__24046__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24044_SHARP_,p2__24045_SHARP_){return max_key.cljs$core$IFn$_invoke$arity$3(k,p1__24044_SHARP_,p2__24045_SHARP_);
}),max_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__24046 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24046__delegate.call(this,k,x,y,more);};
G__24046.cljs$lang$maxFixedArity = 3;
G__24046.cljs$lang$applyTo = (function (arglist__24047){
var k = cljs.core.first(arglist__24047);
arglist__24047 = cljs.core.next(arglist__24047);
var x = cljs.core.first(arglist__24047);
arglist__24047 = cljs.core.next(arglist__24047);
var y = cljs.core.first(arglist__24047);
var more = cljs.core.rest(arglist__24047);
return G__24046__delegate(k,x,y,more);
});
G__24046.cljs$core$IFn$_invoke$arity$variadic = G__24046__delegate;
return G__24046;
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
var min_key__3 = (function (k,x,y){if(((k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(x) : k.call(null,x)) < (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__24050__delegate = function (k,x,y,more){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24048_SHARP_,p2__24049_SHARP_){return min_key.cljs$core$IFn$_invoke$arity$3(k,p1__24048_SHARP_,p2__24049_SHARP_);
}),min_key.cljs$core$IFn$_invoke$arity$3(k,x,y),more);
};
var G__24050 = function (k,x,y,var_args){
var more = null;if (arguments.length > 3) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24050__delegate.call(this,k,x,y,more);};
G__24050.cljs$lang$maxFixedArity = 3;
G__24050.cljs$lang$applyTo = (function (arglist__24051){
var k = cljs.core.first(arglist__24051);
arglist__24051 = cljs.core.next(arglist__24051);
var x = cljs.core.first(arglist__24051);
arglist__24051 = cljs.core.next(arglist__24051);
var y = cljs.core.first(arglist__24051);
var more = cljs.core.rest(arglist__24051);
return G__24050__delegate(k,x,y,more);
});
G__24050.cljs$core$IFn$_invoke$arity$variadic = G__24050__delegate;
return G__24050;
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
var partition_all__2 = (function (n,coll){return partition_all.cljs$core$IFn$_invoke$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;return cljs.core.cons(cljs.core.take(n,s),partition_all.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop(step,s)));
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
cljs.core.take_while = (function take_while(pred,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s)) : pred.call(null,cljs.core.first(s)))))
{return cljs.core.cons(cljs.core.first(s),take_while(pred,cljs.core.rest(s)));
} else
{return null;
}
} else
{return null;
}
}),null,null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){return (function (e){var comp = cljs.core._comparator(sc);return (test.cljs$core$IFn$_invoke$arity$2 ? test.cljs$core$IFn$_invoke$arity$2((comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(cljs.core._entry_key(sc,e),key) : comp.call(null,cljs.core._entry_key(sc,e),key)),0) : test.call(null,(comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(cljs.core._entry_key(sc,e),key) : comp.call(null,cljs.core._entry_key(sc,e),key)),0));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_], true).call(null,test)))
{var temp__4092__auto__ = cljs.core._sorted_seq_from(sc,key,true);if(cljs.core.truth_(temp__4092__auto__))
{var vec__24054 = temp__4092__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24054,0,null);var s = vec__24054;if(cljs.core.truth_((include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(e) : include.call(null,e))))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4092__auto__ = cljs.core._sorted_seq_from(sc,start_key,true);if(cljs.core.truth_(temp__4092__auto__))
{var vec__24055 = temp__4092__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24055,0,null);var s = vec__24055;return cljs.core.take_while(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e))?s:cljs.core.next(s)));
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
var rsubseq__3 = (function (sc,test,key){var include = cljs.core.mk_bound_fn(sc,test,key);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_], true).call(null,test)))
{var temp__4092__auto__ = cljs.core._sorted_seq_from(sc,key,false);if(cljs.core.truth_(temp__4092__auto__))
{var vec__24058 = temp__4092__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24058,0,null);var s = vec__24058;if(cljs.core.truth_((include.cljs$core$IFn$_invoke$arity$1 ? include.cljs$core$IFn$_invoke$arity$1(e) : include.call(null,e))))
{return s;
} else
{return cljs.core.next(s);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){var temp__4092__auto__ = cljs.core._sorted_seq_from(sc,end_key,false);if(cljs.core.truth_(temp__4092__auto__))
{var vec__24059 = temp__4092__auto__;var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24059,0,null);var s = vec__24059;return cljs.core.take_while(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e))?s:cljs.core.next(s)));
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
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_coll(rng__$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
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
var rng__$1 = this;return cljs.core.cons(o,rng__$1);
});
cljs.core.Range.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_(coll);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(rng__$1,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){var self__ = this;
var rng__$1 = this;return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(rng__$1,f,s);
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
var rng__$1 = this;if(cljs.core.not(cljs.core._seq(rng__$1)))
{return 0;
} else
{return Math.ceil(((self__.end - self__.start) / self__.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if((cljs.core._seq(rng__$1) == null))
{return null;
} else
{return self__.start;
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;if(!((cljs.core._seq(rng__$1) == null)))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){var self__ = this;
var rng__$1 = this;return cljs.core.equiv_sequential(rng__$1,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){var self__ = this;
var rng__$1 = this;return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$ICloneable$ = true;
cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Range(self__.meta,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){var self__ = this;
var rng__$1 = this;return self__.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){var self__ = this;
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
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
var rng__$1 = this;if((n < cljs.core._count(rng__$1)))
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
var rng__$1 = this;return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
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
var range__0 = (function (){return range.cljs$core$IFn$_invoke$arity$3(0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){return range.cljs$core$IFn$_invoke$arity$3(0,end,1);
});
var range__2 = (function (start,end){return range.cljs$core$IFn$_invoke$arity$3(start,end,1);
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
cljs.core.take_nth = (function take_nth(n,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;return cljs.core.cons(cljs.core.first(s),take_nth(n,cljs.core.drop(n,s)));
} else
{return null;
}
}),null,null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_while(pred,coll),cljs.core.drop_while(pred,coll)], null);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;var fst = cljs.core.first(s);var fv = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(fst) : f.call(null,fst));var run = cljs.core.cons(fst,cljs.core.take_while(((function (fst,fv){
return (function (p1__24060_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fv,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__24060_SHARP_) : f.call(null,p1__24060_SHARP_)));
});})(fst,fv))
,cljs.core.next(s)));return cljs.core.cons(run,partition_by(f,cljs.core.seq(cljs.core.drop(cljs.core.count(run),s))));
} else
{return null;
}
}),null,null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (counts,x){return cljs.core.assoc_BANG_(counts,x,(cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,x,0) + 1));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){return (new cljs.core.LazySeq(null,(function (){var temp__4090__auto__ = cljs.core.seq(coll);if(temp__4090__auto__)
{var s = temp__4090__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,cljs.core.first(s),cljs.core.rest(s));
} else
{return cljs.core._conj(cljs.core.List.EMPTY,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}
}),null,null));
});
var reductions__3 = (function (f,init,coll){return cljs.core.cons(init,(new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.seq(coll);if(temp__4092__auto__)
{var s = temp__4092__auto__;return reductions.cljs$core$IFn$_invoke$arity$3(f,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(init,cljs.core.first(s)) : f.call(null,init,cljs.core.first(s))),cljs.core.rest(s));
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
var G__24071 = null;
var G__24071__0 = (function (){return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))],null));
});
var G__24071__1 = (function (x){return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))],null));
});
var G__24071__2 = (function (x,y){return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y))],null));
});
var G__24071__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z))],null));
});
var G__24071__4 = (function() { 
var G__24072__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args)],null));
};
var G__24072 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24072__delegate.call(this,x,y,z,args);};
G__24072.cljs$lang$maxFixedArity = 3;
G__24072.cljs$lang$applyTo = (function (arglist__24073){
var x = cljs.core.first(arglist__24073);
arglist__24073 = cljs.core.next(arglist__24073);
var y = cljs.core.first(arglist__24073);
arglist__24073 = cljs.core.next(arglist__24073);
var z = cljs.core.first(arglist__24073);
var args = cljs.core.rest(arglist__24073);
return G__24072__delegate(x,y,z,args);
});
G__24072.cljs$core$IFn$_invoke$arity$variadic = G__24072__delegate;
return G__24072;
})()
;
G__24071 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24071__0.call(this);
case 1:
return G__24071__1.call(this,x);
case 2:
return G__24071__2.call(this,x,y);
case 3:
return G__24071__3.call(this,x,y,z);
default:
return G__24071__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24071.cljs$lang$maxFixedArity = 3;
G__24071.cljs$lang$applyTo = G__24071__4.cljs$lang$applyTo;
return G__24071;
})()
});
var juxt__2 = (function (f,g){return (function() {
var G__24074 = null;
var G__24074__0 = (function (){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),(g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null))],null));
});
var G__24074__1 = (function (x){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x))],null));
});
var G__24074__2 = (function (x,y){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)),(g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(x,y) : g.call(null,x,y))],null));
});
var G__24074__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(x,y,z) : g.call(null,x,y,z))],null));
});
var G__24074__4 = (function() { 
var G__24075__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args)],null));
};
var G__24075 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24075__delegate.call(this,x,y,z,args);};
G__24075.cljs$lang$maxFixedArity = 3;
G__24075.cljs$lang$applyTo = (function (arglist__24076){
var x = cljs.core.first(arglist__24076);
arglist__24076 = cljs.core.next(arglist__24076);
var y = cljs.core.first(arglist__24076);
arglist__24076 = cljs.core.next(arglist__24076);
var z = cljs.core.first(arglist__24076);
var args = cljs.core.rest(arglist__24076);
return G__24075__delegate(x,y,z,args);
});
G__24075.cljs$core$IFn$_invoke$arity$variadic = G__24075__delegate;
return G__24075;
})()
;
G__24074 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24074__0.call(this);
case 1:
return G__24074__1.call(this,x);
case 2:
return G__24074__2.call(this,x,y);
case 3:
return G__24074__3.call(this,x,y,z);
default:
return G__24074__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24074.cljs$lang$maxFixedArity = 3;
G__24074.cljs$lang$applyTo = G__24074__4.cljs$lang$applyTo;
return G__24074;
})()
});
var juxt__3 = (function (f,g,h){return (function() {
var G__24077 = null;
var G__24077__0 = (function (){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),(g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null)),(h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null))],null));
});
var G__24077__1 = (function (x){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x)),(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(x) : h.call(null,x))],null));
});
var G__24077__2 = (function (x,y){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)),(g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(x,y) : g.call(null,x,y)),(h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(x,y) : h.call(null,x,y))],null));
});
var G__24077__3 = (function (x,y,z){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(x,y,z) : g.call(null,x,y,z)),(h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(x,y,z) : h.call(null,x,y,z))],null));
});
var G__24077__4 = (function() { 
var G__24078__delegate = function (x,y,z,args){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,x,y,z,args),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,x,y,z,args)],null));
};
var G__24078 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24078__delegate.call(this,x,y,z,args);};
G__24078.cljs$lang$maxFixedArity = 3;
G__24078.cljs$lang$applyTo = (function (arglist__24079){
var x = cljs.core.first(arglist__24079);
arglist__24079 = cljs.core.next(arglist__24079);
var y = cljs.core.first(arglist__24079);
arglist__24079 = cljs.core.next(arglist__24079);
var z = cljs.core.first(arglist__24079);
var args = cljs.core.rest(arglist__24079);
return G__24078__delegate(x,y,z,args);
});
G__24078.cljs$core$IFn$_invoke$arity$variadic = G__24078__delegate;
return G__24078;
})()
;
G__24077 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24077__0.call(this);
case 1:
return G__24077__1.call(this,x);
case 2:
return G__24077__2.call(this,x,y);
case 3:
return G__24077__3.call(this,x,y,z);
default:
return G__24077__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24077.cljs$lang$maxFixedArity = 3;
G__24077.cljs$lang$applyTo = G__24077__4.cljs$lang$applyTo;
return G__24077;
})()
});
var juxt__4 = (function() { 
var G__24080__delegate = function (f,g,h,fs){var fs__$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(f,g,h,fs);return (function() {
var G__24081 = null;
var G__24081__0 = (function (){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24061_SHARP_,p2__24062_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24061_SHARP_,(p2__24062_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p2__24062_SHARP_.cljs$core$IFn$_invoke$arity$0() : p2__24062_SHARP_.call(null)));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24081__1 = (function (x){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24063_SHARP_,p2__24064_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24063_SHARP_,(p2__24064_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__24064_SHARP_.cljs$core$IFn$_invoke$arity$1(x) : p2__24064_SHARP_.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24081__2 = (function (x,y){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24065_SHARP_,p2__24066_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24065_SHARP_,(p2__24066_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__24066_SHARP_.cljs$core$IFn$_invoke$arity$2(x,y) : p2__24066_SHARP_.call(null,x,y)));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24081__3 = (function (x,y,z){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24067_SHARP_,p2__24068_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24067_SHARP_,(p2__24068_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__24068_SHARP_.cljs$core$IFn$_invoke$arity$3(x,y,z) : p2__24068_SHARP_.call(null,x,y,z)));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__24081__4 = (function() { 
var G__24082__delegate = function (x,y,z,args){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24069_SHARP_,p2__24070_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24069_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p2__24070_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__24082 = function (x,y,z,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24082__delegate.call(this,x,y,z,args);};
G__24082.cljs$lang$maxFixedArity = 3;
G__24082.cljs$lang$applyTo = (function (arglist__24083){
var x = cljs.core.first(arglist__24083);
arglist__24083 = cljs.core.next(arglist__24083);
var y = cljs.core.first(arglist__24083);
arglist__24083 = cljs.core.next(arglist__24083);
var z = cljs.core.first(arglist__24083);
var args = cljs.core.rest(arglist__24083);
return G__24082__delegate(x,y,z,args);
});
G__24082.cljs$core$IFn$_invoke$arity$variadic = G__24082__delegate;
return G__24082;
})()
;
G__24081 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__24081__0.call(this);
case 1:
return G__24081__1.call(this,x);
case 2:
return G__24081__2.call(this,x,y);
case 3:
return G__24081__3.call(this,x,y,z);
default:
return G__24081__4.cljs$core$IFn$_invoke$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24081.cljs$lang$maxFixedArity = 3;
G__24081.cljs$lang$applyTo = G__24081__4.cljs$lang$applyTo;
return G__24081;
})()
};
var G__24080 = function (f,g,h,var_args){
var fs = null;if (arguments.length > 3) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__24080__delegate.call(this,f,g,h,fs);};
G__24080.cljs$lang$maxFixedArity = 3;
G__24080.cljs$lang$applyTo = (function (arglist__24084){
var f = cljs.core.first(arglist__24084);
arglist__24084 = cljs.core.next(arglist__24084);
var g = cljs.core.first(arglist__24084);
arglist__24084 = cljs.core.next(arglist__24084);
var h = cljs.core.first(arglist__24084);
var fs = cljs.core.rest(arglist__24084);
return G__24080__delegate(f,g,h,fs);
});
G__24080.cljs$core$IFn$_invoke$arity$variadic = G__24080__delegate;
return G__24080;
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
if(cljs.core.seq(coll))
{{
var G__24085 = cljs.core.next(coll);
coll = G__24085;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){while(true){
if((cljs.core.seq(coll)) && ((n > 0)))
{{
var G__24086 = (n - 1);
var G__24087 = cljs.core.next(coll);
n = G__24086;
coll = G__24087;
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
var doall__1 = (function (coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){cljs.core.dorun.cljs$core$IFn$_invoke$arity$2(n,coll);
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
cljs.core.re_matches = (function re_matches(re,s){var matches = re.exec(s);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(matches),s))
{if((cljs.core.count(matches) === 1))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
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
{if((cljs.core.count(matches) === 1))
{return cljs.core.first(matches);
} else
{return cljs.core.vec(matches);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){var match_data = cljs.core.re_find(re,s);var match_idx = s.search(re);var match_str = ((cljs.core.coll_QMARK_(match_data))?cljs.core.first(match_data):match_data);var post_match = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(match_idx + cljs.core.count(match_str)));if(cljs.core.truth_(match_data))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(match_data,((cljs.core.seq(post_match))?re_seq(re,post_match):null));
}),null,null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){var vec__24089 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24089,0,null);var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24089,1,null);var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24089,2,null);return (new RegExp(pattern,flags));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){var _STAR_print_level_STAR_24091 = cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_ = (((cljs.core._STAR_print_level_STAR_ == null))?null:(cljs.core._STAR_print_level_STAR_ - 1));
if((!((cljs.core._STAR_print_level_STAR_ == null))) && ((cljs.core._STAR_print_level_STAR_ < 0)))
{return cljs.core._write(writer,"#");
} else
{cljs.core._write(writer,begin);
if(cljs.core.seq(coll))
{(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(cljs.core.first(coll),writer,opts) : print_one.call(null,cljs.core.first(coll),writer,opts));
} else
{}
var coll_24092__$1 = cljs.core.next(coll);var n_24093 = cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(opts);while(true){
if((coll_24092__$1) && (((n_24093 == null)) || (!((n_24093 === 0)))))
{cljs.core._write(writer,sep);
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(cljs.core.first(coll_24092__$1),writer,opts) : print_one.call(null,cljs.core.first(coll_24092__$1),writer,opts));
{
var G__24094 = cljs.core.next(coll_24092__$1);
var G__24095 = (n_24093 - 1);
coll_24092__$1 = G__24094;
n_24093 = G__24095;
continue;
}
} else
{}
break;
}
if(cljs.core.truth_(cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(opts)))
{cljs.core._write(writer,sep);
(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3("...",writer,opts) : print_one.call(null,"...",writer,opts));
} else
{}
return cljs.core._write(writer,end);
}
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_24091;
}});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){var seq__24100 = cljs.core.seq(ss);var chunk__24101 = null;var count__24102 = 0;var i__24103 = 0;while(true){
if((i__24103 < count__24102))
{var s = chunk__24101.cljs$core$IIndexed$_nth$arity$2(null,i__24103);cljs.core._write(writer,s);
{
var G__24104 = seq__24100;
var G__24105 = chunk__24101;
var G__24106 = count__24102;
var G__24107 = (i__24103 + 1);
seq__24100 = G__24104;
chunk__24101 = G__24105;
count__24102 = G__24106;
i__24103 = G__24107;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__24100);if(temp__4092__auto__)
{var seq__24100__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__24100__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__24100__$1);{
var G__24108 = cljs.core.chunk_rest(seq__24100__$1);
var G__24109 = c__4148__auto__;
var G__24110 = cljs.core.count(c__4148__auto__);
var G__24111 = 0;
seq__24100 = G__24108;
chunk__24101 = G__24109;
count__24102 = G__24110;
i__24103 = G__24111;
continue;
}
} else
{var s = cljs.core.first(seq__24100__$1);cljs.core._write(writer,s);
{
var G__24112 = cljs.core.next(seq__24100__$1);
var G__24113 = null;
var G__24114 = 0;
var G__24115 = 0;
seq__24100 = G__24112;
chunk__24101 = G__24113;
count__24102 = G__24114;
i__24103 = G__24115;
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
write_all.cljs$lang$applyTo = (function (arglist__24116){
var writer = cljs.core.first(arglist__24116);
var ss = cljs.core.rest(arglist__24116);
return write_all__delegate(writer,ss);
});
write_all.cljs$core$IFn$_invoke$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core._STAR_print_fn_STAR_.call(null,x));
return null;
});
cljs.core.flush = (function flush(){return null;
});
cljs.core.char_escapes = (function (){var obj24118 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj24118;
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
{return cljs.core._write(writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write(writer,"#<undefined>");
} else
{if(cljs.core.constant$keyword$237)
{if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$234);if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = (function (){var G__24124 = obj;if(G__24124)
{var bit__4050__auto__ = (G__24124.cljs$lang$protocol_mask$partition0$ & 131072);if((bit__4050__auto__) || (G__24124.cljs$core$IMeta$))
{return true;
} else
{if((!G__24124.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__24124);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,G__24124);
}
})();if(and__3394__auto____$1)
{return cljs.core.meta(obj);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{cljs.core._write(writer,"^");
pr_writer(cljs.core.meta(obj),writer,opts);
cljs.core._write(writer," ");
} else
{}
if((obj == null))
{return cljs.core._write(writer,"nil");
} else
{if(obj.cljs$lang$type)
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__24125 = obj;if(G__24125)
{var bit__4043__auto__ = (G__24125.cljs$lang$protocol_mask$partition0$ & 2147483648);if((bit__4043__auto__) || (G__24125.cljs$core$IPrintWithWriter$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return obj.cljs$core$IPrintWithWriter$_pr_writer$arity$3(null,writer,opts);
} else
{if(((cljs.core.type(obj) === Boolean)) || (typeof obj === 'number'))
{return cljs.core._write(writer,[cljs.core.str(obj)].join(''));
} else
{if(cljs.core.object_QMARK_(obj))
{cljs.core._write(writer,"#js ");
return (cljs.core.print_map.cljs$core$IFn$_invoke$arity$4 ? cljs.core.print_map.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj)),pr_writer,writer,opts) : cljs.core.print_map.call(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(obj[k])], null);
}),cljs.core.js_keys(obj)),pr_writer,writer,opts));
} else
{if(obj instanceof Array)
{return cljs.core.pr_sequential_writer(writer,pr_writer,"#js ["," ","]",opts,obj);
} else
{if(goog.isString(obj))
{if(cljs.core.truth_(cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(opts)))
{return cljs.core._write(writer,cljs.core.quote_string(obj));
} else
{return cljs.core._write(writer,obj);
}
} else
{if(cljs.core.fn_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));
} else
{if((obj instanceof Date))
{var normalize = (function (n,len){var ns = [cljs.core.str(n)].join('');while(true){
if((cljs.core.count(ns) < len))
{{
var G__24127 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__24127;
continue;
}
} else
{return ns;
}
break;
}
});return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#inst \"",[cljs.core.str(obj.getUTCFullYear())].join(''),"-",normalize((obj.getUTCMonth() + 1),2),"-",normalize(obj.getUTCDate(),2),"T",normalize(obj.getUTCHours(),2),":",normalize(obj.getUTCMinutes(),2),":",normalize(obj.getUTCSeconds(),2),".",normalize(obj.getUTCMilliseconds(),3),"-","00:00\""], 0));
} else
{if(cljs.core.regexp_QMARK_(obj))
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#\"",obj.source,"\""], 0));
} else
{if((function (){var G__24126 = obj;if(G__24126)
{var bit__4050__auto__ = (G__24126.cljs$lang$protocol_mask$partition0$ & 2147483648);if((bit__4050__auto__) || (G__24126.cljs$core$IPrintWithWriter$))
{return true;
} else
{if((!G__24126.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__24126);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__24126);
}
})())
{return cljs.core._pr_writer(obj,writer,opts);
} else
{if(cljs.core.constant$keyword$237)
{return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<",[cljs.core.str(obj)].join(''),">"], 0));
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
}
} else
{return null;
}
}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){cljs.core.pr_writer(cljs.core.first(objs),writer,opts);
var seq__24132 = cljs.core.seq(cljs.core.next(objs));var chunk__24133 = null;var count__24134 = 0;var i__24135 = 0;while(true){
if((i__24135 < count__24134))
{var obj = chunk__24133.cljs$core$IIndexed$_nth$arity$2(null,i__24135);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__24136 = seq__24132;
var G__24137 = chunk__24133;
var G__24138 = count__24134;
var G__24139 = (i__24135 + 1);
seq__24132 = G__24136;
chunk__24133 = G__24137;
count__24134 = G__24138;
i__24135 = G__24139;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__24132);if(temp__4092__auto__)
{var seq__24132__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__24132__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__24132__$1);{
var G__24140 = cljs.core.chunk_rest(seq__24132__$1);
var G__24141 = c__4148__auto__;
var G__24142 = cljs.core.count(c__4148__auto__);
var G__24143 = 0;
seq__24132 = G__24140;
chunk__24133 = G__24141;
count__24134 = G__24142;
i__24135 = G__24143;
continue;
}
} else
{var obj = cljs.core.first(seq__24132__$1);cljs.core._write(writer," ");
cljs.core.pr_writer(obj,writer,opts);
{
var G__24144 = cljs.core.next(seq__24132__$1);
var G__24145 = null;
var G__24146 = 0;
var G__24147 = 0;
seq__24132 = G__24144;
chunk__24133 = G__24145;
count__24134 = G__24146;
i__24135 = G__24147;
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
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core.pr_seq_writer(objs,writer,opts);
writer.cljs$core$IWriter$_flush$arity$1(null);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "";
} else
{return [cljs.core.str(cljs.core.pr_sb_with_opts(objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){if(cljs.core.empty_QMARK_(objs))
{return "\n";
} else
{var sb = cljs.core.pr_sb_with_opts(objs,opts);sb.append("\n");
return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){return cljs.core.string_print(cljs.core.pr_str_with_opts(objs,opts));
});
cljs.core.newline = (function newline(opts){cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$232)))
{return cljs.core.flush();
} else
{return null;
}
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintWithWriter.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr_str__delegate.call(this,objs);};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__24148){
var objs = cljs.core.seq(arglist__24148);
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
var prn_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn_str__delegate.call(this,objs);};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__24149){
var objs = cljs.core.seq(arglist__24149);
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
var pr__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pr__delegate.call(this,objs);};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__24150){
var objs = cljs.core.seq(arglist__24150);
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
var cljs_core_print__delegate = function (objs){return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$233,false));
};
var cljs_core_print = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cljs_core_print__delegate.call(this,objs);};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__24151){
var objs = cljs.core.seq(arglist__24151);
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
var print_str__delegate = function (objs){return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$233,false));
};
var print_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return print_str__delegate.call(this,objs);};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__24152){
var objs = cljs.core.seq(arglist__24152);
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
var println__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$233,false));
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var println = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println__delegate.call(this,objs);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__24153){
var objs = cljs.core.seq(arglist__24153);
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
var println_str__delegate = function (objs){return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_opts(),cljs.core.constant$keyword$233,false));
};
var println_str = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return println_str__delegate.call(this,objs);};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__24154){
var objs = cljs.core.seq(arglist__24154);
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
var prn__delegate = function (objs){cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
if(cljs.core.truth_(cljs.core._STAR_print_newline_STAR_))
{return cljs.core.newline(cljs.core.pr_opts());
} else
{return null;
}
};
var prn = function (var_args){
var objs = null;if (arguments.length > 0) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prn__delegate.call(this,objs);};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__24155){
var objs = cljs.core.seq(arglist__24155);
return prn__delegate(objs);
});
prn.cljs$core$IFn$_invoke$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.print_map = (function print_map(m,print_one,writer,opts){return cljs.core.pr_sequential_writer(writer,(function (e,w,opts__$1){(print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(cljs.core.key(e),w,opts__$1) : print_one.call(null,cljs.core.key(e),w,opts__$1));
cljs.core._write(w," ");
return (print_one.cljs$core$IFn$_invoke$arity$3 ? print_one.cljs$core$IFn$_invoke$arity$3(cljs.core.val(e),w,opts__$1) : print_one.call(null,cljs.core.val(e),w,opts__$1));
}),"{",", ","}",opts,cljs.core.seq(m));
});
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq(coll__$1));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core._write(writer,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.print_map(coll__$1,cljs.core.pr_writer,writer,opts);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,coll__$1);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Subvec.prototype.cljs$core$IComparable$ = true;
cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(x__$1,y);
});
cljs.core.Keyword.prototype.cljs$core$IComparable$ = true;
cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
});
cljs.core.Symbol.prototype.cljs$core$IComparable$ = true;
cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){var x__$1 = this;return cljs.core.compare_symbols(x__$1,y);
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
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__24156 = cljs.core.seq(self__.watches);var chunk__24157 = null;var count__24158 = 0;var i__24159 = 0;while(true){
if((i__24159 < count__24158))
{var vec__24160 = chunk__24157.cljs$core$IIndexed$_nth$arity$2(null,i__24159);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24160,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24160,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__24162 = seq__24156;
var G__24163 = chunk__24157;
var G__24164 = count__24158;
var G__24165 = (i__24159 + 1);
seq__24156 = G__24162;
chunk__24157 = G__24163;
count__24158 = G__24164;
i__24159 = G__24165;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__24156);if(temp__4092__auto__)
{var seq__24156__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__24156__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__24156__$1);{
var G__24166 = cljs.core.chunk_rest(seq__24156__$1);
var G__24167 = c__4148__auto__;
var G__24168 = cljs.core.count(c__4148__auto__);
var G__24169 = 0;
seq__24156 = G__24166;
chunk__24157 = G__24167;
count__24158 = G__24168;
i__24159 = G__24169;
continue;
}
} else
{var vec__24161 = cljs.core.first(seq__24156__$1);var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24161,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24161,1,null);(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,oldval,newval) : f.call(null,key,this$__$1,oldval,newval));
{
var G__24170 = cljs.core.next(seq__24156__$1);
var G__24171 = null;
var G__24172 = 0;
var G__24173 = 0;
seq__24156 = G__24170;
chunk__24157 = G__24171;
count__24158 = G__24172;
i__24159 = G__24173;
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
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write(writer,"#<Atom: ");
cljs.core.pr_writer(self__.state,writer,opts);
return cljs.core._write(writer,">");
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
var G__24177__delegate = function (x,p__24174){var map__24176 = p__24174;var map__24176__$1 = ((cljs.core.seq_QMARK_(map__24176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24176):map__24176);var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24176__$1,cljs.core.constant$keyword$240);var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24176__$1,cljs.core.constant$keyword$234);return (new cljs.core.Atom(x,meta,validator,null));
};
var G__24177 = function (x,var_args){
var p__24174 = null;if (arguments.length > 1) {
  p__24174 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__24177__delegate.call(this,x,p__24174);};
G__24177.cljs$lang$maxFixedArity = 1;
G__24177.cljs$lang$applyTo = (function (arglist__24178){
var x = cljs.core.first(arglist__24178);
var p__24174 = cljs.core.rest(arglist__24178);
return G__24177__delegate(x,p__24174);
});
G__24177.cljs$core$IFn$_invoke$arity$variadic = G__24177__delegate;
return G__24177;
})()
;
atom = function(x,var_args){
var p__24174 = var_args;
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
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){var validate_24179 = a.validator;if((validate_24179 == null))
{} else
{if(cljs.core.truth_((validate_24179.cljs$core$IFn$_invoke$arity$1 ? validate_24179.cljs$core$IFn$_invoke$arity$1(new_value) : validate_24179.call(null,new_value))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1233162959,null),new cljs.core.Symbol(null,"new-value","new-value",972165309,null))], 0)))].join('')));
}
}
var old_value_24180 = a.state;a.state = new_value;
if((a.watches == null))
{} else
{cljs.core._notify_watches(a,old_value_24180,new_value);
}
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
var swap_BANG___2 = (function (a,f){return cljs.core.reset_BANG_(a,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a.state) : f.call(null,a.state)));
});
var swap_BANG___3 = (function (a,f,x){return cljs.core.reset_BANG_(a,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a.state,x) : f.call(null,a.state,x)));
});
var swap_BANG___4 = (function (a,f,x,y){return cljs.core.reset_BANG_(a,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(a.state,x,y) : f.call(null,a.state,x,y)));
});
var swap_BANG___5 = (function (a,f,x,y,z){return cljs.core.reset_BANG_(a,(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(a.state,x,y,z) : f.call(null,a.state,x,y,z)));
});
var swap_BANG___6 = (function() { 
var G__24181__delegate = function (a,f,x,y,z,more){return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,a.state,x,y,z,cljs.core.array_seq([more], 0)));
};
var G__24181 = function (a,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__24181__delegate.call(this,a,f,x,y,z,more);};
G__24181.cljs$lang$maxFixedArity = 5;
G__24181.cljs$lang$applyTo = (function (arglist__24182){
var a = cljs.core.first(arglist__24182);
arglist__24182 = cljs.core.next(arglist__24182);
var f = cljs.core.first(arglist__24182);
arglist__24182 = cljs.core.next(arglist__24182);
var x = cljs.core.first(arglist__24182);
arglist__24182 = cljs.core.next(arglist__24182);
var y = cljs.core.first(arglist__24182);
arglist__24182 = cljs.core.next(arglist__24182);
var z = cljs.core.first(arglist__24182);
var more = cljs.core.rest(arglist__24182);
return G__24181__delegate(a,f,x,y,z,more);
});
G__24181.cljs$core$IFn$_invoke$arity$variadic = G__24181__delegate;
return G__24181;
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
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){return cljs.core._deref(o);
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
var alter_meta_BANG___delegate = function (iref,f,args){return iref.meta = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return alter_meta_BANG___delegate.call(this,iref,f,args);};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__24183){
var iref = cljs.core.first(arglist__24183);
arglist__24183 = cljs.core.next(arglist__24183);
var f = cljs.core.first(arglist__24183);
var args = cljs.core.rest(arglist__24183);
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
cljs.core.add_watch = (function add_watch(iref,key,f){return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){return gensym.cljs$core$IFn$_invoke$arity$1("G__");
});
var gensym__1 = (function (prefix_string){if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
} else
{}
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
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
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){var self__ = this;
var d__$1 = this;return cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,(function (p__24184){var map__24185 = p__24184;var map__24185__$1 = ((cljs.core.seq_QMARK_(map__24185))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24185):map__24185);var curr_state = map__24185__$1;var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24185__$1,cljs.core.constant$keyword$241);if(cljs.core.truth_(done))
{return curr_state;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$241,true,cljs.core.constant$keyword$242,(self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null))], null);
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
cljs.core.force = (function force(x){if(cljs.core.delay_QMARK_(x))
{return cljs.core.deref(x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){return cljs.core._realized_QMARK_(d);
});
cljs.core.IEncodeJS = (function (){var obj24187 = {};return obj24187;
})();
cljs.core._clj__GT_js = (function _clj__GT_js(x){if((function (){var and__3394__auto__ = x;if(and__3394__auto__)
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1;
} else
{return and__3394__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else
{var x__4027__auto__ = (((x == null))?null:x);return (function (){var or__3406__auto__ = (cljs.core._clj__GT_js[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._clj__GT_js["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-clj->js",x);
}
}
})().call(null,x);
}
});
cljs.core._key__GT_js = (function _key__GT_js(x){if((function (){var and__3394__auto__ = x;if(and__3394__auto__)
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1;
} else
{return and__3394__auto__;
}
})())
{return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else
{var x__4027__auto__ = (((x == null))?null:x);return (function (){var or__3406__auto__ = (cljs.core._key__GT_js[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._key__GT_js["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeJS.-key->js",x);
}
}
})().call(null,x);
}
});
cljs.core.key__GT_js = (function key__GT_js(k){if((function (){var G__24189 = k;if(G__24189)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24189.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__24189.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__24189);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__24189);
}
})())
{return cljs.core._clj__GT_js(k);
} else
{if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)))
{return (cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1 ? cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$1(k) : cljs.core.clj__GT_js.call(null,k));
} else
{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0));
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
{if((function (){var G__24203 = x;if(G__24203)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24203.cljs$core$IEncodeJS$;
}
})()))
{return true;
} else
{if((!G__24203.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__24203);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeJS,G__24203);
}
})())
{return cljs.core._clj__GT_js(x);
} else
{if((x instanceof cljs.core.Keyword))
{return cljs.core.name(x);
} else
{if((x instanceof cljs.core.Symbol))
{return [cljs.core.str(x)].join('');
} else
{if(cljs.core.map_QMARK_(x))
{var m = (function (){var obj24205 = {};return obj24205;
})();var seq__24206_24216 = cljs.core.seq(x);var chunk__24207_24217 = null;var count__24208_24218 = 0;var i__24209_24219 = 0;while(true){
if((i__24209_24219 < count__24208_24218))
{var vec__24210_24220 = chunk__24207_24217.cljs$core$IIndexed$_nth$arity$2(null,i__24209_24219);var k_24221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24210_24220,0,null);var v_24222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24210_24220,1,null);(m[cljs.core.key__GT_js(k_24221)] = clj__GT_js(v_24222));
{
var G__24223 = seq__24206_24216;
var G__24224 = chunk__24207_24217;
var G__24225 = count__24208_24218;
var G__24226 = (i__24209_24219 + 1);
seq__24206_24216 = G__24223;
chunk__24207_24217 = G__24224;
count__24208_24218 = G__24225;
i__24209_24219 = G__24226;
continue;
}
} else
{var temp__4092__auto___24227 = cljs.core.seq(seq__24206_24216);if(temp__4092__auto___24227)
{var seq__24206_24228__$1 = temp__4092__auto___24227;if(cljs.core.chunked_seq_QMARK_(seq__24206_24228__$1))
{var c__4148__auto___24229 = cljs.core.chunk_first(seq__24206_24228__$1);{
var G__24230 = cljs.core.chunk_rest(seq__24206_24228__$1);
var G__24231 = c__4148__auto___24229;
var G__24232 = cljs.core.count(c__4148__auto___24229);
var G__24233 = 0;
seq__24206_24216 = G__24230;
chunk__24207_24217 = G__24231;
count__24208_24218 = G__24232;
i__24209_24219 = G__24233;
continue;
}
} else
{var vec__24211_24234 = cljs.core.first(seq__24206_24228__$1);var k_24235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24211_24234,0,null);var v_24236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24211_24234,1,null);(m[cljs.core.key__GT_js(k_24235)] = clj__GT_js(v_24236));
{
var G__24237 = cljs.core.next(seq__24206_24228__$1);
var G__24238 = null;
var G__24239 = 0;
var G__24240 = 0;
seq__24206_24216 = G__24237;
chunk__24207_24217 = G__24238;
count__24208_24218 = G__24239;
i__24209_24219 = G__24240;
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
{if(cljs.core.coll_QMARK_(x))
{var arr = [];var seq__24212_24241 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clj__GT_js,x));var chunk__24213_24242 = null;var count__24214_24243 = 0;var i__24215_24244 = 0;while(true){
if((i__24215_24244 < count__24214_24243))
{var x_24245__$1 = chunk__24213_24242.cljs$core$IIndexed$_nth$arity$2(null,i__24215_24244);arr.push(x_24245__$1);
{
var G__24246 = seq__24212_24241;
var G__24247 = chunk__24213_24242;
var G__24248 = count__24214_24243;
var G__24249 = (i__24215_24244 + 1);
seq__24212_24241 = G__24246;
chunk__24213_24242 = G__24247;
count__24214_24243 = G__24248;
i__24215_24244 = G__24249;
continue;
}
} else
{var temp__4092__auto___24250 = cljs.core.seq(seq__24212_24241);if(temp__4092__auto___24250)
{var seq__24212_24251__$1 = temp__4092__auto___24250;if(cljs.core.chunked_seq_QMARK_(seq__24212_24251__$1))
{var c__4148__auto___24252 = cljs.core.chunk_first(seq__24212_24251__$1);{
var G__24253 = cljs.core.chunk_rest(seq__24212_24251__$1);
var G__24254 = c__4148__auto___24252;
var G__24255 = cljs.core.count(c__4148__auto___24252);
var G__24256 = 0;
seq__24212_24241 = G__24253;
chunk__24213_24242 = G__24254;
count__24214_24243 = G__24255;
i__24215_24244 = G__24256;
continue;
}
} else
{var x_24257__$1 = cljs.core.first(seq__24212_24251__$1);arr.push(x_24257__$1);
{
var G__24258 = cljs.core.next(seq__24212_24251__$1);
var G__24259 = null;
var G__24260 = 0;
var G__24261 = 0;
seq__24212_24241 = G__24258;
chunk__24213_24242 = G__24259;
count__24214_24243 = G__24260;
i__24215_24244 = G__24261;
continue;
}
}
} else
{}
}
break;
}
return arr;
} else
{if(cljs.core.constant$keyword$237)
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
cljs.core.IEncodeClojure = (function (){var obj24263 = {};return obj24263;
})();
cljs.core._js__GT_clj = (function _js__GT_clj(x,options){if((function (){var and__3394__auto__ = x;if(and__3394__auto__)
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2;
} else
{return and__3394__auto__;
}
})())
{return x.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(x,options);
} else
{var x__4027__auto__ = (((x == null))?null:x);return (function (){var or__3406__auto__ = (cljs.core._js__GT_clj[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._js__GT_clj["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IEncodeClojure.-js->clj",x);
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
var js__GT_clj__1 = (function (x){return js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$243,false], null)], 0));
});
var js__GT_clj__2 = (function() { 
var G__24284__delegate = function (x,opts){if((function (){var G__24274 = x;if(G__24274)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24274.cljs$core$IEncodeClojure$;
}
})()))
{return true;
} else
{if((!G__24274.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__24274);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,G__24274);
}
})())
{return cljs.core._js__GT_clj(x,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,opts));
} else
{if(cljs.core.seq(opts))
{var map__24275 = opts;var map__24275__$1 = ((cljs.core.seq_QMARK_(map__24275))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24275):map__24275);var keywordize_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24275__$1,cljs.core.constant$keyword$243);var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);var f = ((function (map__24275,map__24275__$1,keywordize_keys,keyfn){
return (function thisfn(x__$1){if(cljs.core.seq_QMARK_(x__$1))
{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(cljs.core.coll_QMARK_(x__$1))
{return cljs.core.into(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if(x__$1 instanceof Array)
{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thisfn,x__$1));
} else
{if((cljs.core.type(x__$1) === Object))
{return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4117__auto__ = ((function (map__24275,map__24275__$1,keywordize_keys,keyfn){
return (function iter__24280(s__24281){return (new cljs.core.LazySeq(null,((function (map__24275,map__24275__$1,keywordize_keys,keyfn){
return (function (){var s__24281__$1 = s__24281;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24281__$1);if(temp__4092__auto__)
{var s__24281__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24281__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24281__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24283 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24282 = 0;while(true){
if((i__24282 < size__4116__auto__))
{var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24282);cljs.core.chunk_append(b__24283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(k) : keyfn.call(null,k)),thisfn((x__$1[k]))], null));
{
var G__24285 = (i__24282 + 1);
i__24282 = G__24285;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24283),iter__24280(cljs.core.chunk_rest(s__24281__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24283),null);
}
} else
{var k = cljs.core.first(s__24281__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(k) : keyfn.call(null,k)),thisfn((x__$1[k]))], null),iter__24280(cljs.core.rest(s__24281__$2)));
}
} else
{return null;
}
break;
}
});})(map__24275,map__24275__$1,keywordize_keys,keyfn))
,null,null));
});})(map__24275,map__24275__$1,keywordize_keys,keyfn))
;return iter__4117__auto__(cljs.core.js_keys(x__$1));
})());
} else
{if(cljs.core.constant$keyword$237)
{return x__$1;
} else
{return null;
}
}
}
}
}
});})(map__24275,map__24275__$1,keywordize_keys,keyfn))
;return f(x);
} else
{return null;
}
}
};
var G__24284 = function (x,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__24284__delegate.call(this,x,opts);};
G__24284.cljs$lang$maxFixedArity = 1;
G__24284.cljs$lang$applyTo = (function (arglist__24286){
var x = cljs.core.first(arglist__24286);
var opts = cljs.core.rest(arglist__24286);
return G__24284__delegate(x,opts);
});
G__24284.cljs$core$IFn$_invoke$arity$variadic = G__24284__delegate;
return G__24284;
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
cljs.core.memoize = (function memoize(f){var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);return (function() { 
var G__24287__delegate = function (args){var temp__4090__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mem),args);if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;return v;
} else
{var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,args,ret);
return ret;
}
};
var G__24287 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24287__delegate.call(this,args);};
G__24287.cljs$lang$maxFixedArity = 0;
G__24287.cljs$lang$applyTo = (function (arglist__24288){
var args = cljs.core.seq(arglist__24288);
return G__24287__delegate(args);
});
G__24287.cljs$core$IFn$_invoke$arity$variadic = G__24287__delegate;
return G__24287;
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
var ret = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));if(cljs.core.fn_QMARK_(ret))
{{
var G__24289 = ret;
f = G__24289;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__24290__delegate = function (f,args){return trampoline.cljs$core$IFn$_invoke$arity$1((function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));
};
var G__24290 = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__24290__delegate.call(this,f,args);};
G__24290.cljs$lang$maxFixedArity = 1;
G__24290.cljs$lang$applyTo = (function (arglist__24291){
var f = cljs.core.first(arglist__24291);
var args = cljs.core.rest(arglist__24291);
return G__24290__delegate(f,args);
});
G__24290.cljs$core$IFn$_invoke$arity$variadic = G__24290__delegate;
return G__24290;
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
var rand__0 = (function (){return rand.cljs$core$IFn$_invoke$arity$1(1);
});
var rand__1 = (function (n){return ((Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null)) * n);
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
cljs.core.rand_int = (function rand_int(n){return (Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(((Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null)) * n)) : Math.floor.call(null,((Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null)) * n)));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){var k = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$244,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$245,cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$246,cljs.core.PersistentArrayMap.EMPTY], null);
});
cljs.core._global_hierarchy = null;
cljs.core.get_global_hierarchy = (function get_global_hierarchy(){if((cljs.core._global_hierarchy == null))
{cljs.core._global_hierarchy = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.make_hierarchy());
} else
{}
return cljs.core._global_hierarchy;
});
/**
* @param {...*} var_args
*/
cljs.core.swap_global_hierarchy_BANG_ = (function() { 
var swap_global_hierarchy_BANG___delegate = function (f,args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljs.core.get_global_hierarchy(),f,args);
};
var swap_global_hierarchy_BANG_ = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return swap_global_hierarchy_BANG___delegate.call(this,f,args);};
swap_global_hierarchy_BANG_.cljs$lang$maxFixedArity = 1;
swap_global_hierarchy_BANG_.cljs$lang$applyTo = (function (arglist__24292){
var f = cljs.core.first(arglist__24292);
var args = cljs.core.rest(arglist__24292);
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
var isa_QMARK___2 = (function (child,parent){return isa_QMARK_.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs.core.get_global_hierarchy()),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){var or__3406__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,parent);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.contains_QMARK_(cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(h).call(null,child),parent);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{var and__3394__auto__ = cljs.core.vector_QMARK_(parent);if(and__3394__auto__)
{var and__3394__auto____$1 = cljs.core.vector_QMARK_(child);if(and__3394__auto____$1)
{var and__3394__auto____$2 = (cljs.core.count(parent) === cljs.core.count(child));if(and__3394__auto____$2)
{var ret = true;var i = 0;while(true){
if((!(ret)) || ((i === cljs.core.count(parent))))
{return ret;
} else
{{
var G__24293 = isa_QMARK_.cljs$core$IFn$_invoke$arity$3(h,(child.cljs$core$IFn$_invoke$arity$1 ? child.cljs$core$IFn$_invoke$arity$1(i) : child.call(null,i)),(parent.cljs$core$IFn$_invoke$arity$1 ? parent.cljs$core$IFn$_invoke$arity$1(i) : parent.call(null,i)));
var G__24294 = (i + 1);
ret = G__24293;
i = G__24294;
continue;
}
}
break;
}
} else
{return and__3394__auto____$2;
}
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
var parents__1 = (function (tag){return parents.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.get_global_hierarchy()),tag);
});
var parents__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(h),tag));
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
var ancestors__1 = (function (tag){return ancestors.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.get_global_hierarchy()),tag);
});
var ancestors__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(h),tag));
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
var descendants__1 = (function (tag){return descendants.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.get_global_hierarchy()),tag);
});
var descendants__2 = (function (h,tag){return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(h),tag));
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
var derive__2 = (function (tag,parent){if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",-388313324,null),new cljs.core.Symbol(null,"parent","parent",1659011683,null))], 0)))].join('')));
}
cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(derive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var derive__3 = (function (h,tag,parent){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",-1637144189,null),new cljs.core.Symbol(null,"tag","tag",-1640416941,null),new cljs.core.Symbol(null,"parent","parent",1659011683,null))], 0)))].join('')));
}
var tp = cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(h);var td = cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(h);var ta = cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(h);var tf = ((function (tp,td,ta){
return (function (m,source,sources,target,targets){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tp,td,ta){
return (function (ret,k){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.get.cljs$core$IFn$_invoke$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(targets.cljs$core$IFn$_invoke$arity$1 ? targets.cljs$core$IFn$_invoke$arity$1(target) : targets.call(null,target)))));
});})(tp,td,ta))
,m,cljs.core.cons(source,(sources.cljs$core$IFn$_invoke$arity$1 ? sources.cljs$core$IFn$_invoke$arity$1(source) : sources.call(null,source))));
});})(tp,td,ta))
;var or__3406__auto__ = ((cljs.core.contains_QMARK_((tp.cljs$core$IFn$_invoke$arity$1 ? tp.cljs$core$IFn$_invoke$arity$1(tag) : tp.call(null,tag)),parent))?null:(function (){if(cljs.core.contains_QMARK_((ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(tag) : ta.call(null,tag)),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_((ta.cljs$core$IFn$_invoke$arity$1 ? ta.cljs$core$IFn$_invoke$arity$1(parent) : ta.call(null,parent)),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$244,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(h),tag,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),cljs.core.constant$keyword$246,tf(cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(h),tag,td,parent,ta),cljs.core.constant$keyword$245,tf(cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(h),parent,ta,tag,td)], null);
})());if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
var underive__2 = (function (tag,parent){cljs.core.swap_global_hierarchy_BANG_.cljs$core$IFn$_invoke$arity$variadic(underive,cljs.core.array_seq([tag,parent], 0));
return null;
});
var underive__3 = (function (h,tag,parent){var parentMap = cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(h);var childsParents = (cljs.core.truth_((parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(tag) : parentMap.call(null,tag)))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2((parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(tag) : parentMap.call(null,tag)),parent):cljs.core.PersistentHashSet.EMPTY);var newParents = (cljs.core.truth_(cljs.core.not_empty(childsParents))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parentMap,tag,childsParents):cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parentMap,tag));var deriv_seq = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parentMap,childsParents,newParents){
return (function (p1__24295_SHARP_){return cljs.core.cons(cljs.core.first(p1__24295_SHARP_),cljs.core.interpose(cljs.core.first(p1__24295_SHARP_),cljs.core.second(p1__24295_SHARP_)));
});})(parentMap,childsParents,newParents))
,cljs.core.seq(newParents)));if(cljs.core.contains_QMARK_((parentMap.cljs$core$IFn$_invoke$arity$1 ? parentMap.cljs$core$IFn$_invoke$arity$1(tag) : parentMap.call(null,tag)),parent))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__24296_SHARP_,p2__24297_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.derive,p1__24296_SHARP_,p2__24297_SHARP_);
}),cljs.core.make_hierarchy(),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,deriv_seq));
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
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(method_cache,(function (_){return cljs.core.deref(method_table);
}));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cached_hierarchy,(function (_){return cljs.core.deref(hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){var xprefs = cljs.core.deref(prefer_table).call(null,x);var or__3406__auto__ = (cljs.core.truth_((function (){var and__3394__auto__ = xprefs;if(cljs.core.truth_(and__3394__auto__))
{return (xprefs.cljs$core$IFn$_invoke$arity$1 ? xprefs.cljs$core$IFn$_invoke$arity$1(y) : xprefs.call(null,y));
} else
{return and__3394__auto__;
}
})())?true:null);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(y);while(true){
if((cljs.core.count(ps) > 0))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps),prefer_table)))
{} else
{}
{
var G__24298 = cljs.core.rest(ps);
ps = G__24298;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{var or__3406__auto____$2 = (function (){var ps = cljs.core.parents.cljs$core$IFn$_invoke$arity$1(x);while(true){
if((cljs.core.count(ps) > 0))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps),y,prefer_table)))
{} else
{}
{
var G__24299 = cljs.core.rest(ps);
ps = G__24299;
continue;
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(or__3406__auto____$2))
{return or__3406__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){var or__3406__auto__ = cljs.core.prefers_STAR_(x,y,prefer_table);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){var best_entry = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (be,p__24302){var vec__24303 = p__24302;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24303,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24303,1,null);var e = vec__24303;if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(hierarchy),dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__3406__auto__ = (be == null);if(or__3406__auto__)
{return or__3406__auto__;
} else
{return cljs.core.dominates(k,cljs.core.first(be),prefer_table);
}
})())?e:be);if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2),k,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2;
} else
{return be;
}
}),null,cljs.core.deref(method_table));if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cached_hierarchy),cljs.core.deref(hierarchy)))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry));
return cljs.core.second(best_entry);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = (function (){var obj24305 = {};return obj24305;
})();
cljs.core._reset = (function _reset(mf){if((function (){var and__3394__auto__ = mf;if(and__3394__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3394__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__4027__auto__ = (((mf == null))?null:mf);return (function (){var or__3406__auto__ = (cljs.core._reset[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._reset["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){if((function (){var and__3394__auto__ = mf;if(and__3394__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3394__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__4027__auto__ = (((mf == null))?null:mf);return (function (){var or__3406__auto__ = (cljs.core._add_method[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._add_method["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){if((function (){var and__3394__auto__ = mf;if(and__3394__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3394__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__4027__auto__ = (((mf == null))?null:mf);return (function (){var or__3406__auto__ = (cljs.core._remove_method[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._remove_method["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){if((function (){var and__3394__auto__ = mf;if(and__3394__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3394__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__4027__auto__ = (((mf == null))?null:mf);return (function (){var or__3406__auto__ = (cljs.core._prefer_method[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._prefer_method["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){if((function (){var and__3394__auto__ = mf;if(and__3394__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3394__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__4027__auto__ = (((mf == null))?null:mf);return (function (){var or__3406__auto__ = (cljs.core._get_method[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._get_method["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){if((function (){var and__3394__auto__ = mf;if(and__3394__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3394__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__4027__auto__ = (((mf == null))?null:mf);return (function (){var or__3406__auto__ = (cljs.core._methods[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._methods["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){if((function (){var and__3394__auto__ = mf;if(and__3394__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3394__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__4027__auto__ = (((mf == null))?null:mf);return (function (){var or__3406__auto__ = (cljs.core._prefers[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._prefers["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){if((function (){var and__3394__auto__ = mf;if(and__3394__auto__)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3394__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__4027__auto__ = (((mf == null))?null:mf);return (function (){var or__3406__auto__ = (cljs.core._dispatch[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core._dispatch["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,name,dispatch_fn,args){var dispatch_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_fn,args);var target_fn = cljs.core._get_method(mf,dispatch_val);if(cljs.core.truth_(target_fn))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
}
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(target_fn,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_table,(function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.method_cache,(function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,(function (mf__$2){return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.cached_hierarchy,(function (mf__$2){return null;
}));
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf__$1;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){var self__ = this;
var mf__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.cached_hierarchy),cljs.core.deref(self__.hierarchy)))
{} else
{cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4090__auto__ = cljs.core.deref(self__.method_cache).call(null,dispatch_val);if(cljs.core.truth_(temp__4090__auto__))
{var target_fn = temp__4090__auto__;return target_fn;
} else
{var temp__4090__auto____$1 = cljs.core.find_and_cache_best_method(self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);if(cljs.core.truth_(temp__4090__auto____$1))
{var target_fn = temp__4090__auto____$1;return target_fn;
} else
{return cljs.core.deref(self__.method_table).call(null,self__.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){var self__ = this;
var mf__$1 = this;if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.prefer_table,(function (old){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache(self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;return cljs.core.deref(self__.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){var self__ = this;
var mf__$1 = this;return cljs.core.deref(self__.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){var self__ = this;
var mf__$1 = this;return cljs.core.do_dispatch(mf__$1,self__.name,self__.dispatch_fn,args);
});
cljs.core.__GT_MultiFn = (function __GT_MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){return (new cljs.core.MultiFn(name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__24306__delegate = function (_,args){var self = this;return cljs.core._dispatch(self,args);
};
var G__24306 = function (_,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__24306__delegate.call(this,_,args);};
G__24306.cljs$lang$maxFixedArity = 1;
G__24306.cljs$lang$applyTo = (function (arglist__24307){
var _ = cljs.core.first(arglist__24307);
var args = cljs.core.rest(arglist__24307);
return G__24306__delegate(_,args);
});
G__24306.cljs$core$IFn$_invoke$arity$variadic = G__24306__delegate;
return G__24306;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){var self = this;return cljs.core._dispatch(self,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){return cljs.core._prefers(multifn);
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
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0)));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){var self__ = this;
var ___$2 = this;return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return ((other instanceof cljs.core.UUID)) && ((self__.uuid === other.uuid));
});
cljs.core.UUID.prototype.cljs$core$ICloneable$ = true;
cljs.core.UUID.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.UUID(self__.uuid));
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
cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter = (function (this__3971__auto__,writer__3972__auto__,opts__3973__auto__){return cljs.core._write(writer__3972__auto__,"cljs.core/ExceptionInfo");
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
cljs.core.comparator = (function comparator(pred){return (function (x,y){if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(x,y) : pred.call(null,x,y))))
{return -1;
} else
{if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(y,x) : pred.call(null,y,x))))
{return 1;
} else
{if(cljs.core.constant$keyword$237)
{return 0;
} else
{return null;
}
}
}
});
});
cljs.core.special_symbol_QMARK_ = (function special_symbol_QMARK_(x){return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"deftype*","deftype*",-978581244,null),null,new cljs.core.Symbol(null,"new","new",-1640422567,null),null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null),null,new cljs.core.Symbol(null,"&","&",-1640531489,null),null,new cljs.core.Symbol(null,"set!","set!",-1637004872,null),null,new cljs.core.Symbol(null,"recur","recur",-1532142362,null),null,new cljs.core.Symbol(null,".",".",-1640531481,null),null,new cljs.core.Symbol(null,"ns","ns",-1640528002,null),null,new cljs.core.Symbol(null,"do","do",-1640528316,null),null,new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),null,new cljs.core.Symbol(null,"throw","throw",-1530191713,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",1548249632,null),null,new cljs.core.Symbol(null,"js*","js*",-1640426054,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",774272013,null),null,new cljs.core.Symbol(null,"let*","let*",-1637213400,null),null,new cljs.core.Symbol(null,"loop*","loop*",-1537374273,null),null,new cljs.core.Symbol(null,"try","try",-1640416396,null),null,new cljs.core.Symbol(null,"if","if",-1640528170,null),null,new cljs.core.Symbol(null,"def","def",-1640432194,null),null], null), null),x);
});
