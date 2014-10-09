// Compiled by ClojureScript 0.0-2322
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
var G__67212__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__67211 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__67211,(0),null);var body = cljs.core.nthnext.call(null,vec__67211,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__67212 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__67212__delegate.call(this,args);};
G__67212.cljs$lang$maxFixedArity = 0;
G__67212.cljs$lang$applyTo = (function (arglist__67213){
var args = cljs.core.seq(arglist__67213);
return G__67212__delegate(args);
});
G__67212.cljs$core$IFn$_invoke$arity$variadic = G__67212__delegate;
return G__67212;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__67218(s__67219){return (new cljs.core.LazySeq(null,(function (){var s__67219__$1 = s__67219;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67219__$1);if(temp__4126__auto__)
{var s__67219__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67219__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67219__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67221 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67220 = (0);while(true){
if((i__67220 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__67220);cljs.core.chunk_append.call(null,b__67221,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__67222 = (i__67220 + (1));
i__67220 = G__67222;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67221),iter__67218.call(null,cljs.core.chunk_rest.call(null,s__67219__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67221),null);
}
} else
{var args = cljs.core.first.call(null,s__67219__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__67218.call(null,cljs.core.rest.call(null,s__67219__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__67227(s__67228){return (new cljs.core.LazySeq(null,(function (){var s__67228__$1 = s__67228;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67228__$1);if(temp__4126__auto__)
{var s__67228__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67228__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67228__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67230 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67229 = (0);while(true){
if((i__67229 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__67229);cljs.core.chunk_append.call(null,b__67230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__67231 = (i__67229 + (1));
i__67229 = G__67231;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67230),iter__67227.call(null,cljs.core.chunk_rest.call(null,s__67228__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67230),null);
}
} else
{var style = cljs.core.first.call(null,s__67228__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__67227.call(null,cljs.core.rest.call(null,s__67228__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__67232){
var styles = cljs.core.seq(arglist__67232);
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
sablono.core.link_to67233 = (function() { 
var link_to67233__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to67233 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to67233__delegate.call(this,url,content);};
link_to67233.cljs$lang$maxFixedArity = 1;
link_to67233.cljs$lang$applyTo = (function (arglist__67234){
var url = cljs.core.first(arglist__67234);
var content = cljs.core.rest(arglist__67234);
return link_to67233__delegate(url,content);
});
link_to67233.cljs$core$IFn$_invoke$arity$variadic = link_to67233__delegate;
return link_to67233;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to67233);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to67235 = (function() { 
var mail_to67235__delegate = function (e_mail,p__67236){var vec__67238 = p__67236;var content = cljs.core.nth.call(null,vec__67238,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to67235 = function (e_mail,var_args){
var p__67236 = null;if (arguments.length > 1) {
  p__67236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to67235__delegate.call(this,e_mail,p__67236);};
mail_to67235.cljs$lang$maxFixedArity = 1;
mail_to67235.cljs$lang$applyTo = (function (arglist__67239){
var e_mail = cljs.core.first(arglist__67239);
var p__67236 = cljs.core.rest(arglist__67239);
return mail_to67235__delegate(e_mail,p__67236);
});
mail_to67235.cljs$core$IFn$_invoke$arity$variadic = mail_to67235__delegate;
return mail_to67235;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to67235);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list67240 = (function unordered_list67240(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__67245(s__67246){return (new cljs.core.LazySeq(null,(function (){var s__67246__$1 = s__67246;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67246__$1);if(temp__4126__auto__)
{var s__67246__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67246__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67246__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67248 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67247 = (0);while(true){
if((i__67247 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__67247);cljs.core.chunk_append.call(null,b__67248,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__67249 = (i__67247 + (1));
i__67247 = G__67249;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67248),iter__67245.call(null,cljs.core.chunk_rest.call(null,s__67246__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67248),null);
}
} else
{var x = cljs.core.first.call(null,s__67246__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__67245.call(null,cljs.core.rest.call(null,s__67246__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list67240);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list67250 = (function ordered_list67250(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__67255(s__67256){return (new cljs.core.LazySeq(null,(function (){var s__67256__$1 = s__67256;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67256__$1);if(temp__4126__auto__)
{var s__67256__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67256__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67256__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67258 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67257 = (0);while(true){
if((i__67257 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__67257);cljs.core.chunk_append.call(null,b__67258,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__67259 = (i__67257 + (1));
i__67257 = G__67259;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67258),iter__67255.call(null,cljs.core.chunk_rest.call(null,s__67256__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67258),null);
}
} else
{var x = cljs.core.first.call(null,s__67256__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__67255.call(null,cljs.core.rest.call(null,s__67256__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list67250);
/**
* Create an image element.
*/
sablono.core.image67260 = (function() {
var image67260 = null;
var image67260__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image67260__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image67260 = function(src,alt){
switch(arguments.length){
case 1:
return image67260__1.call(this,src);
case 2:
return image67260__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image67260.cljs$core$IFn$_invoke$arity$1 = image67260__1;
image67260.cljs$core$IFn$_invoke$arity$2 = image67260__2;
return image67260;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image67260);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__67261_SHARP_,p2__67262_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67261_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__67262_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__67263_SHARP_,p2__67264_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67263_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__67264_SHARP_));
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
sablono.core.color_field67265 = (function() {
var color_field67265 = null;
var color_field67265__1 = (function (name__13522__auto__){return color_field67265.call(null,name__13522__auto__,null);
});
var color_field67265__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__13522__auto__,value__13523__auto__);
});
color_field67265 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return color_field67265__1.call(this,name__13522__auto__);
case 2:
return color_field67265__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field67265.cljs$core$IFn$_invoke$arity$1 = color_field67265__1;
color_field67265.cljs$core$IFn$_invoke$arity$2 = color_field67265__2;
return color_field67265;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field67265);
/**
* Creates a date input field.
*/
sablono.core.date_field67266 = (function() {
var date_field67266 = null;
var date_field67266__1 = (function (name__13522__auto__){return date_field67266.call(null,name__13522__auto__,null);
});
var date_field67266__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__13522__auto__,value__13523__auto__);
});
date_field67266 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return date_field67266__1.call(this,name__13522__auto__);
case 2:
return date_field67266__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field67266.cljs$core$IFn$_invoke$arity$1 = date_field67266__1;
date_field67266.cljs$core$IFn$_invoke$arity$2 = date_field67266__2;
return date_field67266;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field67266);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field67267 = (function() {
var datetime_field67267 = null;
var datetime_field67267__1 = (function (name__13522__auto__){return datetime_field67267.call(null,name__13522__auto__,null);
});
var datetime_field67267__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__13522__auto__,value__13523__auto__);
});
datetime_field67267 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_field67267__1.call(this,name__13522__auto__);
case 2:
return datetime_field67267__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field67267.cljs$core$IFn$_invoke$arity$1 = datetime_field67267__1;
datetime_field67267.cljs$core$IFn$_invoke$arity$2 = datetime_field67267__2;
return datetime_field67267;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field67267);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field67268 = (function() {
var datetime_local_field67268 = null;
var datetime_local_field67268__1 = (function (name__13522__auto__){return datetime_local_field67268.call(null,name__13522__auto__,null);
});
var datetime_local_field67268__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__13522__auto__,value__13523__auto__);
});
datetime_local_field67268 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_local_field67268__1.call(this,name__13522__auto__);
case 2:
return datetime_local_field67268__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field67268.cljs$core$IFn$_invoke$arity$1 = datetime_local_field67268__1;
datetime_local_field67268.cljs$core$IFn$_invoke$arity$2 = datetime_local_field67268__2;
return datetime_local_field67268;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field67268);
/**
* Creates a email input field.
*/
sablono.core.email_field67269 = (function() {
var email_field67269 = null;
var email_field67269__1 = (function (name__13522__auto__){return email_field67269.call(null,name__13522__auto__,null);
});
var email_field67269__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__13522__auto__,value__13523__auto__);
});
email_field67269 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return email_field67269__1.call(this,name__13522__auto__);
case 2:
return email_field67269__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field67269.cljs$core$IFn$_invoke$arity$1 = email_field67269__1;
email_field67269.cljs$core$IFn$_invoke$arity$2 = email_field67269__2;
return email_field67269;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field67269);
/**
* Creates a file input field.
*/
sablono.core.file_field67270 = (function() {
var file_field67270 = null;
var file_field67270__1 = (function (name__13522__auto__){return file_field67270.call(null,name__13522__auto__,null);
});
var file_field67270__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__13522__auto__,value__13523__auto__);
});
file_field67270 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return file_field67270__1.call(this,name__13522__auto__);
case 2:
return file_field67270__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field67270.cljs$core$IFn$_invoke$arity$1 = file_field67270__1;
file_field67270.cljs$core$IFn$_invoke$arity$2 = file_field67270__2;
return file_field67270;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field67270);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field67271 = (function() {
var hidden_field67271 = null;
var hidden_field67271__1 = (function (name__13522__auto__){return hidden_field67271.call(null,name__13522__auto__,null);
});
var hidden_field67271__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__13522__auto__,value__13523__auto__);
});
hidden_field67271 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return hidden_field67271__1.call(this,name__13522__auto__);
case 2:
return hidden_field67271__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field67271.cljs$core$IFn$_invoke$arity$1 = hidden_field67271__1;
hidden_field67271.cljs$core$IFn$_invoke$arity$2 = hidden_field67271__2;
return hidden_field67271;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field67271);
/**
* Creates a month input field.
*/
sablono.core.month_field67272 = (function() {
var month_field67272 = null;
var month_field67272__1 = (function (name__13522__auto__){return month_field67272.call(null,name__13522__auto__,null);
});
var month_field67272__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__13522__auto__,value__13523__auto__);
});
month_field67272 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return month_field67272__1.call(this,name__13522__auto__);
case 2:
return month_field67272__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field67272.cljs$core$IFn$_invoke$arity$1 = month_field67272__1;
month_field67272.cljs$core$IFn$_invoke$arity$2 = month_field67272__2;
return month_field67272;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field67272);
/**
* Creates a number input field.
*/
sablono.core.number_field67273 = (function() {
var number_field67273 = null;
var number_field67273__1 = (function (name__13522__auto__){return number_field67273.call(null,name__13522__auto__,null);
});
var number_field67273__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__13522__auto__,value__13523__auto__);
});
number_field67273 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return number_field67273__1.call(this,name__13522__auto__);
case 2:
return number_field67273__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field67273.cljs$core$IFn$_invoke$arity$1 = number_field67273__1;
number_field67273.cljs$core$IFn$_invoke$arity$2 = number_field67273__2;
return number_field67273;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field67273);
/**
* Creates a password input field.
*/
sablono.core.password_field67274 = (function() {
var password_field67274 = null;
var password_field67274__1 = (function (name__13522__auto__){return password_field67274.call(null,name__13522__auto__,null);
});
var password_field67274__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__13522__auto__,value__13523__auto__);
});
password_field67274 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return password_field67274__1.call(this,name__13522__auto__);
case 2:
return password_field67274__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field67274.cljs$core$IFn$_invoke$arity$1 = password_field67274__1;
password_field67274.cljs$core$IFn$_invoke$arity$2 = password_field67274__2;
return password_field67274;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field67274);
/**
* Creates a range input field.
*/
sablono.core.range_field67275 = (function() {
var range_field67275 = null;
var range_field67275__1 = (function (name__13522__auto__){return range_field67275.call(null,name__13522__auto__,null);
});
var range_field67275__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__13522__auto__,value__13523__auto__);
});
range_field67275 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return range_field67275__1.call(this,name__13522__auto__);
case 2:
return range_field67275__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field67275.cljs$core$IFn$_invoke$arity$1 = range_field67275__1;
range_field67275.cljs$core$IFn$_invoke$arity$2 = range_field67275__2;
return range_field67275;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field67275);
/**
* Creates a search input field.
*/
sablono.core.search_field67276 = (function() {
var search_field67276 = null;
var search_field67276__1 = (function (name__13522__auto__){return search_field67276.call(null,name__13522__auto__,null);
});
var search_field67276__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__13522__auto__,value__13523__auto__);
});
search_field67276 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return search_field67276__1.call(this,name__13522__auto__);
case 2:
return search_field67276__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field67276.cljs$core$IFn$_invoke$arity$1 = search_field67276__1;
search_field67276.cljs$core$IFn$_invoke$arity$2 = search_field67276__2;
return search_field67276;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field67276);
/**
* Creates a tel input field.
*/
sablono.core.tel_field67277 = (function() {
var tel_field67277 = null;
var tel_field67277__1 = (function (name__13522__auto__){return tel_field67277.call(null,name__13522__auto__,null);
});
var tel_field67277__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__13522__auto__,value__13523__auto__);
});
tel_field67277 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return tel_field67277__1.call(this,name__13522__auto__);
case 2:
return tel_field67277__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field67277.cljs$core$IFn$_invoke$arity$1 = tel_field67277__1;
tel_field67277.cljs$core$IFn$_invoke$arity$2 = tel_field67277__2;
return tel_field67277;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field67277);
/**
* Creates a text input field.
*/
sablono.core.text_field67278 = (function() {
var text_field67278 = null;
var text_field67278__1 = (function (name__13522__auto__){return text_field67278.call(null,name__13522__auto__,null);
});
var text_field67278__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__13522__auto__,value__13523__auto__);
});
text_field67278 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return text_field67278__1.call(this,name__13522__auto__);
case 2:
return text_field67278__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field67278.cljs$core$IFn$_invoke$arity$1 = text_field67278__1;
text_field67278.cljs$core$IFn$_invoke$arity$2 = text_field67278__2;
return text_field67278;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field67278);
/**
* Creates a time input field.
*/
sablono.core.time_field67279 = (function() {
var time_field67279 = null;
var time_field67279__1 = (function (name__13522__auto__){return time_field67279.call(null,name__13522__auto__,null);
});
var time_field67279__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__13522__auto__,value__13523__auto__);
});
time_field67279 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return time_field67279__1.call(this,name__13522__auto__);
case 2:
return time_field67279__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field67279.cljs$core$IFn$_invoke$arity$1 = time_field67279__1;
time_field67279.cljs$core$IFn$_invoke$arity$2 = time_field67279__2;
return time_field67279;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field67279);
/**
* Creates a url input field.
*/
sablono.core.url_field67280 = (function() {
var url_field67280 = null;
var url_field67280__1 = (function (name__13522__auto__){return url_field67280.call(null,name__13522__auto__,null);
});
var url_field67280__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__13522__auto__,value__13523__auto__);
});
url_field67280 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return url_field67280__1.call(this,name__13522__auto__);
case 2:
return url_field67280__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field67280.cljs$core$IFn$_invoke$arity$1 = url_field67280__1;
url_field67280.cljs$core$IFn$_invoke$arity$2 = url_field67280__2;
return url_field67280;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field67280);
/**
* Creates a week input field.
*/
sablono.core.week_field67281 = (function() {
var week_field67281 = null;
var week_field67281__1 = (function (name__13522__auto__){return week_field67281.call(null,name__13522__auto__,null);
});
var week_field67281__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__13522__auto__,value__13523__auto__);
});
week_field67281 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return week_field67281__1.call(this,name__13522__auto__);
case 2:
return week_field67281__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field67281.cljs$core$IFn$_invoke$arity$1 = week_field67281__1;
week_field67281.cljs$core$IFn$_invoke$arity$2 = week_field67281__2;
return week_field67281;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field67281);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box67282 = (function() {
var check_box67282 = null;
var check_box67282__1 = (function (name){return check_box67282.call(null,name,null);
});
var check_box67282__2 = (function (name,checked_QMARK_){return check_box67282.call(null,name,checked_QMARK_,"true");
});
var check_box67282__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box67282 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box67282__1.call(this,name);
case 2:
return check_box67282__2.call(this,name,checked_QMARK_);
case 3:
return check_box67282__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box67282.cljs$core$IFn$_invoke$arity$1 = check_box67282__1;
check_box67282.cljs$core$IFn$_invoke$arity$2 = check_box67282__2;
check_box67282.cljs$core$IFn$_invoke$arity$3 = check_box67282__3;
return check_box67282;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box67282);
/**
* Creates a radio button.
*/
sablono.core.radio_button67283 = (function() {
var radio_button67283 = null;
var radio_button67283__1 = (function (group){return radio_button67283.call(null,group,null);
});
var radio_button67283__2 = (function (group,checked_QMARK_){return radio_button67283.call(null,group,checked_QMARK_,"true");
});
var radio_button67283__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button67283 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button67283__1.call(this,group);
case 2:
return radio_button67283__2.call(this,group,checked_QMARK_);
case 3:
return radio_button67283__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button67283.cljs$core$IFn$_invoke$arity$1 = radio_button67283__1;
radio_button67283.cljs$core$IFn$_invoke$arity$2 = radio_button67283__2;
radio_button67283.cljs$core$IFn$_invoke$arity$3 = radio_button67283__3;
return radio_button67283;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button67283);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options67284 = (function() {
var select_options67284 = null;
var select_options67284__1 = (function (coll){return select_options67284.call(null,coll,null);
});
var select_options67284__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__67293(s__67294){return (new cljs.core.LazySeq(null,(function (){var s__67294__$1 = s__67294;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67294__$1);if(temp__4126__auto__)
{var s__67294__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67294__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67294__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67296 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67295 = (0);while(true){
if((i__67295 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__67295);cljs.core.chunk_append.call(null,b__67296,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__67299 = x;var text = cljs.core.nth.call(null,vec__67299,(0),null);var val = cljs.core.nth.call(null,vec__67299,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__67299,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options67284.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__67301 = (i__67295 + (1));
i__67295 = G__67301;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67296),iter__67293.call(null,cljs.core.chunk_rest.call(null,s__67294__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67296),null);
}
} else
{var x = cljs.core.first.call(null,s__67294__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__67300 = x;var text = cljs.core.nth.call(null,vec__67300,(0),null);var val = cljs.core.nth.call(null,vec__67300,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__67300,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options67284.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__67293.call(null,cljs.core.rest.call(null,s__67294__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options67284 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options67284__1.call(this,coll);
case 2:
return select_options67284__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options67284.cljs$core$IFn$_invoke$arity$1 = select_options67284__1;
select_options67284.cljs$core$IFn$_invoke$arity$2 = select_options67284__2;
return select_options67284;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options67284);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down67302 = (function() {
var drop_down67302 = null;
var drop_down67302__2 = (function (name,options){return drop_down67302.call(null,name,options,null);
});
var drop_down67302__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down67302 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down67302__2.call(this,name,options);
case 3:
return drop_down67302__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down67302.cljs$core$IFn$_invoke$arity$2 = drop_down67302__2;
drop_down67302.cljs$core$IFn$_invoke$arity$3 = drop_down67302__3;
return drop_down67302;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down67302);
/**
* Creates a text area element.
*/
sablono.core.text_area67303 = (function() {
var text_area67303 = null;
var text_area67303__1 = (function (name){return text_area67303.call(null,name,null);
});
var text_area67303__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area67303 = function(name,value){
switch(arguments.length){
case 1:
return text_area67303__1.call(this,name);
case 2:
return text_area67303__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area67303.cljs$core$IFn$_invoke$arity$1 = text_area67303__1;
text_area67303.cljs$core$IFn$_invoke$arity$2 = text_area67303__2;
return text_area67303;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area67303);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label67304 = (function label67304(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label67304);
/**
* Creates a submit button.
*/
sablono.core.submit_button67305 = (function submit_button67305(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button67305);
/**
* Creates a form reset button.
*/
sablono.core.reset_button67306 = (function reset_button67306(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button67306);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to67307 = (function() { 
var form_to67307__delegate = function (p__67308,body){var vec__67310 = p__67308;var method = cljs.core.nth.call(null,vec__67310,(0),null);var action = cljs.core.nth.call(null,vec__67310,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to67307 = function (p__67308,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to67307__delegate.call(this,p__67308,body);};
form_to67307.cljs$lang$maxFixedArity = 1;
form_to67307.cljs$lang$applyTo = (function (arglist__67311){
var p__67308 = cljs.core.first(arglist__67311);
var body = cljs.core.rest(arglist__67311);
return form_to67307__delegate(p__67308,body);
});
form_to67307.cljs$core$IFn$_invoke$arity$variadic = form_to67307__delegate;
return form_to67307;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to67307);

//# sourceMappingURL=core.js.map