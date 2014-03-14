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
var G__49924__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__49923 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__49923,0,null);var body = cljs.core.nthnext.call(null,vec__49923,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__49924 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49924__delegate.call(this,args);};
G__49924.cljs$lang$maxFixedArity = 0;
G__49924.cljs$lang$applyTo = (function (arglist__49925){
var args = cljs.core.seq(arglist__49925);
return G__49924__delegate(args);
});
G__49924.cljs$core$IFn$_invoke$arity$variadic = G__49924__delegate;
return G__49924;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__49930(s__49931){return (new cljs.core.LazySeq(null,(function (){var s__49931__$1 = s__49931;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49931__$1);if(temp__4092__auto__)
{var s__49931__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49931__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49931__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49933 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49932 = 0;while(true){
if((i__49932 < size__4157__auto__))
{var args = cljs.core._nth.call(null,c__4156__auto__,i__49932);cljs.core.chunk_append.call(null,b__49933,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__49934 = (i__49932 + 1);
i__49932 = G__49934;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49933),iter__49930.call(null,cljs.core.chunk_rest.call(null,s__49931__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49933),null);
}
} else
{var args = cljs.core.first.call(null,s__49931__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__49930.call(null,cljs.core.rest.call(null,s__49931__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__49935_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__49935_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__49940(s__49941){return (new cljs.core.LazySeq(null,(function (){var s__49941__$1 = s__49941;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49941__$1);if(temp__4092__auto__)
{var s__49941__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49941__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49941__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49943 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49942 = 0;while(true){
if((i__49942 < size__4157__auto__))
{var style = cljs.core._nth.call(null,c__4156__auto__,i__49942);cljs.core.chunk_append.call(null,b__49943,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__49944 = (i__49942 + 1);
i__49942 = G__49944;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49943),iter__49940.call(null,cljs.core.chunk_rest.call(null,s__49941__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49943),null);
}
} else
{var style = cljs.core.first.call(null,s__49941__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__49940.call(null,cljs.core.rest.call(null,s__49941__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__49945){
var styles = cljs.core.seq(arglist__49945);
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
sablono.core.link_to49946 = (function() { 
var link_to49946__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to49946 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to49946__delegate.call(this,url,content);};
link_to49946.cljs$lang$maxFixedArity = 1;
link_to49946.cljs$lang$applyTo = (function (arglist__49947){
var url = cljs.core.first(arglist__49947);
var content = cljs.core.rest(arglist__49947);
return link_to49946__delegate(url,content);
});
link_to49946.cljs$core$IFn$_invoke$arity$variadic = link_to49946__delegate;
return link_to49946;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to49946);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to49948 = (function() { 
var mail_to49948__delegate = function (e_mail,p__49949){var vec__49951 = p__49949;var content = cljs.core.nth.call(null,vec__49951,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to49948 = function (e_mail,var_args){
var p__49949 = null;if (arguments.length > 1) {
  p__49949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to49948__delegate.call(this,e_mail,p__49949);};
mail_to49948.cljs$lang$maxFixedArity = 1;
mail_to49948.cljs$lang$applyTo = (function (arglist__49952){
var e_mail = cljs.core.first(arglist__49952);
var p__49949 = cljs.core.rest(arglist__49952);
return mail_to49948__delegate(e_mail,p__49949);
});
mail_to49948.cljs$core$IFn$_invoke$arity$variadic = mail_to49948__delegate;
return mail_to49948;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to49948);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list49953 = (function unordered_list49953(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4158__auto__ = (function iter__49958(s__49959){return (new cljs.core.LazySeq(null,(function (){var s__49959__$1 = s__49959;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49959__$1);if(temp__4092__auto__)
{var s__49959__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49959__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49959__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49961 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49960 = 0;while(true){
if((i__49960 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__49960);cljs.core.chunk_append.call(null,b__49961,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__49962 = (i__49960 + 1);
i__49960 = G__49962;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49961),iter__49958.call(null,cljs.core.chunk_rest.call(null,s__49959__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49961),null);
}
} else
{var x = cljs.core.first.call(null,s__49959__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__49958.call(null,cljs.core.rest.call(null,s__49959__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list49953);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list49963 = (function ordered_list49963(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4158__auto__ = (function iter__49968(s__49969){return (new cljs.core.LazySeq(null,(function (){var s__49969__$1 = s__49969;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49969__$1);if(temp__4092__auto__)
{var s__49969__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49969__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49969__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49971 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49970 = 0;while(true){
if((i__49970 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__49970);cljs.core.chunk_append.call(null,b__49971,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__49972 = (i__49970 + 1);
i__49970 = G__49972;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49971),iter__49968.call(null,cljs.core.chunk_rest.call(null,s__49969__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49971),null);
}
} else
{var x = cljs.core.first.call(null,s__49969__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__49968.call(null,cljs.core.rest.call(null,s__49969__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list49963);
/**
* Create an image element.
*/
sablono.core.image49973 = (function() {
var image49973 = null;
var image49973__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image49973__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image49973 = function(src,alt){
switch(arguments.length){
case 1:
return image49973__1.call(this,src);
case 2:
return image49973__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image49973.cljs$core$IFn$_invoke$arity$1 = image49973__1;
image49973.cljs$core$IFn$_invoke$arity$2 = image49973__2;
return image49973;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image49973);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__49974_SHARP_,p2__49975_SHARP_){return [cljs.core.str(p1__49974_SHARP_),cljs.core.str("["),cljs.core.str(p2__49975_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__49976_SHARP_,p2__49977_SHARP_){return [cljs.core.str(p1__49976_SHARP_),cljs.core.str("-"),cljs.core.str(p2__49977_SHARP_)].join('');
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
sablono.core.hidden_field49978 = (function() {
var hidden_field49978 = null;
var hidden_field49978__1 = (function (name){return hidden_field49978.call(null,name,null);
});
var hidden_field49978__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field49978 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field49978__1.call(this,name);
case 2:
return hidden_field49978__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field49978.cljs$core$IFn$_invoke$arity$1 = hidden_field49978__1;
hidden_field49978.cljs$core$IFn$_invoke$arity$2 = hidden_field49978__2;
return hidden_field49978;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field49978);
/**
* Creates a new text input field.
*/
sablono.core.text_field49979 = (function() {
var text_field49979 = null;
var text_field49979__1 = (function (name){return text_field49979.call(null,name,null);
});
var text_field49979__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field49979 = function(name,value){
switch(arguments.length){
case 1:
return text_field49979__1.call(this,name);
case 2:
return text_field49979__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field49979.cljs$core$IFn$_invoke$arity$1 = text_field49979__1;
text_field49979.cljs$core$IFn$_invoke$arity$2 = text_field49979__2;
return text_field49979;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field49979);
/**
* Creates a new password field.
*/
sablono.core.password_field49980 = (function() {
var password_field49980 = null;
var password_field49980__1 = (function (name){return password_field49980.call(null,name,null);
});
var password_field49980__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field49980 = function(name,value){
switch(arguments.length){
case 1:
return password_field49980__1.call(this,name);
case 2:
return password_field49980__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field49980.cljs$core$IFn$_invoke$arity$1 = password_field49980__1;
password_field49980.cljs$core$IFn$_invoke$arity$2 = password_field49980__2;
return password_field49980;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field49980);
/**
* Creates a new email input field.
*/
sablono.core.email_field49981 = (function() {
var email_field49981 = null;
var email_field49981__1 = (function (name){return email_field49981.call(null,name,null);
});
var email_field49981__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field49981 = function(name,value){
switch(arguments.length){
case 1:
return email_field49981__1.call(this,name);
case 2:
return email_field49981__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field49981.cljs$core$IFn$_invoke$arity$1 = email_field49981__1;
email_field49981.cljs$core$IFn$_invoke$arity$2 = email_field49981__2;
return email_field49981;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field49981);
/**
* Creates a check box.
*/
sablono.core.check_box49982 = (function() {
var check_box49982 = null;
var check_box49982__1 = (function (name){return check_box49982.call(null,name,null);
});
var check_box49982__2 = (function (name,checked_QMARK_){return check_box49982.call(null,name,checked_QMARK_,"true");
});
var check_box49982__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box49982 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box49982__1.call(this,name);
case 2:
return check_box49982__2.call(this,name,checked_QMARK_);
case 3:
return check_box49982__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box49982.cljs$core$IFn$_invoke$arity$1 = check_box49982__1;
check_box49982.cljs$core$IFn$_invoke$arity$2 = check_box49982__2;
check_box49982.cljs$core$IFn$_invoke$arity$3 = check_box49982__3;
return check_box49982;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box49982);
/**
* Creates a radio button.
*/
sablono.core.radio_button49983 = (function() {
var radio_button49983 = null;
var radio_button49983__1 = (function (group){return radio_button49983.call(null,group,null);
});
var radio_button49983__2 = (function (group,checked_QMARK_){return radio_button49983.call(null,group,checked_QMARK_,"true");
});
var radio_button49983__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button49983 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button49983__1.call(this,group);
case 2:
return radio_button49983__2.call(this,group,checked_QMARK_);
case 3:
return radio_button49983__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button49983.cljs$core$IFn$_invoke$arity$1 = radio_button49983__1;
radio_button49983.cljs$core$IFn$_invoke$arity$2 = radio_button49983__2;
radio_button49983.cljs$core$IFn$_invoke$arity$3 = radio_button49983__3;
return radio_button49983;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button49983);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options49984 = (function() {
var select_options49984 = null;
var select_options49984__1 = (function (coll){return select_options49984.call(null,coll,null);
});
var select_options49984__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__49993(s__49994){return (new cljs.core.LazySeq(null,(function (){var s__49994__$1 = s__49994;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49994__$1);if(temp__4092__auto__)
{var s__49994__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49994__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49994__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49996 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49995 = 0;while(true){
if((i__49995 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__49995);cljs.core.chunk_append.call(null,b__49996,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__49999 = x;var text = cljs.core.nth.call(null,vec__49999,0,null);var val = cljs.core.nth.call(null,vec__49999,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options49984.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__50001 = (i__49995 + 1);
i__49995 = G__50001;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49996),iter__49993.call(null,cljs.core.chunk_rest.call(null,s__49994__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49996),null);
}
} else
{var x = cljs.core.first.call(null,s__49994__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__50000 = x;var text = cljs.core.nth.call(null,vec__50000,0,null);var val = cljs.core.nth.call(null,vec__50000,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options49984.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__49993.call(null,cljs.core.rest.call(null,s__49994__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
});
select_options49984 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options49984__1.call(this,coll);
case 2:
return select_options49984__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options49984.cljs$core$IFn$_invoke$arity$1 = select_options49984__1;
select_options49984.cljs$core$IFn$_invoke$arity$2 = select_options49984__2;
return select_options49984;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options49984);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down50002 = (function() {
var drop_down50002 = null;
var drop_down50002__2 = (function (name,options){return drop_down50002.call(null,name,options,null);
});
var drop_down50002__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down50002 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down50002__2.call(this,name,options);
case 3:
return drop_down50002__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down50002.cljs$core$IFn$_invoke$arity$2 = drop_down50002__2;
drop_down50002.cljs$core$IFn$_invoke$arity$3 = drop_down50002__3;
return drop_down50002;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down50002);
/**
* Creates a text area element.
*/
sablono.core.text_area50003 = (function() {
var text_area50003 = null;
var text_area50003__1 = (function (name){return text_area50003.call(null,name,null);
});
var text_area50003__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area50003 = function(name,value){
switch(arguments.length){
case 1:
return text_area50003__1.call(this,name);
case 2:
return text_area50003__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area50003.cljs$core$IFn$_invoke$arity$1 = text_area50003__1;
text_area50003.cljs$core$IFn$_invoke$arity$2 = text_area50003__2;
return text_area50003;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area50003);
/**
* Creates a file upload input.
*/
sablono.core.file_upload50004 = (function file_upload50004(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload50004);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label50005 = (function label50005(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label50005);
/**
* Creates a submit button.
*/
sablono.core.submit_button50006 = (function submit_button50006(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button50006);
/**
* Creates a form reset button.
*/
sablono.core.reset_button50007 = (function reset_button50007(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button50007);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to50008 = (function() { 
var form_to50008__delegate = function (p__50009,body){var vec__50011 = p__50009;var method = cljs.core.nth.call(null,vec__50011,0,null);var action = cljs.core.nth.call(null,vec__50011,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to50008 = function (p__50009,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to50008__delegate.call(this,p__50009,body);};
form_to50008.cljs$lang$maxFixedArity = 1;
form_to50008.cljs$lang$applyTo = (function (arglist__50012){
var p__50009 = cljs.core.first(arglist__50012);
var body = cljs.core.rest(arglist__50012);
return form_to50008__delegate(p__50009,body);
});
form_to50008.cljs$core$IFn$_invoke$arity$variadic = form_to50008__delegate;
return form_to50008;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to50008);
