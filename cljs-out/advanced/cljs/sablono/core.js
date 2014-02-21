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
var G__27235__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__27234 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27234,0,null);var body = cljs.core.nthnext(vec__27234,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__27235 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27235__delegate.call(this,args);};
G__27235.cljs$lang$maxFixedArity = 0;
G__27235.cljs$lang$applyTo = (function (arglist__27236){
var args = cljs.core.seq(arglist__27236);
return G__27235__delegate(args);
});
G__27235.cljs$core$IFn$_invoke$arity$variadic = G__27235__delegate;
return G__27235;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__27241(s__27242){return (new cljs.core.LazySeq(null,(function (){var s__27242__$1 = s__27242;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27242__$1);if(temp__4092__auto__)
{var s__27242__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27242__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27242__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27244 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27243 = 0;while(true){
if((i__27243 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27243);cljs.core.chunk_append(b__27244,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__27245 = (i__27243 + 1);
i__27243 = G__27245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27244),iter__27241(cljs.core.chunk_rest(s__27242__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27244),null);
}
} else
{var args = cljs.core.first(s__27242__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__27241(cljs.core.rest(s__27242__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__27246_SHARP_){return cljs.core.reset_BANG_(html,p1__27246_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__27251(s__27252){return (new cljs.core.LazySeq(null,(function (){var s__27252__$1 = s__27252;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27252__$1);if(temp__4092__auto__)
{var s__27252__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27252__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27252__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27254 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27253 = 0;while(true){
if((i__27253 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27253);cljs.core.chunk_append(b__27254,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$277,"text/css",cljs.core.constant$keyword$278,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$279,"stylesheet"], null)], null));
{
var G__27255 = (i__27253 + 1);
i__27253 = G__27255;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27254),iter__27251(cljs.core.chunk_rest(s__27252__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27254),null);
}
} else
{var style = cljs.core.first(s__27252__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$277,"text/css",cljs.core.constant$keyword$278,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$279,"stylesheet"], null)], null),iter__27251(cljs.core.rest(s__27252__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__27256){
var styles = cljs.core.seq(arglist__27256);
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
sablono.core.link_to27257 = (function() { 
var link_to27257__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to27257 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to27257__delegate.call(this,url,content);};
link_to27257.cljs$lang$maxFixedArity = 1;
link_to27257.cljs$lang$applyTo = (function (arglist__27258){
var url = cljs.core.first(arglist__27258);
var content = cljs.core.rest(arglist__27258);
return link_to27257__delegate(url,content);
});
link_to27257.cljs$core$IFn$_invoke$arity$variadic = link_to27257__delegate;
return link_to27257;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to27257);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27259 = (function() { 
var mail_to27259__delegate = function (e_mail,p__27260){var vec__27262 = p__27260;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27262,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to27259 = function (e_mail,var_args){
var p__27260 = null;if (arguments.length > 1) {
  p__27260 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to27259__delegate.call(this,e_mail,p__27260);};
mail_to27259.cljs$lang$maxFixedArity = 1;
mail_to27259.cljs$lang$applyTo = (function (arglist__27263){
var e_mail = cljs.core.first(arglist__27263);
var p__27260 = cljs.core.rest(arglist__27263);
return mail_to27259__delegate(e_mail,p__27260);
});
mail_to27259.cljs$core$IFn$_invoke$arity$variadic = mail_to27259__delegate;
return mail_to27259;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to27259);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27264 = (function unordered_list27264(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,(function (){var iter__4117__auto__ = (function iter__27269(s__27270){return (new cljs.core.LazySeq(null,(function (){var s__27270__$1 = s__27270;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27270__$1);if(temp__4092__auto__)
{var s__27270__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27270__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27270__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27272 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27271 = 0;while(true){
if((i__27271 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27271);cljs.core.chunk_append(b__27272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,x], null));
{
var G__27273 = (i__27271 + 1);
i__27271 = G__27273;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27272),iter__27269(cljs.core.chunk_rest(s__27270__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27272),null);
}
} else
{var x = cljs.core.first(s__27270__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,x], null),iter__27269(cljs.core.rest(s__27270__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list27264);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27274 = (function ordered_list27274(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$283,(function (){var iter__4117__auto__ = (function iter__27279(s__27280){return (new cljs.core.LazySeq(null,(function (){var s__27280__$1 = s__27280;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27280__$1);if(temp__4092__auto__)
{var s__27280__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27280__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27280__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27282 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27281 = 0;while(true){
if((i__27281 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27281);cljs.core.chunk_append(b__27282,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,x], null));
{
var G__27283 = (i__27281 + 1);
i__27281 = G__27283;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27282),iter__27279(cljs.core.chunk_rest(s__27280__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27282),null);
}
} else
{var x = cljs.core.first(s__27280__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,x], null),iter__27279(cljs.core.rest(s__27280__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list27274);
/**
* Create an image element.
*/
sablono.core.image27284 = (function() {
var image27284 = null;
var image27284__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image27284__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$285,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$286,alt], null)], null);
});
image27284 = function(src,alt){
switch(arguments.length){
case 1:
return image27284__1.call(this,src);
case 2:
return image27284__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27284.cljs$core$IFn$_invoke$arity$1 = image27284__1;
image27284.cljs$core$IFn$_invoke$arity$2 = image27284__2;
return image27284;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image27284);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27285_SHARP_,p2__27286_SHARP_){return [cljs.core.str(p1__27285_SHARP_),cljs.core.str("["),cljs.core.str(p2__27286_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27287_SHARP_,p2__27288_SHARP_){return [cljs.core.str(p1__27287_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27288_SHARP_)].join('');
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
sablono.core.hidden_field27289 = (function() {
var hidden_field27289 = null;
var hidden_field27289__1 = (function (name){return hidden_field27289.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field27289__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field27289 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field27289__1.call(this,name);
case 2:
return hidden_field27289__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field27289.cljs$core$IFn$_invoke$arity$1 = hidden_field27289__1;
hidden_field27289.cljs$core$IFn$_invoke$arity$2 = hidden_field27289__2;
return hidden_field27289;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field27289);
/**
* Creates a new text input field.
*/
sablono.core.text_field27290 = (function() {
var text_field27290 = null;
var text_field27290__1 = (function (name){return text_field27290.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field27290__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field27290 = function(name,value){
switch(arguments.length){
case 1:
return text_field27290__1.call(this,name);
case 2:
return text_field27290__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field27290.cljs$core$IFn$_invoke$arity$1 = text_field27290__1;
text_field27290.cljs$core$IFn$_invoke$arity$2 = text_field27290__2;
return text_field27290;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field27290);
/**
* Creates a new password field.
*/
sablono.core.password_field27291 = (function() {
var password_field27291 = null;
var password_field27291__1 = (function (name){return password_field27291.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field27291__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field27291 = function(name,value){
switch(arguments.length){
case 1:
return password_field27291__1.call(this,name);
case 2:
return password_field27291__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field27291.cljs$core$IFn$_invoke$arity$1 = password_field27291__1;
password_field27291.cljs$core$IFn$_invoke$arity$2 = password_field27291__2;
return password_field27291;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field27291);
/**
* Creates a new email input field.
*/
sablono.core.email_field27292 = (function() {
var email_field27292 = null;
var email_field27292__1 = (function (name){return email_field27292.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field27292__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field27292 = function(name,value){
switch(arguments.length){
case 1:
return email_field27292__1.call(this,name);
case 2:
return email_field27292__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field27292.cljs$core$IFn$_invoke$arity$1 = email_field27292__1;
email_field27292.cljs$core$IFn$_invoke$arity$2 = email_field27292__2;
return email_field27292;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field27292);
/**
* Creates a check box.
*/
sablono.core.check_box27293 = (function() {
var check_box27293 = null;
var check_box27293__1 = (function (name){return check_box27293.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box27293__2 = (function (name,checked_QMARK_){return check_box27293.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box27293__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$277,"checkbox",cljs.core.constant$keyword$287,sablono.core.make_name(name),cljs.core.constant$keyword$273,sablono.core.make_id(name),cljs.core.constant$keyword$242,value,cljs.core.constant$keyword$288,checked_QMARK_], null)], null);
});
check_box27293 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box27293__1.call(this,name);
case 2:
return check_box27293__2.call(this,name,checked_QMARK_);
case 3:
return check_box27293__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box27293.cljs$core$IFn$_invoke$arity$1 = check_box27293__1;
check_box27293.cljs$core$IFn$_invoke$arity$2 = check_box27293__2;
check_box27293.cljs$core$IFn$_invoke$arity$3 = check_box27293__3;
return check_box27293;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box27293);
/**
* Creates a radio button.
*/
sablono.core.radio_button27294 = (function() {
var radio_button27294 = null;
var radio_button27294__1 = (function (group){return radio_button27294.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button27294__2 = (function (group,checked_QMARK_){return radio_button27294.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button27294__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$277,"radio",cljs.core.constant$keyword$287,sablono.core.make_name(group),cljs.core.constant$keyword$273,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$242,value,cljs.core.constant$keyword$288,checked_QMARK_], null)], null);
});
radio_button27294 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button27294__1.call(this,group);
case 2:
return radio_button27294__2.call(this,group,checked_QMARK_);
case 3:
return radio_button27294__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button27294.cljs$core$IFn$_invoke$arity$1 = radio_button27294__1;
radio_button27294.cljs$core$IFn$_invoke$arity$2 = radio_button27294__2;
radio_button27294.cljs$core$IFn$_invoke$arity$3 = radio_button27294__3;
return radio_button27294;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button27294);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options27295 = (function() {
var select_options27295 = null;
var select_options27295__1 = (function (coll){return select_options27295.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options27295__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__27304(s__27305){return (new cljs.core.LazySeq(null,(function (){var s__27305__$1 = s__27305;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27305__$1);if(temp__4092__auto__)
{var s__27305__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27305__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27305__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27307 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27306 = 0;while(true){
if((i__27306 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27306);cljs.core.chunk_append(b__27307,((cljs.core.sequential_QMARK_(x))?(function (){var vec__27310 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27310,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27310,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$290,text], null),select_options27295.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,val,cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__27312 = (i__27306 + 1);
i__27306 = G__27312;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27307),iter__27304(cljs.core.chunk_rest(s__27305__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27307),null);
}
} else
{var x = cljs.core.first(s__27305__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__27311 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27311,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27311,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$290,text], null),select_options27295.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,val,cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__27304(cljs.core.rest(s__27305__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options27295 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options27295__1.call(this,coll);
case 2:
return select_options27295__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options27295.cljs$core$IFn$_invoke$arity$1 = select_options27295__1;
select_options27295.cljs$core$IFn$_invoke$arity$2 = select_options27295__2;
return select_options27295;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options27295);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27313 = (function() {
var drop_down27313 = null;
var drop_down27313__2 = (function (name,options){return drop_down27313.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down27313__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,sablono.core.make_name(name),cljs.core.constant$keyword$273,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down27313 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27313__2.call(this,name,options);
case 3:
return drop_down27313__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27313.cljs$core$IFn$_invoke$arity$2 = drop_down27313__2;
drop_down27313.cljs$core$IFn$_invoke$arity$3 = drop_down27313__3;
return drop_down27313;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down27313);
/**
* Creates a text area element.
*/
sablono.core.text_area27314 = (function() {
var text_area27314 = null;
var text_area27314__1 = (function (name){return text_area27314.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area27314__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$287,sablono.core.make_name(name),cljs.core.constant$keyword$273,sablono.core.make_id(name),cljs.core.constant$keyword$242,value], null)], null);
});
text_area27314 = function(name,value){
switch(arguments.length){
case 1:
return text_area27314__1.call(this,name);
case 2:
return text_area27314__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27314.cljs$core$IFn$_invoke$arity$1 = text_area27314__1;
text_area27314.cljs$core$IFn$_invoke$arity$2 = text_area27314__2;
return text_area27314;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area27314);
/**
* Creates a file upload input.
*/
sablono.core.file_upload27315 = (function file_upload27315(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload27315);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27316 = (function label27316(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$270,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label27316);
/**
* Creates a submit button.
*/
sablono.core.submit_button27317 = (function submit_button27317(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"submit",cljs.core.constant$keyword$242,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button27317);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27318 = (function reset_button27318(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,"reset",cljs.core.constant$keyword$242,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button27318);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27319 = (function() { 
var form_to27319__delegate = function (p__27320,body){var vec__27322 = p__27320;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27322,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27322,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$294,null,cljs.core.constant$keyword$295,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$297,method_str,cljs.core.constant$keyword$298,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$297,"POST",cljs.core.constant$keyword$298,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to27319 = function (p__27320,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to27319__delegate.call(this,p__27320,body);};
form_to27319.cljs$lang$maxFixedArity = 1;
form_to27319.cljs$lang$applyTo = (function (arglist__27323){
var p__27320 = cljs.core.first(arglist__27323);
var body = cljs.core.rest(arglist__27323);
return form_to27319__delegate(p__27320,body);
});
form_to27319.cljs$core$IFn$_invoke$arity$variadic = form_to27319__delegate;
return form_to27319;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to27319);
