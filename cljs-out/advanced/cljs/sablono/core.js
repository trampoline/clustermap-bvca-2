// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__16446__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__16445 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16445,0,null);var body = cljs.core.nthnext(vec__16445,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16446 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16446__delegate.call(this,args);};
G__16446.cljs$lang$maxFixedArity = 0;
G__16446.cljs$lang$applyTo = (function (arglist__16447){
var args = cljs.core.seq(arglist__16447);
return G__16446__delegate(args);
});
G__16446.cljs$core$IFn$_invoke$arity$variadic = G__16446__delegate;
return G__16446;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__16452(s__16453){return (new cljs.core.LazySeq(null,(function (){var s__16453__$1 = s__16453;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16453__$1);if(temp__4092__auto__)
{var s__16453__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16453__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16453__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16455 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16454 = 0;while(true){
if((i__16454 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16454);cljs.core.chunk_append(b__16455,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16456 = (i__16454 + 1);
i__16454 = G__16456;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16455),iter__16452(cljs.core.chunk_rest(s__16453__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16455),null);
}
} else
{var args = cljs.core.first(s__16453__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16452(cljs.core.rest(s__16453__$2)));
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
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__16457_SHARP_){return cljs.core.reset_BANG_(html,p1__16457_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__16462(s__16463){return (new cljs.core.LazySeq(null,(function (){var s__16463__$1 = s__16463;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16463__$1);if(temp__4092__auto__)
{var s__16463__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16463__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16463__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16465 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16464 = 0;while(true){
if((i__16464 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16464);cljs.core.chunk_append(b__16465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$43,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$44,"text/css",cljs.core.constant$keyword$45,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$46,"stylesheet"], null)], null));
{
var G__16466 = (i__16464 + 1);
i__16464 = G__16466;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16465),iter__16462(cljs.core.chunk_rest(s__16463__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16465),null);
}
} else
{var style = cljs.core.first(s__16463__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$43,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$44,"text/css",cljs.core.constant$keyword$45,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$46,"stylesheet"], null)], null),iter__16462(cljs.core.rest(s__16463__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__16467){
var styles = cljs.core.seq(arglist__16467);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to16468 = (function() { 
var link_to16468__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$47,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to16468 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16468__delegate.call(this,url,content);};
link_to16468.cljs$lang$maxFixedArity = 1;
link_to16468.cljs$lang$applyTo = (function (arglist__16469){
var url = cljs.core.first(arglist__16469);
var content = cljs.core.rest(arglist__16469);
return link_to16468__delegate(url,content);
});
link_to16468.cljs$core$IFn$_invoke$arity$variadic = link_to16468__delegate;
return link_to16468;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to16468);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16470 = (function() { 
var mail_to16470__delegate = function (e_mail,p__16471){var vec__16473 = p__16471;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16473,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$47,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16470 = function (e_mail,var_args){
var p__16471 = null;if (arguments.length > 1) {
  p__16471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16470__delegate.call(this,e_mail,p__16471);};
mail_to16470.cljs$lang$maxFixedArity = 1;
mail_to16470.cljs$lang$applyTo = (function (arglist__16474){
var e_mail = cljs.core.first(arglist__16474);
var p__16471 = cljs.core.rest(arglist__16474);
return mail_to16470__delegate(e_mail,p__16471);
});
mail_to16470.cljs$core$IFn$_invoke$arity$variadic = mail_to16470__delegate;
return mail_to16470;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to16470);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16475 = (function unordered_list16475(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,(function (){var iter__4117__auto__ = (function iter__16480(s__16481){return (new cljs.core.LazySeq(null,(function (){var s__16481__$1 = s__16481;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16481__$1);if(temp__4092__auto__)
{var s__16481__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16481__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16481__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16483 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16482 = 0;while(true){
if((i__16482 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16482);cljs.core.chunk_append(b__16483,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,x], null));
{
var G__16484 = (i__16482 + 1);
i__16482 = G__16484;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16483),iter__16480(cljs.core.chunk_rest(s__16481__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16483),null);
}
} else
{var x = cljs.core.first(s__16481__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,x], null),iter__16480(cljs.core.rest(s__16481__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list16475);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16485 = (function ordered_list16485(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$50,(function (){var iter__4117__auto__ = (function iter__16490(s__16491){return (new cljs.core.LazySeq(null,(function (){var s__16491__$1 = s__16491;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16491__$1);if(temp__4092__auto__)
{var s__16491__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16491__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16491__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16493 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16492 = 0;while(true){
if((i__16492 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16492);cljs.core.chunk_append(b__16493,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,x], null));
{
var G__16494 = (i__16492 + 1);
i__16492 = G__16494;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16493),iter__16490(cljs.core.chunk_rest(s__16491__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16493),null);
}
} else
{var x = cljs.core.first(s__16491__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$49,x], null),iter__16490(cljs.core.rest(s__16491__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list16485);
/**
* Create an image element.
*/
sablono.core.image16495 = (function() {
var image16495 = null;
var image16495__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image16495__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$53,alt], null)], null);
});
image16495 = function(src,alt){
switch(arguments.length){
case 1:
return image16495__1.call(this,src);
case 2:
return image16495__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16495.cljs$core$IFn$_invoke$arity$1 = image16495__1;
image16495.cljs$core$IFn$_invoke$arity$2 = image16495__2;
return image16495;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image16495);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16496_SHARP_,p2__16497_SHARP_){return [cljs.core.str(p1__16496_SHARP_),cljs.core.str("["),cljs.core.str(p2__16497_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16498_SHARP_,p2__16499_SHARP_){return [cljs.core.str(p1__16498_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16499_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$44,type,cljs.core.constant$keyword$54,sablono.core.make_name(name),cljs.core.constant$keyword$40,sablono.core.make_id(name),cljs.core.constant$keyword$11,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field16500 = (function() {
var hidden_field16500 = null;
var hidden_field16500__1 = (function (name){return hidden_field16500.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field16500__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field16500 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field16500__1.call(this,name);
case 2:
return hidden_field16500__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16500.cljs$core$IFn$_invoke$arity$1 = hidden_field16500__1;
hidden_field16500.cljs$core$IFn$_invoke$arity$2 = hidden_field16500__2;
return hidden_field16500;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16500);
/**
* Creates a new text input field.
*/
sablono.core.text_field16501 = (function() {
var text_field16501 = null;
var text_field16501__1 = (function (name){return text_field16501.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field16501__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field16501 = function(name,value){
switch(arguments.length){
case 1:
return text_field16501__1.call(this,name);
case 2:
return text_field16501__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16501.cljs$core$IFn$_invoke$arity$1 = text_field16501__1;
text_field16501.cljs$core$IFn$_invoke$arity$2 = text_field16501__2;
return text_field16501;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16501);
/**
* Creates a new password field.
*/
sablono.core.password_field16502 = (function() {
var password_field16502 = null;
var password_field16502__1 = (function (name){return password_field16502.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field16502__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field16502 = function(name,value){
switch(arguments.length){
case 1:
return password_field16502__1.call(this,name);
case 2:
return password_field16502__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16502.cljs$core$IFn$_invoke$arity$1 = password_field16502__1;
password_field16502.cljs$core$IFn$_invoke$arity$2 = password_field16502__2;
return password_field16502;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16502);
/**
* Creates a new email input field.
*/
sablono.core.email_field16503 = (function() {
var email_field16503 = null;
var email_field16503__1 = (function (name){return email_field16503.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field16503__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field16503 = function(name,value){
switch(arguments.length){
case 1:
return email_field16503__1.call(this,name);
case 2:
return email_field16503__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16503.cljs$core$IFn$_invoke$arity$1 = email_field16503__1;
email_field16503.cljs$core$IFn$_invoke$arity$2 = email_field16503__2;
return email_field16503;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field16503);
/**
* Creates a check box.
*/
sablono.core.check_box16504 = (function() {
var check_box16504 = null;
var check_box16504__1 = (function (name){return check_box16504.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box16504__2 = (function (name,checked_QMARK_){return check_box16504.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box16504__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$44,"checkbox",cljs.core.constant$keyword$54,sablono.core.make_name(name),cljs.core.constant$keyword$40,sablono.core.make_id(name),cljs.core.constant$keyword$11,value,cljs.core.constant$keyword$55,checked_QMARK_], null)], null);
});
check_box16504 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16504__1.call(this,name);
case 2:
return check_box16504__2.call(this,name,checked_QMARK_);
case 3:
return check_box16504__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16504.cljs$core$IFn$_invoke$arity$1 = check_box16504__1;
check_box16504.cljs$core$IFn$_invoke$arity$2 = check_box16504__2;
check_box16504.cljs$core$IFn$_invoke$arity$3 = check_box16504__3;
return check_box16504;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16504);
/**
* Creates a radio button.
*/
sablono.core.radio_button16505 = (function() {
var radio_button16505 = null;
var radio_button16505__1 = (function (group){return radio_button16505.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button16505__2 = (function (group,checked_QMARK_){return radio_button16505.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button16505__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$44,"radio",cljs.core.constant$keyword$54,sablono.core.make_name(group),cljs.core.constant$keyword$40,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$11,value,cljs.core.constant$keyword$55,checked_QMARK_], null)], null);
});
radio_button16505 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16505__1.call(this,group);
case 2:
return radio_button16505__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16505__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16505.cljs$core$IFn$_invoke$arity$1 = radio_button16505__1;
radio_button16505.cljs$core$IFn$_invoke$arity$2 = radio_button16505__2;
radio_button16505.cljs$core$IFn$_invoke$arity$3 = radio_button16505__3;
return radio_button16505;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16505);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16506 = (function() {
var select_options16506 = null;
var select_options16506__1 = (function (coll){return select_options16506.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options16506__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__16515(s__16516){return (new cljs.core.LazySeq(null,(function (){var s__16516__$1 = s__16516;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16516__$1);if(temp__4092__auto__)
{var s__16516__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16516__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16516__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16518 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16517 = 0;while(true){
if((i__16517 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16517);cljs.core.chunk_append(b__16518,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16521 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16521,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16521,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$56,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,text], null),select_options16506.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$11,val,cljs.core.constant$keyword$59,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__16523 = (i__16517 + 1);
i__16517 = G__16523;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16518),iter__16515(cljs.core.chunk_rest(s__16516__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16518),null);
}
} else
{var x = cljs.core.first(s__16516__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16522 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16522,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16522,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$56,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,text], null),select_options16506.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$11,val,cljs.core.constant$keyword$59,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__16515(cljs.core.rest(s__16516__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options16506 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16506__1.call(this,coll);
case 2:
return select_options16506__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16506.cljs$core$IFn$_invoke$arity$1 = select_options16506__1;
select_options16506.cljs$core$IFn$_invoke$arity$2 = select_options16506__2;
return select_options16506;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16506);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16524 = (function() {
var drop_down16524 = null;
var drop_down16524__2 = (function (name,options){return drop_down16524.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down16524__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$54,sablono.core.make_name(name),cljs.core.constant$keyword$40,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down16524 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16524__2.call(this,name,options);
case 3:
return drop_down16524__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16524.cljs$core$IFn$_invoke$arity$2 = drop_down16524__2;
drop_down16524.cljs$core$IFn$_invoke$arity$3 = drop_down16524__3;
return drop_down16524;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16524);
/**
* Creates a text area element.
*/
sablono.core.text_area16525 = (function() {
var text_area16525 = null;
var text_area16525__1 = (function (name){return text_area16525.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area16525__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$41,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$54,sablono.core.make_name(name),cljs.core.constant$keyword$40,sablono.core.make_id(name),cljs.core.constant$keyword$11,value], null)], null);
});
text_area16525 = function(name,value){
switch(arguments.length){
case 1:
return text_area16525__1.call(this,name);
case 2:
return text_area16525__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16525.cljs$core$IFn$_invoke$arity$1 = text_area16525__1;
text_area16525.cljs$core$IFn$_invoke$arity$2 = text_area16525__2;
return text_area16525;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16525);
/**
* Creates a file upload input.
*/
sablono.core.file_upload16526 = (function file_upload16526(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload16526);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16527 = (function label16527(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$57,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label16527);
/**
* Creates a submit button.
*/
sablono.core.submit_button16528 = (function submit_button16528(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$44,"submit",cljs.core.constant$keyword$11,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button16528);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16529 = (function reset_button16529(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$42,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$44,"reset",cljs.core.constant$keyword$11,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button16529);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16530 = (function() { 
var form_to16530__delegate = function (p__16531,body){var vec__16533 = p__16531;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16533,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16533,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,null,cljs.core.constant$keyword$62,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,method_str,cljs.core.constant$keyword$65,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,"POST",cljs.core.constant$keyword$65,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to16530 = function (p__16531,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16530__delegate.call(this,p__16531,body);};
form_to16530.cljs$lang$maxFixedArity = 1;
form_to16530.cljs$lang$applyTo = (function (arglist__16534){
var p__16531 = cljs.core.first(arglist__16534);
var body = cljs.core.rest(arglist__16534);
return form_to16530__delegate(p__16531,body);
});
form_to16530.cljs$core$IFn$_invoke$arity$variadic = form_to16530__delegate;
return form_to16530;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to16530);
