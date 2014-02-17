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
var G__37448__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__37447 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__37447,0,null);var body = cljs.core.nthnext.call(null,vec__37447,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__37448 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__37448__delegate.call(this,args);};
G__37448.cljs$lang$maxFixedArity = 0;
G__37448.cljs$lang$applyTo = (function (arglist__37449){
var args = cljs.core.seq(arglist__37449);
return G__37448__delegate(args);
});
G__37448.cljs$core$IFn$_invoke$arity$variadic = G__37448__delegate;
return G__37448;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__37454(s__37455){return (new cljs.core.LazySeq(null,(function (){var s__37455__$1 = s__37455;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37455__$1);if(temp__4092__auto__)
{var s__37455__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37455__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37455__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37457 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37456 = 0;while(true){
if((i__37456 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__37456);cljs.core.chunk_append.call(null,b__37457,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__37458 = (i__37456 + 1);
i__37456 = G__37458;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37457),iter__37454.call(null,cljs.core.chunk_rest.call(null,s__37455__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37457),null);
}
} else
{var args = cljs.core.first.call(null,s__37455__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__37454.call(null,cljs.core.rest.call(null,s__37455__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__37459_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__37459_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__37464(s__37465){return (new cljs.core.LazySeq(null,(function (){var s__37465__$1 = s__37465;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37465__$1);if(temp__4092__auto__)
{var s__37465__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37465__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37465__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37467 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37466 = 0;while(true){
if((i__37466 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__37466);cljs.core.chunk_append.call(null,b__37467,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__37468 = (i__37466 + 1);
i__37466 = G__37468;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37467),iter__37464.call(null,cljs.core.chunk_rest.call(null,s__37465__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37467),null);
}
} else
{var style = cljs.core.first.call(null,s__37465__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__37464.call(null,cljs.core.rest.call(null,s__37465__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__37469){
var styles = cljs.core.seq(arglist__37469);
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
sablono.core.link_to37470 = (function() { 
var link_to37470__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to37470 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to37470__delegate.call(this,url,content);};
link_to37470.cljs$lang$maxFixedArity = 1;
link_to37470.cljs$lang$applyTo = (function (arglist__37471){
var url = cljs.core.first(arglist__37471);
var content = cljs.core.rest(arglist__37471);
return link_to37470__delegate(url,content);
});
link_to37470.cljs$core$IFn$_invoke$arity$variadic = link_to37470__delegate;
return link_to37470;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37470);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to37472 = (function() { 
var mail_to37472__delegate = function (e_mail,p__37473){var vec__37475 = p__37473;var content = cljs.core.nth.call(null,vec__37475,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to37472 = function (e_mail,var_args){
var p__37473 = null;if (arguments.length > 1) {
  p__37473 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to37472__delegate.call(this,e_mail,p__37473);};
mail_to37472.cljs$lang$maxFixedArity = 1;
mail_to37472.cljs$lang$applyTo = (function (arglist__37476){
var e_mail = cljs.core.first(arglist__37476);
var p__37473 = cljs.core.rest(arglist__37476);
return mail_to37472__delegate(e_mail,p__37473);
});
mail_to37472.cljs$core$IFn$_invoke$arity$variadic = mail_to37472__delegate;
return mail_to37472;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37472);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list37477 = (function unordered_list37477(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__37482(s__37483){return (new cljs.core.LazySeq(null,(function (){var s__37483__$1 = s__37483;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37483__$1);if(temp__4092__auto__)
{var s__37483__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37483__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37483__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37485 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37484 = 0;while(true){
if((i__37484 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37484);cljs.core.chunk_append.call(null,b__37485,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__37486 = (i__37484 + 1);
i__37484 = G__37486;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37485),iter__37482.call(null,cljs.core.chunk_rest.call(null,s__37483__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37485),null);
}
} else
{var x = cljs.core.first.call(null,s__37483__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__37482.call(null,cljs.core.rest.call(null,s__37483__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37477);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list37487 = (function ordered_list37487(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__37492(s__37493){return (new cljs.core.LazySeq(null,(function (){var s__37493__$1 = s__37493;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37493__$1);if(temp__4092__auto__)
{var s__37493__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37493__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37493__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37495 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37494 = 0;while(true){
if((i__37494 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37494);cljs.core.chunk_append.call(null,b__37495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__37496 = (i__37494 + 1);
i__37494 = G__37496;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37495),iter__37492.call(null,cljs.core.chunk_rest.call(null,s__37493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37495),null);
}
} else
{var x = cljs.core.first.call(null,s__37493__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__37492.call(null,cljs.core.rest.call(null,s__37493__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37487);
/**
* Create an image element.
*/
sablono.core.image37497 = (function() {
var image37497 = null;
var image37497__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image37497__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image37497 = function(src,alt){
switch(arguments.length){
case 1:
return image37497__1.call(this,src);
case 2:
return image37497__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image37497.cljs$core$IFn$_invoke$arity$1 = image37497__1;
image37497.cljs$core$IFn$_invoke$arity$2 = image37497__2;
return image37497;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37497);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__37498_SHARP_,p2__37499_SHARP_){return [cljs.core.str(p1__37498_SHARP_),cljs.core.str("["),cljs.core.str(p2__37499_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__37500_SHARP_,p2__37501_SHARP_){return [cljs.core.str(p1__37500_SHARP_),cljs.core.str("-"),cljs.core.str(p2__37501_SHARP_)].join('');
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
sablono.core.hidden_field37502 = (function() {
var hidden_field37502 = null;
var hidden_field37502__1 = (function (name){return hidden_field37502.call(null,name,null);
});
var hidden_field37502__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field37502 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field37502__1.call(this,name);
case 2:
return hidden_field37502__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field37502.cljs$core$IFn$_invoke$arity$1 = hidden_field37502__1;
hidden_field37502.cljs$core$IFn$_invoke$arity$2 = hidden_field37502__2;
return hidden_field37502;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37502);
/**
* Creates a new text input field.
*/
sablono.core.text_field37503 = (function() {
var text_field37503 = null;
var text_field37503__1 = (function (name){return text_field37503.call(null,name,null);
});
var text_field37503__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field37503 = function(name,value){
switch(arguments.length){
case 1:
return text_field37503__1.call(this,name);
case 2:
return text_field37503__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field37503.cljs$core$IFn$_invoke$arity$1 = text_field37503__1;
text_field37503.cljs$core$IFn$_invoke$arity$2 = text_field37503__2;
return text_field37503;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37503);
/**
* Creates a new password field.
*/
sablono.core.password_field37504 = (function() {
var password_field37504 = null;
var password_field37504__1 = (function (name){return password_field37504.call(null,name,null);
});
var password_field37504__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field37504 = function(name,value){
switch(arguments.length){
case 1:
return password_field37504__1.call(this,name);
case 2:
return password_field37504__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field37504.cljs$core$IFn$_invoke$arity$1 = password_field37504__1;
password_field37504.cljs$core$IFn$_invoke$arity$2 = password_field37504__2;
return password_field37504;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37504);
/**
* Creates a new email input field.
*/
sablono.core.email_field37505 = (function() {
var email_field37505 = null;
var email_field37505__1 = (function (name){return email_field37505.call(null,name,null);
});
var email_field37505__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field37505 = function(name,value){
switch(arguments.length){
case 1:
return email_field37505__1.call(this,name);
case 2:
return email_field37505__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field37505.cljs$core$IFn$_invoke$arity$1 = email_field37505__1;
email_field37505.cljs$core$IFn$_invoke$arity$2 = email_field37505__2;
return email_field37505;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37505);
/**
* Creates a check box.
*/
sablono.core.check_box37506 = (function() {
var check_box37506 = null;
var check_box37506__1 = (function (name){return check_box37506.call(null,name,null);
});
var check_box37506__2 = (function (name,checked_QMARK_){return check_box37506.call(null,name,checked_QMARK_,"true");
});
var check_box37506__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box37506 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box37506__1.call(this,name);
case 2:
return check_box37506__2.call(this,name,checked_QMARK_);
case 3:
return check_box37506__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box37506.cljs$core$IFn$_invoke$arity$1 = check_box37506__1;
check_box37506.cljs$core$IFn$_invoke$arity$2 = check_box37506__2;
check_box37506.cljs$core$IFn$_invoke$arity$3 = check_box37506__3;
return check_box37506;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37506);
/**
* Creates a radio button.
*/
sablono.core.radio_button37507 = (function() {
var radio_button37507 = null;
var radio_button37507__1 = (function (group){return radio_button37507.call(null,group,null);
});
var radio_button37507__2 = (function (group,checked_QMARK_){return radio_button37507.call(null,group,checked_QMARK_,"true");
});
var radio_button37507__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button37507 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button37507__1.call(this,group);
case 2:
return radio_button37507__2.call(this,group,checked_QMARK_);
case 3:
return radio_button37507__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button37507.cljs$core$IFn$_invoke$arity$1 = radio_button37507__1;
radio_button37507.cljs$core$IFn$_invoke$arity$2 = radio_button37507__2;
radio_button37507.cljs$core$IFn$_invoke$arity$3 = radio_button37507__3;
return radio_button37507;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37507);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options37508 = (function() {
var select_options37508 = null;
var select_options37508__1 = (function (coll){return select_options37508.call(null,coll,null);
});
var select_options37508__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__37517(s__37518){return (new cljs.core.LazySeq(null,(function (){var s__37518__$1 = s__37518;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37518__$1);if(temp__4092__auto__)
{var s__37518__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37518__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37518__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37520 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37519 = 0;while(true){
if((i__37519 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37519);cljs.core.chunk_append.call(null,b__37520,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37523 = x;var text = cljs.core.nth.call(null,vec__37523,0,null);var val = cljs.core.nth.call(null,vec__37523,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options37508.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__37525 = (i__37519 + 1);
i__37519 = G__37525;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37520),iter__37517.call(null,cljs.core.chunk_rest.call(null,s__37518__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37520),null);
}
} else
{var x = cljs.core.first.call(null,s__37518__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37524 = x;var text = cljs.core.nth.call(null,vec__37524,0,null);var val = cljs.core.nth.call(null,vec__37524,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options37508.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__37517.call(null,cljs.core.rest.call(null,s__37518__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options37508 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options37508__1.call(this,coll);
case 2:
return select_options37508__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options37508.cljs$core$IFn$_invoke$arity$1 = select_options37508__1;
select_options37508.cljs$core$IFn$_invoke$arity$2 = select_options37508__2;
return select_options37508;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37508);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down37526 = (function() {
var drop_down37526 = null;
var drop_down37526__2 = (function (name,options){return drop_down37526.call(null,name,options,null);
});
var drop_down37526__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down37526 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down37526__2.call(this,name,options);
case 3:
return drop_down37526__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down37526.cljs$core$IFn$_invoke$arity$2 = drop_down37526__2;
drop_down37526.cljs$core$IFn$_invoke$arity$3 = drop_down37526__3;
return drop_down37526;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37526);
/**
* Creates a text area element.
*/
sablono.core.text_area37527 = (function() {
var text_area37527 = null;
var text_area37527__1 = (function (name){return text_area37527.call(null,name,null);
});
var text_area37527__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area37527 = function(name,value){
switch(arguments.length){
case 1:
return text_area37527__1.call(this,name);
case 2:
return text_area37527__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area37527.cljs$core$IFn$_invoke$arity$1 = text_area37527__1;
text_area37527.cljs$core$IFn$_invoke$arity$2 = text_area37527__2;
return text_area37527;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37527);
/**
* Creates a file upload input.
*/
sablono.core.file_upload37528 = (function file_upload37528(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload37528);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label37529 = (function label37529(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37529);
/**
* Creates a submit button.
*/
sablono.core.submit_button37530 = (function submit_button37530(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37530);
/**
* Creates a form reset button.
*/
sablono.core.reset_button37531 = (function reset_button37531(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37531);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to37532 = (function() { 
var form_to37532__delegate = function (p__37533,body){var vec__37535 = p__37533;var method = cljs.core.nth.call(null,vec__37535,0,null);var action = cljs.core.nth.call(null,vec__37535,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to37532 = function (p__37533,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to37532__delegate.call(this,p__37533,body);};
form_to37532.cljs$lang$maxFixedArity = 1;
form_to37532.cljs$lang$applyTo = (function (arglist__37536){
var p__37533 = cljs.core.first(arglist__37536);
var body = cljs.core.rest(arglist__37536);
return form_to37532__delegate(p__37533,body);
});
form_to37532.cljs$core$IFn$_invoke$arity$variadic = form_to37532__delegate;
return form_to37532;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37532);
