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
var G__27203__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__27202 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27202,0,null);var body = cljs.core.nthnext(vec__27202,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__27203 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27203__delegate.call(this,args);};
G__27203.cljs$lang$maxFixedArity = 0;
G__27203.cljs$lang$applyTo = (function (arglist__27204){
var args = cljs.core.seq(arglist__27204);
return G__27203__delegate(args);
});
G__27203.cljs$core$IFn$_invoke$arity$variadic = G__27203__delegate;
return G__27203;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__27209(s__27210){return (new cljs.core.LazySeq(null,(function (){var s__27210__$1 = s__27210;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27210__$1);if(temp__4092__auto__)
{var s__27210__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27210__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27210__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27212 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27211 = 0;while(true){
if((i__27211 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27211);cljs.core.chunk_append(b__27212,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__27213 = (i__27211 + 1);
i__27211 = G__27213;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27212),iter__27209(cljs.core.chunk_rest(s__27210__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27212),null);
}
} else
{var args = cljs.core.first(s__27210__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__27209(cljs.core.rest(s__27210__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__27214_SHARP_){return cljs.core.reset_BANG_(html,p1__27214_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__27219(s__27220){return (new cljs.core.LazySeq(null,(function (){var s__27220__$1 = s__27220;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27220__$1);if(temp__4092__auto__)
{var s__27220__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27220__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27220__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27222 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27221 = 0;while(true){
if((i__27221 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27221);cljs.core.chunk_append(b__27222,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$286,"text/css",cljs.core.constant$keyword$287,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$288,"stylesheet"], null)], null));
{
var G__27223 = (i__27221 + 1);
i__27221 = G__27223;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27222),iter__27219(cljs.core.chunk_rest(s__27220__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27222),null);
}
} else
{var style = cljs.core.first(s__27220__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$286,"text/css",cljs.core.constant$keyword$287,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$288,"stylesheet"], null)], null),iter__27219(cljs.core.rest(s__27220__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__27224){
var styles = cljs.core.seq(arglist__27224);
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
sablono.core.link_to27225 = (function() { 
var link_to27225__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$287,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to27225 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to27225__delegate.call(this,url,content);};
link_to27225.cljs$lang$maxFixedArity = 1;
link_to27225.cljs$lang$applyTo = (function (arglist__27226){
var url = cljs.core.first(arglist__27226);
var content = cljs.core.rest(arglist__27226);
return link_to27225__delegate(url,content);
});
link_to27225.cljs$core$IFn$_invoke$arity$variadic = link_to27225__delegate;
return link_to27225;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to27225);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27227 = (function() { 
var mail_to27227__delegate = function (e_mail,p__27228){var vec__27230 = p__27228;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27230,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$287,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to27227 = function (e_mail,var_args){
var p__27228 = null;if (arguments.length > 1) {
  p__27228 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to27227__delegate.call(this,e_mail,p__27228);};
mail_to27227.cljs$lang$maxFixedArity = 1;
mail_to27227.cljs$lang$applyTo = (function (arglist__27231){
var e_mail = cljs.core.first(arglist__27231);
var p__27228 = cljs.core.rest(arglist__27231);
return mail_to27227__delegate(e_mail,p__27228);
});
mail_to27227.cljs$core$IFn$_invoke$arity$variadic = mail_to27227__delegate;
return mail_to27227;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to27227);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27232 = (function unordered_list27232(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,(function (){var iter__4117__auto__ = (function iter__27237(s__27238){return (new cljs.core.LazySeq(null,(function (){var s__27238__$1 = s__27238;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27238__$1);if(temp__4092__auto__)
{var s__27238__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27238__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27238__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27240 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27239 = 0;while(true){
if((i__27239 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27239);cljs.core.chunk_append(b__27240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,x], null));
{
var G__27241 = (i__27239 + 1);
i__27239 = G__27241;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27240),iter__27237(cljs.core.chunk_rest(s__27238__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27240),null);
}
} else
{var x = cljs.core.first(s__27238__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,x], null),iter__27237(cljs.core.rest(s__27238__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list27232);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27242 = (function ordered_list27242(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$292,(function (){var iter__4117__auto__ = (function iter__27247(s__27248){return (new cljs.core.LazySeq(null,(function (){var s__27248__$1 = s__27248;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27248__$1);if(temp__4092__auto__)
{var s__27248__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27248__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27248__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27250 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27249 = 0;while(true){
if((i__27249 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27249);cljs.core.chunk_append(b__27250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,x], null));
{
var G__27251 = (i__27249 + 1);
i__27249 = G__27251;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27250),iter__27247(cljs.core.chunk_rest(s__27248__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27250),null);
}
} else
{var x = cljs.core.first(s__27248__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,x], null),iter__27247(cljs.core.rest(s__27248__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list27242);
/**
* Create an image element.
*/
sablono.core.image27252 = (function() {
var image27252 = null;
var image27252__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$294,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image27252__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$294,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$295,alt], null)], null);
});
image27252 = function(src,alt){
switch(arguments.length){
case 1:
return image27252__1.call(this,src);
case 2:
return image27252__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27252.cljs$core$IFn$_invoke$arity$1 = image27252__1;
image27252.cljs$core$IFn$_invoke$arity$2 = image27252__2;
return image27252;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image27252);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27253_SHARP_,p2__27254_SHARP_){return [cljs.core.str(p1__27253_SHARP_),cljs.core.str("["),cljs.core.str(p2__27254_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27255_SHARP_,p2__27256_SHARP_){return [cljs.core.str(p1__27255_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27256_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$286,type,cljs.core.constant$keyword$296,sablono.core.make_name(name),cljs.core.constant$keyword$282,sablono.core.make_id(name),cljs.core.constant$keyword$249,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field27257 = (function() {
var hidden_field27257 = null;
var hidden_field27257__1 = (function (name){return hidden_field27257.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field27257__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field27257 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field27257__1.call(this,name);
case 2:
return hidden_field27257__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field27257.cljs$core$IFn$_invoke$arity$1 = hidden_field27257__1;
hidden_field27257.cljs$core$IFn$_invoke$arity$2 = hidden_field27257__2;
return hidden_field27257;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field27257);
/**
* Creates a new text input field.
*/
sablono.core.text_field27258 = (function() {
var text_field27258 = null;
var text_field27258__1 = (function (name){return text_field27258.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field27258__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field27258 = function(name,value){
switch(arguments.length){
case 1:
return text_field27258__1.call(this,name);
case 2:
return text_field27258__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field27258.cljs$core$IFn$_invoke$arity$1 = text_field27258__1;
text_field27258.cljs$core$IFn$_invoke$arity$2 = text_field27258__2;
return text_field27258;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field27258);
/**
* Creates a new password field.
*/
sablono.core.password_field27259 = (function() {
var password_field27259 = null;
var password_field27259__1 = (function (name){return password_field27259.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field27259__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field27259 = function(name,value){
switch(arguments.length){
case 1:
return password_field27259__1.call(this,name);
case 2:
return password_field27259__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field27259.cljs$core$IFn$_invoke$arity$1 = password_field27259__1;
password_field27259.cljs$core$IFn$_invoke$arity$2 = password_field27259__2;
return password_field27259;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field27259);
/**
* Creates a new email input field.
*/
sablono.core.email_field27260 = (function() {
var email_field27260 = null;
var email_field27260__1 = (function (name){return email_field27260.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field27260__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field27260 = function(name,value){
switch(arguments.length){
case 1:
return email_field27260__1.call(this,name);
case 2:
return email_field27260__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field27260.cljs$core$IFn$_invoke$arity$1 = email_field27260__1;
email_field27260.cljs$core$IFn$_invoke$arity$2 = email_field27260__2;
return email_field27260;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field27260);
/**
* Creates a check box.
*/
sablono.core.check_box27261 = (function() {
var check_box27261 = null;
var check_box27261__1 = (function (name){return check_box27261.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box27261__2 = (function (name,checked_QMARK_){return check_box27261.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box27261__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$286,"checkbox",cljs.core.constant$keyword$296,sablono.core.make_name(name),cljs.core.constant$keyword$282,sablono.core.make_id(name),cljs.core.constant$keyword$249,value,cljs.core.constant$keyword$297,checked_QMARK_], null)], null);
});
check_box27261 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box27261__1.call(this,name);
case 2:
return check_box27261__2.call(this,name,checked_QMARK_);
case 3:
return check_box27261__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box27261.cljs$core$IFn$_invoke$arity$1 = check_box27261__1;
check_box27261.cljs$core$IFn$_invoke$arity$2 = check_box27261__2;
check_box27261.cljs$core$IFn$_invoke$arity$3 = check_box27261__3;
return check_box27261;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box27261);
/**
* Creates a radio button.
*/
sablono.core.radio_button27262 = (function() {
var radio_button27262 = null;
var radio_button27262__1 = (function (group){return radio_button27262.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button27262__2 = (function (group,checked_QMARK_){return radio_button27262.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button27262__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$286,"radio",cljs.core.constant$keyword$296,sablono.core.make_name(group),cljs.core.constant$keyword$282,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$249,value,cljs.core.constant$keyword$297,checked_QMARK_], null)], null);
});
radio_button27262 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button27262__1.call(this,group);
case 2:
return radio_button27262__2.call(this,group,checked_QMARK_);
case 3:
return radio_button27262__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button27262.cljs$core$IFn$_invoke$arity$1 = radio_button27262__1;
radio_button27262.cljs$core$IFn$_invoke$arity$2 = radio_button27262__2;
radio_button27262.cljs$core$IFn$_invoke$arity$3 = radio_button27262__3;
return radio_button27262;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button27262);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options27263 = (function() {
var select_options27263 = null;
var select_options27263__1 = (function (coll){return select_options27263.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options27263__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__27272(s__27273){return (new cljs.core.LazySeq(null,(function (){var s__27273__$1 = s__27273;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27273__$1);if(temp__4092__auto__)
{var s__27273__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27273__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27273__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27275 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27274 = 0;while(true){
if((i__27274 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27274);cljs.core.chunk_append(b__27275,((cljs.core.sequential_QMARK_(x))?(function (){var vec__27278 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27278,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27278,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$298,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$299,text], null),select_options27263.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$249,val,cljs.core.constant$keyword$301,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__27280 = (i__27274 + 1);
i__27274 = G__27280;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27275),iter__27272(cljs.core.chunk_rest(s__27273__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27275),null);
}
} else
{var x = cljs.core.first(s__27273__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__27279 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27279,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27279,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$298,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$299,text], null),select_options27263.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$249,val,cljs.core.constant$keyword$301,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__27272(cljs.core.rest(s__27273__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options27263 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options27263__1.call(this,coll);
case 2:
return select_options27263__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options27263.cljs$core$IFn$_invoke$arity$1 = select_options27263__1;
select_options27263.cljs$core$IFn$_invoke$arity$2 = select_options27263__2;
return select_options27263;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options27263);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27281 = (function() {
var drop_down27281 = null;
var drop_down27281__2 = (function (name,options){return drop_down27281.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down27281__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,sablono.core.make_name(name),cljs.core.constant$keyword$282,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down27281 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27281__2.call(this,name,options);
case 3:
return drop_down27281__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27281.cljs$core$IFn$_invoke$arity$2 = drop_down27281__2;
drop_down27281.cljs$core$IFn$_invoke$arity$3 = drop_down27281__3;
return drop_down27281;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down27281);
/**
* Creates a text area element.
*/
sablono.core.text_area27282 = (function() {
var text_area27282 = null;
var text_area27282__1 = (function (name){return text_area27282.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area27282__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$283,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$296,sablono.core.make_name(name),cljs.core.constant$keyword$282,sablono.core.make_id(name),cljs.core.constant$keyword$249,value], null)], null);
});
text_area27282 = function(name,value){
switch(arguments.length){
case 1:
return text_area27282__1.call(this,name);
case 2:
return text_area27282__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27282.cljs$core$IFn$_invoke$arity$1 = text_area27282__1;
text_area27282.cljs$core$IFn$_invoke$arity$2 = text_area27282__2;
return text_area27282;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area27282);
/**
* Creates a file upload input.
*/
sablono.core.file_upload27283 = (function file_upload27283(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload27283);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27284 = (function label27284(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label27284);
/**
* Creates a submit button.
*/
sablono.core.submit_button27285 = (function submit_button27285(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$286,"submit",cljs.core.constant$keyword$249,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button27285);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27286 = (function reset_button27286(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$286,"reset",cljs.core.constant$keyword$249,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button27286);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27287 = (function() { 
var form_to27287__delegate = function (p__27288,body){var vec__27290 = p__27288;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27290,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27290,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$303,null,cljs.core.constant$keyword$304,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,method_str,cljs.core.constant$keyword$307,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,"POST",cljs.core.constant$keyword$307,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to27287 = function (p__27288,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to27287__delegate.call(this,p__27288,body);};
form_to27287.cljs$lang$maxFixedArity = 1;
form_to27287.cljs$lang$applyTo = (function (arglist__27291){
var p__27288 = cljs.core.first(arglist__27291);
var body = cljs.core.rest(arglist__27291);
return form_to27287__delegate(p__27288,body);
});
form_to27287.cljs$core$IFn$_invoke$arity$variadic = form_to27287__delegate;
return form_to27287;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to27287);
