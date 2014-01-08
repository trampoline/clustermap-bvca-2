// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__24356__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__24355 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24355,0,null);var body = cljs.core.nthnext(vec__24355,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24356 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24356__delegate.call(this,args);};
G__24356.cljs$lang$maxFixedArity = 0;
G__24356.cljs$lang$applyTo = (function (arglist__24357){
var args = cljs.core.seq(arglist__24357);
return G__24356__delegate(args);
});
G__24356.cljs$core$IFn$_invoke$arity$variadic = G__24356__delegate;
return G__24356;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__24362(s__24363){return (new cljs.core.LazySeq(null,(function (){var s__24363__$1 = s__24363;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24363__$1);if(temp__4092__auto__)
{var s__24363__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24363__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24363__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24365 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24364 = 0;while(true){
if((i__24364 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24364);cljs.core.chunk_append(b__24365,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__24366 = (i__24364 + 1);
i__24364 = G__24366;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24365),iter__24362(cljs.core.chunk_rest(s__24363__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24365),null);
}
} else
{var args = cljs.core.first(s__24363__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__24362(cljs.core.rest(s__24363__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(arglists);
});
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__24371(s__24372){return (new cljs.core.LazySeq(null,(function (){var s__24372__$1 = s__24372;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24372__$1);if(temp__4092__auto__)
{var s__24372__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24372__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24372__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24374 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24373 = 0;while(true){
if((i__24373 < size__4116__auto__))
{var script = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24373);cljs.core.chunk_append(b__24374,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$145,"text/javascript",cljs.core.constant$keyword$146,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null));
{
var G__24375 = (i__24373 + 1);
i__24373 = G__24375;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24374),iter__24371(cljs.core.chunk_rest(s__24372__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24374),null);
}
} else
{var script = cljs.core.first(s__24372__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$145,"text/javascript",cljs.core.constant$keyword$146,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null),iter__24371(cljs.core.rest(s__24372__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__24376){
var scripts = cljs.core.seq(arglist__24376);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__24381(s__24382){return (new cljs.core.LazySeq(null,(function (){var s__24382__$1 = s__24382;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24382__$1);if(temp__4092__auto__)
{var s__24382__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24382__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24382__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24384 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24383 = 0;while(true){
if((i__24383 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24383);cljs.core.chunk_append(b__24384,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$145,"text/css",cljs.core.constant$keyword$148,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$149,"stylesheet"], null)], null));
{
var G__24385 = (i__24383 + 1);
i__24383 = G__24385;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24384),iter__24381(cljs.core.chunk_rest(s__24382__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24384),null);
}
} else
{var style = cljs.core.first(s__24382__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$145,"text/css",cljs.core.constant$keyword$148,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$149,"stylesheet"], null)], null),iter__24381(cljs.core.rest(s__24382__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__24386){
var styles = cljs.core.seq(arglist__24386);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to24387 = (function() { 
var link_to24387__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$148,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24387 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to24387__delegate.call(this,url,content);};
link_to24387.cljs$lang$maxFixedArity = 1;
link_to24387.cljs$lang$applyTo = (function (arglist__24388){
var url = cljs.core.first(arglist__24388);
var content = cljs.core.rest(arglist__24388);
return link_to24387__delegate(url,content);
});
link_to24387.cljs$core$IFn$_invoke$arity$variadic = link_to24387__delegate;
return link_to24387;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24387);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24389 = (function() { 
var mail_to24389__delegate = function (e_mail,p__24390){var vec__24392 = p__24390;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24392,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$148,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to24389 = function (e_mail,var_args){
var p__24390 = null;if (arguments.length > 1) {
  p__24390 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to24389__delegate.call(this,e_mail,p__24390);};
mail_to24389.cljs$lang$maxFixedArity = 1;
mail_to24389.cljs$lang$applyTo = (function (arglist__24393){
var e_mail = cljs.core.first(arglist__24393);
var p__24390 = cljs.core.rest(arglist__24393);
return mail_to24389__delegate(e_mail,p__24390);
});
mail_to24389.cljs$core$IFn$_invoke$arity$variadic = mail_to24389__delegate;
return mail_to24389;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24389);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24394 = (function unordered_list24394(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,(function (){var iter__4117__auto__ = (function iter__24399(s__24400){return (new cljs.core.LazySeq(null,(function (){var s__24400__$1 = s__24400;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24400__$1);if(temp__4092__auto__)
{var s__24400__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24400__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24400__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24402 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24401 = 0;while(true){
if((i__24401 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24401);cljs.core.chunk_append(b__24402,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152,x], null));
{
var G__24403 = (i__24401 + 1);
i__24401 = G__24403;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24402),iter__24399(cljs.core.chunk_rest(s__24400__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24402),null);
}
} else
{var x = cljs.core.first(s__24400__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152,x], null),iter__24399(cljs.core.rest(s__24400__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24394);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24404 = (function ordered_list24404(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,(function (){var iter__4117__auto__ = (function iter__24409(s__24410){return (new cljs.core.LazySeq(null,(function (){var s__24410__$1 = s__24410;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24410__$1);if(temp__4092__auto__)
{var s__24410__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24410__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24410__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24412 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24411 = 0;while(true){
if((i__24411 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24411);cljs.core.chunk_append(b__24412,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152,x], null));
{
var G__24413 = (i__24411 + 1);
i__24411 = G__24413;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24412),iter__24409(cljs.core.chunk_rest(s__24410__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24412),null);
}
} else
{var x = cljs.core.first(s__24410__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152,x], null),iter__24409(cljs.core.rest(s__24410__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24404);
/**
* Create an image element.
*/
sablono.core.image24414 = (function() {
var image24414 = null;
var image24414__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$154,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$146,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image24414__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$154,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$146,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$155,alt], null)], null);
});
image24414 = function(src,alt){
switch(arguments.length){
case 1:
return image24414__1.call(this,src);
case 2:
return image24414__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24414.cljs$core$IFn$_invoke$arity$1 = image24414__1;
image24414.cljs$core$IFn$_invoke$arity$2 = image24414__2;
return image24414;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image24414);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24415_SHARP_,p2__24416_SHARP_){return [cljs.core.str(p1__24415_SHARP_),cljs.core.str("["),cljs.core.str(p2__24416_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24417_SHARP_,p2__24418_SHARP_){return [cljs.core.str(p1__24417_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24418_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$145,type,cljs.core.constant$keyword$157,sablono.core.make_name(name),cljs.core.constant$keyword$143,sablono.core.make_id(name),cljs.core.constant$keyword$114,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24419 = (function() {
var hidden_field24419 = null;
var hidden_field24419__1 = (function (name){return hidden_field24419.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field24419__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field24419 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field24419__1.call(this,name);
case 2:
return hidden_field24419__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24419.cljs$core$IFn$_invoke$arity$1 = hidden_field24419__1;
hidden_field24419.cljs$core$IFn$_invoke$arity$2 = hidden_field24419__2;
return hidden_field24419;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field24419);
/**
* Creates a new text input field.
*/
sablono.core.text_field24420 = (function() {
var text_field24420 = null;
var text_field24420__1 = (function (name){return text_field24420.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field24420__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field24420 = function(name,value){
switch(arguments.length){
case 1:
return text_field24420__1.call(this,name);
case 2:
return text_field24420__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24420.cljs$core$IFn$_invoke$arity$1 = text_field24420__1;
text_field24420.cljs$core$IFn$_invoke$arity$2 = text_field24420__2;
return text_field24420;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field24420);
/**
* Creates a new password field.
*/
sablono.core.password_field24421 = (function() {
var password_field24421 = null;
var password_field24421__1 = (function (name){return password_field24421.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field24421__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field24421 = function(name,value){
switch(arguments.length){
case 1:
return password_field24421__1.call(this,name);
case 2:
return password_field24421__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24421.cljs$core$IFn$_invoke$arity$1 = password_field24421__1;
password_field24421.cljs$core$IFn$_invoke$arity$2 = password_field24421__2;
return password_field24421;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field24421);
/**
* Creates a new email input field.
*/
sablono.core.email_field24422 = (function() {
var email_field24422 = null;
var email_field24422__1 = (function (name){return email_field24422.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field24422__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field24422 = function(name,value){
switch(arguments.length){
case 1:
return email_field24422__1.call(this,name);
case 2:
return email_field24422__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24422.cljs$core$IFn$_invoke$arity$1 = email_field24422__1;
email_field24422.cljs$core$IFn$_invoke$arity$2 = email_field24422__2;
return email_field24422;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field24422);
/**
* Creates a check box.
*/
sablono.core.check_box24423 = (function() {
var check_box24423 = null;
var check_box24423__1 = (function (name){return check_box24423.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box24423__2 = (function (name,checked_QMARK_){return check_box24423.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box24423__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$145,"checkbox",cljs.core.constant$keyword$157,sablono.core.make_name(name),cljs.core.constant$keyword$143,sablono.core.make_id(name),cljs.core.constant$keyword$114,value,cljs.core.constant$keyword$158,checked_QMARK_], null)], null);
});
check_box24423 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24423__1.call(this,name);
case 2:
return check_box24423__2.call(this,name,checked_QMARK_);
case 3:
return check_box24423__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24423.cljs$core$IFn$_invoke$arity$1 = check_box24423__1;
check_box24423.cljs$core$IFn$_invoke$arity$2 = check_box24423__2;
check_box24423.cljs$core$IFn$_invoke$arity$3 = check_box24423__3;
return check_box24423;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box24423);
/**
* Creates a radio button.
*/
sablono.core.radio_button24424 = (function() {
var radio_button24424 = null;
var radio_button24424__1 = (function (group){return radio_button24424.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button24424__2 = (function (group,checked_QMARK_){return radio_button24424.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button24424__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$145,"radio",cljs.core.constant$keyword$157,sablono.core.make_name(group),cljs.core.constant$keyword$143,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$114,value,cljs.core.constant$keyword$158,checked_QMARK_], null)], null);
});
radio_button24424 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24424__1.call(this,group);
case 2:
return radio_button24424__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24424__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24424.cljs$core$IFn$_invoke$arity$1 = radio_button24424__1;
radio_button24424.cljs$core$IFn$_invoke$arity$2 = radio_button24424__2;
radio_button24424.cljs$core$IFn$_invoke$arity$3 = radio_button24424__3;
return radio_button24424;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button24424);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24425 = (function() {
var select_options24425 = null;
var select_options24425__1 = (function (coll){return select_options24425.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options24425__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__24434(s__24435){return (new cljs.core.LazySeq(null,(function (){var s__24435__$1 = s__24435;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24435__$1);if(temp__4092__auto__)
{var s__24435__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24435__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24435__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24437 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24436 = 0;while(true){
if((i__24436 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24436);cljs.core.chunk_append(b__24437,((cljs.core.sequential_QMARK_(x))?(function (){var vec__24440 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24440,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$160,text], null),select_options24425.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$114,val,cljs.core.constant$keyword$162,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$162,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__24442 = (i__24436 + 1);
i__24436 = G__24442;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24437),iter__24434(cljs.core.chunk_rest(s__24435__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24437),null);
}
} else
{var x = cljs.core.first(s__24435__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__24441 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24441,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24441,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$160,text], null),select_options24425.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$114,val,cljs.core.constant$keyword$162,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$162,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__24434(cljs.core.rest(s__24435__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options24425 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24425__1.call(this,coll);
case 2:
return select_options24425__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24425.cljs$core$IFn$_invoke$arity$1 = select_options24425__1;
select_options24425.cljs$core$IFn$_invoke$arity$2 = select_options24425__2;
return select_options24425;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options24425);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24443 = (function() {
var drop_down24443 = null;
var drop_down24443__2 = (function (name,options){return drop_down24443.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down24443__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$163,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,sablono.core.make_name(name),cljs.core.constant$keyword$143,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down24443 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24443__2.call(this,name,options);
case 3:
return drop_down24443__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24443.cljs$core$IFn$_invoke$arity$2 = drop_down24443__2;
drop_down24443.cljs$core$IFn$_invoke$arity$3 = drop_down24443__3;
return drop_down24443;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down24443);
/**
* Creates a text area element.
*/
sablono.core.text_area24444 = (function() {
var text_area24444 = null;
var text_area24444__1 = (function (name){return text_area24444.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area24444__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$164,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,sablono.core.make_name(name),cljs.core.constant$keyword$143,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area24444 = function(name,value){
switch(arguments.length){
case 1:
return text_area24444__1.call(this,name);
case 2:
return text_area24444__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24444.cljs$core$IFn$_invoke$arity$1 = text_area24444__1;
text_area24444.cljs$core$IFn$_invoke$arity$2 = text_area24444__2;
return text_area24444;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area24444);
/**
* Creates a file upload input.
*/
sablono.core.file_upload24445 = (function file_upload24445(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload24445);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24446 = (function label24446(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$165,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label24446);
/**
* Creates a submit button.
*/
sablono.core.submit_button24447 = (function submit_button24447(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$145,"submit",cljs.core.constant$keyword$114,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24447);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24448 = (function reset_button24448(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$145,"reset",cljs.core.constant$keyword$114,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24448);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24449 = (function() { 
var form_to24449__delegate = function (p__24450,body){var vec__24452 = p__24450;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24452,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24452,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$166,null,cljs.core.constant$keyword$167,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$169,method_str,cljs.core.constant$keyword$170,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$169,"POST",cljs.core.constant$keyword$170,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to24449 = function (p__24450,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to24449__delegate.call(this,p__24450,body);};
form_to24449.cljs$lang$maxFixedArity = 1;
form_to24449.cljs$lang$applyTo = (function (arglist__24453){
var p__24450 = cljs.core.first(arglist__24453);
var body = cljs.core.rest(arglist__24453);
return form_to24449__delegate(p__24450,body);
});
form_to24449.cljs$core$IFn$_invoke$arity$variadic = form_to24449__delegate;
return form_to24449;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24449);
