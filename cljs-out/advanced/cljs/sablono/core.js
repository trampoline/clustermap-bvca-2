// Compiled by ClojureScript 0.0-2173
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
var G__38751__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__38750 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38750,0,null);var body = cljs.core.nthnext(vec__38750,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38751 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38751__delegate.call(this,args);};
G__38751.cljs$lang$maxFixedArity = 0;
G__38751.cljs$lang$applyTo = (function (arglist__38752){
var args = cljs.core.seq(arglist__38752);
return G__38751__delegate(args);
});
G__38751.cljs$core$IFn$_invoke$arity$variadic = G__38751__delegate;
return G__38751;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__38757(s__38758){return (new cljs.core.LazySeq(null,(function (){var s__38758__$1 = s__38758;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38758__$1);if(temp__4092__auto__)
{var s__38758__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38758__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38758__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38760 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38759 = 0;while(true){
if((i__38759 < size__4157__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38759);cljs.core.chunk_append(b__38760,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__38761 = (i__38759 + 1);
i__38759 = G__38761;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38760),iter__38757(cljs.core.chunk_rest(s__38758__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38760),null);
}
} else
{var args = cljs.core.first(s__38758__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__38757(cljs.core.rest(s__38758__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__38762_SHARP_){return cljs.core.reset_BANG_(html,p1__38762_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__38767(s__38768){return (new cljs.core.LazySeq(null,(function (){var s__38768__$1 = s__38768;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38768__$1);if(temp__4092__auto__)
{var s__38768__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38768__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38768__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38770 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38769 = 0;while(true){
if((i__38769 < size__4157__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38769);cljs.core.chunk_append(b__38770,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$588,"text/css",cljs.core.constant$keyword$589,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$590,"stylesheet"], null)], null));
{
var G__38771 = (i__38769 + 1);
i__38769 = G__38771;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38770),iter__38767(cljs.core.chunk_rest(s__38768__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38770),null);
}
} else
{var style = cljs.core.first(s__38768__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$588,"text/css",cljs.core.constant$keyword$589,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$590,"stylesheet"], null)], null),iter__38767(cljs.core.rest(s__38768__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__38772){
var styles = cljs.core.seq(arglist__38772);
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
sablono.core.link_to38773 = (function() { 
var link_to38773__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$589,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to38773 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to38773__delegate.call(this,url,content);};
link_to38773.cljs$lang$maxFixedArity = 1;
link_to38773.cljs$lang$applyTo = (function (arglist__38774){
var url = cljs.core.first(arglist__38774);
var content = cljs.core.rest(arglist__38774);
return link_to38773__delegate(url,content);
});
link_to38773.cljs$core$IFn$_invoke$arity$variadic = link_to38773__delegate;
return link_to38773;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to38773);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to38775 = (function() { 
var mail_to38775__delegate = function (e_mail,p__38776){var vec__38778 = p__38776;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38778,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$589,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to38775 = function (e_mail,var_args){
var p__38776 = null;if (arguments.length > 1) {
  p__38776 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to38775__delegate.call(this,e_mail,p__38776);};
mail_to38775.cljs$lang$maxFixedArity = 1;
mail_to38775.cljs$lang$applyTo = (function (arglist__38779){
var e_mail = cljs.core.first(arglist__38779);
var p__38776 = cljs.core.rest(arglist__38779);
return mail_to38775__delegate(e_mail,p__38776);
});
mail_to38775.cljs$core$IFn$_invoke$arity$variadic = mail_to38775__delegate;
return mail_to38775;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38775);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list38780 = (function unordered_list38780(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$592,(function (){var iter__4158__auto__ = (function iter__38785(s__38786){return (new cljs.core.LazySeq(null,(function (){var s__38786__$1 = s__38786;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38786__$1);if(temp__4092__auto__)
{var s__38786__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38786__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38786__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38788 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38787 = 0;while(true){
if((i__38787 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38787);cljs.core.chunk_append(b__38788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null));
{
var G__38789 = (i__38787 + 1);
i__38787 = G__38789;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38788),iter__38785(cljs.core.chunk_rest(s__38786__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38788),null);
}
} else
{var x = cljs.core.first(s__38786__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null),iter__38785(cljs.core.rest(s__38786__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38780);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list38790 = (function ordered_list38790(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$594,(function (){var iter__4158__auto__ = (function iter__38795(s__38796){return (new cljs.core.LazySeq(null,(function (){var s__38796__$1 = s__38796;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38796__$1);if(temp__4092__auto__)
{var s__38796__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38796__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38796__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38798 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38797 = 0;while(true){
if((i__38797 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38797);cljs.core.chunk_append(b__38798,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null));
{
var G__38799 = (i__38797 + 1);
i__38797 = G__38799;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38798),iter__38795(cljs.core.chunk_rest(s__38796__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38798),null);
}
} else
{var x = cljs.core.first(s__38796__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null),iter__38795(cljs.core.rest(s__38796__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38790);
/**
* Create an image element.
*/
sablono.core.image38800 = (function() {
var image38800 = null;
var image38800__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$595,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$596,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image38800__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$595,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$596,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$597,alt], null)], null);
});
image38800 = function(src,alt){
switch(arguments.length){
case 1:
return image38800__1.call(this,src);
case 2:
return image38800__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image38800.cljs$core$IFn$_invoke$arity$1 = image38800__1;
image38800.cljs$core$IFn$_invoke$arity$2 = image38800__2;
return image38800;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38800);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38801_SHARP_,p2__38802_SHARP_){return [cljs.core.str(p1__38801_SHARP_),cljs.core.str("["),cljs.core.str(p2__38802_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38803_SHARP_,p2__38804_SHARP_){return [cljs.core.str(p1__38803_SHARP_),cljs.core.str("-"),cljs.core.str(p2__38804_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$588,type,cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name),cljs.core.constant$keyword$549,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field38805 = (function() {
var hidden_field38805 = null;
var hidden_field38805__1 = (function (name){return hidden_field38805.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field38805__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field38805 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field38805__1.call(this,name);
case 2:
return hidden_field38805__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field38805.cljs$core$IFn$_invoke$arity$1 = hidden_field38805__1;
hidden_field38805.cljs$core$IFn$_invoke$arity$2 = hidden_field38805__2;
return hidden_field38805;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38805);
/**
* Creates a new text input field.
*/
sablono.core.text_field38806 = (function() {
var text_field38806 = null;
var text_field38806__1 = (function (name){return text_field38806.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field38806__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field38806 = function(name,value){
switch(arguments.length){
case 1:
return text_field38806__1.call(this,name);
case 2:
return text_field38806__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field38806.cljs$core$IFn$_invoke$arity$1 = text_field38806__1;
text_field38806.cljs$core$IFn$_invoke$arity$2 = text_field38806__2;
return text_field38806;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38806);
/**
* Creates a new password field.
*/
sablono.core.password_field38807 = (function() {
var password_field38807 = null;
var password_field38807__1 = (function (name){return password_field38807.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field38807__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field38807 = function(name,value){
switch(arguments.length){
case 1:
return password_field38807__1.call(this,name);
case 2:
return password_field38807__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field38807.cljs$core$IFn$_invoke$arity$1 = password_field38807__1;
password_field38807.cljs$core$IFn$_invoke$arity$2 = password_field38807__2;
return password_field38807;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38807);
/**
* Creates a new email input field.
*/
sablono.core.email_field38808 = (function() {
var email_field38808 = null;
var email_field38808__1 = (function (name){return email_field38808.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field38808__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field38808 = function(name,value){
switch(arguments.length){
case 1:
return email_field38808__1.call(this,name);
case 2:
return email_field38808__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field38808.cljs$core$IFn$_invoke$arity$1 = email_field38808__1;
email_field38808.cljs$core$IFn$_invoke$arity$2 = email_field38808__2;
return email_field38808;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38808);
/**
* Creates a check box.
*/
sablono.core.check_box38809 = (function() {
var check_box38809 = null;
var check_box38809__1 = (function (name){return check_box38809.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box38809__2 = (function (name,checked_QMARK_){return check_box38809.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box38809__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$588,"checkbox",cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name),cljs.core.constant$keyword$549,value,cljs.core.constant$keyword$599,checked_QMARK_], null)], null);
});
check_box38809 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box38809__1.call(this,name);
case 2:
return check_box38809__2.call(this,name,checked_QMARK_);
case 3:
return check_box38809__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box38809.cljs$core$IFn$_invoke$arity$1 = check_box38809__1;
check_box38809.cljs$core$IFn$_invoke$arity$2 = check_box38809__2;
check_box38809.cljs$core$IFn$_invoke$arity$3 = check_box38809__3;
return check_box38809;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38809);
/**
* Creates a radio button.
*/
sablono.core.radio_button38810 = (function() {
var radio_button38810 = null;
var radio_button38810__1 = (function (group){return radio_button38810.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button38810__2 = (function (group,checked_QMARK_){return radio_button38810.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button38810__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$588,"radio",cljs.core.constant$keyword$598,sablono.core.make_name(group),cljs.core.constant$keyword$584,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$549,value,cljs.core.constant$keyword$599,checked_QMARK_], null)], null);
});
radio_button38810 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button38810__1.call(this,group);
case 2:
return radio_button38810__2.call(this,group,checked_QMARK_);
case 3:
return radio_button38810__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button38810.cljs$core$IFn$_invoke$arity$1 = radio_button38810__1;
radio_button38810.cljs$core$IFn$_invoke$arity$2 = radio_button38810__2;
radio_button38810.cljs$core$IFn$_invoke$arity$3 = radio_button38810__3;
return radio_button38810;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38810);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options38811 = (function() {
var select_options38811 = null;
var select_options38811__1 = (function (coll){return select_options38811.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options38811__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__38820(s__38821){return (new cljs.core.LazySeq(null,(function (){var s__38821__$1 = s__38821;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38821__$1);if(temp__4092__auto__)
{var s__38821__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38821__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38821__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38823 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38822 = 0;while(true){
if((i__38822 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38822);cljs.core.chunk_append(b__38823,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38826 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38826,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38826,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,text], null),select_options38811.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$549,val,cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__38828 = (i__38822 + 1);
i__38822 = G__38828;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38823),iter__38820(cljs.core.chunk_rest(s__38821__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38823),null);
}
} else
{var x = cljs.core.first(s__38821__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38827 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38827,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38827,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,text], null),select_options38811.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$549,val,cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__38820(cljs.core.rest(s__38821__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
});
select_options38811 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options38811__1.call(this,coll);
case 2:
return select_options38811__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options38811.cljs$core$IFn$_invoke$arity$1 = select_options38811__1;
select_options38811.cljs$core$IFn$_invoke$arity$2 = select_options38811__2;
return select_options38811;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38811);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down38829 = (function() {
var drop_down38829 = null;
var drop_down38829__2 = (function (name,options){return drop_down38829.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down38829__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$604,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down38829 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down38829__2.call(this,name,options);
case 3:
return drop_down38829__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down38829.cljs$core$IFn$_invoke$arity$2 = drop_down38829__2;
drop_down38829.cljs$core$IFn$_invoke$arity$3 = drop_down38829__3;
return drop_down38829;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38829);
/**
* Creates a text area element.
*/
sablono.core.text_area38830 = (function() {
var text_area38830 = null;
var text_area38830__1 = (function (name){return text_area38830.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area38830__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$585,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name),cljs.core.constant$keyword$549,value], null)], null);
});
text_area38830 = function(name,value){
switch(arguments.length){
case 1:
return text_area38830__1.call(this,name);
case 2:
return text_area38830__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area38830.cljs$core$IFn$_invoke$arity$1 = text_area38830__1;
text_area38830.cljs$core$IFn$_invoke$arity$2 = text_area38830__2;
return text_area38830;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38830);
/**
* Creates a file upload input.
*/
sablono.core.file_upload38831 = (function file_upload38831(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload38831);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label38832 = (function label38832(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$601,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$581,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38832);
/**
* Creates a submit button.
*/
sablono.core.submit_button38833 = (function submit_button38833(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,"submit",cljs.core.constant$keyword$549,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38833);
/**
* Creates a form reset button.
*/
sablono.core.reset_button38834 = (function reset_button38834(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,"reset",cljs.core.constant$keyword$549,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38834);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to38835 = (function() { 
var form_to38835__delegate = function (p__38836,body){var vec__38838 = p__38836;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38838,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38838,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$605,null,cljs.core.constant$keyword$606,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$607,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$608,method_str,cljs.core.constant$keyword$609,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$607,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$608,"POST",cljs.core.constant$keyword$609,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to38835 = function (p__38836,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to38835__delegate.call(this,p__38836,body);};
form_to38835.cljs$lang$maxFixedArity = 1;
form_to38835.cljs$lang$applyTo = (function (arglist__38839){
var p__38836 = cljs.core.first(arglist__38839);
var body = cljs.core.rest(arglist__38839);
return form_to38835__delegate(p__38836,body);
});
form_to38835.cljs$core$IFn$_invoke$arity$variadic = form_to38835__delegate;
return form_to38835;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38835);
