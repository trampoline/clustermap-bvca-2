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
var G__25969__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__25968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25968,0,null);var body = cljs.core.nthnext(vec__25968,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__25969 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25969__delegate.call(this,args);};
G__25969.cljs$lang$maxFixedArity = 0;
G__25969.cljs$lang$applyTo = (function (arglist__25970){
var args = cljs.core.seq(arglist__25970);
return G__25969__delegate(args);
});
G__25969.cljs$core$IFn$_invoke$arity$variadic = G__25969__delegate;
return G__25969;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__25975(s__25976){return (new cljs.core.LazySeq(null,(function (){var s__25976__$1 = s__25976;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25976__$1);if(temp__4092__auto__)
{var s__25976__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25976__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25976__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25978 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25977 = 0;while(true){
if((i__25977 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25977);cljs.core.chunk_append(b__25978,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__25979 = (i__25977 + 1);
i__25977 = G__25979;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25978),iter__25975(cljs.core.chunk_rest(s__25976__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25978),null);
}
} else
{var args = cljs.core.first(s__25976__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__25975(cljs.core.rest(s__25976__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__25980_SHARP_){return cljs.core.reset_BANG_(html,p1__25980_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__25985(s__25986){return (new cljs.core.LazySeq(null,(function (){var s__25986__$1 = s__25986;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25986__$1);if(temp__4092__auto__)
{var s__25986__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25986__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25986__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25988 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25987 = 0;while(true){
if((i__25987 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25987);cljs.core.chunk_append(b__25988,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$221,"text/css",cljs.core.constant$keyword$222,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$223,"stylesheet"], null)], null));
{
var G__25989 = (i__25987 + 1);
i__25987 = G__25989;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25988),iter__25985(cljs.core.chunk_rest(s__25986__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25988),null);
}
} else
{var style = cljs.core.first(s__25986__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$221,"text/css",cljs.core.constant$keyword$222,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$223,"stylesheet"], null)], null),iter__25985(cljs.core.rest(s__25986__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__25990){
var styles = cljs.core.seq(arglist__25990);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to25991 = (function() { 
var link_to25991__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$224,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$222,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to25991 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to25991__delegate.call(this,url,content);};
link_to25991.cljs$lang$maxFixedArity = 1;
link_to25991.cljs$lang$applyTo = (function (arglist__25992){
var url = cljs.core.first(arglist__25992);
var content = cljs.core.rest(arglist__25992);
return link_to25991__delegate(url,content);
});
link_to25991.cljs$core$IFn$_invoke$arity$variadic = link_to25991__delegate;
return link_to25991;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to25991);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to25993 = (function() { 
var mail_to25993__delegate = function (e_mail,p__25994){var vec__25996 = p__25994;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25996,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$224,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$222,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to25993 = function (e_mail,var_args){
var p__25994 = null;if (arguments.length > 1) {
  p__25994 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to25993__delegate.call(this,e_mail,p__25994);};
mail_to25993.cljs$lang$maxFixedArity = 1;
mail_to25993.cljs$lang$applyTo = (function (arglist__25997){
var e_mail = cljs.core.first(arglist__25997);
var p__25994 = cljs.core.rest(arglist__25997);
return mail_to25993__delegate(e_mail,p__25994);
});
mail_to25993.cljs$core$IFn$_invoke$arity$variadic = mail_to25993__delegate;
return mail_to25993;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to25993);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list25998 = (function unordered_list25998(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225,(function (){var iter__4117__auto__ = (function iter__26003(s__26004){return (new cljs.core.LazySeq(null,(function (){var s__26004__$1 = s__26004;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26004__$1);if(temp__4092__auto__)
{var s__26004__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26004__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26004__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26006 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26005 = 0;while(true){
if((i__26005 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26005);cljs.core.chunk_append(b__26006,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226,x], null));
{
var G__26007 = (i__26005 + 1);
i__26005 = G__26007;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26006),iter__26003(cljs.core.chunk_rest(s__26004__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26006),null);
}
} else
{var x = cljs.core.first(s__26004__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226,x], null),iter__26003(cljs.core.rest(s__26004__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list25998);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26008 = (function ordered_list26008(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,(function (){var iter__4117__auto__ = (function iter__26013(s__26014){return (new cljs.core.LazySeq(null,(function (){var s__26014__$1 = s__26014;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26014__$1);if(temp__4092__auto__)
{var s__26014__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26014__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26014__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26016 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26015 = 0;while(true){
if((i__26015 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26015);cljs.core.chunk_append(b__26016,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226,x], null));
{
var G__26017 = (i__26015 + 1);
i__26015 = G__26017;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26016),iter__26013(cljs.core.chunk_rest(s__26014__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26016),null);
}
} else
{var x = cljs.core.first(s__26014__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226,x], null),iter__26013(cljs.core.rest(s__26014__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26008);
/**
* Create an image element.
*/
sablono.core.image26018 = (function() {
var image26018 = null;
var image26018__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$229,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26018__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$230,alt], null)], null);
});
image26018 = function(src,alt){
switch(arguments.length){
case 1:
return image26018__1.call(this,src);
case 2:
return image26018__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26018.cljs$core$IFn$_invoke$arity$1 = image26018__1;
image26018.cljs$core$IFn$_invoke$arity$2 = image26018__2;
return image26018;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26018);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26019_SHARP_,p2__26020_SHARP_){return [cljs.core.str(p1__26019_SHARP_),cljs.core.str("["),cljs.core.str(p2__26020_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26021_SHARP_,p2__26022_SHARP_){return [cljs.core.str(p1__26021_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26022_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$221,type,cljs.core.constant$keyword$232,sablono.core.make_name(name),cljs.core.constant$keyword$218,sablono.core.make_id(name),cljs.core.constant$keyword$191,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26023 = (function() {
var hidden_field26023 = null;
var hidden_field26023__1 = (function (name){return hidden_field26023.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26023__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26023 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26023__1.call(this,name);
case 2:
return hidden_field26023__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26023.cljs$core$IFn$_invoke$arity$1 = hidden_field26023__1;
hidden_field26023.cljs$core$IFn$_invoke$arity$2 = hidden_field26023__2;
return hidden_field26023;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26023);
/**
* Creates a new text input field.
*/
sablono.core.text_field26024 = (function() {
var text_field26024 = null;
var text_field26024__1 = (function (name){return text_field26024.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26024__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26024 = function(name,value){
switch(arguments.length){
case 1:
return text_field26024__1.call(this,name);
case 2:
return text_field26024__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26024.cljs$core$IFn$_invoke$arity$1 = text_field26024__1;
text_field26024.cljs$core$IFn$_invoke$arity$2 = text_field26024__2;
return text_field26024;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26024);
/**
* Creates a new password field.
*/
sablono.core.password_field26025 = (function() {
var password_field26025 = null;
var password_field26025__1 = (function (name){return password_field26025.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26025__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26025 = function(name,value){
switch(arguments.length){
case 1:
return password_field26025__1.call(this,name);
case 2:
return password_field26025__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26025.cljs$core$IFn$_invoke$arity$1 = password_field26025__1;
password_field26025.cljs$core$IFn$_invoke$arity$2 = password_field26025__2;
return password_field26025;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26025);
/**
* Creates a new email input field.
*/
sablono.core.email_field26026 = (function() {
var email_field26026 = null;
var email_field26026__1 = (function (name){return email_field26026.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26026__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26026 = function(name,value){
switch(arguments.length){
case 1:
return email_field26026__1.call(this,name);
case 2:
return email_field26026__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26026.cljs$core$IFn$_invoke$arity$1 = email_field26026__1;
email_field26026.cljs$core$IFn$_invoke$arity$2 = email_field26026__2;
return email_field26026;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26026);
/**
* Creates a check box.
*/
sablono.core.check_box26027 = (function() {
var check_box26027 = null;
var check_box26027__1 = (function (name){return check_box26027.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26027__2 = (function (name,checked_QMARK_){return check_box26027.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26027__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$221,"checkbox",cljs.core.constant$keyword$232,sablono.core.make_name(name),cljs.core.constant$keyword$218,sablono.core.make_id(name),cljs.core.constant$keyword$191,value,cljs.core.constant$keyword$233,checked_QMARK_], null)], null);
});
check_box26027 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26027__1.call(this,name);
case 2:
return check_box26027__2.call(this,name,checked_QMARK_);
case 3:
return check_box26027__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26027.cljs$core$IFn$_invoke$arity$1 = check_box26027__1;
check_box26027.cljs$core$IFn$_invoke$arity$2 = check_box26027__2;
check_box26027.cljs$core$IFn$_invoke$arity$3 = check_box26027__3;
return check_box26027;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26027);
/**
* Creates a radio button.
*/
sablono.core.radio_button26028 = (function() {
var radio_button26028 = null;
var radio_button26028__1 = (function (group){return radio_button26028.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26028__2 = (function (group,checked_QMARK_){return radio_button26028.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26028__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$221,"radio",cljs.core.constant$keyword$232,sablono.core.make_name(group),cljs.core.constant$keyword$218,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$191,value,cljs.core.constant$keyword$233,checked_QMARK_], null)], null);
});
radio_button26028 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26028__1.call(this,group);
case 2:
return radio_button26028__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26028__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26028.cljs$core$IFn$_invoke$arity$1 = radio_button26028__1;
radio_button26028.cljs$core$IFn$_invoke$arity$2 = radio_button26028__2;
radio_button26028.cljs$core$IFn$_invoke$arity$3 = radio_button26028__3;
return radio_button26028;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26028);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26029 = (function() {
var select_options26029 = null;
var select_options26029__1 = (function (coll){return select_options26029.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26029__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26038(s__26039){return (new cljs.core.LazySeq(null,(function (){var s__26039__$1 = s__26039;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26039__$1);if(temp__4092__auto__)
{var s__26039__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26039__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26039__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26041 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26040 = 0;while(true){
if((i__26040 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26040);cljs.core.chunk_append(b__26041,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26044 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26044,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26044,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$235,text], null),select_options26029.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$236,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,val,cljs.core.constant$keyword$237,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$236,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26046 = (i__26040 + 1);
i__26040 = G__26046;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26041),iter__26038(cljs.core.chunk_rest(s__26039__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26041),null);
}
} else
{var x = cljs.core.first(s__26039__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26045 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$235,text], null),select_options26029.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$236,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,val,cljs.core.constant$keyword$237,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$236,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26038(cljs.core.rest(s__26039__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26029 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26029__1.call(this,coll);
case 2:
return select_options26029__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26029.cljs$core$IFn$_invoke$arity$1 = select_options26029__1;
select_options26029.cljs$core$IFn$_invoke$arity$2 = select_options26029__2;
return select_options26029;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26029);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26047 = (function() {
var drop_down26047 = null;
var drop_down26047__2 = (function (name,options){return drop_down26047.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26047__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,sablono.core.make_name(name),cljs.core.constant$keyword$218,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26047 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26047__2.call(this,name,options);
case 3:
return drop_down26047__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26047.cljs$core$IFn$_invoke$arity$2 = drop_down26047__2;
drop_down26047.cljs$core$IFn$_invoke$arity$3 = drop_down26047__3;
return drop_down26047;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26047);
/**
* Creates a text area element.
*/
sablono.core.text_area26048 = (function() {
var text_area26048 = null;
var text_area26048__1 = (function (name){return text_area26048.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26048__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,sablono.core.make_name(name),cljs.core.constant$keyword$218,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area26048 = function(name,value){
switch(arguments.length){
case 1:
return text_area26048__1.call(this,name);
case 2:
return text_area26048__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26048.cljs$core$IFn$_invoke$arity$1 = text_area26048__1;
text_area26048.cljs$core$IFn$_invoke$arity$2 = text_area26048__2;
return text_area26048;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26048);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26049 = (function file_upload26049(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26049);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26050 = (function label26050(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26050);
/**
* Creates a submit button.
*/
sablono.core.submit_button26051 = (function submit_button26051(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,"submit",cljs.core.constant$keyword$191,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26051);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26052 = (function reset_button26052(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$221,"reset",cljs.core.constant$keyword$191,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26052);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26053 = (function() { 
var form_to26053__delegate = function (p__26054,body){var vec__26056 = p__26054;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26056,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26056,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$240,null,cljs.core.constant$keyword$241,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$243,method_str,cljs.core.constant$keyword$244,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$243,"POST",cljs.core.constant$keyword$244,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26053 = function (p__26054,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26053__delegate.call(this,p__26054,body);};
form_to26053.cljs$lang$maxFixedArity = 1;
form_to26053.cljs$lang$applyTo = (function (arglist__26057){
var p__26054 = cljs.core.first(arglist__26057);
var body = cljs.core.rest(arglist__26057);
return form_to26053__delegate(p__26054,body);
});
form_to26053.cljs$core$IFn$_invoke$arity$variadic = form_to26053__delegate;
return form_to26053;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26053);
