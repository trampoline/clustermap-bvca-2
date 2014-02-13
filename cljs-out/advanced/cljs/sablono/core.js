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
var G__26451__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__26450 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26450,0,null);var body = cljs.core.nthnext(vec__26450,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__26451 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26451__delegate.call(this,args);};
G__26451.cljs$lang$maxFixedArity = 0;
G__26451.cljs$lang$applyTo = (function (arglist__26452){
var args = cljs.core.seq(arglist__26452);
return G__26451__delegate(args);
});
G__26451.cljs$core$IFn$_invoke$arity$variadic = G__26451__delegate;
return G__26451;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26457(s__26458){return (new cljs.core.LazySeq(null,(function (){var s__26458__$1 = s__26458;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26458__$1);if(temp__4092__auto__)
{var s__26458__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26458__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26458__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26460 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26459 = 0;while(true){
if((i__26459 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26459);cljs.core.chunk_append(b__26460,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26461 = (i__26459 + 1);
i__26459 = G__26461;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26460),iter__26457(cljs.core.chunk_rest(s__26458__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26460),null);
}
} else
{var args = cljs.core.first(s__26458__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26457(cljs.core.rest(s__26458__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__26462_SHARP_){return cljs.core.reset_BANG_(html,p1__26462_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26467(s__26468){return (new cljs.core.LazySeq(null,(function (){var s__26468__$1 = s__26468;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26468__$1);if(temp__4092__auto__)
{var s__26468__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26468__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26468__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26470 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26469 = 0;while(true){
if((i__26469 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26469);cljs.core.chunk_append(b__26470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$251,"text/css",cljs.core.constant$keyword$252,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$253,"stylesheet"], null)], null));
{
var G__26471 = (i__26469 + 1);
i__26469 = G__26471;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26470),iter__26467(cljs.core.chunk_rest(s__26468__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26470),null);
}
} else
{var style = cljs.core.first(s__26468__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$251,"text/css",cljs.core.constant$keyword$252,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$253,"stylesheet"], null)], null),iter__26467(cljs.core.rest(s__26468__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26472){
var styles = cljs.core.seq(arglist__26472);
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
sablono.core.link_to26473 = (function() { 
var link_to26473__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26473 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26473__delegate.call(this,url,content);};
link_to26473.cljs$lang$maxFixedArity = 1;
link_to26473.cljs$lang$applyTo = (function (arglist__26474){
var url = cljs.core.first(arglist__26474);
var content = cljs.core.rest(arglist__26474);
return link_to26473__delegate(url,content);
});
link_to26473.cljs$core$IFn$_invoke$arity$variadic = link_to26473__delegate;
return link_to26473;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26473);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26475 = (function() { 
var mail_to26475__delegate = function (e_mail,p__26476){var vec__26478 = p__26476;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26478,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26475 = function (e_mail,var_args){
var p__26476 = null;if (arguments.length > 1) {
  p__26476 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26475__delegate.call(this,e_mail,p__26476);};
mail_to26475.cljs$lang$maxFixedArity = 1;
mail_to26475.cljs$lang$applyTo = (function (arglist__26479){
var e_mail = cljs.core.first(arglist__26479);
var p__26476 = cljs.core.rest(arglist__26479);
return mail_to26475__delegate(e_mail,p__26476);
});
mail_to26475.cljs$core$IFn$_invoke$arity$variadic = mail_to26475__delegate;
return mail_to26475;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26475);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26480 = (function unordered_list26480(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,(function (){var iter__4117__auto__ = (function iter__26485(s__26486){return (new cljs.core.LazySeq(null,(function (){var s__26486__$1 = s__26486;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26486__$1);if(temp__4092__auto__)
{var s__26486__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26486__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26486__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26488 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26487 = 0;while(true){
if((i__26487 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26487);cljs.core.chunk_append(b__26488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,x], null));
{
var G__26489 = (i__26487 + 1);
i__26487 = G__26489;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26488),iter__26485(cljs.core.chunk_rest(s__26486__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26488),null);
}
} else
{var x = cljs.core.first(s__26486__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,x], null),iter__26485(cljs.core.rest(s__26486__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26480);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26490 = (function ordered_list26490(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,(function (){var iter__4117__auto__ = (function iter__26495(s__26496){return (new cljs.core.LazySeq(null,(function (){var s__26496__$1 = s__26496;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26496__$1);if(temp__4092__auto__)
{var s__26496__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26496__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26496__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26498 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26497 = 0;while(true){
if((i__26497 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26497);cljs.core.chunk_append(b__26498,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,x], null));
{
var G__26499 = (i__26497 + 1);
i__26497 = G__26499;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26498),iter__26495(cljs.core.chunk_rest(s__26496__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26498),null);
}
} else
{var x = cljs.core.first(s__26496__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,x], null),iter__26495(cljs.core.rest(s__26496__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26490);
/**
* Create an image element.
*/
sablono.core.image26500 = (function() {
var image26500 = null;
var image26500__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26500__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$259,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$260,alt], null)], null);
});
image26500 = function(src,alt){
switch(arguments.length){
case 1:
return image26500__1.call(this,src);
case 2:
return image26500__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26500.cljs$core$IFn$_invoke$arity$1 = image26500__1;
image26500.cljs$core$IFn$_invoke$arity$2 = image26500__2;
return image26500;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26500);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26501_SHARP_,p2__26502_SHARP_){return [cljs.core.str(p1__26501_SHARP_),cljs.core.str("["),cljs.core.str(p2__26502_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26503_SHARP_,p2__26504_SHARP_){return [cljs.core.str(p1__26503_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26504_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$251,type,cljs.core.constant$keyword$261,sablono.core.make_name(name),cljs.core.constant$keyword$247,sablono.core.make_id(name),cljs.core.constant$keyword$218,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26505 = (function() {
var hidden_field26505 = null;
var hidden_field26505__1 = (function (name){return hidden_field26505.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26505__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26505 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26505__1.call(this,name);
case 2:
return hidden_field26505__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26505.cljs$core$IFn$_invoke$arity$1 = hidden_field26505__1;
hidden_field26505.cljs$core$IFn$_invoke$arity$2 = hidden_field26505__2;
return hidden_field26505;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26505);
/**
* Creates a new text input field.
*/
sablono.core.text_field26506 = (function() {
var text_field26506 = null;
var text_field26506__1 = (function (name){return text_field26506.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26506__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26506 = function(name,value){
switch(arguments.length){
case 1:
return text_field26506__1.call(this,name);
case 2:
return text_field26506__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26506.cljs$core$IFn$_invoke$arity$1 = text_field26506__1;
text_field26506.cljs$core$IFn$_invoke$arity$2 = text_field26506__2;
return text_field26506;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26506);
/**
* Creates a new password field.
*/
sablono.core.password_field26507 = (function() {
var password_field26507 = null;
var password_field26507__1 = (function (name){return password_field26507.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26507__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26507 = function(name,value){
switch(arguments.length){
case 1:
return password_field26507__1.call(this,name);
case 2:
return password_field26507__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26507.cljs$core$IFn$_invoke$arity$1 = password_field26507__1;
password_field26507.cljs$core$IFn$_invoke$arity$2 = password_field26507__2;
return password_field26507;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26507);
/**
* Creates a new email input field.
*/
sablono.core.email_field26508 = (function() {
var email_field26508 = null;
var email_field26508__1 = (function (name){return email_field26508.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26508__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26508 = function(name,value){
switch(arguments.length){
case 1:
return email_field26508__1.call(this,name);
case 2:
return email_field26508__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26508.cljs$core$IFn$_invoke$arity$1 = email_field26508__1;
email_field26508.cljs$core$IFn$_invoke$arity$2 = email_field26508__2;
return email_field26508;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26508);
/**
* Creates a check box.
*/
sablono.core.check_box26509 = (function() {
var check_box26509 = null;
var check_box26509__1 = (function (name){return check_box26509.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26509__2 = (function (name,checked_QMARK_){return check_box26509.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26509__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$251,"checkbox",cljs.core.constant$keyword$261,sablono.core.make_name(name),cljs.core.constant$keyword$247,sablono.core.make_id(name),cljs.core.constant$keyword$218,value,cljs.core.constant$keyword$262,checked_QMARK_], null)], null);
});
check_box26509 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26509__1.call(this,name);
case 2:
return check_box26509__2.call(this,name,checked_QMARK_);
case 3:
return check_box26509__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26509.cljs$core$IFn$_invoke$arity$1 = check_box26509__1;
check_box26509.cljs$core$IFn$_invoke$arity$2 = check_box26509__2;
check_box26509.cljs$core$IFn$_invoke$arity$3 = check_box26509__3;
return check_box26509;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26509);
/**
* Creates a radio button.
*/
sablono.core.radio_button26510 = (function() {
var radio_button26510 = null;
var radio_button26510__1 = (function (group){return radio_button26510.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26510__2 = (function (group,checked_QMARK_){return radio_button26510.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26510__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$251,"radio",cljs.core.constant$keyword$261,sablono.core.make_name(group),cljs.core.constant$keyword$247,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$218,value,cljs.core.constant$keyword$262,checked_QMARK_], null)], null);
});
radio_button26510 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26510__1.call(this,group);
case 2:
return radio_button26510__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26510__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26510.cljs$core$IFn$_invoke$arity$1 = radio_button26510__1;
radio_button26510.cljs$core$IFn$_invoke$arity$2 = radio_button26510__2;
radio_button26510.cljs$core$IFn$_invoke$arity$3 = radio_button26510__3;
return radio_button26510;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26510);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26511 = (function() {
var select_options26511 = null;
var select_options26511__1 = (function (coll){return select_options26511.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26511__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26520(s__26521){return (new cljs.core.LazySeq(null,(function (){var s__26521__$1 = s__26521;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26521__$1);if(temp__4092__auto__)
{var s__26521__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26521__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26521__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26523 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26522 = 0;while(true){
if((i__26522 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26522);cljs.core.chunk_append(b__26523,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26526 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26526,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26526,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$264,text], null),select_options26511.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,val,cljs.core.constant$keyword$266,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26528 = (i__26522 + 1);
i__26522 = G__26528;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26523),iter__26520(cljs.core.chunk_rest(s__26521__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26523),null);
}
} else
{var x = cljs.core.first(s__26521__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26527 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26527,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26527,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$264,text], null),select_options26511.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,val,cljs.core.constant$keyword$266,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26520(cljs.core.rest(s__26521__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26511 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26511__1.call(this,coll);
case 2:
return select_options26511__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26511.cljs$core$IFn$_invoke$arity$1 = select_options26511__1;
select_options26511.cljs$core$IFn$_invoke$arity$2 = select_options26511__2;
return select_options26511;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26511);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26529 = (function() {
var drop_down26529 = null;
var drop_down26529__2 = (function (name,options){return drop_down26529.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26529__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$261,sablono.core.make_name(name),cljs.core.constant$keyword$247,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26529 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26529__2.call(this,name,options);
case 3:
return drop_down26529__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26529.cljs$core$IFn$_invoke$arity$2 = drop_down26529__2;
drop_down26529.cljs$core$IFn$_invoke$arity$3 = drop_down26529__3;
return drop_down26529;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26529);
/**
* Creates a text area element.
*/
sablono.core.text_area26530 = (function() {
var text_area26530 = null;
var text_area26530__1 = (function (name){return text_area26530.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26530__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$261,sablono.core.make_name(name),cljs.core.constant$keyword$247,sablono.core.make_id(name),cljs.core.constant$keyword$218,value], null)], null);
});
text_area26530 = function(name,value){
switch(arguments.length){
case 1:
return text_area26530__1.call(this,name);
case 2:
return text_area26530__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26530.cljs$core$IFn$_invoke$arity$1 = text_area26530__1;
text_area26530.cljs$core$IFn$_invoke$arity$2 = text_area26530__2;
return text_area26530;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26530);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26531 = (function file_upload26531(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26531);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26532 = (function label26532(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26532);
/**
* Creates a submit button.
*/
sablono.core.submit_button26533 = (function submit_button26533(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$251,"submit",cljs.core.constant$keyword$218,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26533);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26534 = (function reset_button26534(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$249,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$251,"reset",cljs.core.constant$keyword$218,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26534);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26535 = (function() { 
var form_to26535__delegate = function (p__26536,body){var vec__26538 = p__26536;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$268,null,cljs.core.constant$keyword$269,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$271,method_str,cljs.core.constant$keyword$272,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$271,"POST",cljs.core.constant$keyword$272,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26535 = function (p__26536,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26535__delegate.call(this,p__26536,body);};
form_to26535.cljs$lang$maxFixedArity = 1;
form_to26535.cljs$lang$applyTo = (function (arglist__26539){
var p__26536 = cljs.core.first(arglist__26539);
var body = cljs.core.rest(arglist__26539);
return form_to26535__delegate(p__26536,body);
});
form_to26535.cljs$core$IFn$_invoke$arity$variadic = form_to26535__delegate;
return form_to26535;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26535);
