// Compiled by ClojureScript 0.0-2268
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
var G__55108__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__55107 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__55107,(0),null);var body = cljs.core.nthnext.call(null,vec__55107,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__55108 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__55108__delegate.call(this,args);};
G__55108.cljs$lang$maxFixedArity = 0;
G__55108.cljs$lang$applyTo = (function (arglist__55109){
var args = cljs.core.seq(arglist__55109);
return G__55108__delegate(args);
});
G__55108.cljs$core$IFn$_invoke$arity$variadic = G__55108__delegate;
return G__55108;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__55114(s__55115){return (new cljs.core.LazySeq(null,(function (){var s__55115__$1 = s__55115;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55115__$1);if(temp__4126__auto__)
{var s__55115__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55115__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__55115__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__55117 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__55116 = (0);while(true){
if((i__55116 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__55116);cljs.core.chunk_append.call(null,b__55117,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__55118 = (i__55116 + (1));
i__55116 = G__55118;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55117),iter__55114.call(null,cljs.core.chunk_rest.call(null,s__55115__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55117),null);
}
} else
{var args = cljs.core.first.call(null,s__55115__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__55114.call(null,cljs.core.rest.call(null,s__55115__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__55123(s__55124){return (new cljs.core.LazySeq(null,(function (){var s__55124__$1 = s__55124;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55124__$1);if(temp__4126__auto__)
{var s__55124__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55124__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__55124__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__55126 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__55125 = (0);while(true){
if((i__55125 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__55125);cljs.core.chunk_append.call(null,b__55126,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__55127 = (i__55125 + (1));
i__55125 = G__55127;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55126),iter__55123.call(null,cljs.core.chunk_rest.call(null,s__55124__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55126),null);
}
} else
{var style = cljs.core.first.call(null,s__55124__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__55123.call(null,cljs.core.rest.call(null,s__55124__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__55128){
var styles = cljs.core.seq(arglist__55128);
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
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to55129 = (function() { 
var link_to55129__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to55129 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to55129__delegate.call(this,url,content);};
link_to55129.cljs$lang$maxFixedArity = 1;
link_to55129.cljs$lang$applyTo = (function (arglist__55130){
var url = cljs.core.first(arglist__55130);
var content = cljs.core.rest(arglist__55130);
return link_to55129__delegate(url,content);
});
link_to55129.cljs$core$IFn$_invoke$arity$variadic = link_to55129__delegate;
return link_to55129;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to55129);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to55131 = (function() { 
var mail_to55131__delegate = function (e_mail,p__55132){var vec__55134 = p__55132;var content = cljs.core.nth.call(null,vec__55134,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to55131 = function (e_mail,var_args){
var p__55132 = null;if (arguments.length > 1) {
  p__55132 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to55131__delegate.call(this,e_mail,p__55132);};
mail_to55131.cljs$lang$maxFixedArity = 1;
mail_to55131.cljs$lang$applyTo = (function (arglist__55135){
var e_mail = cljs.core.first(arglist__55135);
var p__55132 = cljs.core.rest(arglist__55135);
return mail_to55131__delegate(e_mail,p__55132);
});
mail_to55131.cljs$core$IFn$_invoke$arity$variadic = mail_to55131__delegate;
return mail_to55131;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to55131);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list55136 = (function unordered_list55136(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__55141(s__55142){return (new cljs.core.LazySeq(null,(function (){var s__55142__$1 = s__55142;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55142__$1);if(temp__4126__auto__)
{var s__55142__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55142__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__55142__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__55144 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__55143 = (0);while(true){
if((i__55143 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__55143);cljs.core.chunk_append.call(null,b__55144,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__55145 = (i__55143 + (1));
i__55143 = G__55145;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55144),iter__55141.call(null,cljs.core.chunk_rest.call(null,s__55142__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55144),null);
}
} else
{var x = cljs.core.first.call(null,s__55142__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__55141.call(null,cljs.core.rest.call(null,s__55142__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list55136);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list55146 = (function ordered_list55146(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__55151(s__55152){return (new cljs.core.LazySeq(null,(function (){var s__55152__$1 = s__55152;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55152__$1);if(temp__4126__auto__)
{var s__55152__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55152__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__55152__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__55154 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__55153 = (0);while(true){
if((i__55153 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__55153);cljs.core.chunk_append.call(null,b__55154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__55155 = (i__55153 + (1));
i__55153 = G__55155;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55154),iter__55151.call(null,cljs.core.chunk_rest.call(null,s__55152__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55154),null);
}
} else
{var x = cljs.core.first.call(null,s__55152__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__55151.call(null,cljs.core.rest.call(null,s__55152__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list55146);
/**
* Create an image element.
*/
sablono.core.image55156 = (function() {
var image55156 = null;
var image55156__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image55156__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image55156 = function(src,alt){
switch(arguments.length){
case 1:
return image55156__1.call(this,src);
case 2:
return image55156__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image55156.cljs$core$IFn$_invoke$arity$1 = image55156__1;
image55156.cljs$core$IFn$_invoke$arity$2 = image55156__2;
return image55156;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image55156);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__55157_SHARP_,p2__55158_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55157_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__55158_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__55159_SHARP_,p2__55160_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55159_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__55160_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field55161 = (function() {
var color_field55161 = null;
var color_field55161__1 = (function (name__10242__auto__){return color_field55161.call(null,name__10242__auto__,null);
});
var color_field55161__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10242__auto__,value__10243__auto__);
});
color_field55161 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return color_field55161__1.call(this,name__10242__auto__);
case 2:
return color_field55161__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field55161.cljs$core$IFn$_invoke$arity$1 = color_field55161__1;
color_field55161.cljs$core$IFn$_invoke$arity$2 = color_field55161__2;
return color_field55161;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field55161);
/**
* Creates a date input field.
*/
sablono.core.date_field55162 = (function() {
var date_field55162 = null;
var date_field55162__1 = (function (name__10242__auto__){return date_field55162.call(null,name__10242__auto__,null);
});
var date_field55162__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10242__auto__,value__10243__auto__);
});
date_field55162 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return date_field55162__1.call(this,name__10242__auto__);
case 2:
return date_field55162__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field55162.cljs$core$IFn$_invoke$arity$1 = date_field55162__1;
date_field55162.cljs$core$IFn$_invoke$arity$2 = date_field55162__2;
return date_field55162;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field55162);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field55163 = (function() {
var datetime_field55163 = null;
var datetime_field55163__1 = (function (name__10242__auto__){return datetime_field55163.call(null,name__10242__auto__,null);
});
var datetime_field55163__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10242__auto__,value__10243__auto__);
});
datetime_field55163 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_field55163__1.call(this,name__10242__auto__);
case 2:
return datetime_field55163__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field55163.cljs$core$IFn$_invoke$arity$1 = datetime_field55163__1;
datetime_field55163.cljs$core$IFn$_invoke$arity$2 = datetime_field55163__2;
return datetime_field55163;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field55163);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field55164 = (function() {
var datetime_local_field55164 = null;
var datetime_local_field55164__1 = (function (name__10242__auto__){return datetime_local_field55164.call(null,name__10242__auto__,null);
});
var datetime_local_field55164__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10242__auto__,value__10243__auto__);
});
datetime_local_field55164 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_local_field55164__1.call(this,name__10242__auto__);
case 2:
return datetime_local_field55164__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field55164.cljs$core$IFn$_invoke$arity$1 = datetime_local_field55164__1;
datetime_local_field55164.cljs$core$IFn$_invoke$arity$2 = datetime_local_field55164__2;
return datetime_local_field55164;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field55164);
/**
* Creates a email input field.
*/
sablono.core.email_field55165 = (function() {
var email_field55165 = null;
var email_field55165__1 = (function (name__10242__auto__){return email_field55165.call(null,name__10242__auto__,null);
});
var email_field55165__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10242__auto__,value__10243__auto__);
});
email_field55165 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return email_field55165__1.call(this,name__10242__auto__);
case 2:
return email_field55165__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field55165.cljs$core$IFn$_invoke$arity$1 = email_field55165__1;
email_field55165.cljs$core$IFn$_invoke$arity$2 = email_field55165__2;
return email_field55165;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field55165);
/**
* Creates a file input field.
*/
sablono.core.file_field55166 = (function() {
var file_field55166 = null;
var file_field55166__1 = (function (name__10242__auto__){return file_field55166.call(null,name__10242__auto__,null);
});
var file_field55166__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10242__auto__,value__10243__auto__);
});
file_field55166 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return file_field55166__1.call(this,name__10242__auto__);
case 2:
return file_field55166__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field55166.cljs$core$IFn$_invoke$arity$1 = file_field55166__1;
file_field55166.cljs$core$IFn$_invoke$arity$2 = file_field55166__2;
return file_field55166;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field55166);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field55167 = (function() {
var hidden_field55167 = null;
var hidden_field55167__1 = (function (name__10242__auto__){return hidden_field55167.call(null,name__10242__auto__,null);
});
var hidden_field55167__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10242__auto__,value__10243__auto__);
});
hidden_field55167 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return hidden_field55167__1.call(this,name__10242__auto__);
case 2:
return hidden_field55167__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field55167.cljs$core$IFn$_invoke$arity$1 = hidden_field55167__1;
hidden_field55167.cljs$core$IFn$_invoke$arity$2 = hidden_field55167__2;
return hidden_field55167;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field55167);
/**
* Creates a month input field.
*/
sablono.core.month_field55168 = (function() {
var month_field55168 = null;
var month_field55168__1 = (function (name__10242__auto__){return month_field55168.call(null,name__10242__auto__,null);
});
var month_field55168__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10242__auto__,value__10243__auto__);
});
month_field55168 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return month_field55168__1.call(this,name__10242__auto__);
case 2:
return month_field55168__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field55168.cljs$core$IFn$_invoke$arity$1 = month_field55168__1;
month_field55168.cljs$core$IFn$_invoke$arity$2 = month_field55168__2;
return month_field55168;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field55168);
/**
* Creates a number input field.
*/
sablono.core.number_field55169 = (function() {
var number_field55169 = null;
var number_field55169__1 = (function (name__10242__auto__){return number_field55169.call(null,name__10242__auto__,null);
});
var number_field55169__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10242__auto__,value__10243__auto__);
});
number_field55169 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return number_field55169__1.call(this,name__10242__auto__);
case 2:
return number_field55169__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field55169.cljs$core$IFn$_invoke$arity$1 = number_field55169__1;
number_field55169.cljs$core$IFn$_invoke$arity$2 = number_field55169__2;
return number_field55169;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field55169);
/**
* Creates a password input field.
*/
sablono.core.password_field55170 = (function() {
var password_field55170 = null;
var password_field55170__1 = (function (name__10242__auto__){return password_field55170.call(null,name__10242__auto__,null);
});
var password_field55170__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10242__auto__,value__10243__auto__);
});
password_field55170 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return password_field55170__1.call(this,name__10242__auto__);
case 2:
return password_field55170__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field55170.cljs$core$IFn$_invoke$arity$1 = password_field55170__1;
password_field55170.cljs$core$IFn$_invoke$arity$2 = password_field55170__2;
return password_field55170;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field55170);
/**
* Creates a range input field.
*/
sablono.core.range_field55171 = (function() {
var range_field55171 = null;
var range_field55171__1 = (function (name__10242__auto__){return range_field55171.call(null,name__10242__auto__,null);
});
var range_field55171__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10242__auto__,value__10243__auto__);
});
range_field55171 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return range_field55171__1.call(this,name__10242__auto__);
case 2:
return range_field55171__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field55171.cljs$core$IFn$_invoke$arity$1 = range_field55171__1;
range_field55171.cljs$core$IFn$_invoke$arity$2 = range_field55171__2;
return range_field55171;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field55171);
/**
* Creates a search input field.
*/
sablono.core.search_field55172 = (function() {
var search_field55172 = null;
var search_field55172__1 = (function (name__10242__auto__){return search_field55172.call(null,name__10242__auto__,null);
});
var search_field55172__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10242__auto__,value__10243__auto__);
});
search_field55172 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return search_field55172__1.call(this,name__10242__auto__);
case 2:
return search_field55172__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field55172.cljs$core$IFn$_invoke$arity$1 = search_field55172__1;
search_field55172.cljs$core$IFn$_invoke$arity$2 = search_field55172__2;
return search_field55172;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field55172);
/**
* Creates a tel input field.
*/
sablono.core.tel_field55173 = (function() {
var tel_field55173 = null;
var tel_field55173__1 = (function (name__10242__auto__){return tel_field55173.call(null,name__10242__auto__,null);
});
var tel_field55173__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10242__auto__,value__10243__auto__);
});
tel_field55173 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return tel_field55173__1.call(this,name__10242__auto__);
case 2:
return tel_field55173__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field55173.cljs$core$IFn$_invoke$arity$1 = tel_field55173__1;
tel_field55173.cljs$core$IFn$_invoke$arity$2 = tel_field55173__2;
return tel_field55173;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field55173);
/**
* Creates a text input field.
*/
sablono.core.text_field55174 = (function() {
var text_field55174 = null;
var text_field55174__1 = (function (name__10242__auto__){return text_field55174.call(null,name__10242__auto__,null);
});
var text_field55174__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10242__auto__,value__10243__auto__);
});
text_field55174 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return text_field55174__1.call(this,name__10242__auto__);
case 2:
return text_field55174__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field55174.cljs$core$IFn$_invoke$arity$1 = text_field55174__1;
text_field55174.cljs$core$IFn$_invoke$arity$2 = text_field55174__2;
return text_field55174;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field55174);
/**
* Creates a time input field.
*/
sablono.core.time_field55175 = (function() {
var time_field55175 = null;
var time_field55175__1 = (function (name__10242__auto__){return time_field55175.call(null,name__10242__auto__,null);
});
var time_field55175__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10242__auto__,value__10243__auto__);
});
time_field55175 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return time_field55175__1.call(this,name__10242__auto__);
case 2:
return time_field55175__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field55175.cljs$core$IFn$_invoke$arity$1 = time_field55175__1;
time_field55175.cljs$core$IFn$_invoke$arity$2 = time_field55175__2;
return time_field55175;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field55175);
/**
* Creates a url input field.
*/
sablono.core.url_field55176 = (function() {
var url_field55176 = null;
var url_field55176__1 = (function (name__10242__auto__){return url_field55176.call(null,name__10242__auto__,null);
});
var url_field55176__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10242__auto__,value__10243__auto__);
});
url_field55176 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return url_field55176__1.call(this,name__10242__auto__);
case 2:
return url_field55176__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field55176.cljs$core$IFn$_invoke$arity$1 = url_field55176__1;
url_field55176.cljs$core$IFn$_invoke$arity$2 = url_field55176__2;
return url_field55176;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field55176);
/**
* Creates a week input field.
*/
sablono.core.week_field55177 = (function() {
var week_field55177 = null;
var week_field55177__1 = (function (name__10242__auto__){return week_field55177.call(null,name__10242__auto__,null);
});
var week_field55177__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10242__auto__,value__10243__auto__);
});
week_field55177 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return week_field55177__1.call(this,name__10242__auto__);
case 2:
return week_field55177__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field55177.cljs$core$IFn$_invoke$arity$1 = week_field55177__1;
week_field55177.cljs$core$IFn$_invoke$arity$2 = week_field55177__2;
return week_field55177;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field55177);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box55178 = (function() {
var check_box55178 = null;
var check_box55178__1 = (function (name){return check_box55178.call(null,name,null);
});
var check_box55178__2 = (function (name,checked_QMARK_){return check_box55178.call(null,name,checked_QMARK_,"true");
});
var check_box55178__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box55178 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box55178__1.call(this,name);
case 2:
return check_box55178__2.call(this,name,checked_QMARK_);
case 3:
return check_box55178__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box55178.cljs$core$IFn$_invoke$arity$1 = check_box55178__1;
check_box55178.cljs$core$IFn$_invoke$arity$2 = check_box55178__2;
check_box55178.cljs$core$IFn$_invoke$arity$3 = check_box55178__3;
return check_box55178;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box55178);
/**
* Creates a radio button.
*/
sablono.core.radio_button55179 = (function() {
var radio_button55179 = null;
var radio_button55179__1 = (function (group){return radio_button55179.call(null,group,null);
});
var radio_button55179__2 = (function (group,checked_QMARK_){return radio_button55179.call(null,group,checked_QMARK_,"true");
});
var radio_button55179__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button55179 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button55179__1.call(this,group);
case 2:
return radio_button55179__2.call(this,group,checked_QMARK_);
case 3:
return radio_button55179__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button55179.cljs$core$IFn$_invoke$arity$1 = radio_button55179__1;
radio_button55179.cljs$core$IFn$_invoke$arity$2 = radio_button55179__2;
radio_button55179.cljs$core$IFn$_invoke$arity$3 = radio_button55179__3;
return radio_button55179;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button55179);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options55180 = (function() {
var select_options55180 = null;
var select_options55180__1 = (function (coll){return select_options55180.call(null,coll,null);
});
var select_options55180__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__55189(s__55190){return (new cljs.core.LazySeq(null,(function (){var s__55190__$1 = s__55190;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55190__$1);if(temp__4126__auto__)
{var s__55190__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55190__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__55190__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__55192 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__55191 = (0);while(true){
if((i__55191 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__55191);cljs.core.chunk_append.call(null,b__55192,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__55195 = x;var text = cljs.core.nth.call(null,vec__55195,(0),null);var val = cljs.core.nth.call(null,vec__55195,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__55195,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options55180.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__55197 = (i__55191 + (1));
i__55191 = G__55197;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55192),iter__55189.call(null,cljs.core.chunk_rest.call(null,s__55190__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55192),null);
}
} else
{var x = cljs.core.first.call(null,s__55190__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__55196 = x;var text = cljs.core.nth.call(null,vec__55196,(0),null);var val = cljs.core.nth.call(null,vec__55196,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__55196,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options55180.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__55189.call(null,cljs.core.rest.call(null,s__55190__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options55180 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options55180__1.call(this,coll);
case 2:
return select_options55180__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options55180.cljs$core$IFn$_invoke$arity$1 = select_options55180__1;
select_options55180.cljs$core$IFn$_invoke$arity$2 = select_options55180__2;
return select_options55180;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options55180);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down55198 = (function() {
var drop_down55198 = null;
var drop_down55198__2 = (function (name,options){return drop_down55198.call(null,name,options,null);
});
var drop_down55198__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down55198 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down55198__2.call(this,name,options);
case 3:
return drop_down55198__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down55198.cljs$core$IFn$_invoke$arity$2 = drop_down55198__2;
drop_down55198.cljs$core$IFn$_invoke$arity$3 = drop_down55198__3;
return drop_down55198;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down55198);
/**
* Creates a text area element.
*/
sablono.core.text_area55199 = (function() {
var text_area55199 = null;
var text_area55199__1 = (function (name){return text_area55199.call(null,name,null);
});
var text_area55199__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area55199 = function(name,value){
switch(arguments.length){
case 1:
return text_area55199__1.call(this,name);
case 2:
return text_area55199__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area55199.cljs$core$IFn$_invoke$arity$1 = text_area55199__1;
text_area55199.cljs$core$IFn$_invoke$arity$2 = text_area55199__2;
return text_area55199;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area55199);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label55200 = (function label55200(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label55200);
/**
* Creates a submit button.
*/
sablono.core.submit_button55201 = (function submit_button55201(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button55201);
/**
* Creates a form reset button.
*/
sablono.core.reset_button55202 = (function reset_button55202(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button55202);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to55203 = (function() { 
var form_to55203__delegate = function (p__55204,body){var vec__55206 = p__55204;var method = cljs.core.nth.call(null,vec__55206,(0),null);var action = cljs.core.nth.call(null,vec__55206,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to55203 = function (p__55204,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to55203__delegate.call(this,p__55204,body);};
form_to55203.cljs$lang$maxFixedArity = 1;
form_to55203.cljs$lang$applyTo = (function (arglist__55207){
var p__55204 = cljs.core.first(arglist__55207);
var body = cljs.core.rest(arglist__55207);
return form_to55203__delegate(p__55204,body);
});
form_to55203.cljs$core$IFn$_invoke$arity$variadic = form_to55203__delegate;
return form_to55203;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to55203);

//# sourceMappingURL=core.js.map