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
var G__26847__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__26846 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26846,0,null);var body = cljs.core.nthnext(vec__26846,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__26847 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26847__delegate.call(this,args);};
G__26847.cljs$lang$maxFixedArity = 0;
G__26847.cljs$lang$applyTo = (function (arglist__26848){
var args = cljs.core.seq(arglist__26848);
return G__26847__delegate(args);
});
G__26847.cljs$core$IFn$_invoke$arity$variadic = G__26847__delegate;
return G__26847;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26853(s__26854){return (new cljs.core.LazySeq(null,(function (){var s__26854__$1 = s__26854;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26854__$1);if(temp__4092__auto__)
{var s__26854__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26854__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26854__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26856 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26855 = 0;while(true){
if((i__26855 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26855);cljs.core.chunk_append(b__26856,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26857 = (i__26855 + 1);
i__26855 = G__26857;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26856),iter__26853(cljs.core.chunk_rest(s__26854__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26856),null);
}
} else
{var args = cljs.core.first(s__26854__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26853(cljs.core.rest(s__26854__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__26858_SHARP_){return cljs.core.reset_BANG_(html,p1__26858_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26863(s__26864){return (new cljs.core.LazySeq(null,(function (){var s__26864__$1 = s__26864;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26864__$1);if(temp__4092__auto__)
{var s__26864__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26864__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26864__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26866 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26865 = 0;while(true){
if((i__26865 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26865);cljs.core.chunk_append(b__26866,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$262,"text/css",cljs.core.constant$keyword$263,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$264,"stylesheet"], null)], null));
{
var G__26867 = (i__26865 + 1);
i__26865 = G__26867;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26866),iter__26863(cljs.core.chunk_rest(s__26864__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26866),null);
}
} else
{var style = cljs.core.first(s__26864__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$262,"text/css",cljs.core.constant$keyword$263,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$264,"stylesheet"], null)], null),iter__26863(cljs.core.rest(s__26864__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26868){
var styles = cljs.core.seq(arglist__26868);
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
sablono.core.link_to26869 = (function() { 
var link_to26869__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26869 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26869__delegate.call(this,url,content);};
link_to26869.cljs$lang$maxFixedArity = 1;
link_to26869.cljs$lang$applyTo = (function (arglist__26870){
var url = cljs.core.first(arglist__26870);
var content = cljs.core.rest(arglist__26870);
return link_to26869__delegate(url,content);
});
link_to26869.cljs$core$IFn$_invoke$arity$variadic = link_to26869__delegate;
return link_to26869;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26869);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26871 = (function() { 
var mail_to26871__delegate = function (e_mail,p__26872){var vec__26874 = p__26872;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26874,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26871 = function (e_mail,var_args){
var p__26872 = null;if (arguments.length > 1) {
  p__26872 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26871__delegate.call(this,e_mail,p__26872);};
mail_to26871.cljs$lang$maxFixedArity = 1;
mail_to26871.cljs$lang$applyTo = (function (arglist__26875){
var e_mail = cljs.core.first(arglist__26875);
var p__26872 = cljs.core.rest(arglist__26875);
return mail_to26871__delegate(e_mail,p__26872);
});
mail_to26871.cljs$core$IFn$_invoke$arity$variadic = mail_to26871__delegate;
return mail_to26871;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26871);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26876 = (function unordered_list26876(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,(function (){var iter__4117__auto__ = (function iter__26881(s__26882){return (new cljs.core.LazySeq(null,(function (){var s__26882__$1 = s__26882;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26882__$1);if(temp__4092__auto__)
{var s__26882__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26882__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26882__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26884 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26883 = 0;while(true){
if((i__26883 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26883);cljs.core.chunk_append(b__26884,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,x], null));
{
var G__26885 = (i__26883 + 1);
i__26883 = G__26885;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26884),iter__26881(cljs.core.chunk_rest(s__26882__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26884),null);
}
} else
{var x = cljs.core.first(s__26882__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,x], null),iter__26881(cljs.core.rest(s__26882__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26876);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26886 = (function ordered_list26886(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,(function (){var iter__4117__auto__ = (function iter__26891(s__26892){return (new cljs.core.LazySeq(null,(function (){var s__26892__$1 = s__26892;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26892__$1);if(temp__4092__auto__)
{var s__26892__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26892__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26892__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26894 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26893 = 0;while(true){
if((i__26893 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26893);cljs.core.chunk_append(b__26894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,x], null));
{
var G__26895 = (i__26893 + 1);
i__26893 = G__26895;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26894),iter__26891(cljs.core.chunk_rest(s__26892__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26894),null);
}
} else
{var x = cljs.core.first(s__26892__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,x], null),iter__26891(cljs.core.rest(s__26892__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26886);
/**
* Create an image element.
*/
sablono.core.image26896 = (function() {
var image26896 = null;
var image26896__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$270,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26896__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$270,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$271,alt], null)], null);
});
image26896 = function(src,alt){
switch(arguments.length){
case 1:
return image26896__1.call(this,src);
case 2:
return image26896__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26896.cljs$core$IFn$_invoke$arity$1 = image26896__1;
image26896.cljs$core$IFn$_invoke$arity$2 = image26896__2;
return image26896;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26896);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26897_SHARP_,p2__26898_SHARP_){return [cljs.core.str(p1__26897_SHARP_),cljs.core.str("["),cljs.core.str(p2__26898_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26899_SHARP_,p2__26900_SHARP_){return [cljs.core.str(p1__26899_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26900_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$262,type,cljs.core.constant$keyword$272,sablono.core.make_name(name),cljs.core.constant$keyword$258,sablono.core.make_id(name),cljs.core.constant$keyword$227,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26901 = (function() {
var hidden_field26901 = null;
var hidden_field26901__1 = (function (name){return hidden_field26901.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26901__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26901 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26901__1.call(this,name);
case 2:
return hidden_field26901__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26901.cljs$core$IFn$_invoke$arity$1 = hidden_field26901__1;
hidden_field26901.cljs$core$IFn$_invoke$arity$2 = hidden_field26901__2;
return hidden_field26901;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26901);
/**
* Creates a new text input field.
*/
sablono.core.text_field26902 = (function() {
var text_field26902 = null;
var text_field26902__1 = (function (name){return text_field26902.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26902__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26902 = function(name,value){
switch(arguments.length){
case 1:
return text_field26902__1.call(this,name);
case 2:
return text_field26902__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26902.cljs$core$IFn$_invoke$arity$1 = text_field26902__1;
text_field26902.cljs$core$IFn$_invoke$arity$2 = text_field26902__2;
return text_field26902;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26902);
/**
* Creates a new password field.
*/
sablono.core.password_field26903 = (function() {
var password_field26903 = null;
var password_field26903__1 = (function (name){return password_field26903.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26903__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26903 = function(name,value){
switch(arguments.length){
case 1:
return password_field26903__1.call(this,name);
case 2:
return password_field26903__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26903.cljs$core$IFn$_invoke$arity$1 = password_field26903__1;
password_field26903.cljs$core$IFn$_invoke$arity$2 = password_field26903__2;
return password_field26903;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26903);
/**
* Creates a new email input field.
*/
sablono.core.email_field26904 = (function() {
var email_field26904 = null;
var email_field26904__1 = (function (name){return email_field26904.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26904__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26904 = function(name,value){
switch(arguments.length){
case 1:
return email_field26904__1.call(this,name);
case 2:
return email_field26904__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26904.cljs$core$IFn$_invoke$arity$1 = email_field26904__1;
email_field26904.cljs$core$IFn$_invoke$arity$2 = email_field26904__2;
return email_field26904;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26904);
/**
* Creates a check box.
*/
sablono.core.check_box26905 = (function() {
var check_box26905 = null;
var check_box26905__1 = (function (name){return check_box26905.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26905__2 = (function (name,checked_QMARK_){return check_box26905.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26905__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$262,"checkbox",cljs.core.constant$keyword$272,sablono.core.make_name(name),cljs.core.constant$keyword$258,sablono.core.make_id(name),cljs.core.constant$keyword$227,value,cljs.core.constant$keyword$273,checked_QMARK_], null)], null);
});
check_box26905 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26905__1.call(this,name);
case 2:
return check_box26905__2.call(this,name,checked_QMARK_);
case 3:
return check_box26905__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26905.cljs$core$IFn$_invoke$arity$1 = check_box26905__1;
check_box26905.cljs$core$IFn$_invoke$arity$2 = check_box26905__2;
check_box26905.cljs$core$IFn$_invoke$arity$3 = check_box26905__3;
return check_box26905;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26905);
/**
* Creates a radio button.
*/
sablono.core.radio_button26906 = (function() {
var radio_button26906 = null;
var radio_button26906__1 = (function (group){return radio_button26906.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26906__2 = (function (group,checked_QMARK_){return radio_button26906.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26906__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$262,"radio",cljs.core.constant$keyword$272,sablono.core.make_name(group),cljs.core.constant$keyword$258,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$227,value,cljs.core.constant$keyword$273,checked_QMARK_], null)], null);
});
radio_button26906 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26906__1.call(this,group);
case 2:
return radio_button26906__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26906__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26906.cljs$core$IFn$_invoke$arity$1 = radio_button26906__1;
radio_button26906.cljs$core$IFn$_invoke$arity$2 = radio_button26906__2;
radio_button26906.cljs$core$IFn$_invoke$arity$3 = radio_button26906__3;
return radio_button26906;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26906);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26907 = (function() {
var select_options26907 = null;
var select_options26907__1 = (function (coll){return select_options26907.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26907__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26916(s__26917){return (new cljs.core.LazySeq(null,(function (){var s__26917__$1 = s__26917;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26917__$1);if(temp__4092__auto__)
{var s__26917__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26917__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26917__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26919 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26918 = 0;while(true){
if((i__26918 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26918);cljs.core.chunk_append(b__26919,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26922 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26922,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26922,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$275,text], null),select_options26907.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$227,val,cljs.core.constant$keyword$277,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26924 = (i__26918 + 1);
i__26918 = G__26924;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26919),iter__26916(cljs.core.chunk_rest(s__26917__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26919),null);
}
} else
{var x = cljs.core.first(s__26917__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26923 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26923,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26923,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$275,text], null),select_options26907.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$227,val,cljs.core.constant$keyword$277,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26916(cljs.core.rest(s__26917__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26907 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26907__1.call(this,coll);
case 2:
return select_options26907__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26907.cljs$core$IFn$_invoke$arity$1 = select_options26907__1;
select_options26907.cljs$core$IFn$_invoke$arity$2 = select_options26907__2;
return select_options26907;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26907);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26925 = (function() {
var drop_down26925 = null;
var drop_down26925__2 = (function (name,options){return drop_down26925.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26925__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,sablono.core.make_name(name),cljs.core.constant$keyword$258,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26925 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26925__2.call(this,name,options);
case 3:
return drop_down26925__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26925.cljs$core$IFn$_invoke$arity$2 = drop_down26925__2;
drop_down26925.cljs$core$IFn$_invoke$arity$3 = drop_down26925__3;
return drop_down26925;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26925);
/**
* Creates a text area element.
*/
sablono.core.text_area26926 = (function() {
var text_area26926 = null;
var text_area26926__1 = (function (name){return text_area26926.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26926__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$272,sablono.core.make_name(name),cljs.core.constant$keyword$258,sablono.core.make_id(name),cljs.core.constant$keyword$227,value], null)], null);
});
text_area26926 = function(name,value){
switch(arguments.length){
case 1:
return text_area26926__1.call(this,name);
case 2:
return text_area26926__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26926.cljs$core$IFn$_invoke$arity$1 = text_area26926__1;
text_area26926.cljs$core$IFn$_invoke$arity$2 = text_area26926__2;
return text_area26926;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26926);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26927 = (function file_upload26927(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26927);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26928 = (function label26928(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$255,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26928);
/**
* Creates a submit button.
*/
sablono.core.submit_button26929 = (function submit_button26929(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,"submit",cljs.core.constant$keyword$227,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26929);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26930 = (function reset_button26930(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,"reset",cljs.core.constant$keyword$227,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26930);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26931 = (function() { 
var form_to26931__delegate = function (p__26932,body){var vec__26934 = p__26932;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26934,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26934,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,null,cljs.core.constant$keyword$280,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$282,method_str,cljs.core.constant$keyword$283,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$282,"POST",cljs.core.constant$keyword$283,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26931 = function (p__26932,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26931__delegate.call(this,p__26932,body);};
form_to26931.cljs$lang$maxFixedArity = 1;
form_to26931.cljs$lang$applyTo = (function (arglist__26935){
var p__26932 = cljs.core.first(arglist__26935);
var body = cljs.core.rest(arglist__26935);
return form_to26931__delegate(p__26932,body);
});
form_to26931.cljs$core$IFn$_invoke$arity$variadic = form_to26931__delegate;
return form_to26931;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26931);
