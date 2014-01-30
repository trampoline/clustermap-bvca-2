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
var G__26003__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__26002 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26002,0,null);var body = cljs.core.nthnext(vec__26002,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__26003 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26003__delegate.call(this,args);};
G__26003.cljs$lang$maxFixedArity = 0;
G__26003.cljs$lang$applyTo = (function (arglist__26004){
var args = cljs.core.seq(arglist__26004);
return G__26003__delegate(args);
});
G__26003.cljs$core$IFn$_invoke$arity$variadic = G__26003__delegate;
return G__26003;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26009(s__26010){return (new cljs.core.LazySeq(null,(function (){var s__26010__$1 = s__26010;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26010__$1);if(temp__4092__auto__)
{var s__26010__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26010__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26010__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26012 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26011 = 0;while(true){
if((i__26011 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26011);cljs.core.chunk_append(b__26012,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26013 = (i__26011 + 1);
i__26011 = G__26013;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26012),iter__26009(cljs.core.chunk_rest(s__26010__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26012),null);
}
} else
{var args = cljs.core.first(s__26010__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26009(cljs.core.rest(s__26010__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__26014_SHARP_){return cljs.core.reset_BANG_(html,p1__26014_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26019(s__26020){return (new cljs.core.LazySeq(null,(function (){var s__26020__$1 = s__26020;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26020__$1);if(temp__4092__auto__)
{var s__26020__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26020__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26020__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26022 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26021 = 0;while(true){
if((i__26021 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26021);cljs.core.chunk_append(b__26022,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$224,"text/css",cljs.core.constant$keyword$225,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$226,"stylesheet"], null)], null));
{
var G__26023 = (i__26021 + 1);
i__26021 = G__26023;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26022),iter__26019(cljs.core.chunk_rest(s__26020__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26022),null);
}
} else
{var style = cljs.core.first(s__26020__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$224,"text/css",cljs.core.constant$keyword$225,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$226,"stylesheet"], null)], null),iter__26019(cljs.core.rest(s__26020__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26024){
var styles = cljs.core.seq(arglist__26024);
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
sablono.core.link_to26025 = (function() { 
var link_to26025__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26025 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26025__delegate.call(this,url,content);};
link_to26025.cljs$lang$maxFixedArity = 1;
link_to26025.cljs$lang$applyTo = (function (arglist__26026){
var url = cljs.core.first(arglist__26026);
var content = cljs.core.rest(arglist__26026);
return link_to26025__delegate(url,content);
});
link_to26025.cljs$core$IFn$_invoke$arity$variadic = link_to26025__delegate;
return link_to26025;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26025);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26027 = (function() { 
var mail_to26027__delegate = function (e_mail,p__26028){var vec__26030 = p__26028;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26030,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$225,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26027 = function (e_mail,var_args){
var p__26028 = null;if (arguments.length > 1) {
  p__26028 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26027__delegate.call(this,e_mail,p__26028);};
mail_to26027.cljs$lang$maxFixedArity = 1;
mail_to26027.cljs$lang$applyTo = (function (arglist__26031){
var e_mail = cljs.core.first(arglist__26031);
var p__26028 = cljs.core.rest(arglist__26031);
return mail_to26027__delegate(e_mail,p__26028);
});
mail_to26027.cljs$core$IFn$_invoke$arity$variadic = mail_to26027__delegate;
return mail_to26027;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26027);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26032 = (function unordered_list26032(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$228,(function (){var iter__4117__auto__ = (function iter__26037(s__26038){return (new cljs.core.LazySeq(null,(function (){var s__26038__$1 = s__26038;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26038__$1);if(temp__4092__auto__)
{var s__26038__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26038__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26038__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26040 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26039 = 0;while(true){
if((i__26039 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26039);cljs.core.chunk_append(b__26040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,x], null));
{
var G__26041 = (i__26039 + 1);
i__26039 = G__26041;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26040),iter__26037(cljs.core.chunk_rest(s__26038__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26040),null);
}
} else
{var x = cljs.core.first(s__26038__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,x], null),iter__26037(cljs.core.rest(s__26038__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26032);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26042 = (function ordered_list26042(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,(function (){var iter__4117__auto__ = (function iter__26047(s__26048){return (new cljs.core.LazySeq(null,(function (){var s__26048__$1 = s__26048;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26048__$1);if(temp__4092__auto__)
{var s__26048__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26048__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26048__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26050 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26049 = 0;while(true){
if((i__26049 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26049);cljs.core.chunk_append(b__26050,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,x], null));
{
var G__26051 = (i__26049 + 1);
i__26049 = G__26051;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26050),iter__26047(cljs.core.chunk_rest(s__26048__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26050),null);
}
} else
{var x = cljs.core.first(s__26048__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,x], null),iter__26047(cljs.core.rest(s__26048__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26042);
/**
* Create an image element.
*/
sablono.core.image26052 = (function() {
var image26052 = null;
var image26052__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26052__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$233,alt], null)], null);
});
image26052 = function(src,alt){
switch(arguments.length){
case 1:
return image26052__1.call(this,src);
case 2:
return image26052__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26052.cljs$core$IFn$_invoke$arity$1 = image26052__1;
image26052.cljs$core$IFn$_invoke$arity$2 = image26052__2;
return image26052;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26052);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26053_SHARP_,p2__26054_SHARP_){return [cljs.core.str(p1__26053_SHARP_),cljs.core.str("["),cljs.core.str(p2__26054_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26055_SHARP_,p2__26056_SHARP_){return [cljs.core.str(p1__26055_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26056_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$224,type,cljs.core.constant$keyword$235,sablono.core.make_name(name),cljs.core.constant$keyword$221,sablono.core.make_id(name),cljs.core.constant$keyword$194,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26057 = (function() {
var hidden_field26057 = null;
var hidden_field26057__1 = (function (name){return hidden_field26057.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26057__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26057 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26057__1.call(this,name);
case 2:
return hidden_field26057__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26057.cljs$core$IFn$_invoke$arity$1 = hidden_field26057__1;
hidden_field26057.cljs$core$IFn$_invoke$arity$2 = hidden_field26057__2;
return hidden_field26057;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26057);
/**
* Creates a new text input field.
*/
sablono.core.text_field26058 = (function() {
var text_field26058 = null;
var text_field26058__1 = (function (name){return text_field26058.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26058__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26058 = function(name,value){
switch(arguments.length){
case 1:
return text_field26058__1.call(this,name);
case 2:
return text_field26058__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26058.cljs$core$IFn$_invoke$arity$1 = text_field26058__1;
text_field26058.cljs$core$IFn$_invoke$arity$2 = text_field26058__2;
return text_field26058;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26058);
/**
* Creates a new password field.
*/
sablono.core.password_field26059 = (function() {
var password_field26059 = null;
var password_field26059__1 = (function (name){return password_field26059.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26059__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26059 = function(name,value){
switch(arguments.length){
case 1:
return password_field26059__1.call(this,name);
case 2:
return password_field26059__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26059.cljs$core$IFn$_invoke$arity$1 = password_field26059__1;
password_field26059.cljs$core$IFn$_invoke$arity$2 = password_field26059__2;
return password_field26059;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26059);
/**
* Creates a new email input field.
*/
sablono.core.email_field26060 = (function() {
var email_field26060 = null;
var email_field26060__1 = (function (name){return email_field26060.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26060__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26060 = function(name,value){
switch(arguments.length){
case 1:
return email_field26060__1.call(this,name);
case 2:
return email_field26060__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26060.cljs$core$IFn$_invoke$arity$1 = email_field26060__1;
email_field26060.cljs$core$IFn$_invoke$arity$2 = email_field26060__2;
return email_field26060;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26060);
/**
* Creates a check box.
*/
sablono.core.check_box26061 = (function() {
var check_box26061 = null;
var check_box26061__1 = (function (name){return check_box26061.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26061__2 = (function (name,checked_QMARK_){return check_box26061.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26061__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$224,"checkbox",cljs.core.constant$keyword$235,sablono.core.make_name(name),cljs.core.constant$keyword$221,sablono.core.make_id(name),cljs.core.constant$keyword$194,value,cljs.core.constant$keyword$236,checked_QMARK_], null)], null);
});
check_box26061 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26061__1.call(this,name);
case 2:
return check_box26061__2.call(this,name,checked_QMARK_);
case 3:
return check_box26061__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26061.cljs$core$IFn$_invoke$arity$1 = check_box26061__1;
check_box26061.cljs$core$IFn$_invoke$arity$2 = check_box26061__2;
check_box26061.cljs$core$IFn$_invoke$arity$3 = check_box26061__3;
return check_box26061;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26061);
/**
* Creates a radio button.
*/
sablono.core.radio_button26062 = (function() {
var radio_button26062 = null;
var radio_button26062__1 = (function (group){return radio_button26062.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26062__2 = (function (group,checked_QMARK_){return radio_button26062.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26062__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$224,"radio",cljs.core.constant$keyword$235,sablono.core.make_name(group),cljs.core.constant$keyword$221,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$194,value,cljs.core.constant$keyword$236,checked_QMARK_], null)], null);
});
radio_button26062 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26062__1.call(this,group);
case 2:
return radio_button26062__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26062__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26062.cljs$core$IFn$_invoke$arity$1 = radio_button26062__1;
radio_button26062.cljs$core$IFn$_invoke$arity$2 = radio_button26062__2;
radio_button26062.cljs$core$IFn$_invoke$arity$3 = radio_button26062__3;
return radio_button26062;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26062);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26063 = (function() {
var select_options26063 = null;
var select_options26063__1 = (function (coll){return select_options26063.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26063__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26072(s__26073){return (new cljs.core.LazySeq(null,(function (){var s__26073__$1 = s__26073;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26073__$1);if(temp__4092__auto__)
{var s__26073__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26073__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26073__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26075 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26074 = 0;while(true){
if((i__26074 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26074);cljs.core.chunk_append(b__26075,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26078 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26078,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26078,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,text], null),select_options26063.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,val,cljs.core.constant$keyword$240,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$240,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26080 = (i__26074 + 1);
i__26074 = G__26080;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26075),iter__26072(cljs.core.chunk_rest(s__26073__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26075),null);
}
} else
{var x = cljs.core.first(s__26073__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26079 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26079,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26079,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,text], null),select_options26063.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,val,cljs.core.constant$keyword$240,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$240,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26072(cljs.core.rest(s__26073__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26063 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26063__1.call(this,coll);
case 2:
return select_options26063__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26063.cljs$core$IFn$_invoke$arity$1 = select_options26063__1;
select_options26063.cljs$core$IFn$_invoke$arity$2 = select_options26063__2;
return select_options26063;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26063);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26081 = (function() {
var drop_down26081 = null;
var drop_down26081__2 = (function (name,options){return drop_down26081.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26081__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,sablono.core.make_name(name),cljs.core.constant$keyword$221,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26081 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26081__2.call(this,name,options);
case 3:
return drop_down26081__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26081.cljs$core$IFn$_invoke$arity$2 = drop_down26081__2;
drop_down26081.cljs$core$IFn$_invoke$arity$3 = drop_down26081__3;
return drop_down26081;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26081);
/**
* Creates a text area element.
*/
sablono.core.text_area26082 = (function() {
var text_area26082 = null;
var text_area26082__1 = (function (name){return text_area26082.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26082__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$235,sablono.core.make_name(name),cljs.core.constant$keyword$221,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area26082 = function(name,value){
switch(arguments.length){
case 1:
return text_area26082__1.call(this,name);
case 2:
return text_area26082__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26082.cljs$core$IFn$_invoke$arity$1 = text_area26082__1;
text_area26082.cljs$core$IFn$_invoke$arity$2 = text_area26082__2;
return text_area26082;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26082);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26083 = (function file_upload26083(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26083);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26084 = (function label26084(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$218,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26084);
/**
* Creates a submit button.
*/
sablono.core.submit_button26085 = (function submit_button26085(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$224,"submit",cljs.core.constant$keyword$194,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26085);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26086 = (function reset_button26086(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$224,"reset",cljs.core.constant$keyword$194,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26086);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26087 = (function() { 
var form_to26087__delegate = function (p__26088,body){var vec__26090 = p__26088;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26090,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26090,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$243,null,cljs.core.constant$keyword$244,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,method_str,cljs.core.constant$keyword$247,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,"POST",cljs.core.constant$keyword$247,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26087 = function (p__26088,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26087__delegate.call(this,p__26088,body);};
form_to26087.cljs$lang$maxFixedArity = 1;
form_to26087.cljs$lang$applyTo = (function (arglist__26091){
var p__26088 = cljs.core.first(arglist__26091);
var body = cljs.core.rest(arglist__26091);
return form_to26087__delegate(p__26088,body);
});
form_to26087.cljs$core$IFn$_invoke$arity$variadic = form_to26087__delegate;
return form_to26087;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26087);
