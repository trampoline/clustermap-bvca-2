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
var G__25589__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__25588 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25588,0,null);var body = cljs.core.nthnext(vec__25588,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__25589 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25589__delegate.call(this,args);};
G__25589.cljs$lang$maxFixedArity = 0;
G__25589.cljs$lang$applyTo = (function (arglist__25590){
var args = cljs.core.seq(arglist__25590);
return G__25589__delegate(args);
});
G__25589.cljs$core$IFn$_invoke$arity$variadic = G__25589__delegate;
return G__25589;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__25595(s__25596){return (new cljs.core.LazySeq(null,(function (){var s__25596__$1 = s__25596;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25596__$1);if(temp__4092__auto__)
{var s__25596__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25596__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25596__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25598 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25597 = 0;while(true){
if((i__25597 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25597);cljs.core.chunk_append(b__25598,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__25599 = (i__25597 + 1);
i__25597 = G__25599;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25598),iter__25595(cljs.core.chunk_rest(s__25596__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25598),null);
}
} else
{var args = cljs.core.first(s__25596__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__25595(cljs.core.rest(s__25596__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__25600_SHARP_){return cljs.core.reset_BANG_(html,p1__25600_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__25605(s__25606){return (new cljs.core.LazySeq(null,(function (){var s__25606__$1 = s__25606;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25606__$1);if(temp__4092__auto__)
{var s__25606__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25606__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25606__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25608 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25607 = 0;while(true){
if((i__25607 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25607);cljs.core.chunk_append(b__25608,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$194,"text/css",cljs.core.constant$keyword$195,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$196,"stylesheet"], null)], null));
{
var G__25609 = (i__25607 + 1);
i__25607 = G__25609;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25608),iter__25605(cljs.core.chunk_rest(s__25606__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25608),null);
}
} else
{var style = cljs.core.first(s__25606__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$194,"text/css",cljs.core.constant$keyword$195,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$196,"stylesheet"], null)], null),iter__25605(cljs.core.rest(s__25606__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__25610){
var styles = cljs.core.seq(arglist__25610);
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
sablono.core.link_to25611 = (function() { 
var link_to25611__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$197,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$195,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to25611 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to25611__delegate.call(this,url,content);};
link_to25611.cljs$lang$maxFixedArity = 1;
link_to25611.cljs$lang$applyTo = (function (arglist__25612){
var url = cljs.core.first(arglist__25612);
var content = cljs.core.rest(arglist__25612);
return link_to25611__delegate(url,content);
});
link_to25611.cljs$core$IFn$_invoke$arity$variadic = link_to25611__delegate;
return link_to25611;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to25611);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to25613 = (function() { 
var mail_to25613__delegate = function (e_mail,p__25614){var vec__25616 = p__25614;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25616,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$197,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$195,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to25613 = function (e_mail,var_args){
var p__25614 = null;if (arguments.length > 1) {
  p__25614 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to25613__delegate.call(this,e_mail,p__25614);};
mail_to25613.cljs$lang$maxFixedArity = 1;
mail_to25613.cljs$lang$applyTo = (function (arglist__25617){
var e_mail = cljs.core.first(arglist__25617);
var p__25614 = cljs.core.rest(arglist__25617);
return mail_to25613__delegate(e_mail,p__25614);
});
mail_to25613.cljs$core$IFn$_invoke$arity$variadic = mail_to25613__delegate;
return mail_to25613;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to25613);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list25618 = (function unordered_list25618(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$198,(function (){var iter__4117__auto__ = (function iter__25623(s__25624){return (new cljs.core.LazySeq(null,(function (){var s__25624__$1 = s__25624;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25624__$1);if(temp__4092__auto__)
{var s__25624__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25624__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25624__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25626 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25625 = 0;while(true){
if((i__25625 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25625);cljs.core.chunk_append(b__25626,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199,x], null));
{
var G__25627 = (i__25625 + 1);
i__25625 = G__25627;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25626),iter__25623(cljs.core.chunk_rest(s__25624__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25626),null);
}
} else
{var x = cljs.core.first(s__25624__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199,x], null),iter__25623(cljs.core.rest(s__25624__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list25618);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list25628 = (function ordered_list25628(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$200,(function (){var iter__4117__auto__ = (function iter__25633(s__25634){return (new cljs.core.LazySeq(null,(function (){var s__25634__$1 = s__25634;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25634__$1);if(temp__4092__auto__)
{var s__25634__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25634__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25634__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25636 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25635 = 0;while(true){
if((i__25635 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25635);cljs.core.chunk_append(b__25636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199,x], null));
{
var G__25637 = (i__25635 + 1);
i__25635 = G__25637;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25636),iter__25633(cljs.core.chunk_rest(s__25634__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25636),null);
}
} else
{var x = cljs.core.first(s__25634__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199,x], null),iter__25633(cljs.core.rest(s__25634__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list25628);
/**
* Create an image element.
*/
sablono.core.image25638 = (function() {
var image25638 = null;
var image25638__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$202,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image25638__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$203,alt], null)], null);
});
image25638 = function(src,alt){
switch(arguments.length){
case 1:
return image25638__1.call(this,src);
case 2:
return image25638__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image25638.cljs$core$IFn$_invoke$arity$1 = image25638__1;
image25638.cljs$core$IFn$_invoke$arity$2 = image25638__2;
return image25638;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image25638);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25639_SHARP_,p2__25640_SHARP_){return [cljs.core.str(p1__25639_SHARP_),cljs.core.str("["),cljs.core.str(p2__25640_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25641_SHARP_,p2__25642_SHARP_){return [cljs.core.str(p1__25641_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25642_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$204,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$194,type,cljs.core.constant$keyword$205,sablono.core.make_name(name),cljs.core.constant$keyword$191,sablono.core.make_id(name),cljs.core.constant$keyword$164,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field25643 = (function() {
var hidden_field25643 = null;
var hidden_field25643__1 = (function (name){return hidden_field25643.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field25643__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field25643 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field25643__1.call(this,name);
case 2:
return hidden_field25643__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field25643.cljs$core$IFn$_invoke$arity$1 = hidden_field25643__1;
hidden_field25643.cljs$core$IFn$_invoke$arity$2 = hidden_field25643__2;
return hidden_field25643;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field25643);
/**
* Creates a new text input field.
*/
sablono.core.text_field25644 = (function() {
var text_field25644 = null;
var text_field25644__1 = (function (name){return text_field25644.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field25644__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field25644 = function(name,value){
switch(arguments.length){
case 1:
return text_field25644__1.call(this,name);
case 2:
return text_field25644__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field25644.cljs$core$IFn$_invoke$arity$1 = text_field25644__1;
text_field25644.cljs$core$IFn$_invoke$arity$2 = text_field25644__2;
return text_field25644;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field25644);
/**
* Creates a new password field.
*/
sablono.core.password_field25645 = (function() {
var password_field25645 = null;
var password_field25645__1 = (function (name){return password_field25645.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field25645__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field25645 = function(name,value){
switch(arguments.length){
case 1:
return password_field25645__1.call(this,name);
case 2:
return password_field25645__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field25645.cljs$core$IFn$_invoke$arity$1 = password_field25645__1;
password_field25645.cljs$core$IFn$_invoke$arity$2 = password_field25645__2;
return password_field25645;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field25645);
/**
* Creates a new email input field.
*/
sablono.core.email_field25646 = (function() {
var email_field25646 = null;
var email_field25646__1 = (function (name){return email_field25646.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field25646__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field25646 = function(name,value){
switch(arguments.length){
case 1:
return email_field25646__1.call(this,name);
case 2:
return email_field25646__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field25646.cljs$core$IFn$_invoke$arity$1 = email_field25646__1;
email_field25646.cljs$core$IFn$_invoke$arity$2 = email_field25646__2;
return email_field25646;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field25646);
/**
* Creates a check box.
*/
sablono.core.check_box25647 = (function() {
var check_box25647 = null;
var check_box25647__1 = (function (name){return check_box25647.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box25647__2 = (function (name,checked_QMARK_){return check_box25647.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box25647__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$204,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$194,"checkbox",cljs.core.constant$keyword$205,sablono.core.make_name(name),cljs.core.constant$keyword$191,sablono.core.make_id(name),cljs.core.constant$keyword$164,value,cljs.core.constant$keyword$206,checked_QMARK_], null)], null);
});
check_box25647 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box25647__1.call(this,name);
case 2:
return check_box25647__2.call(this,name,checked_QMARK_);
case 3:
return check_box25647__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box25647.cljs$core$IFn$_invoke$arity$1 = check_box25647__1;
check_box25647.cljs$core$IFn$_invoke$arity$2 = check_box25647__2;
check_box25647.cljs$core$IFn$_invoke$arity$3 = check_box25647__3;
return check_box25647;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box25647);
/**
* Creates a radio button.
*/
sablono.core.radio_button25648 = (function() {
var radio_button25648 = null;
var radio_button25648__1 = (function (group){return radio_button25648.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button25648__2 = (function (group,checked_QMARK_){return radio_button25648.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button25648__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$204,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$194,"radio",cljs.core.constant$keyword$205,sablono.core.make_name(group),cljs.core.constant$keyword$191,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$164,value,cljs.core.constant$keyword$206,checked_QMARK_], null)], null);
});
radio_button25648 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button25648__1.call(this,group);
case 2:
return radio_button25648__2.call(this,group,checked_QMARK_);
case 3:
return radio_button25648__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button25648.cljs$core$IFn$_invoke$arity$1 = radio_button25648__1;
radio_button25648.cljs$core$IFn$_invoke$arity$2 = radio_button25648__2;
radio_button25648.cljs$core$IFn$_invoke$arity$3 = radio_button25648__3;
return radio_button25648;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button25648);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options25649 = (function() {
var select_options25649 = null;
var select_options25649__1 = (function (coll){return select_options25649.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options25649__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__25658(s__25659){return (new cljs.core.LazySeq(null,(function (){var s__25659__$1 = s__25659;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25659__$1);if(temp__4092__auto__)
{var s__25659__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25659__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25659__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25661 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25660 = 0;while(true){
if((i__25660 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25660);cljs.core.chunk_append(b__25661,((cljs.core.sequential_QMARK_(x))?(function (){var vec__25664 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25664,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25664,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,text], null),select_options25649.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$164,val,cljs.core.constant$keyword$210,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$210,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__25666 = (i__25660 + 1);
i__25660 = G__25666;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25661),iter__25658(cljs.core.chunk_rest(s__25659__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25661),null);
}
} else
{var x = cljs.core.first(s__25659__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__25665 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25665,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25665,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$207,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,text], null),select_options25649.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$164,val,cljs.core.constant$keyword$210,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$210,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__25658(cljs.core.rest(s__25659__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options25649 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options25649__1.call(this,coll);
case 2:
return select_options25649__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options25649.cljs$core$IFn$_invoke$arity$1 = select_options25649__1;
select_options25649.cljs$core$IFn$_invoke$arity$2 = select_options25649__2;
return select_options25649;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options25649);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down25667 = (function() {
var drop_down25667 = null;
var drop_down25667__2 = (function (name,options){return drop_down25667.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down25667__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,sablono.core.make_name(name),cljs.core.constant$keyword$191,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down25667 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down25667__2.call(this,name,options);
case 3:
return drop_down25667__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down25667.cljs$core$IFn$_invoke$arity$2 = drop_down25667__2;
drop_down25667.cljs$core$IFn$_invoke$arity$3 = drop_down25667__3;
return drop_down25667;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down25667);
/**
* Creates a text area element.
*/
sablono.core.text_area25668 = (function() {
var text_area25668 = null;
var text_area25668__1 = (function (name){return text_area25668.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area25668__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$212,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,sablono.core.make_name(name),cljs.core.constant$keyword$191,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area25668 = function(name,value){
switch(arguments.length){
case 1:
return text_area25668__1.call(this,name);
case 2:
return text_area25668__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area25668.cljs$core$IFn$_invoke$arity$1 = text_area25668__1;
text_area25668.cljs$core$IFn$_invoke$arity$2 = text_area25668__2;
return text_area25668;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area25668);
/**
* Creates a file upload input.
*/
sablono.core.file_upload25669 = (function file_upload25669(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload25669);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label25670 = (function label25670(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$188,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label25670);
/**
* Creates a submit button.
*/
sablono.core.submit_button25671 = (function submit_button25671(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$204,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,"submit",cljs.core.constant$keyword$164,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button25671);
/**
* Creates a form reset button.
*/
sablono.core.reset_button25672 = (function reset_button25672(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$204,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,"reset",cljs.core.constant$keyword$164,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button25672);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to25673 = (function() { 
var form_to25673__delegate = function (p__25674,body){var vec__25676 = p__25674;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25676,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25676,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$213,null,cljs.core.constant$keyword$214,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$215,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$216,method_str,cljs.core.constant$keyword$217,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$215,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$216,"POST",cljs.core.constant$keyword$217,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to25673 = function (p__25674,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to25673__delegate.call(this,p__25674,body);};
form_to25673.cljs$lang$maxFixedArity = 1;
form_to25673.cljs$lang$applyTo = (function (arglist__25677){
var p__25674 = cljs.core.first(arglist__25677);
var body = cljs.core.rest(arglist__25677);
return form_to25673__delegate(p__25674,body);
});
form_to25673.cljs$core$IFn$_invoke$arity$variadic = form_to25673__delegate;
return form_to25673;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to25673);
