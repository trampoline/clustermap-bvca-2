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
var G__54972__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__54971 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__54971,(0),null);var body = cljs.core.nthnext.call(null,vec__54971,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__54972 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__54972__delegate.call(this,args);};
G__54972.cljs$lang$maxFixedArity = 0;
G__54972.cljs$lang$applyTo = (function (arglist__54973){
var args = cljs.core.seq(arglist__54973);
return G__54972__delegate(args);
});
G__54972.cljs$core$IFn$_invoke$arity$variadic = G__54972__delegate;
return G__54972;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__54978(s__54979){return (new cljs.core.LazySeq(null,(function (){var s__54979__$1 = s__54979;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__54979__$1);if(temp__4126__auto__)
{var s__54979__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__54979__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__54979__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__54981 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__54980 = (0);while(true){
if((i__54980 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__54980);cljs.core.chunk_append.call(null,b__54981,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__54982 = (i__54980 + (1));
i__54980 = G__54982;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54981),iter__54978.call(null,cljs.core.chunk_rest.call(null,s__54979__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54981),null);
}
} else
{var args = cljs.core.first.call(null,s__54979__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__54978.call(null,cljs.core.rest.call(null,s__54979__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__54987(s__54988){return (new cljs.core.LazySeq(null,(function (){var s__54988__$1 = s__54988;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__54988__$1);if(temp__4126__auto__)
{var s__54988__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__54988__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__54988__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__54990 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__54989 = (0);while(true){
if((i__54989 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__54989);cljs.core.chunk_append.call(null,b__54990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__54991 = (i__54989 + (1));
i__54989 = G__54991;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54990),iter__54987.call(null,cljs.core.chunk_rest.call(null,s__54988__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54990),null);
}
} else
{var style = cljs.core.first.call(null,s__54988__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__54987.call(null,cljs.core.rest.call(null,s__54988__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__54992){
var styles = cljs.core.seq(arglist__54992);
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
sablono.core.link_to54993 = (function() { 
var link_to54993__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to54993 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to54993__delegate.call(this,url,content);};
link_to54993.cljs$lang$maxFixedArity = 1;
link_to54993.cljs$lang$applyTo = (function (arglist__54994){
var url = cljs.core.first(arglist__54994);
var content = cljs.core.rest(arglist__54994);
return link_to54993__delegate(url,content);
});
link_to54993.cljs$core$IFn$_invoke$arity$variadic = link_to54993__delegate;
return link_to54993;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to54993);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to54995 = (function() { 
var mail_to54995__delegate = function (e_mail,p__54996){var vec__54998 = p__54996;var content = cljs.core.nth.call(null,vec__54998,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to54995 = function (e_mail,var_args){
var p__54996 = null;if (arguments.length > 1) {
  p__54996 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to54995__delegate.call(this,e_mail,p__54996);};
mail_to54995.cljs$lang$maxFixedArity = 1;
mail_to54995.cljs$lang$applyTo = (function (arglist__54999){
var e_mail = cljs.core.first(arglist__54999);
var p__54996 = cljs.core.rest(arglist__54999);
return mail_to54995__delegate(e_mail,p__54996);
});
mail_to54995.cljs$core$IFn$_invoke$arity$variadic = mail_to54995__delegate;
return mail_to54995;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to54995);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list55000 = (function unordered_list55000(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__55005(s__55006){return (new cljs.core.LazySeq(null,(function (){var s__55006__$1 = s__55006;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55006__$1);if(temp__4126__auto__)
{var s__55006__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55006__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__55006__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__55008 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__55007 = (0);while(true){
if((i__55007 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__55007);cljs.core.chunk_append.call(null,b__55008,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__55009 = (i__55007 + (1));
i__55007 = G__55009;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55008),iter__55005.call(null,cljs.core.chunk_rest.call(null,s__55006__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55008),null);
}
} else
{var x = cljs.core.first.call(null,s__55006__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__55005.call(null,cljs.core.rest.call(null,s__55006__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list55000);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list55010 = (function ordered_list55010(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__55015(s__55016){return (new cljs.core.LazySeq(null,(function (){var s__55016__$1 = s__55016;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55016__$1);if(temp__4126__auto__)
{var s__55016__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55016__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__55016__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__55018 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__55017 = (0);while(true){
if((i__55017 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__55017);cljs.core.chunk_append.call(null,b__55018,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__55019 = (i__55017 + (1));
i__55017 = G__55019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55018),iter__55015.call(null,cljs.core.chunk_rest.call(null,s__55016__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55018),null);
}
} else
{var x = cljs.core.first.call(null,s__55016__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__55015.call(null,cljs.core.rest.call(null,s__55016__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list55010);
/**
* Create an image element.
*/
sablono.core.image55020 = (function() {
var image55020 = null;
var image55020__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image55020__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image55020 = function(src,alt){
switch(arguments.length){
case 1:
return image55020__1.call(this,src);
case 2:
return image55020__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image55020.cljs$core$IFn$_invoke$arity$1 = image55020__1;
image55020.cljs$core$IFn$_invoke$arity$2 = image55020__2;
return image55020;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image55020);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__55021_SHARP_,p2__55022_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55021_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__55022_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__55023_SHARP_,p2__55024_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55023_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__55024_SHARP_));
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
sablono.core.color_field55025 = (function() {
var color_field55025 = null;
var color_field55025__1 = (function (name__10242__auto__){return color_field55025.call(null,name__10242__auto__,null);
});
var color_field55025__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10242__auto__,value__10243__auto__);
});
color_field55025 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return color_field55025__1.call(this,name__10242__auto__);
case 2:
return color_field55025__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field55025.cljs$core$IFn$_invoke$arity$1 = color_field55025__1;
color_field55025.cljs$core$IFn$_invoke$arity$2 = color_field55025__2;
return color_field55025;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field55025);
/**
* Creates a date input field.
*/
sablono.core.date_field55026 = (function() {
var date_field55026 = null;
var date_field55026__1 = (function (name__10242__auto__){return date_field55026.call(null,name__10242__auto__,null);
});
var date_field55026__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10242__auto__,value__10243__auto__);
});
date_field55026 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return date_field55026__1.call(this,name__10242__auto__);
case 2:
return date_field55026__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field55026.cljs$core$IFn$_invoke$arity$1 = date_field55026__1;
date_field55026.cljs$core$IFn$_invoke$arity$2 = date_field55026__2;
return date_field55026;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field55026);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field55027 = (function() {
var datetime_field55027 = null;
var datetime_field55027__1 = (function (name__10242__auto__){return datetime_field55027.call(null,name__10242__auto__,null);
});
var datetime_field55027__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10242__auto__,value__10243__auto__);
});
datetime_field55027 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_field55027__1.call(this,name__10242__auto__);
case 2:
return datetime_field55027__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field55027.cljs$core$IFn$_invoke$arity$1 = datetime_field55027__1;
datetime_field55027.cljs$core$IFn$_invoke$arity$2 = datetime_field55027__2;
return datetime_field55027;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field55027);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field55028 = (function() {
var datetime_local_field55028 = null;
var datetime_local_field55028__1 = (function (name__10242__auto__){return datetime_local_field55028.call(null,name__10242__auto__,null);
});
var datetime_local_field55028__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10242__auto__,value__10243__auto__);
});
datetime_local_field55028 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_local_field55028__1.call(this,name__10242__auto__);
case 2:
return datetime_local_field55028__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field55028.cljs$core$IFn$_invoke$arity$1 = datetime_local_field55028__1;
datetime_local_field55028.cljs$core$IFn$_invoke$arity$2 = datetime_local_field55028__2;
return datetime_local_field55028;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field55028);
/**
* Creates a email input field.
*/
sablono.core.email_field55029 = (function() {
var email_field55029 = null;
var email_field55029__1 = (function (name__10242__auto__){return email_field55029.call(null,name__10242__auto__,null);
});
var email_field55029__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10242__auto__,value__10243__auto__);
});
email_field55029 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return email_field55029__1.call(this,name__10242__auto__);
case 2:
return email_field55029__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field55029.cljs$core$IFn$_invoke$arity$1 = email_field55029__1;
email_field55029.cljs$core$IFn$_invoke$arity$2 = email_field55029__2;
return email_field55029;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field55029);
/**
* Creates a file input field.
*/
sablono.core.file_field55030 = (function() {
var file_field55030 = null;
var file_field55030__1 = (function (name__10242__auto__){return file_field55030.call(null,name__10242__auto__,null);
});
var file_field55030__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10242__auto__,value__10243__auto__);
});
file_field55030 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return file_field55030__1.call(this,name__10242__auto__);
case 2:
return file_field55030__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field55030.cljs$core$IFn$_invoke$arity$1 = file_field55030__1;
file_field55030.cljs$core$IFn$_invoke$arity$2 = file_field55030__2;
return file_field55030;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field55030);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field55031 = (function() {
var hidden_field55031 = null;
var hidden_field55031__1 = (function (name__10242__auto__){return hidden_field55031.call(null,name__10242__auto__,null);
});
var hidden_field55031__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10242__auto__,value__10243__auto__);
});
hidden_field55031 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return hidden_field55031__1.call(this,name__10242__auto__);
case 2:
return hidden_field55031__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field55031.cljs$core$IFn$_invoke$arity$1 = hidden_field55031__1;
hidden_field55031.cljs$core$IFn$_invoke$arity$2 = hidden_field55031__2;
return hidden_field55031;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field55031);
/**
* Creates a month input field.
*/
sablono.core.month_field55032 = (function() {
var month_field55032 = null;
var month_field55032__1 = (function (name__10242__auto__){return month_field55032.call(null,name__10242__auto__,null);
});
var month_field55032__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10242__auto__,value__10243__auto__);
});
month_field55032 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return month_field55032__1.call(this,name__10242__auto__);
case 2:
return month_field55032__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field55032.cljs$core$IFn$_invoke$arity$1 = month_field55032__1;
month_field55032.cljs$core$IFn$_invoke$arity$2 = month_field55032__2;
return month_field55032;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field55032);
/**
* Creates a number input field.
*/
sablono.core.number_field55033 = (function() {
var number_field55033 = null;
var number_field55033__1 = (function (name__10242__auto__){return number_field55033.call(null,name__10242__auto__,null);
});
var number_field55033__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10242__auto__,value__10243__auto__);
});
number_field55033 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return number_field55033__1.call(this,name__10242__auto__);
case 2:
return number_field55033__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field55033.cljs$core$IFn$_invoke$arity$1 = number_field55033__1;
number_field55033.cljs$core$IFn$_invoke$arity$2 = number_field55033__2;
return number_field55033;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field55033);
/**
* Creates a password input field.
*/
sablono.core.password_field55034 = (function() {
var password_field55034 = null;
var password_field55034__1 = (function (name__10242__auto__){return password_field55034.call(null,name__10242__auto__,null);
});
var password_field55034__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10242__auto__,value__10243__auto__);
});
password_field55034 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return password_field55034__1.call(this,name__10242__auto__);
case 2:
return password_field55034__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field55034.cljs$core$IFn$_invoke$arity$1 = password_field55034__1;
password_field55034.cljs$core$IFn$_invoke$arity$2 = password_field55034__2;
return password_field55034;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field55034);
/**
* Creates a range input field.
*/
sablono.core.range_field55035 = (function() {
var range_field55035 = null;
var range_field55035__1 = (function (name__10242__auto__){return range_field55035.call(null,name__10242__auto__,null);
});
var range_field55035__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10242__auto__,value__10243__auto__);
});
range_field55035 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return range_field55035__1.call(this,name__10242__auto__);
case 2:
return range_field55035__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field55035.cljs$core$IFn$_invoke$arity$1 = range_field55035__1;
range_field55035.cljs$core$IFn$_invoke$arity$2 = range_field55035__2;
return range_field55035;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field55035);
/**
* Creates a search input field.
*/
sablono.core.search_field55036 = (function() {
var search_field55036 = null;
var search_field55036__1 = (function (name__10242__auto__){return search_field55036.call(null,name__10242__auto__,null);
});
var search_field55036__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10242__auto__,value__10243__auto__);
});
search_field55036 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return search_field55036__1.call(this,name__10242__auto__);
case 2:
return search_field55036__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field55036.cljs$core$IFn$_invoke$arity$1 = search_field55036__1;
search_field55036.cljs$core$IFn$_invoke$arity$2 = search_field55036__2;
return search_field55036;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field55036);
/**
* Creates a tel input field.
*/
sablono.core.tel_field55037 = (function() {
var tel_field55037 = null;
var tel_field55037__1 = (function (name__10242__auto__){return tel_field55037.call(null,name__10242__auto__,null);
});
var tel_field55037__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10242__auto__,value__10243__auto__);
});
tel_field55037 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return tel_field55037__1.call(this,name__10242__auto__);
case 2:
return tel_field55037__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field55037.cljs$core$IFn$_invoke$arity$1 = tel_field55037__1;
tel_field55037.cljs$core$IFn$_invoke$arity$2 = tel_field55037__2;
return tel_field55037;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field55037);
/**
* Creates a text input field.
*/
sablono.core.text_field55038 = (function() {
var text_field55038 = null;
var text_field55038__1 = (function (name__10242__auto__){return text_field55038.call(null,name__10242__auto__,null);
});
var text_field55038__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10242__auto__,value__10243__auto__);
});
text_field55038 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return text_field55038__1.call(this,name__10242__auto__);
case 2:
return text_field55038__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field55038.cljs$core$IFn$_invoke$arity$1 = text_field55038__1;
text_field55038.cljs$core$IFn$_invoke$arity$2 = text_field55038__2;
return text_field55038;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field55038);
/**
* Creates a time input field.
*/
sablono.core.time_field55039 = (function() {
var time_field55039 = null;
var time_field55039__1 = (function (name__10242__auto__){return time_field55039.call(null,name__10242__auto__,null);
});
var time_field55039__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10242__auto__,value__10243__auto__);
});
time_field55039 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return time_field55039__1.call(this,name__10242__auto__);
case 2:
return time_field55039__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field55039.cljs$core$IFn$_invoke$arity$1 = time_field55039__1;
time_field55039.cljs$core$IFn$_invoke$arity$2 = time_field55039__2;
return time_field55039;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field55039);
/**
* Creates a url input field.
*/
sablono.core.url_field55040 = (function() {
var url_field55040 = null;
var url_field55040__1 = (function (name__10242__auto__){return url_field55040.call(null,name__10242__auto__,null);
});
var url_field55040__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10242__auto__,value__10243__auto__);
});
url_field55040 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return url_field55040__1.call(this,name__10242__auto__);
case 2:
return url_field55040__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field55040.cljs$core$IFn$_invoke$arity$1 = url_field55040__1;
url_field55040.cljs$core$IFn$_invoke$arity$2 = url_field55040__2;
return url_field55040;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field55040);
/**
* Creates a week input field.
*/
sablono.core.week_field55041 = (function() {
var week_field55041 = null;
var week_field55041__1 = (function (name__10242__auto__){return week_field55041.call(null,name__10242__auto__,null);
});
var week_field55041__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10242__auto__,value__10243__auto__);
});
week_field55041 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return week_field55041__1.call(this,name__10242__auto__);
case 2:
return week_field55041__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field55041.cljs$core$IFn$_invoke$arity$1 = week_field55041__1;
week_field55041.cljs$core$IFn$_invoke$arity$2 = week_field55041__2;
return week_field55041;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field55041);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box55042 = (function() {
var check_box55042 = null;
var check_box55042__1 = (function (name){return check_box55042.call(null,name,null);
});
var check_box55042__2 = (function (name,checked_QMARK_){return check_box55042.call(null,name,checked_QMARK_,"true");
});
var check_box55042__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box55042 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box55042__1.call(this,name);
case 2:
return check_box55042__2.call(this,name,checked_QMARK_);
case 3:
return check_box55042__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box55042.cljs$core$IFn$_invoke$arity$1 = check_box55042__1;
check_box55042.cljs$core$IFn$_invoke$arity$2 = check_box55042__2;
check_box55042.cljs$core$IFn$_invoke$arity$3 = check_box55042__3;
return check_box55042;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box55042);
/**
* Creates a radio button.
*/
sablono.core.radio_button55043 = (function() {
var radio_button55043 = null;
var radio_button55043__1 = (function (group){return radio_button55043.call(null,group,null);
});
var radio_button55043__2 = (function (group,checked_QMARK_){return radio_button55043.call(null,group,checked_QMARK_,"true");
});
var radio_button55043__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button55043 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button55043__1.call(this,group);
case 2:
return radio_button55043__2.call(this,group,checked_QMARK_);
case 3:
return radio_button55043__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button55043.cljs$core$IFn$_invoke$arity$1 = radio_button55043__1;
radio_button55043.cljs$core$IFn$_invoke$arity$2 = radio_button55043__2;
radio_button55043.cljs$core$IFn$_invoke$arity$3 = radio_button55043__3;
return radio_button55043;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button55043);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options55044 = (function() {
var select_options55044 = null;
var select_options55044__1 = (function (coll){return select_options55044.call(null,coll,null);
});
var select_options55044__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__55053(s__55054){return (new cljs.core.LazySeq(null,(function (){var s__55054__$1 = s__55054;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55054__$1);if(temp__4126__auto__)
{var s__55054__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55054__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__55054__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__55056 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__55055 = (0);while(true){
if((i__55055 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__55055);cljs.core.chunk_append.call(null,b__55056,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__55059 = x;var text = cljs.core.nth.call(null,vec__55059,(0),null);var val = cljs.core.nth.call(null,vec__55059,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__55059,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options55044.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__55061 = (i__55055 + (1));
i__55055 = G__55061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55056),iter__55053.call(null,cljs.core.chunk_rest.call(null,s__55054__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55056),null);
}
} else
{var x = cljs.core.first.call(null,s__55054__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__55060 = x;var text = cljs.core.nth.call(null,vec__55060,(0),null);var val = cljs.core.nth.call(null,vec__55060,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__55060,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options55044.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__55053.call(null,cljs.core.rest.call(null,s__55054__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options55044 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options55044__1.call(this,coll);
case 2:
return select_options55044__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options55044.cljs$core$IFn$_invoke$arity$1 = select_options55044__1;
select_options55044.cljs$core$IFn$_invoke$arity$2 = select_options55044__2;
return select_options55044;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options55044);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down55062 = (function() {
var drop_down55062 = null;
var drop_down55062__2 = (function (name,options){return drop_down55062.call(null,name,options,null);
});
var drop_down55062__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down55062 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down55062__2.call(this,name,options);
case 3:
return drop_down55062__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down55062.cljs$core$IFn$_invoke$arity$2 = drop_down55062__2;
drop_down55062.cljs$core$IFn$_invoke$arity$3 = drop_down55062__3;
return drop_down55062;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down55062);
/**
* Creates a text area element.
*/
sablono.core.text_area55063 = (function() {
var text_area55063 = null;
var text_area55063__1 = (function (name){return text_area55063.call(null,name,null);
});
var text_area55063__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area55063 = function(name,value){
switch(arguments.length){
case 1:
return text_area55063__1.call(this,name);
case 2:
return text_area55063__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area55063.cljs$core$IFn$_invoke$arity$1 = text_area55063__1;
text_area55063.cljs$core$IFn$_invoke$arity$2 = text_area55063__2;
return text_area55063;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area55063);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label55064 = (function label55064(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label55064);
/**
* Creates a submit button.
*/
sablono.core.submit_button55065 = (function submit_button55065(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button55065);
/**
* Creates a form reset button.
*/
sablono.core.reset_button55066 = (function reset_button55066(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button55066);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to55067 = (function() { 
var form_to55067__delegate = function (p__55068,body){var vec__55070 = p__55068;var method = cljs.core.nth.call(null,vec__55070,(0),null);var action = cljs.core.nth.call(null,vec__55070,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to55067 = function (p__55068,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to55067__delegate.call(this,p__55068,body);};
form_to55067.cljs$lang$maxFixedArity = 1;
form_to55067.cljs$lang$applyTo = (function (arglist__55071){
var p__55068 = cljs.core.first(arglist__55071);
var body = cljs.core.rest(arglist__55071);
return form_to55067__delegate(p__55068,body);
});
form_to55067.cljs$core$IFn$_invoke$arity$variadic = form_to55067__delegate;
return form_to55067;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to55067);

//# sourceMappingURL=core.js.map