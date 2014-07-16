// Compiled by ClojureScript 0.0-2261
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
var G__29886__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__29885 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__29885,(0),null);var body = cljs.core.nthnext.call(null,vec__29885,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__29886 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29886__delegate.call(this,args);};
G__29886.cljs$lang$maxFixedArity = 0;
G__29886.cljs$lang$applyTo = (function (arglist__29887){
var args = cljs.core.seq(arglist__29887);
return G__29886__delegate(args);
});
G__29886.cljs$core$IFn$_invoke$arity$variadic = G__29886__delegate;
return G__29886;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__29892(s__29893){return (new cljs.core.LazySeq(null,(function (){var s__29893__$1 = s__29893;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29893__$1);if(temp__4126__auto__)
{var s__29893__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29893__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__29893__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__29895 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__29894 = (0);while(true){
if((i__29894 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__29894);cljs.core.chunk_append.call(null,b__29895,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__29896 = (i__29894 + (1));
i__29894 = G__29896;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29895),iter__29892.call(null,cljs.core.chunk_rest.call(null,s__29893__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29895),null);
}
} else
{var args = cljs.core.first.call(null,s__29893__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__29892.call(null,cljs.core.rest.call(null,s__29893__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__29901(s__29902){return (new cljs.core.LazySeq(null,(function (){var s__29902__$1 = s__29902;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29902__$1);if(temp__4126__auto__)
{var s__29902__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29902__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__29902__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__29904 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__29903 = (0);while(true){
if((i__29903 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__29903);cljs.core.chunk_append.call(null,b__29904,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__29905 = (i__29903 + (1));
i__29903 = G__29905;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29904),iter__29901.call(null,cljs.core.chunk_rest.call(null,s__29902__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29904),null);
}
} else
{var style = cljs.core.first.call(null,s__29902__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__29901.call(null,cljs.core.rest.call(null,s__29902__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__29906){
var styles = cljs.core.seq(arglist__29906);
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
sablono.core.link_to29907 = (function() { 
var link_to29907__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to29907 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to29907__delegate.call(this,url,content);};
link_to29907.cljs$lang$maxFixedArity = 1;
link_to29907.cljs$lang$applyTo = (function (arglist__29908){
var url = cljs.core.first(arglist__29908);
var content = cljs.core.rest(arglist__29908);
return link_to29907__delegate(url,content);
});
link_to29907.cljs$core$IFn$_invoke$arity$variadic = link_to29907__delegate;
return link_to29907;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to29907);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to29909 = (function() { 
var mail_to29909__delegate = function (e_mail,p__29910){var vec__29912 = p__29910;var content = cljs.core.nth.call(null,vec__29912,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to29909 = function (e_mail,var_args){
var p__29910 = null;if (arguments.length > 1) {
  p__29910 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to29909__delegate.call(this,e_mail,p__29910);};
mail_to29909.cljs$lang$maxFixedArity = 1;
mail_to29909.cljs$lang$applyTo = (function (arglist__29913){
var e_mail = cljs.core.first(arglist__29913);
var p__29910 = cljs.core.rest(arglist__29913);
return mail_to29909__delegate(e_mail,p__29910);
});
mail_to29909.cljs$core$IFn$_invoke$arity$variadic = mail_to29909__delegate;
return mail_to29909;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to29909);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list29914 = (function unordered_list29914(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__29919(s__29920){return (new cljs.core.LazySeq(null,(function (){var s__29920__$1 = s__29920;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29920__$1);if(temp__4126__auto__)
{var s__29920__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29920__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__29920__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__29922 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__29921 = (0);while(true){
if((i__29921 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__29921);cljs.core.chunk_append.call(null,b__29922,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__29923 = (i__29921 + (1));
i__29921 = G__29923;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29922),iter__29919.call(null,cljs.core.chunk_rest.call(null,s__29920__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29922),null);
}
} else
{var x = cljs.core.first.call(null,s__29920__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__29919.call(null,cljs.core.rest.call(null,s__29920__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list29914);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list29924 = (function ordered_list29924(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__29929(s__29930){return (new cljs.core.LazySeq(null,(function (){var s__29930__$1 = s__29930;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29930__$1);if(temp__4126__auto__)
{var s__29930__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29930__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__29930__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__29932 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__29931 = (0);while(true){
if((i__29931 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__29931);cljs.core.chunk_append.call(null,b__29932,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__29933 = (i__29931 + (1));
i__29931 = G__29933;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29932),iter__29929.call(null,cljs.core.chunk_rest.call(null,s__29930__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29932),null);
}
} else
{var x = cljs.core.first.call(null,s__29930__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__29929.call(null,cljs.core.rest.call(null,s__29930__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list29924);
/**
* Create an image element.
*/
sablono.core.image29934 = (function() {
var image29934 = null;
var image29934__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image29934__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image29934 = function(src,alt){
switch(arguments.length){
case 1:
return image29934__1.call(this,src);
case 2:
return image29934__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image29934.cljs$core$IFn$_invoke$arity$1 = image29934__1;
image29934.cljs$core$IFn$_invoke$arity$2 = image29934__2;
return image29934;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image29934);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__29935_SHARP_,p2__29936_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29935_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29936_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__29937_SHARP_,p2__29938_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29937_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29938_SHARP_));
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
sablono.core.color_field29939 = (function() {
var color_field29939 = null;
var color_field29939__1 = (function (name__10211__auto__){return color_field29939.call(null,name__10211__auto__,null);
});
var color_field29939__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10211__auto__,value__10212__auto__);
});
color_field29939 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return color_field29939__1.call(this,name__10211__auto__);
case 2:
return color_field29939__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field29939.cljs$core$IFn$_invoke$arity$1 = color_field29939__1;
color_field29939.cljs$core$IFn$_invoke$arity$2 = color_field29939__2;
return color_field29939;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field29939);
/**
* Creates a date input field.
*/
sablono.core.date_field29940 = (function() {
var date_field29940 = null;
var date_field29940__1 = (function (name__10211__auto__){return date_field29940.call(null,name__10211__auto__,null);
});
var date_field29940__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10211__auto__,value__10212__auto__);
});
date_field29940 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return date_field29940__1.call(this,name__10211__auto__);
case 2:
return date_field29940__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field29940.cljs$core$IFn$_invoke$arity$1 = date_field29940__1;
date_field29940.cljs$core$IFn$_invoke$arity$2 = date_field29940__2;
return date_field29940;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field29940);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field29941 = (function() {
var datetime_field29941 = null;
var datetime_field29941__1 = (function (name__10211__auto__){return datetime_field29941.call(null,name__10211__auto__,null);
});
var datetime_field29941__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10211__auto__,value__10212__auto__);
});
datetime_field29941 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_field29941__1.call(this,name__10211__auto__);
case 2:
return datetime_field29941__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field29941.cljs$core$IFn$_invoke$arity$1 = datetime_field29941__1;
datetime_field29941.cljs$core$IFn$_invoke$arity$2 = datetime_field29941__2;
return datetime_field29941;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field29941);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field29942 = (function() {
var datetime_local_field29942 = null;
var datetime_local_field29942__1 = (function (name__10211__auto__){return datetime_local_field29942.call(null,name__10211__auto__,null);
});
var datetime_local_field29942__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10211__auto__,value__10212__auto__);
});
datetime_local_field29942 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return datetime_local_field29942__1.call(this,name__10211__auto__);
case 2:
return datetime_local_field29942__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field29942.cljs$core$IFn$_invoke$arity$1 = datetime_local_field29942__1;
datetime_local_field29942.cljs$core$IFn$_invoke$arity$2 = datetime_local_field29942__2;
return datetime_local_field29942;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field29942);
/**
* Creates a email input field.
*/
sablono.core.email_field29943 = (function() {
var email_field29943 = null;
var email_field29943__1 = (function (name__10211__auto__){return email_field29943.call(null,name__10211__auto__,null);
});
var email_field29943__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10211__auto__,value__10212__auto__);
});
email_field29943 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return email_field29943__1.call(this,name__10211__auto__);
case 2:
return email_field29943__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field29943.cljs$core$IFn$_invoke$arity$1 = email_field29943__1;
email_field29943.cljs$core$IFn$_invoke$arity$2 = email_field29943__2;
return email_field29943;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field29943);
/**
* Creates a file input field.
*/
sablono.core.file_field29944 = (function() {
var file_field29944 = null;
var file_field29944__1 = (function (name__10211__auto__){return file_field29944.call(null,name__10211__auto__,null);
});
var file_field29944__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10211__auto__,value__10212__auto__);
});
file_field29944 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return file_field29944__1.call(this,name__10211__auto__);
case 2:
return file_field29944__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field29944.cljs$core$IFn$_invoke$arity$1 = file_field29944__1;
file_field29944.cljs$core$IFn$_invoke$arity$2 = file_field29944__2;
return file_field29944;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field29944);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field29945 = (function() {
var hidden_field29945 = null;
var hidden_field29945__1 = (function (name__10211__auto__){return hidden_field29945.call(null,name__10211__auto__,null);
});
var hidden_field29945__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10211__auto__,value__10212__auto__);
});
hidden_field29945 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return hidden_field29945__1.call(this,name__10211__auto__);
case 2:
return hidden_field29945__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field29945.cljs$core$IFn$_invoke$arity$1 = hidden_field29945__1;
hidden_field29945.cljs$core$IFn$_invoke$arity$2 = hidden_field29945__2;
return hidden_field29945;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field29945);
/**
* Creates a month input field.
*/
sablono.core.month_field29946 = (function() {
var month_field29946 = null;
var month_field29946__1 = (function (name__10211__auto__){return month_field29946.call(null,name__10211__auto__,null);
});
var month_field29946__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10211__auto__,value__10212__auto__);
});
month_field29946 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return month_field29946__1.call(this,name__10211__auto__);
case 2:
return month_field29946__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field29946.cljs$core$IFn$_invoke$arity$1 = month_field29946__1;
month_field29946.cljs$core$IFn$_invoke$arity$2 = month_field29946__2;
return month_field29946;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field29946);
/**
* Creates a number input field.
*/
sablono.core.number_field29947 = (function() {
var number_field29947 = null;
var number_field29947__1 = (function (name__10211__auto__){return number_field29947.call(null,name__10211__auto__,null);
});
var number_field29947__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10211__auto__,value__10212__auto__);
});
number_field29947 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return number_field29947__1.call(this,name__10211__auto__);
case 2:
return number_field29947__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field29947.cljs$core$IFn$_invoke$arity$1 = number_field29947__1;
number_field29947.cljs$core$IFn$_invoke$arity$2 = number_field29947__2;
return number_field29947;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field29947);
/**
* Creates a password input field.
*/
sablono.core.password_field29948 = (function() {
var password_field29948 = null;
var password_field29948__1 = (function (name__10211__auto__){return password_field29948.call(null,name__10211__auto__,null);
});
var password_field29948__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10211__auto__,value__10212__auto__);
});
password_field29948 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return password_field29948__1.call(this,name__10211__auto__);
case 2:
return password_field29948__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field29948.cljs$core$IFn$_invoke$arity$1 = password_field29948__1;
password_field29948.cljs$core$IFn$_invoke$arity$2 = password_field29948__2;
return password_field29948;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field29948);
/**
* Creates a range input field.
*/
sablono.core.range_field29949 = (function() {
var range_field29949 = null;
var range_field29949__1 = (function (name__10211__auto__){return range_field29949.call(null,name__10211__auto__,null);
});
var range_field29949__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10211__auto__,value__10212__auto__);
});
range_field29949 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return range_field29949__1.call(this,name__10211__auto__);
case 2:
return range_field29949__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field29949.cljs$core$IFn$_invoke$arity$1 = range_field29949__1;
range_field29949.cljs$core$IFn$_invoke$arity$2 = range_field29949__2;
return range_field29949;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field29949);
/**
* Creates a search input field.
*/
sablono.core.search_field29950 = (function() {
var search_field29950 = null;
var search_field29950__1 = (function (name__10211__auto__){return search_field29950.call(null,name__10211__auto__,null);
});
var search_field29950__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10211__auto__,value__10212__auto__);
});
search_field29950 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return search_field29950__1.call(this,name__10211__auto__);
case 2:
return search_field29950__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field29950.cljs$core$IFn$_invoke$arity$1 = search_field29950__1;
search_field29950.cljs$core$IFn$_invoke$arity$2 = search_field29950__2;
return search_field29950;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field29950);
/**
* Creates a tel input field.
*/
sablono.core.tel_field29951 = (function() {
var tel_field29951 = null;
var tel_field29951__1 = (function (name__10211__auto__){return tel_field29951.call(null,name__10211__auto__,null);
});
var tel_field29951__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10211__auto__,value__10212__auto__);
});
tel_field29951 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return tel_field29951__1.call(this,name__10211__auto__);
case 2:
return tel_field29951__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field29951.cljs$core$IFn$_invoke$arity$1 = tel_field29951__1;
tel_field29951.cljs$core$IFn$_invoke$arity$2 = tel_field29951__2;
return tel_field29951;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field29951);
/**
* Creates a text input field.
*/
sablono.core.text_field29952 = (function() {
var text_field29952 = null;
var text_field29952__1 = (function (name__10211__auto__){return text_field29952.call(null,name__10211__auto__,null);
});
var text_field29952__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10211__auto__,value__10212__auto__);
});
text_field29952 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return text_field29952__1.call(this,name__10211__auto__);
case 2:
return text_field29952__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field29952.cljs$core$IFn$_invoke$arity$1 = text_field29952__1;
text_field29952.cljs$core$IFn$_invoke$arity$2 = text_field29952__2;
return text_field29952;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field29952);
/**
* Creates a time input field.
*/
sablono.core.time_field29953 = (function() {
var time_field29953 = null;
var time_field29953__1 = (function (name__10211__auto__){return time_field29953.call(null,name__10211__auto__,null);
});
var time_field29953__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10211__auto__,value__10212__auto__);
});
time_field29953 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return time_field29953__1.call(this,name__10211__auto__);
case 2:
return time_field29953__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field29953.cljs$core$IFn$_invoke$arity$1 = time_field29953__1;
time_field29953.cljs$core$IFn$_invoke$arity$2 = time_field29953__2;
return time_field29953;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field29953);
/**
* Creates a url input field.
*/
sablono.core.url_field29954 = (function() {
var url_field29954 = null;
var url_field29954__1 = (function (name__10211__auto__){return url_field29954.call(null,name__10211__auto__,null);
});
var url_field29954__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10211__auto__,value__10212__auto__);
});
url_field29954 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return url_field29954__1.call(this,name__10211__auto__);
case 2:
return url_field29954__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field29954.cljs$core$IFn$_invoke$arity$1 = url_field29954__1;
url_field29954.cljs$core$IFn$_invoke$arity$2 = url_field29954__2;
return url_field29954;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field29954);
/**
* Creates a week input field.
*/
sablono.core.week_field29955 = (function() {
var week_field29955 = null;
var week_field29955__1 = (function (name__10211__auto__){return week_field29955.call(null,name__10211__auto__,null);
});
var week_field29955__2 = (function (name__10211__auto__,value__10212__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10211__auto__,value__10212__auto__);
});
week_field29955 = function(name__10211__auto__,value__10212__auto__){
switch(arguments.length){
case 1:
return week_field29955__1.call(this,name__10211__auto__);
case 2:
return week_field29955__2.call(this,name__10211__auto__,value__10212__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field29955.cljs$core$IFn$_invoke$arity$1 = week_field29955__1;
week_field29955.cljs$core$IFn$_invoke$arity$2 = week_field29955__2;
return week_field29955;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field29955);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box29956 = (function() {
var check_box29956 = null;
var check_box29956__1 = (function (name){return check_box29956.call(null,name,null);
});
var check_box29956__2 = (function (name,checked_QMARK_){return check_box29956.call(null,name,checked_QMARK_,"true");
});
var check_box29956__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box29956 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box29956__1.call(this,name);
case 2:
return check_box29956__2.call(this,name,checked_QMARK_);
case 3:
return check_box29956__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box29956.cljs$core$IFn$_invoke$arity$1 = check_box29956__1;
check_box29956.cljs$core$IFn$_invoke$arity$2 = check_box29956__2;
check_box29956.cljs$core$IFn$_invoke$arity$3 = check_box29956__3;
return check_box29956;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box29956);
/**
* Creates a radio button.
*/
sablono.core.radio_button29957 = (function() {
var radio_button29957 = null;
var radio_button29957__1 = (function (group){return radio_button29957.call(null,group,null);
});
var radio_button29957__2 = (function (group,checked_QMARK_){return radio_button29957.call(null,group,checked_QMARK_,"true");
});
var radio_button29957__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button29957 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button29957__1.call(this,group);
case 2:
return radio_button29957__2.call(this,group,checked_QMARK_);
case 3:
return radio_button29957__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button29957.cljs$core$IFn$_invoke$arity$1 = radio_button29957__1;
radio_button29957.cljs$core$IFn$_invoke$arity$2 = radio_button29957__2;
radio_button29957.cljs$core$IFn$_invoke$arity$3 = radio_button29957__3;
return radio_button29957;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button29957);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options29958 = (function() {
var select_options29958 = null;
var select_options29958__1 = (function (coll){return select_options29958.call(null,coll,null);
});
var select_options29958__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__29967(s__29968){return (new cljs.core.LazySeq(null,(function (){var s__29968__$1 = s__29968;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29968__$1);if(temp__4126__auto__)
{var s__29968__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29968__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__29968__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__29970 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__29969 = (0);while(true){
if((i__29969 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__29969);cljs.core.chunk_append.call(null,b__29970,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__29973 = x;var text = cljs.core.nth.call(null,vec__29973,(0),null);var val = cljs.core.nth.call(null,vec__29973,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__29973,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options29958.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__29975 = (i__29969 + (1));
i__29969 = G__29975;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29970),iter__29967.call(null,cljs.core.chunk_rest.call(null,s__29968__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29970),null);
}
} else
{var x = cljs.core.first.call(null,s__29968__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__29974 = x;var text = cljs.core.nth.call(null,vec__29974,(0),null);var val = cljs.core.nth.call(null,vec__29974,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__29974,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options29958.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__29967.call(null,cljs.core.rest.call(null,s__29968__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options29958 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options29958__1.call(this,coll);
case 2:
return select_options29958__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options29958.cljs$core$IFn$_invoke$arity$1 = select_options29958__1;
select_options29958.cljs$core$IFn$_invoke$arity$2 = select_options29958__2;
return select_options29958;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options29958);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down29976 = (function() {
var drop_down29976 = null;
var drop_down29976__2 = (function (name,options){return drop_down29976.call(null,name,options,null);
});
var drop_down29976__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down29976 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down29976__2.call(this,name,options);
case 3:
return drop_down29976__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down29976.cljs$core$IFn$_invoke$arity$2 = drop_down29976__2;
drop_down29976.cljs$core$IFn$_invoke$arity$3 = drop_down29976__3;
return drop_down29976;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down29976);
/**
* Creates a text area element.
*/
sablono.core.text_area29977 = (function() {
var text_area29977 = null;
var text_area29977__1 = (function (name){return text_area29977.call(null,name,null);
});
var text_area29977__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area29977 = function(name,value){
switch(arguments.length){
case 1:
return text_area29977__1.call(this,name);
case 2:
return text_area29977__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area29977.cljs$core$IFn$_invoke$arity$1 = text_area29977__1;
text_area29977.cljs$core$IFn$_invoke$arity$2 = text_area29977__2;
return text_area29977;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area29977);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label29978 = (function label29978(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label29978);
/**
* Creates a submit button.
*/
sablono.core.submit_button29979 = (function submit_button29979(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button29979);
/**
* Creates a form reset button.
*/
sablono.core.reset_button29980 = (function reset_button29980(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button29980);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to29981 = (function() { 
var form_to29981__delegate = function (p__29982,body){var vec__29984 = p__29982;var method = cljs.core.nth.call(null,vec__29984,(0),null);var action = cljs.core.nth.call(null,vec__29984,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to29981 = function (p__29982,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to29981__delegate.call(this,p__29982,body);};
form_to29981.cljs$lang$maxFixedArity = 1;
form_to29981.cljs$lang$applyTo = (function (arglist__29985){
var p__29982 = cljs.core.first(arglist__29985);
var body = cljs.core.rest(arglist__29985);
return form_to29981__delegate(p__29982,body);
});
form_to29981.cljs$core$IFn$_invoke$arity$variadic = form_to29981__delegate;
return form_to29981;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to29981);
