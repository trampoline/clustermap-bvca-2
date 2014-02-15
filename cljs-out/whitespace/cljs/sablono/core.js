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
var G__37256__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__37255 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__37255,0,null);var body = cljs.core.nthnext.call(null,vec__37255,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__37256 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__37256__delegate.call(this,args);};
G__37256.cljs$lang$maxFixedArity = 0;
G__37256.cljs$lang$applyTo = (function (arglist__37257){
var args = cljs.core.seq(arglist__37257);
return G__37256__delegate(args);
});
G__37256.cljs$core$IFn$_invoke$arity$variadic = G__37256__delegate;
return G__37256;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__37262(s__37263){return (new cljs.core.LazySeq(null,(function (){var s__37263__$1 = s__37263;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37263__$1);if(temp__4092__auto__)
{var s__37263__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37263__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37263__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37265 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37264 = 0;while(true){
if((i__37264 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__37264);cljs.core.chunk_append.call(null,b__37265,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__37266 = (i__37264 + 1);
i__37264 = G__37266;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37265),iter__37262.call(null,cljs.core.chunk_rest.call(null,s__37263__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37265),null);
}
} else
{var args = cljs.core.first.call(null,s__37263__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__37262.call(null,cljs.core.rest.call(null,s__37263__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__37267_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__37267_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__37272(s__37273){return (new cljs.core.LazySeq(null,(function (){var s__37273__$1 = s__37273;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37273__$1);if(temp__4092__auto__)
{var s__37273__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37273__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37273__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37275 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37274 = 0;while(true){
if((i__37274 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__37274);cljs.core.chunk_append.call(null,b__37275,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__37276 = (i__37274 + 1);
i__37274 = G__37276;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37275),iter__37272.call(null,cljs.core.chunk_rest.call(null,s__37273__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37275),null);
}
} else
{var style = cljs.core.first.call(null,s__37273__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__37272.call(null,cljs.core.rest.call(null,s__37273__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__37277){
var styles = cljs.core.seq(arglist__37277);
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
sablono.core.link_to37278 = (function() { 
var link_to37278__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to37278 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to37278__delegate.call(this,url,content);};
link_to37278.cljs$lang$maxFixedArity = 1;
link_to37278.cljs$lang$applyTo = (function (arglist__37279){
var url = cljs.core.first(arglist__37279);
var content = cljs.core.rest(arglist__37279);
return link_to37278__delegate(url,content);
});
link_to37278.cljs$core$IFn$_invoke$arity$variadic = link_to37278__delegate;
return link_to37278;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37278);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to37280 = (function() { 
var mail_to37280__delegate = function (e_mail,p__37281){var vec__37283 = p__37281;var content = cljs.core.nth.call(null,vec__37283,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to37280 = function (e_mail,var_args){
var p__37281 = null;if (arguments.length > 1) {
  p__37281 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to37280__delegate.call(this,e_mail,p__37281);};
mail_to37280.cljs$lang$maxFixedArity = 1;
mail_to37280.cljs$lang$applyTo = (function (arglist__37284){
var e_mail = cljs.core.first(arglist__37284);
var p__37281 = cljs.core.rest(arglist__37284);
return mail_to37280__delegate(e_mail,p__37281);
});
mail_to37280.cljs$core$IFn$_invoke$arity$variadic = mail_to37280__delegate;
return mail_to37280;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37280);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list37285 = (function unordered_list37285(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__37290(s__37291){return (new cljs.core.LazySeq(null,(function (){var s__37291__$1 = s__37291;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37291__$1);if(temp__4092__auto__)
{var s__37291__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37291__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37291__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37293 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37292 = 0;while(true){
if((i__37292 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37292);cljs.core.chunk_append.call(null,b__37293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__37294 = (i__37292 + 1);
i__37292 = G__37294;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37293),iter__37290.call(null,cljs.core.chunk_rest.call(null,s__37291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37293),null);
}
} else
{var x = cljs.core.first.call(null,s__37291__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__37290.call(null,cljs.core.rest.call(null,s__37291__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37285);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list37295 = (function ordered_list37295(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__37300(s__37301){return (new cljs.core.LazySeq(null,(function (){var s__37301__$1 = s__37301;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37301__$1);if(temp__4092__auto__)
{var s__37301__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37301__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37301__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37303 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37302 = 0;while(true){
if((i__37302 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37302);cljs.core.chunk_append.call(null,b__37303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__37304 = (i__37302 + 1);
i__37302 = G__37304;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37303),iter__37300.call(null,cljs.core.chunk_rest.call(null,s__37301__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37303),null);
}
} else
{var x = cljs.core.first.call(null,s__37301__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__37300.call(null,cljs.core.rest.call(null,s__37301__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37295);
/**
* Create an image element.
*/
sablono.core.image37305 = (function() {
var image37305 = null;
var image37305__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image37305__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image37305 = function(src,alt){
switch(arguments.length){
case 1:
return image37305__1.call(this,src);
case 2:
return image37305__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image37305.cljs$core$IFn$_invoke$arity$1 = image37305__1;
image37305.cljs$core$IFn$_invoke$arity$2 = image37305__2;
return image37305;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37305);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__37306_SHARP_,p2__37307_SHARP_){return [cljs.core.str(p1__37306_SHARP_),cljs.core.str("["),cljs.core.str(p2__37307_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__37308_SHARP_,p2__37309_SHARP_){return [cljs.core.str(p1__37308_SHARP_),cljs.core.str("-"),cljs.core.str(p2__37309_SHARP_)].join('');
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
sablono.core.hidden_field37310 = (function() {
var hidden_field37310 = null;
var hidden_field37310__1 = (function (name){return hidden_field37310.call(null,name,null);
});
var hidden_field37310__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field37310 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field37310__1.call(this,name);
case 2:
return hidden_field37310__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field37310.cljs$core$IFn$_invoke$arity$1 = hidden_field37310__1;
hidden_field37310.cljs$core$IFn$_invoke$arity$2 = hidden_field37310__2;
return hidden_field37310;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37310);
/**
* Creates a new text input field.
*/
sablono.core.text_field37311 = (function() {
var text_field37311 = null;
var text_field37311__1 = (function (name){return text_field37311.call(null,name,null);
});
var text_field37311__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field37311 = function(name,value){
switch(arguments.length){
case 1:
return text_field37311__1.call(this,name);
case 2:
return text_field37311__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field37311.cljs$core$IFn$_invoke$arity$1 = text_field37311__1;
text_field37311.cljs$core$IFn$_invoke$arity$2 = text_field37311__2;
return text_field37311;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37311);
/**
* Creates a new password field.
*/
sablono.core.password_field37312 = (function() {
var password_field37312 = null;
var password_field37312__1 = (function (name){return password_field37312.call(null,name,null);
});
var password_field37312__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field37312 = function(name,value){
switch(arguments.length){
case 1:
return password_field37312__1.call(this,name);
case 2:
return password_field37312__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field37312.cljs$core$IFn$_invoke$arity$1 = password_field37312__1;
password_field37312.cljs$core$IFn$_invoke$arity$2 = password_field37312__2;
return password_field37312;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37312);
/**
* Creates a new email input field.
*/
sablono.core.email_field37313 = (function() {
var email_field37313 = null;
var email_field37313__1 = (function (name){return email_field37313.call(null,name,null);
});
var email_field37313__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field37313 = function(name,value){
switch(arguments.length){
case 1:
return email_field37313__1.call(this,name);
case 2:
return email_field37313__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field37313.cljs$core$IFn$_invoke$arity$1 = email_field37313__1;
email_field37313.cljs$core$IFn$_invoke$arity$2 = email_field37313__2;
return email_field37313;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37313);
/**
* Creates a check box.
*/
sablono.core.check_box37314 = (function() {
var check_box37314 = null;
var check_box37314__1 = (function (name){return check_box37314.call(null,name,null);
});
var check_box37314__2 = (function (name,checked_QMARK_){return check_box37314.call(null,name,checked_QMARK_,"true");
});
var check_box37314__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box37314 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box37314__1.call(this,name);
case 2:
return check_box37314__2.call(this,name,checked_QMARK_);
case 3:
return check_box37314__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box37314.cljs$core$IFn$_invoke$arity$1 = check_box37314__1;
check_box37314.cljs$core$IFn$_invoke$arity$2 = check_box37314__2;
check_box37314.cljs$core$IFn$_invoke$arity$3 = check_box37314__3;
return check_box37314;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37314);
/**
* Creates a radio button.
*/
sablono.core.radio_button37315 = (function() {
var radio_button37315 = null;
var radio_button37315__1 = (function (group){return radio_button37315.call(null,group,null);
});
var radio_button37315__2 = (function (group,checked_QMARK_){return radio_button37315.call(null,group,checked_QMARK_,"true");
});
var radio_button37315__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button37315 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button37315__1.call(this,group);
case 2:
return radio_button37315__2.call(this,group,checked_QMARK_);
case 3:
return radio_button37315__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button37315.cljs$core$IFn$_invoke$arity$1 = radio_button37315__1;
radio_button37315.cljs$core$IFn$_invoke$arity$2 = radio_button37315__2;
radio_button37315.cljs$core$IFn$_invoke$arity$3 = radio_button37315__3;
return radio_button37315;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37315);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options37316 = (function() {
var select_options37316 = null;
var select_options37316__1 = (function (coll){return select_options37316.call(null,coll,null);
});
var select_options37316__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__37325(s__37326){return (new cljs.core.LazySeq(null,(function (){var s__37326__$1 = s__37326;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37326__$1);if(temp__4092__auto__)
{var s__37326__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37326__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37326__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37328 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37327 = 0;while(true){
if((i__37327 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__37327);cljs.core.chunk_append.call(null,b__37328,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37331 = x;var text = cljs.core.nth.call(null,vec__37331,0,null);var val = cljs.core.nth.call(null,vec__37331,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options37316.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__37333 = (i__37327 + 1);
i__37327 = G__37333;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37328),iter__37325.call(null,cljs.core.chunk_rest.call(null,s__37326__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37328),null);
}
} else
{var x = cljs.core.first.call(null,s__37326__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37332 = x;var text = cljs.core.nth.call(null,vec__37332,0,null);var val = cljs.core.nth.call(null,vec__37332,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options37316.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__37325.call(null,cljs.core.rest.call(null,s__37326__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options37316 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options37316__1.call(this,coll);
case 2:
return select_options37316__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options37316.cljs$core$IFn$_invoke$arity$1 = select_options37316__1;
select_options37316.cljs$core$IFn$_invoke$arity$2 = select_options37316__2;
return select_options37316;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37316);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down37334 = (function() {
var drop_down37334 = null;
var drop_down37334__2 = (function (name,options){return drop_down37334.call(null,name,options,null);
});
var drop_down37334__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down37334 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down37334__2.call(this,name,options);
case 3:
return drop_down37334__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down37334.cljs$core$IFn$_invoke$arity$2 = drop_down37334__2;
drop_down37334.cljs$core$IFn$_invoke$arity$3 = drop_down37334__3;
return drop_down37334;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37334);
/**
* Creates a text area element.
*/
sablono.core.text_area37335 = (function() {
var text_area37335 = null;
var text_area37335__1 = (function (name){return text_area37335.call(null,name,null);
});
var text_area37335__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area37335 = function(name,value){
switch(arguments.length){
case 1:
return text_area37335__1.call(this,name);
case 2:
return text_area37335__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area37335.cljs$core$IFn$_invoke$arity$1 = text_area37335__1;
text_area37335.cljs$core$IFn$_invoke$arity$2 = text_area37335__2;
return text_area37335;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37335);
/**
* Creates a file upload input.
*/
sablono.core.file_upload37336 = (function file_upload37336(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload37336);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label37337 = (function label37337(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37337);
/**
* Creates a submit button.
*/
sablono.core.submit_button37338 = (function submit_button37338(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37338);
/**
* Creates a form reset button.
*/
sablono.core.reset_button37339 = (function reset_button37339(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37339);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to37340 = (function() { 
var form_to37340__delegate = function (p__37341,body){var vec__37343 = p__37341;var method = cljs.core.nth.call(null,vec__37343,0,null);var action = cljs.core.nth.call(null,vec__37343,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to37340 = function (p__37341,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to37340__delegate.call(this,p__37341,body);};
form_to37340.cljs$lang$maxFixedArity = 1;
form_to37340.cljs$lang$applyTo = (function (arglist__37344){
var p__37341 = cljs.core.first(arglist__37344);
var body = cljs.core.rest(arglist__37344);
return form_to37340__delegate(p__37341,body);
});
form_to37340.cljs$core$IFn$_invoke$arity$variadic = form_to37340__delegate;
return form_to37340;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37340);
