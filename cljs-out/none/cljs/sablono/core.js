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
var G__16587__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16586 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16586,0,null);var body = cljs.core.nthnext.call(null,vec__16586,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16587 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16587__delegate.call(this,args);};
G__16587.cljs$lang$maxFixedArity = 0;
G__16587.cljs$lang$applyTo = (function (arglist__16588){
var args = cljs.core.seq(arglist__16588);
return G__16587__delegate(args);
});
G__16587.cljs$core$IFn$_invoke$arity$variadic = G__16587__delegate;
return G__16587;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__16593(s__16594){return (new cljs.core.LazySeq(null,(function (){var s__16594__$1 = s__16594;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16594__$1);if(temp__4092__auto__)
{var s__16594__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16594__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16594__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16596 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16595 = 0;while(true){
if((i__16595 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__16595);cljs.core.chunk_append.call(null,b__16596,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16597 = (i__16595 + 1);
i__16595 = G__16597;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16596),iter__16593.call(null,cljs.core.chunk_rest.call(null,s__16594__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16596),null);
}
} else
{var args = cljs.core.first.call(null,s__16594__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16593.call(null,cljs.core.rest.call(null,s__16594__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__16598_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__16598_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__16603(s__16604){return (new cljs.core.LazySeq(null,(function (){var s__16604__$1 = s__16604;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16604__$1);if(temp__4092__auto__)
{var s__16604__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16604__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16604__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16606 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16605 = 0;while(true){
if((i__16605 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__16605);cljs.core.chunk_append.call(null,b__16606,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16607 = (i__16605 + 1);
i__16605 = G__16607;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16606),iter__16603.call(null,cljs.core.chunk_rest.call(null,s__16604__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16606),null);
}
} else
{var style = cljs.core.first.call(null,s__16604__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16603.call(null,cljs.core.rest.call(null,s__16604__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__16608){
var styles = cljs.core.seq(arglist__16608);
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
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to16609 = (function() { 
var link_to16609__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16609 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16609__delegate.call(this,url,content);};
link_to16609.cljs$lang$maxFixedArity = 1;
link_to16609.cljs$lang$applyTo = (function (arglist__16610){
var url = cljs.core.first(arglist__16610);
var content = cljs.core.rest(arglist__16610);
return link_to16609__delegate(url,content);
});
link_to16609.cljs$core$IFn$_invoke$arity$variadic = link_to16609__delegate;
return link_to16609;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16609);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16611 = (function() { 
var mail_to16611__delegate = function (e_mail,p__16612){var vec__16614 = p__16612;var content = cljs.core.nth.call(null,vec__16614,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16611 = function (e_mail,var_args){
var p__16612 = null;if (arguments.length > 1) {
  p__16612 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16611__delegate.call(this,e_mail,p__16612);};
mail_to16611.cljs$lang$maxFixedArity = 1;
mail_to16611.cljs$lang$applyTo = (function (arglist__16615){
var e_mail = cljs.core.first(arglist__16615);
var p__16612 = cljs.core.rest(arglist__16615);
return mail_to16611__delegate(e_mail,p__16612);
});
mail_to16611.cljs$core$IFn$_invoke$arity$variadic = mail_to16611__delegate;
return mail_to16611;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16611);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16616 = (function unordered_list16616(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__16621(s__16622){return (new cljs.core.LazySeq(null,(function (){var s__16622__$1 = s__16622;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16622__$1);if(temp__4092__auto__)
{var s__16622__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16622__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16622__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16624 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16623 = 0;while(true){
if((i__16623 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16623);cljs.core.chunk_append.call(null,b__16624,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16625 = (i__16623 + 1);
i__16623 = G__16625;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16624),iter__16621.call(null,cljs.core.chunk_rest.call(null,s__16622__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16624),null);
}
} else
{var x = cljs.core.first.call(null,s__16622__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16621.call(null,cljs.core.rest.call(null,s__16622__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16616);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16626 = (function ordered_list16626(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__16631(s__16632){return (new cljs.core.LazySeq(null,(function (){var s__16632__$1 = s__16632;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16632__$1);if(temp__4092__auto__)
{var s__16632__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16632__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16632__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16634 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16633 = 0;while(true){
if((i__16633 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16633);cljs.core.chunk_append.call(null,b__16634,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16635 = (i__16633 + 1);
i__16633 = G__16635;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16634),iter__16631.call(null,cljs.core.chunk_rest.call(null,s__16632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16634),null);
}
} else
{var x = cljs.core.first.call(null,s__16632__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16631.call(null,cljs.core.rest.call(null,s__16632__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16626);
/**
* Create an image element.
*/
sablono.core.image16636 = (function() {
var image16636 = null;
var image16636__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16636__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16636 = function(src,alt){
switch(arguments.length){
case 1:
return image16636__1.call(this,src);
case 2:
return image16636__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16636.cljs$core$IFn$_invoke$arity$1 = image16636__1;
image16636.cljs$core$IFn$_invoke$arity$2 = image16636__2;
return image16636;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16636);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16637_SHARP_,p2__16638_SHARP_){return [cljs.core.str(p1__16637_SHARP_),cljs.core.str("["),cljs.core.str(p2__16638_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__16639_SHARP_,p2__16640_SHARP_){return [cljs.core.str(p1__16639_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16640_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field16641 = (function() {
var hidden_field16641 = null;
var hidden_field16641__1 = (function (name){return hidden_field16641.call(null,name,null);
});
var hidden_field16641__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field16641 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field16641__1.call(this,name);
case 2:
return hidden_field16641__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16641.cljs$core$IFn$_invoke$arity$1 = hidden_field16641__1;
hidden_field16641.cljs$core$IFn$_invoke$arity$2 = hidden_field16641__2;
return hidden_field16641;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16641);
/**
* Creates a new text input field.
*/
sablono.core.text_field16642 = (function() {
var text_field16642 = null;
var text_field16642__1 = (function (name){return text_field16642.call(null,name,null);
});
var text_field16642__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field16642 = function(name,value){
switch(arguments.length){
case 1:
return text_field16642__1.call(this,name);
case 2:
return text_field16642__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16642.cljs$core$IFn$_invoke$arity$1 = text_field16642__1;
text_field16642.cljs$core$IFn$_invoke$arity$2 = text_field16642__2;
return text_field16642;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16642);
/**
* Creates a new password field.
*/
sablono.core.password_field16643 = (function() {
var password_field16643 = null;
var password_field16643__1 = (function (name){return password_field16643.call(null,name,null);
});
var password_field16643__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field16643 = function(name,value){
switch(arguments.length){
case 1:
return password_field16643__1.call(this,name);
case 2:
return password_field16643__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16643.cljs$core$IFn$_invoke$arity$1 = password_field16643__1;
password_field16643.cljs$core$IFn$_invoke$arity$2 = password_field16643__2;
return password_field16643;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16643);
/**
* Creates a new email input field.
*/
sablono.core.email_field16644 = (function() {
var email_field16644 = null;
var email_field16644__1 = (function (name){return email_field16644.call(null,name,null);
});
var email_field16644__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field16644 = function(name,value){
switch(arguments.length){
case 1:
return email_field16644__1.call(this,name);
case 2:
return email_field16644__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16644.cljs$core$IFn$_invoke$arity$1 = email_field16644__1;
email_field16644.cljs$core$IFn$_invoke$arity$2 = email_field16644__2;
return email_field16644;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16644);
/**
* Creates a check box.
*/
sablono.core.check_box16645 = (function() {
var check_box16645 = null;
var check_box16645__1 = (function (name){return check_box16645.call(null,name,null);
});
var check_box16645__2 = (function (name,checked_QMARK_){return check_box16645.call(null,name,checked_QMARK_,"true");
});
var check_box16645__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box16645 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16645__1.call(this,name);
case 2:
return check_box16645__2.call(this,name,checked_QMARK_);
case 3:
return check_box16645__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16645.cljs$core$IFn$_invoke$arity$1 = check_box16645__1;
check_box16645.cljs$core$IFn$_invoke$arity$2 = check_box16645__2;
check_box16645.cljs$core$IFn$_invoke$arity$3 = check_box16645__3;
return check_box16645;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16645);
/**
* Creates a radio button.
*/
sablono.core.radio_button16646 = (function() {
var radio_button16646 = null;
var radio_button16646__1 = (function (group){return radio_button16646.call(null,group,null);
});
var radio_button16646__2 = (function (group,checked_QMARK_){return radio_button16646.call(null,group,checked_QMARK_,"true");
});
var radio_button16646__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button16646 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16646__1.call(this,group);
case 2:
return radio_button16646__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16646__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16646.cljs$core$IFn$_invoke$arity$1 = radio_button16646__1;
radio_button16646.cljs$core$IFn$_invoke$arity$2 = radio_button16646__2;
radio_button16646.cljs$core$IFn$_invoke$arity$3 = radio_button16646__3;
return radio_button16646;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16646);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16647 = (function() {
var select_options16647 = null;
var select_options16647__1 = (function (coll){return select_options16647.call(null,coll,null);
});
var select_options16647__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__16656(s__16657){return (new cljs.core.LazySeq(null,(function (){var s__16657__$1 = s__16657;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16657__$1);if(temp__4092__auto__)
{var s__16657__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16657__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16657__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16659 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16658 = 0;while(true){
if((i__16658 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16658);cljs.core.chunk_append.call(null,b__16659,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16662 = x;var text = cljs.core.nth.call(null,vec__16662,0,null);var val = cljs.core.nth.call(null,vec__16662,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16647.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__16664 = (i__16658 + 1);
i__16658 = G__16664;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16659),iter__16656.call(null,cljs.core.chunk_rest.call(null,s__16657__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16659),null);
}
} else
{var x = cljs.core.first.call(null,s__16657__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16663 = x;var text = cljs.core.nth.call(null,vec__16663,0,null);var val = cljs.core.nth.call(null,vec__16663,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16647.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16656.call(null,cljs.core.rest.call(null,s__16657__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options16647 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16647__1.call(this,coll);
case 2:
return select_options16647__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16647.cljs$core$IFn$_invoke$arity$1 = select_options16647__1;
select_options16647.cljs$core$IFn$_invoke$arity$2 = select_options16647__2;
return select_options16647;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16647);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16665 = (function() {
var drop_down16665 = null;
var drop_down16665__2 = (function (name,options){return drop_down16665.call(null,name,options,null);
});
var drop_down16665__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16665 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16665__2.call(this,name,options);
case 3:
return drop_down16665__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16665.cljs$core$IFn$_invoke$arity$2 = drop_down16665__2;
drop_down16665.cljs$core$IFn$_invoke$arity$3 = drop_down16665__3;
return drop_down16665;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16665);
/**
* Creates a text area element.
*/
sablono.core.text_area16666 = (function() {
var text_area16666 = null;
var text_area16666__1 = (function (name){return text_area16666.call(null,name,null);
});
var text_area16666__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area16666 = function(name,value){
switch(arguments.length){
case 1:
return text_area16666__1.call(this,name);
case 2:
return text_area16666__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16666.cljs$core$IFn$_invoke$arity$1 = text_area16666__1;
text_area16666.cljs$core$IFn$_invoke$arity$2 = text_area16666__2;
return text_area16666;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16666);
/**
* Creates a file upload input.
*/
sablono.core.file_upload16667 = (function file_upload16667(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload16667);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16668 = (function label16668(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16668);
/**
* Creates a submit button.
*/
sablono.core.submit_button16669 = (function submit_button16669(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16669);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16670 = (function reset_button16670(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16670);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16671 = (function() { 
var form_to16671__delegate = function (p__16672,body){var vec__16674 = p__16672;var method = cljs.core.nth.call(null,vec__16674,0,null);var action = cljs.core.nth.call(null,vec__16674,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16671 = function (p__16672,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16671__delegate.call(this,p__16672,body);};
form_to16671.cljs$lang$maxFixedArity = 1;
form_to16671.cljs$lang$applyTo = (function (arglist__16675){
var p__16672 = cljs.core.first(arglist__16675);
var body = cljs.core.rest(arglist__16675);
return form_to16671__delegate(p__16672,body);
});
form_to16671.cljs$core$IFn$_invoke$arity$variadic = form_to16671__delegate;
return form_to16671;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16671);

//# sourceMappingURL=core.js.map