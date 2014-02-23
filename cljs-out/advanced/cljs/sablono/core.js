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
var G__27227__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__27226 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27226,0,null);var body = cljs.core.nthnext(vec__27226,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__27227 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27227__delegate.call(this,args);};
G__27227.cljs$lang$maxFixedArity = 0;
G__27227.cljs$lang$applyTo = (function (arglist__27228){
var args = cljs.core.seq(arglist__27228);
return G__27227__delegate(args);
});
G__27227.cljs$core$IFn$_invoke$arity$variadic = G__27227__delegate;
return G__27227;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__27233(s__27234){return (new cljs.core.LazySeq(null,(function (){var s__27234__$1 = s__27234;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27234__$1);if(temp__4092__auto__)
{var s__27234__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27234__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27234__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27236 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27235 = 0;while(true){
if((i__27235 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27235);cljs.core.chunk_append(b__27236,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__27237 = (i__27235 + 1);
i__27235 = G__27237;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27236),iter__27233(cljs.core.chunk_rest(s__27234__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27236),null);
}
} else
{var args = cljs.core.first(s__27234__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__27233(cljs.core.rest(s__27234__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__27238_SHARP_){return cljs.core.reset_BANG_(html,p1__27238_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__27243(s__27244){return (new cljs.core.LazySeq(null,(function (){var s__27244__$1 = s__27244;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27244__$1);if(temp__4092__auto__)
{var s__27244__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27244__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27244__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27246 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27245 = 0;while(true){
if((i__27245 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27245);cljs.core.chunk_append(b__27246,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$277,"text/css",cljs.core.constant$keyword$278,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$279,"stylesheet"], null)], null));
{
var G__27247 = (i__27245 + 1);
i__27245 = G__27247;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27246),iter__27243(cljs.core.chunk_rest(s__27244__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27246),null);
}
} else
{var style = cljs.core.first(s__27244__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$277,"text/css",cljs.core.constant$keyword$278,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$279,"stylesheet"], null)], null),iter__27243(cljs.core.rest(s__27244__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__27248){
var styles = cljs.core.seq(arglist__27248);
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
sablono.core.link_to27249 = (function() { 
var link_to27249__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to27249 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to27249__delegate.call(this,url,content);};
link_to27249.cljs$lang$maxFixedArity = 1;
link_to27249.cljs$lang$applyTo = (function (arglist__27250){
var url = cljs.core.first(arglist__27250);
var content = cljs.core.rest(arglist__27250);
return link_to27249__delegate(url,content);
});
link_to27249.cljs$core$IFn$_invoke$arity$variadic = link_to27249__delegate;
return link_to27249;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to27249);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27251 = (function() { 
var mail_to27251__delegate = function (e_mail,p__27252){var vec__27254 = p__27252;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27254,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to27251 = function (e_mail,var_args){
var p__27252 = null;if (arguments.length > 1) {
  p__27252 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to27251__delegate.call(this,e_mail,p__27252);};
mail_to27251.cljs$lang$maxFixedArity = 1;
mail_to27251.cljs$lang$applyTo = (function (arglist__27255){
var e_mail = cljs.core.first(arglist__27255);
var p__27252 = cljs.core.rest(arglist__27255);
return mail_to27251__delegate(e_mail,p__27252);
});
mail_to27251.cljs$core$IFn$_invoke$arity$variadic = mail_to27251__delegate;
return mail_to27251;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to27251);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27256 = (function unordered_list27256(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,(function (){var iter__4117__auto__ = (function iter__27261(s__27262){return (new cljs.core.LazySeq(null,(function (){var s__27262__$1 = s__27262;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27262__$1);if(temp__4092__auto__)
{var s__27262__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27262__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27262__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27264 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27263 = 0;while(true){
if((i__27263 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27263);cljs.core.chunk_append(b__27264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,x], null));
{
var G__27265 = (i__27263 + 1);
i__27263 = G__27265;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27264),iter__27261(cljs.core.chunk_rest(s__27262__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27264),null);
}
} else
{var x = cljs.core.first(s__27262__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,x], null),iter__27261(cljs.core.rest(s__27262__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list27256);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27266 = (function ordered_list27266(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$283,(function (){var iter__4117__auto__ = (function iter__27271(s__27272){return (new cljs.core.LazySeq(null,(function (){var s__27272__$1 = s__27272;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27272__$1);if(temp__4092__auto__)
{var s__27272__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27272__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27272__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27274 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27273 = 0;while(true){
if((i__27273 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27273);cljs.core.chunk_append(b__27274,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,x], null));
{
var G__27275 = (i__27273 + 1);
i__27273 = G__27275;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27274),iter__27271(cljs.core.chunk_rest(s__27272__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27274),null);
}
} else
{var x = cljs.core.first(s__27272__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,x], null),iter__27271(cljs.core.rest(s__27272__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list27266);
/**
* Create an image element.
*/
sablono.core.image27276 = (function() {
var image27276 = null;
var image27276__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image27276__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$285,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$286,alt], null)], null);
});
image27276 = function(src,alt){
switch(arguments.length){
case 1:
return image27276__1.call(this,src);
case 2:
return image27276__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27276.cljs$core$IFn$_invoke$arity$1 = image27276__1;
image27276.cljs$core$IFn$_invoke$arity$2 = image27276__2;
return image27276;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image27276);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27277_SHARP_,p2__27278_SHARP_){return [cljs.core.str(p1__27277_SHARP_),cljs.core.str("["),cljs.core.str(p2__27278_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27279_SHARP_,p2__27280_SHARP_){return [cljs.core.str(p1__27279_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27280_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$277,type,cljs.core.constant$keyword$287,sablono.core.make_name(name),cljs.core.constant$keyword$273,sablono.core.make_id(name),cljs.core.constant$keyword$242,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field27281 = (function() {
var hidden_field27281 = null;
var hidden_field27281__1 = (function (name){return hidden_field27281.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field27281__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field27281 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field27281__1.call(this,name);
case 2:
return hidden_field27281__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field27281.cljs$core$IFn$_invoke$arity$1 = hidden_field27281__1;
hidden_field27281.cljs$core$IFn$_invoke$arity$2 = hidden_field27281__2;
return hidden_field27281;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field27281);
/**
* Creates a new text input field.
*/
sablono.core.text_field27282 = (function() {
var text_field27282 = null;
var text_field27282__1 = (function (name){return text_field27282.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field27282__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field27282 = function(name,value){
switch(arguments.length){
case 1:
return text_field27282__1.call(this,name);
case 2:
return text_field27282__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field27282.cljs$core$IFn$_invoke$arity$1 = text_field27282__1;
text_field27282.cljs$core$IFn$_invoke$arity$2 = text_field27282__2;
return text_field27282;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field27282);
/**
* Creates a new password field.
*/
sablono.core.password_field27283 = (function() {
var password_field27283 = null;
var password_field27283__1 = (function (name){return password_field27283.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field27283__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field27283 = function(name,value){
switch(arguments.length){
case 1:
return password_field27283__1.call(this,name);
case 2:
return password_field27283__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field27283.cljs$core$IFn$_invoke$arity$1 = password_field27283__1;
password_field27283.cljs$core$IFn$_invoke$arity$2 = password_field27283__2;
return password_field27283;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field27283);
/**
* Creates a new email input field.
*/
sablono.core.email_field27284 = (function() {
var email_field27284 = null;
var email_field27284__1 = (function (name){return email_field27284.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field27284__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field27284 = function(name,value){
switch(arguments.length){
case 1:
return email_field27284__1.call(this,name);
case 2:
return email_field27284__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field27284.cljs$core$IFn$_invoke$arity$1 = email_field27284__1;
email_field27284.cljs$core$IFn$_invoke$arity$2 = email_field27284__2;
return email_field27284;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field27284);
/**
* Creates a check box.
*/
sablono.core.check_box27285 = (function() {
var check_box27285 = null;
var check_box27285__1 = (function (name){return check_box27285.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box27285__2 = (function (name,checked_QMARK_){return check_box27285.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box27285__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$277,"checkbox",cljs.core.constant$keyword$287,sablono.core.make_name(name),cljs.core.constant$keyword$273,sablono.core.make_id(name),cljs.core.constant$keyword$242,value,cljs.core.constant$keyword$288,checked_QMARK_], null)], null);
});
check_box27285 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box27285__1.call(this,name);
case 2:
return check_box27285__2.call(this,name,checked_QMARK_);
case 3:
return check_box27285__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box27285.cljs$core$IFn$_invoke$arity$1 = check_box27285__1;
check_box27285.cljs$core$IFn$_invoke$arity$2 = check_box27285__2;
check_box27285.cljs$core$IFn$_invoke$arity$3 = check_box27285__3;
return check_box27285;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box27285);
/**
* Creates a radio button.
*/
sablono.core.radio_button27286 = (function() {
var radio_button27286 = null;
var radio_button27286__1 = (function (group){return radio_button27286.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button27286__2 = (function (group,checked_QMARK_){return radio_button27286.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button27286__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$277,"radio",cljs.core.constant$keyword$287,sablono.core.make_name(group),cljs.core.constant$keyword$273,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$242,value,cljs.core.constant$keyword$288,checked_QMARK_], null)], null);
});
radio_button27286 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button27286__1.call(this,group);
case 2:
return radio_button27286__2.call(this,group,checked_QMARK_);
case 3:
return radio_button27286__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button27286.cljs$core$IFn$_invoke$arity$1 = radio_button27286__1;
radio_button27286.cljs$core$IFn$_invoke$arity$2 = radio_button27286__2;
radio_button27286.cljs$core$IFn$_invoke$arity$3 = radio_button27286__3;
return radio_button27286;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button27286);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options27287 = (function() {
var select_options27287 = null;
var select_options27287__1 = (function (coll){return select_options27287.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options27287__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__27296(s__27297){return (new cljs.core.LazySeq(null,(function (){var s__27297__$1 = s__27297;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27297__$1);if(temp__4092__auto__)
{var s__27297__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27297__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27297__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27299 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27298 = 0;while(true){
if((i__27298 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27298);cljs.core.chunk_append(b__27299,((cljs.core.sequential_QMARK_(x))?(function (){var vec__27302 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27302,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27302,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$290,text], null),select_options27287.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,val,cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__27304 = (i__27298 + 1);
i__27298 = G__27304;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27299),iter__27296(cljs.core.chunk_rest(s__27297__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27299),null);
}
} else
{var x = cljs.core.first(s__27297__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__27303 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27303,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27303,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$290,text], null),select_options27287.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,val,cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__27296(cljs.core.rest(s__27297__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options27287 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options27287__1.call(this,coll);
case 2:
return select_options27287__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options27287.cljs$core$IFn$_invoke$arity$1 = select_options27287__1;
select_options27287.cljs$core$IFn$_invoke$arity$2 = select_options27287__2;
return select_options27287;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options27287);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27305 = (function() {
var drop_down27305 = null;
var drop_down27305__2 = (function (name,options){return drop_down27305.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down27305__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,sablono.core.make_name(name),cljs.core.constant$keyword$273,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down27305 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27305__2.call(this,name,options);
case 3:
return drop_down27305__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27305.cljs$core$IFn$_invoke$arity$2 = drop_down27305__2;
drop_down27305.cljs$core$IFn$_invoke$arity$3 = drop_down27305__3;
return drop_down27305;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down27305);
/**
* Creates a text area element.
*/
sablono.core.text_area27306 = (function() {
var text_area27306 = null;
var text_area27306__1 = (function (name){return text_area27306.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area27306__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$287,sablono.core.make_name(name),cljs.core.constant$keyword$273,sablono.core.make_id(name),cljs.core.constant$keyword$242,value], null)], null);
});
text_area27306 = function(name,value){
switch(arguments.length){
case 1:
return text_area27306__1.call(this,name);
case 2:
return text_area27306__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27306.cljs$core$IFn$_invoke$arity$1 = text_area27306__1;
text_area27306.cljs$core$IFn$_invoke$arity$2 = text_area27306__2;
return text_area27306;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area27306);
/**
* Creates a file upload input.
*/
sablono.core.file_upload27307 = (function file_upload27307(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload27307);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27308 = (function label27308(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$270,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label27308);
/**
* Creates a submit button.
*/
sablono.core.submit_button27309 = (function submit_button27309(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"submit",cljs.core.constant$keyword$242,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button27309);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27310 = (function reset_button27310(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"reset",cljs.core.constant$keyword$242,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button27310);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27311 = (function() { 
var form_to27311__delegate = function (p__27312,body){var vec__27314 = p__27312;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27314,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27314,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$294,null,cljs.core.constant$keyword$295,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$297,method_str,cljs.core.constant$keyword$298,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$297,"POST",cljs.core.constant$keyword$298,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to27311 = function (p__27312,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to27311__delegate.call(this,p__27312,body);};
form_to27311.cljs$lang$maxFixedArity = 1;
form_to27311.cljs$lang$applyTo = (function (arglist__27315){
var p__27312 = cljs.core.first(arglist__27315);
var body = cljs.core.rest(arglist__27315);
return form_to27311__delegate(p__27312,body);
});
form_to27311.cljs$core$IFn$_invoke$arity$variadic = form_to27311__delegate;
return form_to27311;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to27311);
