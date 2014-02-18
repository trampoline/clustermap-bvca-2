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
var G__16602__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16601 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16601,0,null);var body = cljs.core.nthnext.call(null,vec__16601,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16602 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16602__delegate.call(this,args);};
G__16602.cljs$lang$maxFixedArity = 0;
G__16602.cljs$lang$applyTo = (function (arglist__16603){
var args = cljs.core.seq(arglist__16603);
return G__16602__delegate(args);
});
G__16602.cljs$core$IFn$_invoke$arity$variadic = G__16602__delegate;
return G__16602;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__16608(s__16609){return (new cljs.core.LazySeq(null,(function (){var s__16609__$1 = s__16609;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16609__$1);if(temp__4092__auto__)
{var s__16609__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16609__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16609__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16611 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16610 = 0;while(true){
if((i__16610 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__16610);cljs.core.chunk_append.call(null,b__16611,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16612 = (i__16610 + 1);
i__16610 = G__16612;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16611),iter__16608.call(null,cljs.core.chunk_rest.call(null,s__16609__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16611),null);
}
} else
{var args = cljs.core.first.call(null,s__16609__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16608.call(null,cljs.core.rest.call(null,s__16609__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__16613_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__16613_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__16618(s__16619){return (new cljs.core.LazySeq(null,(function (){var s__16619__$1 = s__16619;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16619__$1);if(temp__4092__auto__)
{var s__16619__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16619__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16619__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16621 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16620 = 0;while(true){
if((i__16620 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__16620);cljs.core.chunk_append.call(null,b__16621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16622 = (i__16620 + 1);
i__16620 = G__16622;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16621),iter__16618.call(null,cljs.core.chunk_rest.call(null,s__16619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16621),null);
}
} else
{var style = cljs.core.first.call(null,s__16619__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16618.call(null,cljs.core.rest.call(null,s__16619__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__16623){
var styles = cljs.core.seq(arglist__16623);
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
sablono.core.link_to16624 = (function() { 
var link_to16624__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16624 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16624__delegate.call(this,url,content);};
link_to16624.cljs$lang$maxFixedArity = 1;
link_to16624.cljs$lang$applyTo = (function (arglist__16625){
var url = cljs.core.first(arglist__16625);
var content = cljs.core.rest(arglist__16625);
return link_to16624__delegate(url,content);
});
link_to16624.cljs$core$IFn$_invoke$arity$variadic = link_to16624__delegate;
return link_to16624;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16624);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16626 = (function() { 
var mail_to16626__delegate = function (e_mail,p__16627){var vec__16629 = p__16627;var content = cljs.core.nth.call(null,vec__16629,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16626 = function (e_mail,var_args){
var p__16627 = null;if (arguments.length > 1) {
  p__16627 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16626__delegate.call(this,e_mail,p__16627);};
mail_to16626.cljs$lang$maxFixedArity = 1;
mail_to16626.cljs$lang$applyTo = (function (arglist__16630){
var e_mail = cljs.core.first(arglist__16630);
var p__16627 = cljs.core.rest(arglist__16630);
return mail_to16626__delegate(e_mail,p__16627);
});
mail_to16626.cljs$core$IFn$_invoke$arity$variadic = mail_to16626__delegate;
return mail_to16626;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16626);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16631 = (function unordered_list16631(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__16636(s__16637){return (new cljs.core.LazySeq(null,(function (){var s__16637__$1 = s__16637;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16637__$1);if(temp__4092__auto__)
{var s__16637__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16637__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16637__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16639 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16638 = 0;while(true){
if((i__16638 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16638);cljs.core.chunk_append.call(null,b__16639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16640 = (i__16638 + 1);
i__16638 = G__16640;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16639),iter__16636.call(null,cljs.core.chunk_rest.call(null,s__16637__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16639),null);
}
} else
{var x = cljs.core.first.call(null,s__16637__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16636.call(null,cljs.core.rest.call(null,s__16637__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16631);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16641 = (function ordered_list16641(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__16646(s__16647){return (new cljs.core.LazySeq(null,(function (){var s__16647__$1 = s__16647;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16647__$1);if(temp__4092__auto__)
{var s__16647__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16647__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16647__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16649 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16648 = 0;while(true){
if((i__16648 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16648);cljs.core.chunk_append.call(null,b__16649,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16650 = (i__16648 + 1);
i__16648 = G__16650;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16649),iter__16646.call(null,cljs.core.chunk_rest.call(null,s__16647__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16649),null);
}
} else
{var x = cljs.core.first.call(null,s__16647__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16646.call(null,cljs.core.rest.call(null,s__16647__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16641);
/**
* Create an image element.
*/
sablono.core.image16651 = (function() {
var image16651 = null;
var image16651__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16651__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16651 = function(src,alt){
switch(arguments.length){
case 1:
return image16651__1.call(this,src);
case 2:
return image16651__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16651.cljs$core$IFn$_invoke$arity$1 = image16651__1;
image16651.cljs$core$IFn$_invoke$arity$2 = image16651__2;
return image16651;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16651);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16652_SHARP_,p2__16653_SHARP_){return [cljs.core.str(p1__16652_SHARP_),cljs.core.str("["),cljs.core.str(p2__16653_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__16654_SHARP_,p2__16655_SHARP_){return [cljs.core.str(p1__16654_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16655_SHARP_)].join('');
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
sablono.core.hidden_field16656 = (function() {
var hidden_field16656 = null;
var hidden_field16656__1 = (function (name){return hidden_field16656.call(null,name,null);
});
var hidden_field16656__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field16656 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field16656__1.call(this,name);
case 2:
return hidden_field16656__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16656.cljs$core$IFn$_invoke$arity$1 = hidden_field16656__1;
hidden_field16656.cljs$core$IFn$_invoke$arity$2 = hidden_field16656__2;
return hidden_field16656;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16656);
/**
* Creates a new text input field.
*/
sablono.core.text_field16657 = (function() {
var text_field16657 = null;
var text_field16657__1 = (function (name){return text_field16657.call(null,name,null);
});
var text_field16657__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field16657 = function(name,value){
switch(arguments.length){
case 1:
return text_field16657__1.call(this,name);
case 2:
return text_field16657__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16657.cljs$core$IFn$_invoke$arity$1 = text_field16657__1;
text_field16657.cljs$core$IFn$_invoke$arity$2 = text_field16657__2;
return text_field16657;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16657);
/**
* Creates a new password field.
*/
sablono.core.password_field16658 = (function() {
var password_field16658 = null;
var password_field16658__1 = (function (name){return password_field16658.call(null,name,null);
});
var password_field16658__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field16658 = function(name,value){
switch(arguments.length){
case 1:
return password_field16658__1.call(this,name);
case 2:
return password_field16658__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16658.cljs$core$IFn$_invoke$arity$1 = password_field16658__1;
password_field16658.cljs$core$IFn$_invoke$arity$2 = password_field16658__2;
return password_field16658;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16658);
/**
* Creates a new email input field.
*/
sablono.core.email_field16659 = (function() {
var email_field16659 = null;
var email_field16659__1 = (function (name){return email_field16659.call(null,name,null);
});
var email_field16659__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field16659 = function(name,value){
switch(arguments.length){
case 1:
return email_field16659__1.call(this,name);
case 2:
return email_field16659__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16659.cljs$core$IFn$_invoke$arity$1 = email_field16659__1;
email_field16659.cljs$core$IFn$_invoke$arity$2 = email_field16659__2;
return email_field16659;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16659);
/**
* Creates a check box.
*/
sablono.core.check_box16660 = (function() {
var check_box16660 = null;
var check_box16660__1 = (function (name){return check_box16660.call(null,name,null);
});
var check_box16660__2 = (function (name,checked_QMARK_){return check_box16660.call(null,name,checked_QMARK_,"true");
});
var check_box16660__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box16660 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16660__1.call(this,name);
case 2:
return check_box16660__2.call(this,name,checked_QMARK_);
case 3:
return check_box16660__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16660.cljs$core$IFn$_invoke$arity$1 = check_box16660__1;
check_box16660.cljs$core$IFn$_invoke$arity$2 = check_box16660__2;
check_box16660.cljs$core$IFn$_invoke$arity$3 = check_box16660__3;
return check_box16660;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16660);
/**
* Creates a radio button.
*/
sablono.core.radio_button16661 = (function() {
var radio_button16661 = null;
var radio_button16661__1 = (function (group){return radio_button16661.call(null,group,null);
});
var radio_button16661__2 = (function (group,checked_QMARK_){return radio_button16661.call(null,group,checked_QMARK_,"true");
});
var radio_button16661__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button16661 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16661__1.call(this,group);
case 2:
return radio_button16661__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16661__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16661.cljs$core$IFn$_invoke$arity$1 = radio_button16661__1;
radio_button16661.cljs$core$IFn$_invoke$arity$2 = radio_button16661__2;
radio_button16661.cljs$core$IFn$_invoke$arity$3 = radio_button16661__3;
return radio_button16661;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16661);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16662 = (function() {
var select_options16662 = null;
var select_options16662__1 = (function (coll){return select_options16662.call(null,coll,null);
});
var select_options16662__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__16671(s__16672){return (new cljs.core.LazySeq(null,(function (){var s__16672__$1 = s__16672;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16672__$1);if(temp__4092__auto__)
{var s__16672__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16672__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16672__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16674 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16673 = 0;while(true){
if((i__16673 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16673);cljs.core.chunk_append.call(null,b__16674,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16677 = x;var text = cljs.core.nth.call(null,vec__16677,0,null);var val = cljs.core.nth.call(null,vec__16677,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16662.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__16679 = (i__16673 + 1);
i__16673 = G__16679;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16674),iter__16671.call(null,cljs.core.chunk_rest.call(null,s__16672__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16674),null);
}
} else
{var x = cljs.core.first.call(null,s__16672__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16678 = x;var text = cljs.core.nth.call(null,vec__16678,0,null);var val = cljs.core.nth.call(null,vec__16678,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16662.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16671.call(null,cljs.core.rest.call(null,s__16672__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options16662 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16662__1.call(this,coll);
case 2:
return select_options16662__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16662.cljs$core$IFn$_invoke$arity$1 = select_options16662__1;
select_options16662.cljs$core$IFn$_invoke$arity$2 = select_options16662__2;
return select_options16662;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16662);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16680 = (function() {
var drop_down16680 = null;
var drop_down16680__2 = (function (name,options){return drop_down16680.call(null,name,options,null);
});
var drop_down16680__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16680 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16680__2.call(this,name,options);
case 3:
return drop_down16680__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16680.cljs$core$IFn$_invoke$arity$2 = drop_down16680__2;
drop_down16680.cljs$core$IFn$_invoke$arity$3 = drop_down16680__3;
return drop_down16680;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16680);
/**
* Creates a text area element.
*/
sablono.core.text_area16681 = (function() {
var text_area16681 = null;
var text_area16681__1 = (function (name){return text_area16681.call(null,name,null);
});
var text_area16681__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area16681 = function(name,value){
switch(arguments.length){
case 1:
return text_area16681__1.call(this,name);
case 2:
return text_area16681__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16681.cljs$core$IFn$_invoke$arity$1 = text_area16681__1;
text_area16681.cljs$core$IFn$_invoke$arity$2 = text_area16681__2;
return text_area16681;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16681);
/**
* Creates a file upload input.
*/
sablono.core.file_upload16682 = (function file_upload16682(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload16682);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16683 = (function label16683(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16683);
/**
* Creates a submit button.
*/
sablono.core.submit_button16684 = (function submit_button16684(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16684);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16685 = (function reset_button16685(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16685);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16686 = (function() { 
var form_to16686__delegate = function (p__16687,body){var vec__16689 = p__16687;var method = cljs.core.nth.call(null,vec__16689,0,null);var action = cljs.core.nth.call(null,vec__16689,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16686 = function (p__16687,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16686__delegate.call(this,p__16687,body);};
form_to16686.cljs$lang$maxFixedArity = 1;
form_to16686.cljs$lang$applyTo = (function (arglist__16690){
var p__16687 = cljs.core.first(arglist__16690);
var body = cljs.core.rest(arglist__16690);
return form_to16686__delegate(p__16687,body);
});
form_to16686.cljs$core$IFn$_invoke$arity$variadic = form_to16686__delegate;
return form_to16686;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16686);

//# sourceMappingURL=core.js.map