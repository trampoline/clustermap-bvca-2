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
var G__25374__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__25373 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25373,0,null);var body = cljs.core.nthnext(vec__25373,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__25374 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25374__delegate.call(this,args);};
G__25374.cljs$lang$maxFixedArity = 0;
G__25374.cljs$lang$applyTo = (function (arglist__25375){
var args = cljs.core.seq(arglist__25375);
return G__25374__delegate(args);
});
G__25374.cljs$core$IFn$_invoke$arity$variadic = G__25374__delegate;
return G__25374;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__25380(s__25381){return (new cljs.core.LazySeq(null,(function (){var s__25381__$1 = s__25381;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25381__$1);if(temp__4092__auto__)
{var s__25381__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25381__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25381__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25383 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25382 = 0;while(true){
if((i__25382 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25382);cljs.core.chunk_append(b__25383,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__25384 = (i__25382 + 1);
i__25382 = G__25384;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25383),iter__25380(cljs.core.chunk_rest(s__25381__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25383),null);
}
} else
{var args = cljs.core.first(s__25381__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__25380(cljs.core.rest(s__25381__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__25385_SHARP_){return cljs.core.reset_BANG_(html,p1__25385_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__25390(s__25391){return (new cljs.core.LazySeq(null,(function (){var s__25391__$1 = s__25391;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25391__$1);if(temp__4092__auto__)
{var s__25391__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25391__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25391__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25393 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25392 = 0;while(true){
if((i__25392 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25392);cljs.core.chunk_append(b__25393,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$191,"text/css",cljs.core.constant$keyword$192,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$193,"stylesheet"], null)], null));
{
var G__25394 = (i__25392 + 1);
i__25392 = G__25394;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25393),iter__25390(cljs.core.chunk_rest(s__25391__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25393),null);
}
} else
{var style = cljs.core.first(s__25391__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$191,"text/css",cljs.core.constant$keyword$192,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$193,"stylesheet"], null)], null),iter__25390(cljs.core.rest(s__25391__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__25395){
var styles = cljs.core.seq(arglist__25395);
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
sablono.core.link_to25396 = (function() { 
var link_to25396__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$194,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$192,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to25396 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to25396__delegate.call(this,url,content);};
link_to25396.cljs$lang$maxFixedArity = 1;
link_to25396.cljs$lang$applyTo = (function (arglist__25397){
var url = cljs.core.first(arglist__25397);
var content = cljs.core.rest(arglist__25397);
return link_to25396__delegate(url,content);
});
link_to25396.cljs$core$IFn$_invoke$arity$variadic = link_to25396__delegate;
return link_to25396;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to25396);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to25398 = (function() { 
var mail_to25398__delegate = function (e_mail,p__25399){var vec__25401 = p__25399;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25401,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$194,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$192,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to25398 = function (e_mail,var_args){
var p__25399 = null;if (arguments.length > 1) {
  p__25399 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to25398__delegate.call(this,e_mail,p__25399);};
mail_to25398.cljs$lang$maxFixedArity = 1;
mail_to25398.cljs$lang$applyTo = (function (arglist__25402){
var e_mail = cljs.core.first(arglist__25402);
var p__25399 = cljs.core.rest(arglist__25402);
return mail_to25398__delegate(e_mail,p__25399);
});
mail_to25398.cljs$core$IFn$_invoke$arity$variadic = mail_to25398__delegate;
return mail_to25398;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to25398);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list25403 = (function unordered_list25403(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$195,(function (){var iter__4117__auto__ = (function iter__25408(s__25409){return (new cljs.core.LazySeq(null,(function (){var s__25409__$1 = s__25409;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25409__$1);if(temp__4092__auto__)
{var s__25409__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25409__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25409__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25411 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25410 = 0;while(true){
if((i__25410 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25410);cljs.core.chunk_append(b__25411,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,x], null));
{
var G__25412 = (i__25410 + 1);
i__25410 = G__25412;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25411),iter__25408(cljs.core.chunk_rest(s__25409__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25411),null);
}
} else
{var x = cljs.core.first(s__25409__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,x], null),iter__25408(cljs.core.rest(s__25409__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list25403);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list25413 = (function ordered_list25413(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$197,(function (){var iter__4117__auto__ = (function iter__25418(s__25419){return (new cljs.core.LazySeq(null,(function (){var s__25419__$1 = s__25419;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25419__$1);if(temp__4092__auto__)
{var s__25419__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25419__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25419__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25421 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25420 = 0;while(true){
if((i__25420 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25420);cljs.core.chunk_append(b__25421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,x], null));
{
var G__25422 = (i__25420 + 1);
i__25420 = G__25422;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25421),iter__25418(cljs.core.chunk_rest(s__25419__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25421),null);
}
} else
{var x = cljs.core.first(s__25419__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,x], null),iter__25418(cljs.core.rest(s__25419__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list25413);
/**
* Create an image element.
*/
sablono.core.image25423 = (function() {
var image25423 = null;
var image25423__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$198,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$199,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image25423__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$198,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$199,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$200,alt], null)], null);
});
image25423 = function(src,alt){
switch(arguments.length){
case 1:
return image25423__1.call(this,src);
case 2:
return image25423__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image25423.cljs$core$IFn$_invoke$arity$1 = image25423__1;
image25423.cljs$core$IFn$_invoke$arity$2 = image25423__2;
return image25423;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image25423);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25424_SHARP_,p2__25425_SHARP_){return [cljs.core.str(p1__25424_SHARP_),cljs.core.str("["),cljs.core.str(p2__25425_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25426_SHARP_,p2__25427_SHARP_){return [cljs.core.str(p1__25426_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25427_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$191,type,cljs.core.constant$keyword$202,sablono.core.make_name(name),cljs.core.constant$keyword$188,sablono.core.make_id(name),cljs.core.constant$keyword$161,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field25428 = (function() {
var hidden_field25428 = null;
var hidden_field25428__1 = (function (name){return hidden_field25428.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field25428__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field25428 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field25428__1.call(this,name);
case 2:
return hidden_field25428__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field25428.cljs$core$IFn$_invoke$arity$1 = hidden_field25428__1;
hidden_field25428.cljs$core$IFn$_invoke$arity$2 = hidden_field25428__2;
return hidden_field25428;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field25428);
/**
* Creates a new text input field.
*/
sablono.core.text_field25429 = (function() {
var text_field25429 = null;
var text_field25429__1 = (function (name){return text_field25429.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field25429__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field25429 = function(name,value){
switch(arguments.length){
case 1:
return text_field25429__1.call(this,name);
case 2:
return text_field25429__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field25429.cljs$core$IFn$_invoke$arity$1 = text_field25429__1;
text_field25429.cljs$core$IFn$_invoke$arity$2 = text_field25429__2;
return text_field25429;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field25429);
/**
* Creates a new password field.
*/
sablono.core.password_field25430 = (function() {
var password_field25430 = null;
var password_field25430__1 = (function (name){return password_field25430.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field25430__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field25430 = function(name,value){
switch(arguments.length){
case 1:
return password_field25430__1.call(this,name);
case 2:
return password_field25430__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field25430.cljs$core$IFn$_invoke$arity$1 = password_field25430__1;
password_field25430.cljs$core$IFn$_invoke$arity$2 = password_field25430__2;
return password_field25430;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field25430);
/**
* Creates a new email input field.
*/
sablono.core.email_field25431 = (function() {
var email_field25431 = null;
var email_field25431__1 = (function (name){return email_field25431.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field25431__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field25431 = function(name,value){
switch(arguments.length){
case 1:
return email_field25431__1.call(this,name);
case 2:
return email_field25431__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field25431.cljs$core$IFn$_invoke$arity$1 = email_field25431__1;
email_field25431.cljs$core$IFn$_invoke$arity$2 = email_field25431__2;
return email_field25431;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field25431);
/**
* Creates a check box.
*/
sablono.core.check_box25432 = (function() {
var check_box25432 = null;
var check_box25432__1 = (function (name){return check_box25432.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box25432__2 = (function (name,checked_QMARK_){return check_box25432.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box25432__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$191,"checkbox",cljs.core.constant$keyword$202,sablono.core.make_name(name),cljs.core.constant$keyword$188,sablono.core.make_id(name),cljs.core.constant$keyword$161,value,cljs.core.constant$keyword$203,checked_QMARK_], null)], null);
});
check_box25432 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box25432__1.call(this,name);
case 2:
return check_box25432__2.call(this,name,checked_QMARK_);
case 3:
return check_box25432__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box25432.cljs$core$IFn$_invoke$arity$1 = check_box25432__1;
check_box25432.cljs$core$IFn$_invoke$arity$2 = check_box25432__2;
check_box25432.cljs$core$IFn$_invoke$arity$3 = check_box25432__3;
return check_box25432;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box25432);
/**
* Creates a radio button.
*/
sablono.core.radio_button25433 = (function() {
var radio_button25433 = null;
var radio_button25433__1 = (function (group){return radio_button25433.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button25433__2 = (function (group,checked_QMARK_){return radio_button25433.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button25433__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$191,"radio",cljs.core.constant$keyword$202,sablono.core.make_name(group),cljs.core.constant$keyword$188,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$161,value,cljs.core.constant$keyword$203,checked_QMARK_], null)], null);
});
radio_button25433 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button25433__1.call(this,group);
case 2:
return radio_button25433__2.call(this,group,checked_QMARK_);
case 3:
return radio_button25433__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button25433.cljs$core$IFn$_invoke$arity$1 = radio_button25433__1;
radio_button25433.cljs$core$IFn$_invoke$arity$2 = radio_button25433__2;
radio_button25433.cljs$core$IFn$_invoke$arity$3 = radio_button25433__3;
return radio_button25433;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button25433);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options25434 = (function() {
var select_options25434 = null;
var select_options25434__1 = (function (coll){return select_options25434.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options25434__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__25443(s__25444){return (new cljs.core.LazySeq(null,(function (){var s__25444__$1 = s__25444;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25444__$1);if(temp__4092__auto__)
{var s__25444__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25444__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25444__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25446 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25445 = 0;while(true){
if((i__25445 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25445);cljs.core.chunk_append(b__25446,((cljs.core.sequential_QMARK_(x))?(function (){var vec__25449 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25449,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25449,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$204,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$205,text], null),select_options25434.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,val,cljs.core.constant$keyword$207,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$207,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__25451 = (i__25445 + 1);
i__25445 = G__25451;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25446),iter__25443(cljs.core.chunk_rest(s__25444__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25446),null);
}
} else
{var x = cljs.core.first(s__25444__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__25450 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25450,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25450,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$204,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$205,text], null),select_options25434.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,val,cljs.core.constant$keyword$207,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$206,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$207,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__25443(cljs.core.rest(s__25444__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options25434 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options25434__1.call(this,coll);
case 2:
return select_options25434__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options25434.cljs$core$IFn$_invoke$arity$1 = select_options25434__1;
select_options25434.cljs$core$IFn$_invoke$arity$2 = select_options25434__2;
return select_options25434;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options25434);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down25452 = (function() {
var drop_down25452 = null;
var drop_down25452__2 = (function (name,options){return drop_down25452.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down25452__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,sablono.core.make_name(name),cljs.core.constant$keyword$188,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down25452 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down25452__2.call(this,name,options);
case 3:
return drop_down25452__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down25452.cljs$core$IFn$_invoke$arity$2 = drop_down25452__2;
drop_down25452.cljs$core$IFn$_invoke$arity$3 = drop_down25452__3;
return drop_down25452;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down25452);
/**
* Creates a text area element.
*/
sablono.core.text_area25453 = (function() {
var text_area25453 = null;
var text_area25453__1 = (function (name){return text_area25453.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area25453__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,sablono.core.make_name(name),cljs.core.constant$keyword$188,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area25453 = function(name,value){
switch(arguments.length){
case 1:
return text_area25453__1.call(this,name);
case 2:
return text_area25453__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area25453.cljs$core$IFn$_invoke$arity$1 = text_area25453__1;
text_area25453.cljs$core$IFn$_invoke$arity$2 = text_area25453__2;
return text_area25453;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area25453);
/**
* Creates a file upload input.
*/
sablono.core.file_upload25454 = (function file_upload25454(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload25454);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label25455 = (function label25455(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$205,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label25455);
/**
* Creates a submit button.
*/
sablono.core.submit_button25456 = (function submit_button25456(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,"submit",cljs.core.constant$keyword$161,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button25456);
/**
* Creates a form reset button.
*/
sablono.core.reset_button25457 = (function reset_button25457(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,"reset",cljs.core.constant$keyword$161,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button25457);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to25458 = (function() { 
var form_to25458__delegate = function (p__25459,body){var vec__25461 = p__25459;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25461,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25461,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$210,null,cljs.core.constant$keyword$211,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$213,method_str,cljs.core.constant$keyword$214,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$213,"POST",cljs.core.constant$keyword$214,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to25458 = function (p__25459,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to25458__delegate.call(this,p__25459,body);};
form_to25458.cljs$lang$maxFixedArity = 1;
form_to25458.cljs$lang$applyTo = (function (arglist__25462){
var p__25459 = cljs.core.first(arglist__25462);
var body = cljs.core.rest(arglist__25462);
return form_to25458__delegate(p__25459,body);
});
form_to25458.cljs$core$IFn$_invoke$arity$variadic = form_to25458__delegate;
return form_to25458;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to25458);
