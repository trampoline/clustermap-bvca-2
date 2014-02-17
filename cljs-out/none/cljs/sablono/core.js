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
var G__16476__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16475 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16475,0,null);var body = cljs.core.nthnext.call(null,vec__16475,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16476 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16476__delegate.call(this,args);};
G__16476.cljs$lang$maxFixedArity = 0;
G__16476.cljs$lang$applyTo = (function (arglist__16477){
var args = cljs.core.seq(arglist__16477);
return G__16476__delegate(args);
});
G__16476.cljs$core$IFn$_invoke$arity$variadic = G__16476__delegate;
return G__16476;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__16482(s__16483){return (new cljs.core.LazySeq(null,(function (){var s__16483__$1 = s__16483;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16483__$1);if(temp__4092__auto__)
{var s__16483__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16483__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16483__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16485 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16484 = 0;while(true){
if((i__16484 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__16484);cljs.core.chunk_append.call(null,b__16485,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16486 = (i__16484 + 1);
i__16484 = G__16486;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16485),iter__16482.call(null,cljs.core.chunk_rest.call(null,s__16483__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16485),null);
}
} else
{var args = cljs.core.first.call(null,s__16483__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16482.call(null,cljs.core.rest.call(null,s__16483__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__16487_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__16487_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__16492(s__16493){return (new cljs.core.LazySeq(null,(function (){var s__16493__$1 = s__16493;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16493__$1);if(temp__4092__auto__)
{var s__16493__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16493__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16493__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16495 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16494 = 0;while(true){
if((i__16494 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__16494);cljs.core.chunk_append.call(null,b__16495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16496 = (i__16494 + 1);
i__16494 = G__16496;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16495),iter__16492.call(null,cljs.core.chunk_rest.call(null,s__16493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16495),null);
}
} else
{var style = cljs.core.first.call(null,s__16493__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16492.call(null,cljs.core.rest.call(null,s__16493__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__16497){
var styles = cljs.core.seq(arglist__16497);
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
sablono.core.link_to16498 = (function() { 
var link_to16498__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16498 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16498__delegate.call(this,url,content);};
link_to16498.cljs$lang$maxFixedArity = 1;
link_to16498.cljs$lang$applyTo = (function (arglist__16499){
var url = cljs.core.first(arglist__16499);
var content = cljs.core.rest(arglist__16499);
return link_to16498__delegate(url,content);
});
link_to16498.cljs$core$IFn$_invoke$arity$variadic = link_to16498__delegate;
return link_to16498;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16498);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16500 = (function() { 
var mail_to16500__delegate = function (e_mail,p__16501){var vec__16503 = p__16501;var content = cljs.core.nth.call(null,vec__16503,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16500 = function (e_mail,var_args){
var p__16501 = null;if (arguments.length > 1) {
  p__16501 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16500__delegate.call(this,e_mail,p__16501);};
mail_to16500.cljs$lang$maxFixedArity = 1;
mail_to16500.cljs$lang$applyTo = (function (arglist__16504){
var e_mail = cljs.core.first(arglist__16504);
var p__16501 = cljs.core.rest(arglist__16504);
return mail_to16500__delegate(e_mail,p__16501);
});
mail_to16500.cljs$core$IFn$_invoke$arity$variadic = mail_to16500__delegate;
return mail_to16500;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16500);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16505 = (function unordered_list16505(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__16510(s__16511){return (new cljs.core.LazySeq(null,(function (){var s__16511__$1 = s__16511;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16511__$1);if(temp__4092__auto__)
{var s__16511__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16511__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16511__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16513 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16512 = 0;while(true){
if((i__16512 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16512);cljs.core.chunk_append.call(null,b__16513,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16514 = (i__16512 + 1);
i__16512 = G__16514;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16513),iter__16510.call(null,cljs.core.chunk_rest.call(null,s__16511__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16513),null);
}
} else
{var x = cljs.core.first.call(null,s__16511__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16510.call(null,cljs.core.rest.call(null,s__16511__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16505);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16515 = (function ordered_list16515(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__16520(s__16521){return (new cljs.core.LazySeq(null,(function (){var s__16521__$1 = s__16521;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16521__$1);if(temp__4092__auto__)
{var s__16521__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16521__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16521__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16523 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16522 = 0;while(true){
if((i__16522 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16522);cljs.core.chunk_append.call(null,b__16523,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16524 = (i__16522 + 1);
i__16522 = G__16524;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16523),iter__16520.call(null,cljs.core.chunk_rest.call(null,s__16521__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16523),null);
}
} else
{var x = cljs.core.first.call(null,s__16521__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16520.call(null,cljs.core.rest.call(null,s__16521__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16515);
/**
* Create an image element.
*/
sablono.core.image16525 = (function() {
var image16525 = null;
var image16525__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16525__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16525 = function(src,alt){
switch(arguments.length){
case 1:
return image16525__1.call(this,src);
case 2:
return image16525__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16525.cljs$core$IFn$_invoke$arity$1 = image16525__1;
image16525.cljs$core$IFn$_invoke$arity$2 = image16525__2;
return image16525;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16525);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16526_SHARP_,p2__16527_SHARP_){return [cljs.core.str(p1__16526_SHARP_),cljs.core.str("["),cljs.core.str(p2__16527_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__16528_SHARP_,p2__16529_SHARP_){return [cljs.core.str(p1__16528_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16529_SHARP_)].join('');
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
sablono.core.hidden_field16530 = (function() {
var hidden_field16530 = null;
var hidden_field16530__1 = (function (name){return hidden_field16530.call(null,name,null);
});
var hidden_field16530__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field16530 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field16530__1.call(this,name);
case 2:
return hidden_field16530__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16530.cljs$core$IFn$_invoke$arity$1 = hidden_field16530__1;
hidden_field16530.cljs$core$IFn$_invoke$arity$2 = hidden_field16530__2;
return hidden_field16530;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16530);
/**
* Creates a new text input field.
*/
sablono.core.text_field16531 = (function() {
var text_field16531 = null;
var text_field16531__1 = (function (name){return text_field16531.call(null,name,null);
});
var text_field16531__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field16531 = function(name,value){
switch(arguments.length){
case 1:
return text_field16531__1.call(this,name);
case 2:
return text_field16531__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16531.cljs$core$IFn$_invoke$arity$1 = text_field16531__1;
text_field16531.cljs$core$IFn$_invoke$arity$2 = text_field16531__2;
return text_field16531;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16531);
/**
* Creates a new password field.
*/
sablono.core.password_field16532 = (function() {
var password_field16532 = null;
var password_field16532__1 = (function (name){return password_field16532.call(null,name,null);
});
var password_field16532__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field16532 = function(name,value){
switch(arguments.length){
case 1:
return password_field16532__1.call(this,name);
case 2:
return password_field16532__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16532.cljs$core$IFn$_invoke$arity$1 = password_field16532__1;
password_field16532.cljs$core$IFn$_invoke$arity$2 = password_field16532__2;
return password_field16532;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16532);
/**
* Creates a new email input field.
*/
sablono.core.email_field16533 = (function() {
var email_field16533 = null;
var email_field16533__1 = (function (name){return email_field16533.call(null,name,null);
});
var email_field16533__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field16533 = function(name,value){
switch(arguments.length){
case 1:
return email_field16533__1.call(this,name);
case 2:
return email_field16533__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16533.cljs$core$IFn$_invoke$arity$1 = email_field16533__1;
email_field16533.cljs$core$IFn$_invoke$arity$2 = email_field16533__2;
return email_field16533;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16533);
/**
* Creates a check box.
*/
sablono.core.check_box16534 = (function() {
var check_box16534 = null;
var check_box16534__1 = (function (name){return check_box16534.call(null,name,null);
});
var check_box16534__2 = (function (name,checked_QMARK_){return check_box16534.call(null,name,checked_QMARK_,"true");
});
var check_box16534__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box16534 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16534__1.call(this,name);
case 2:
return check_box16534__2.call(this,name,checked_QMARK_);
case 3:
return check_box16534__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16534.cljs$core$IFn$_invoke$arity$1 = check_box16534__1;
check_box16534.cljs$core$IFn$_invoke$arity$2 = check_box16534__2;
check_box16534.cljs$core$IFn$_invoke$arity$3 = check_box16534__3;
return check_box16534;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box16534);
/**
* Creates a radio button.
*/
sablono.core.radio_button16535 = (function() {
var radio_button16535 = null;
var radio_button16535__1 = (function (group){return radio_button16535.call(null,group,null);
});
var radio_button16535__2 = (function (group,checked_QMARK_){return radio_button16535.call(null,group,checked_QMARK_,"true");
});
var radio_button16535__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button16535 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16535__1.call(this,group);
case 2:
return radio_button16535__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16535__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16535.cljs$core$IFn$_invoke$arity$1 = radio_button16535__1;
radio_button16535.cljs$core$IFn$_invoke$arity$2 = radio_button16535__2;
radio_button16535.cljs$core$IFn$_invoke$arity$3 = radio_button16535__3;
return radio_button16535;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button16535);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16536 = (function() {
var select_options16536 = null;
var select_options16536__1 = (function (coll){return select_options16536.call(null,coll,null);
});
var select_options16536__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__16545(s__16546){return (new cljs.core.LazySeq(null,(function (){var s__16546__$1 = s__16546;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16546__$1);if(temp__4092__auto__)
{var s__16546__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16546__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16546__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16548 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16547 = 0;while(true){
if((i__16547 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__16547);cljs.core.chunk_append.call(null,b__16548,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16551 = x;var text = cljs.core.nth.call(null,vec__16551,0,null);var val = cljs.core.nth.call(null,vec__16551,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16536.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__16553 = (i__16547 + 1);
i__16547 = G__16553;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16548),iter__16545.call(null,cljs.core.chunk_rest.call(null,s__16546__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16548),null);
}
} else
{var x = cljs.core.first.call(null,s__16546__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__16552 = x;var text = cljs.core.nth.call(null,vec__16552,0,null);var val = cljs.core.nth.call(null,vec__16552,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options16536.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__16545.call(null,cljs.core.rest.call(null,s__16546__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options16536 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16536__1.call(this,coll);
case 2:
return select_options16536__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16536.cljs$core$IFn$_invoke$arity$1 = select_options16536__1;
select_options16536.cljs$core$IFn$_invoke$arity$2 = select_options16536__2;
return select_options16536;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options16536);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16554 = (function() {
var drop_down16554 = null;
var drop_down16554__2 = (function (name,options){return drop_down16554.call(null,name,options,null);
});
var drop_down16554__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down16554 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16554__2.call(this,name,options);
case 3:
return drop_down16554__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16554.cljs$core$IFn$_invoke$arity$2 = drop_down16554__2;
drop_down16554.cljs$core$IFn$_invoke$arity$3 = drop_down16554__3;
return drop_down16554;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down16554);
/**
* Creates a text area element.
*/
sablono.core.text_area16555 = (function() {
var text_area16555 = null;
var text_area16555__1 = (function (name){return text_area16555.call(null,name,null);
});
var text_area16555__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area16555 = function(name,value){
switch(arguments.length){
case 1:
return text_area16555__1.call(this,name);
case 2:
return text_area16555__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16555.cljs$core$IFn$_invoke$arity$1 = text_area16555__1;
text_area16555.cljs$core$IFn$_invoke$arity$2 = text_area16555__2;
return text_area16555;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area16555);
/**
* Creates a file upload input.
*/
sablono.core.file_upload16556 = (function file_upload16556(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload16556);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16557 = (function label16557(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label16557);
/**
* Creates a submit button.
*/
sablono.core.submit_button16558 = (function submit_button16558(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button16558);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16559 = (function reset_button16559(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button16559);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16560 = (function() { 
var form_to16560__delegate = function (p__16561,body){var vec__16563 = p__16561;var method = cljs.core.nth.call(null,vec__16563,0,null);var action = cljs.core.nth.call(null,vec__16563,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to16560 = function (p__16561,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16560__delegate.call(this,p__16561,body);};
form_to16560.cljs$lang$maxFixedArity = 1;
form_to16560.cljs$lang$applyTo = (function (arglist__16564){
var p__16561 = cljs.core.first(arglist__16564);
var body = cljs.core.rest(arglist__16564);
return form_to16560__delegate(p__16561,body);
});
form_to16560.cljs$core$IFn$_invoke$arity$variadic = form_to16560__delegate;
return form_to16560;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to16560);

//# sourceMappingURL=core.js.map