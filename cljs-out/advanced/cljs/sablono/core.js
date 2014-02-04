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
var G__26200__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__26199 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26199,0,null);var body = cljs.core.nthnext(vec__26199,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__26200 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26200__delegate.call(this,args);};
G__26200.cljs$lang$maxFixedArity = 0;
G__26200.cljs$lang$applyTo = (function (arglist__26201){
var args = cljs.core.seq(arglist__26201);
return G__26200__delegate(args);
});
G__26200.cljs$core$IFn$_invoke$arity$variadic = G__26200__delegate;
return G__26200;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26206(s__26207){return (new cljs.core.LazySeq(null,(function (){var s__26207__$1 = s__26207;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26207__$1);if(temp__4092__auto__)
{var s__26207__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26207__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26207__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26209 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26208 = 0;while(true){
if((i__26208 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26208);cljs.core.chunk_append(b__26209,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26210 = (i__26208 + 1);
i__26208 = G__26210;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26209),iter__26206(cljs.core.chunk_rest(s__26207__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26209),null);
}
} else
{var args = cljs.core.first(s__26207__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26206(cljs.core.rest(s__26207__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__26211_SHARP_){return cljs.core.reset_BANG_(html,p1__26211_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26216(s__26217){return (new cljs.core.LazySeq(null,(function (){var s__26217__$1 = s__26217;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26217__$1);if(temp__4092__auto__)
{var s__26217__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26217__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26217__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26219 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26218 = 0;while(true){
if((i__26218 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26218);cljs.core.chunk_append(b__26219,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$236,"text/css",cljs.core.constant$keyword$237,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$238,"stylesheet"], null)], null));
{
var G__26220 = (i__26218 + 1);
i__26218 = G__26220;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26219),iter__26216(cljs.core.chunk_rest(s__26217__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26219),null);
}
} else
{var style = cljs.core.first(s__26217__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$236,"text/css",cljs.core.constant$keyword$237,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$238,"stylesheet"], null)], null),iter__26216(cljs.core.rest(s__26217__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26221){
var styles = cljs.core.seq(arglist__26221);
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
sablono.core.link_to26222 = (function() { 
var link_to26222__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26222 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26222__delegate.call(this,url,content);};
link_to26222.cljs$lang$maxFixedArity = 1;
link_to26222.cljs$lang$applyTo = (function (arglist__26223){
var url = cljs.core.first(arglist__26223);
var content = cljs.core.rest(arglist__26223);
return link_to26222__delegate(url,content);
});
link_to26222.cljs$core$IFn$_invoke$arity$variadic = link_to26222__delegate;
return link_to26222;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26222);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26224 = (function() { 
var mail_to26224__delegate = function (e_mail,p__26225){var vec__26227 = p__26225;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26227,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26224 = function (e_mail,var_args){
var p__26225 = null;if (arguments.length > 1) {
  p__26225 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26224__delegate.call(this,e_mail,p__26225);};
mail_to26224.cljs$lang$maxFixedArity = 1;
mail_to26224.cljs$lang$applyTo = (function (arglist__26228){
var e_mail = cljs.core.first(arglist__26228);
var p__26225 = cljs.core.rest(arglist__26228);
return mail_to26224__delegate(e_mail,p__26225);
});
mail_to26224.cljs$core$IFn$_invoke$arity$variadic = mail_to26224__delegate;
return mail_to26224;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26224);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26229 = (function unordered_list26229(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$240,(function (){var iter__4117__auto__ = (function iter__26234(s__26235){return (new cljs.core.LazySeq(null,(function (){var s__26235__$1 = s__26235;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26235__$1);if(temp__4092__auto__)
{var s__26235__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26235__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26235__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26237 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26236 = 0;while(true){
if((i__26236 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26236);cljs.core.chunk_append(b__26237,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,x], null));
{
var G__26238 = (i__26236 + 1);
i__26236 = G__26238;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26237),iter__26234(cljs.core.chunk_rest(s__26235__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26237),null);
}
} else
{var x = cljs.core.first(s__26235__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,x], null),iter__26234(cljs.core.rest(s__26235__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26229);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26239 = (function ordered_list26239(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,(function (){var iter__4117__auto__ = (function iter__26244(s__26245){return (new cljs.core.LazySeq(null,(function (){var s__26245__$1 = s__26245;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26245__$1);if(temp__4092__auto__)
{var s__26245__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26245__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26245__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26247 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26246 = 0;while(true){
if((i__26246 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26246);cljs.core.chunk_append(b__26247,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,x], null));
{
var G__26248 = (i__26246 + 1);
i__26246 = G__26248;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26247),iter__26244(cljs.core.chunk_rest(s__26245__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26247),null);
}
} else
{var x = cljs.core.first(s__26245__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,x], null),iter__26244(cljs.core.rest(s__26245__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26239);
/**
* Create an image element.
*/
sablono.core.image26249 = (function() {
var image26249 = null;
var image26249__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26249__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$243,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$244,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$245,alt], null)], null);
});
image26249 = function(src,alt){
switch(arguments.length){
case 1:
return image26249__1.call(this,src);
case 2:
return image26249__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26249.cljs$core$IFn$_invoke$arity$1 = image26249__1;
image26249.cljs$core$IFn$_invoke$arity$2 = image26249__2;
return image26249;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26249);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26250_SHARP_,p2__26251_SHARP_){return [cljs.core.str(p1__26250_SHARP_),cljs.core.str("["),cljs.core.str(p2__26251_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26252_SHARP_,p2__26253_SHARP_){return [cljs.core.str(p1__26252_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26253_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$236,type,cljs.core.constant$keyword$246,sablono.core.make_name(name),cljs.core.constant$keyword$232,sablono.core.make_id(name),cljs.core.constant$keyword$204,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26254 = (function() {
var hidden_field26254 = null;
var hidden_field26254__1 = (function (name){return hidden_field26254.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26254__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26254 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26254__1.call(this,name);
case 2:
return hidden_field26254__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26254.cljs$core$IFn$_invoke$arity$1 = hidden_field26254__1;
hidden_field26254.cljs$core$IFn$_invoke$arity$2 = hidden_field26254__2;
return hidden_field26254;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26254);
/**
* Creates a new text input field.
*/
sablono.core.text_field26255 = (function() {
var text_field26255 = null;
var text_field26255__1 = (function (name){return text_field26255.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26255__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26255 = function(name,value){
switch(arguments.length){
case 1:
return text_field26255__1.call(this,name);
case 2:
return text_field26255__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26255.cljs$core$IFn$_invoke$arity$1 = text_field26255__1;
text_field26255.cljs$core$IFn$_invoke$arity$2 = text_field26255__2;
return text_field26255;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26255);
/**
* Creates a new password field.
*/
sablono.core.password_field26256 = (function() {
var password_field26256 = null;
var password_field26256__1 = (function (name){return password_field26256.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26256__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26256 = function(name,value){
switch(arguments.length){
case 1:
return password_field26256__1.call(this,name);
case 2:
return password_field26256__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26256.cljs$core$IFn$_invoke$arity$1 = password_field26256__1;
password_field26256.cljs$core$IFn$_invoke$arity$2 = password_field26256__2;
return password_field26256;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26256);
/**
* Creates a new email input field.
*/
sablono.core.email_field26257 = (function() {
var email_field26257 = null;
var email_field26257__1 = (function (name){return email_field26257.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26257__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26257 = function(name,value){
switch(arguments.length){
case 1:
return email_field26257__1.call(this,name);
case 2:
return email_field26257__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26257.cljs$core$IFn$_invoke$arity$1 = email_field26257__1;
email_field26257.cljs$core$IFn$_invoke$arity$2 = email_field26257__2;
return email_field26257;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26257);
/**
* Creates a check box.
*/
sablono.core.check_box26258 = (function() {
var check_box26258 = null;
var check_box26258__1 = (function (name){return check_box26258.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26258__2 = (function (name,checked_QMARK_){return check_box26258.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26258__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$236,"checkbox",cljs.core.constant$keyword$246,sablono.core.make_name(name),cljs.core.constant$keyword$232,sablono.core.make_id(name),cljs.core.constant$keyword$204,value,cljs.core.constant$keyword$247,checked_QMARK_], null)], null);
});
check_box26258 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26258__1.call(this,name);
case 2:
return check_box26258__2.call(this,name,checked_QMARK_);
case 3:
return check_box26258__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26258.cljs$core$IFn$_invoke$arity$1 = check_box26258__1;
check_box26258.cljs$core$IFn$_invoke$arity$2 = check_box26258__2;
check_box26258.cljs$core$IFn$_invoke$arity$3 = check_box26258__3;
return check_box26258;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26258);
/**
* Creates a radio button.
*/
sablono.core.radio_button26259 = (function() {
var radio_button26259 = null;
var radio_button26259__1 = (function (group){return radio_button26259.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26259__2 = (function (group,checked_QMARK_){return radio_button26259.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26259__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$236,"radio",cljs.core.constant$keyword$246,sablono.core.make_name(group),cljs.core.constant$keyword$232,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$204,value,cljs.core.constant$keyword$247,checked_QMARK_], null)], null);
});
radio_button26259 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26259__1.call(this,group);
case 2:
return radio_button26259__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26259__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26259.cljs$core$IFn$_invoke$arity$1 = radio_button26259__1;
radio_button26259.cljs$core$IFn$_invoke$arity$2 = radio_button26259__2;
radio_button26259.cljs$core$IFn$_invoke$arity$3 = radio_button26259__3;
return radio_button26259;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26259);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26260 = (function() {
var select_options26260 = null;
var select_options26260__1 = (function (coll){return select_options26260.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26260__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26269(s__26270){return (new cljs.core.LazySeq(null,(function (){var s__26270__$1 = s__26270;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26270__$1);if(temp__4092__auto__)
{var s__26270__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26270__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26270__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26272 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26271 = 0;while(true){
if((i__26271 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26271);cljs.core.chunk_append(b__26272,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26275 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26275,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26275,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,text], null),select_options26260.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$204,val,cljs.core.constant$keyword$251,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26277 = (i__26271 + 1);
i__26271 = G__26277;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26272),iter__26269(cljs.core.chunk_rest(s__26270__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26272),null);
}
} else
{var x = cljs.core.first(s__26270__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26276 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26276,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26276,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$249,text], null),select_options26260.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$204,val,cljs.core.constant$keyword$251,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26269(cljs.core.rest(s__26270__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26260 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26260__1.call(this,coll);
case 2:
return select_options26260__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26260.cljs$core$IFn$_invoke$arity$1 = select_options26260__1;
select_options26260.cljs$core$IFn$_invoke$arity$2 = select_options26260__2;
return select_options26260;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26260);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26278 = (function() {
var drop_down26278 = null;
var drop_down26278__2 = (function (name,options){return drop_down26278.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26278__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,sablono.core.make_name(name),cljs.core.constant$keyword$232,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26278 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26278__2.call(this,name,options);
case 3:
return drop_down26278__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26278.cljs$core$IFn$_invoke$arity$2 = drop_down26278__2;
drop_down26278.cljs$core$IFn$_invoke$arity$3 = drop_down26278__3;
return drop_down26278;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26278);
/**
* Creates a text area element.
*/
sablono.core.text_area26279 = (function() {
var text_area26279 = null;
var text_area26279__1 = (function (name){return text_area26279.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26279__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$246,sablono.core.make_name(name),cljs.core.constant$keyword$232,sablono.core.make_id(name),cljs.core.constant$keyword$204,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area26279 = function(name,value){
switch(arguments.length){
case 1:
return text_area26279__1.call(this,name);
case 2:
return text_area26279__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26279.cljs$core$IFn$_invoke$arity$1 = text_area26279__1;
text_area26279.cljs$core$IFn$_invoke$arity$2 = text_area26279__2;
return text_area26279;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26279);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26280 = (function file_upload26280(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26280);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26281 = (function label26281(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$229,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26281);
/**
* Creates a submit button.
*/
sablono.core.submit_button26282 = (function submit_button26282(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,"submit",cljs.core.constant$keyword$204,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26282);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26283 = (function reset_button26283(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$236,"reset",cljs.core.constant$keyword$204,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26283);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26284 = (function() { 
var form_to26284__delegate = function (p__26285,body){var vec__26287 = p__26285;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26287,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26287,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$253,null,cljs.core.constant$keyword$254,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,method_str,cljs.core.constant$keyword$257,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$256,"POST",cljs.core.constant$keyword$257,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26284 = function (p__26285,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26284__delegate.call(this,p__26285,body);};
form_to26284.cljs$lang$maxFixedArity = 1;
form_to26284.cljs$lang$applyTo = (function (arglist__26288){
var p__26285 = cljs.core.first(arglist__26288);
var body = cljs.core.rest(arglist__26288);
return form_to26284__delegate(p__26285,body);
});
form_to26284.cljs$core$IFn$_invoke$arity$variadic = form_to26284__delegate;
return form_to26284;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26284);
