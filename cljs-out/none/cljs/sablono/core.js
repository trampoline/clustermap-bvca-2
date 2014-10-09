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
var G__66575__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__66574 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__66574,(0),null);var body = cljs.core.nthnext.call(null,vec__66574,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__66575 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__66575__delegate.call(this,args);};
G__66575.cljs$lang$maxFixedArity = 0;
G__66575.cljs$lang$applyTo = (function (arglist__66576){
var args = cljs.core.seq(arglist__66576);
return G__66575__delegate(args);
});
G__66575.cljs$core$IFn$_invoke$arity$variadic = G__66575__delegate;
return G__66575;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__66581(s__66582){return (new cljs.core.LazySeq(null,(function (){var s__66582__$1 = s__66582;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__66582__$1);if(temp__4126__auto__)
{var s__66582__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__66582__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__66582__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__66584 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__66583 = (0);while(true){
if((i__66583 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__66583);cljs.core.chunk_append.call(null,b__66584,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__66585 = (i__66583 + (1));
i__66583 = G__66585;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66584),iter__66581.call(null,cljs.core.chunk_rest.call(null,s__66582__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66584),null);
}
} else
{var args = cljs.core.first.call(null,s__66582__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__66581.call(null,cljs.core.rest.call(null,s__66582__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__66590(s__66591){return (new cljs.core.LazySeq(null,(function (){var s__66591__$1 = s__66591;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__66591__$1);if(temp__4126__auto__)
{var s__66591__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__66591__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__66591__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__66593 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__66592 = (0);while(true){
if((i__66592 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__66592);cljs.core.chunk_append.call(null,b__66593,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__66594 = (i__66592 + (1));
i__66592 = G__66594;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66593),iter__66590.call(null,cljs.core.chunk_rest.call(null,s__66591__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66593),null);
}
} else
{var style = cljs.core.first.call(null,s__66591__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__66590.call(null,cljs.core.rest.call(null,s__66591__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__66595){
var styles = cljs.core.seq(arglist__66595);
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
sablono.core.link_to66596 = (function() { 
var link_to66596__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to66596 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to66596__delegate.call(this,url,content);};
link_to66596.cljs$lang$maxFixedArity = 1;
link_to66596.cljs$lang$applyTo = (function (arglist__66597){
var url = cljs.core.first(arglist__66597);
var content = cljs.core.rest(arglist__66597);
return link_to66596__delegate(url,content);
});
link_to66596.cljs$core$IFn$_invoke$arity$variadic = link_to66596__delegate;
return link_to66596;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to66596);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to66598 = (function() { 
var mail_to66598__delegate = function (e_mail,p__66599){var vec__66601 = p__66599;var content = cljs.core.nth.call(null,vec__66601,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to66598 = function (e_mail,var_args){
var p__66599 = null;if (arguments.length > 1) {
  p__66599 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to66598__delegate.call(this,e_mail,p__66599);};
mail_to66598.cljs$lang$maxFixedArity = 1;
mail_to66598.cljs$lang$applyTo = (function (arglist__66602){
var e_mail = cljs.core.first(arglist__66602);
var p__66599 = cljs.core.rest(arglist__66602);
return mail_to66598__delegate(e_mail,p__66599);
});
mail_to66598.cljs$core$IFn$_invoke$arity$variadic = mail_to66598__delegate;
return mail_to66598;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to66598);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list66603 = (function unordered_list66603(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__66608(s__66609){return (new cljs.core.LazySeq(null,(function (){var s__66609__$1 = s__66609;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__66609__$1);if(temp__4126__auto__)
{var s__66609__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__66609__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__66609__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__66611 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__66610 = (0);while(true){
if((i__66610 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__66610);cljs.core.chunk_append.call(null,b__66611,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__66612 = (i__66610 + (1));
i__66610 = G__66612;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66611),iter__66608.call(null,cljs.core.chunk_rest.call(null,s__66609__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66611),null);
}
} else
{var x = cljs.core.first.call(null,s__66609__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__66608.call(null,cljs.core.rest.call(null,s__66609__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list66603);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list66613 = (function ordered_list66613(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__66618(s__66619){return (new cljs.core.LazySeq(null,(function (){var s__66619__$1 = s__66619;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__66619__$1);if(temp__4126__auto__)
{var s__66619__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__66619__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__66619__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__66621 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__66620 = (0);while(true){
if((i__66620 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__66620);cljs.core.chunk_append.call(null,b__66621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__66622 = (i__66620 + (1));
i__66620 = G__66622;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66621),iter__66618.call(null,cljs.core.chunk_rest.call(null,s__66619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66621),null);
}
} else
{var x = cljs.core.first.call(null,s__66619__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__66618.call(null,cljs.core.rest.call(null,s__66619__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list66613);
/**
* Create an image element.
*/
sablono.core.image66623 = (function() {
var image66623 = null;
var image66623__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image66623__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image66623 = function(src,alt){
switch(arguments.length){
case 1:
return image66623__1.call(this,src);
case 2:
return image66623__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image66623.cljs$core$IFn$_invoke$arity$1 = image66623__1;
image66623.cljs$core$IFn$_invoke$arity$2 = image66623__2;
return image66623;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image66623);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__66624_SHARP_,p2__66625_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66624_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__66625_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__66626_SHARP_,p2__66627_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66626_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__66627_SHARP_));
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
sablono.core.color_field66628 = (function() {
var color_field66628 = null;
var color_field66628__1 = (function (name__13522__auto__){return color_field66628.call(null,name__13522__auto__,null);
});
var color_field66628__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__13522__auto__,value__13523__auto__);
});
color_field66628 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return color_field66628__1.call(this,name__13522__auto__);
case 2:
return color_field66628__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field66628.cljs$core$IFn$_invoke$arity$1 = color_field66628__1;
color_field66628.cljs$core$IFn$_invoke$arity$2 = color_field66628__2;
return color_field66628;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field66628);
/**
* Creates a date input field.
*/
sablono.core.date_field66629 = (function() {
var date_field66629 = null;
var date_field66629__1 = (function (name__13522__auto__){return date_field66629.call(null,name__13522__auto__,null);
});
var date_field66629__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__13522__auto__,value__13523__auto__);
});
date_field66629 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return date_field66629__1.call(this,name__13522__auto__);
case 2:
return date_field66629__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field66629.cljs$core$IFn$_invoke$arity$1 = date_field66629__1;
date_field66629.cljs$core$IFn$_invoke$arity$2 = date_field66629__2;
return date_field66629;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field66629);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field66630 = (function() {
var datetime_field66630 = null;
var datetime_field66630__1 = (function (name__13522__auto__){return datetime_field66630.call(null,name__13522__auto__,null);
});
var datetime_field66630__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__13522__auto__,value__13523__auto__);
});
datetime_field66630 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_field66630__1.call(this,name__13522__auto__);
case 2:
return datetime_field66630__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field66630.cljs$core$IFn$_invoke$arity$1 = datetime_field66630__1;
datetime_field66630.cljs$core$IFn$_invoke$arity$2 = datetime_field66630__2;
return datetime_field66630;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field66630);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field66631 = (function() {
var datetime_local_field66631 = null;
var datetime_local_field66631__1 = (function (name__13522__auto__){return datetime_local_field66631.call(null,name__13522__auto__,null);
});
var datetime_local_field66631__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__13522__auto__,value__13523__auto__);
});
datetime_local_field66631 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_local_field66631__1.call(this,name__13522__auto__);
case 2:
return datetime_local_field66631__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field66631.cljs$core$IFn$_invoke$arity$1 = datetime_local_field66631__1;
datetime_local_field66631.cljs$core$IFn$_invoke$arity$2 = datetime_local_field66631__2;
return datetime_local_field66631;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field66631);
/**
* Creates a email input field.
*/
sablono.core.email_field66632 = (function() {
var email_field66632 = null;
var email_field66632__1 = (function (name__13522__auto__){return email_field66632.call(null,name__13522__auto__,null);
});
var email_field66632__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__13522__auto__,value__13523__auto__);
});
email_field66632 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return email_field66632__1.call(this,name__13522__auto__);
case 2:
return email_field66632__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field66632.cljs$core$IFn$_invoke$arity$1 = email_field66632__1;
email_field66632.cljs$core$IFn$_invoke$arity$2 = email_field66632__2;
return email_field66632;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field66632);
/**
* Creates a file input field.
*/
sablono.core.file_field66633 = (function() {
var file_field66633 = null;
var file_field66633__1 = (function (name__13522__auto__){return file_field66633.call(null,name__13522__auto__,null);
});
var file_field66633__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__13522__auto__,value__13523__auto__);
});
file_field66633 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return file_field66633__1.call(this,name__13522__auto__);
case 2:
return file_field66633__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field66633.cljs$core$IFn$_invoke$arity$1 = file_field66633__1;
file_field66633.cljs$core$IFn$_invoke$arity$2 = file_field66633__2;
return file_field66633;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field66633);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field66634 = (function() {
var hidden_field66634 = null;
var hidden_field66634__1 = (function (name__13522__auto__){return hidden_field66634.call(null,name__13522__auto__,null);
});
var hidden_field66634__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__13522__auto__,value__13523__auto__);
});
hidden_field66634 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return hidden_field66634__1.call(this,name__13522__auto__);
case 2:
return hidden_field66634__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field66634.cljs$core$IFn$_invoke$arity$1 = hidden_field66634__1;
hidden_field66634.cljs$core$IFn$_invoke$arity$2 = hidden_field66634__2;
return hidden_field66634;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field66634);
/**
* Creates a month input field.
*/
sablono.core.month_field66635 = (function() {
var month_field66635 = null;
var month_field66635__1 = (function (name__13522__auto__){return month_field66635.call(null,name__13522__auto__,null);
});
var month_field66635__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__13522__auto__,value__13523__auto__);
});
month_field66635 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return month_field66635__1.call(this,name__13522__auto__);
case 2:
return month_field66635__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field66635.cljs$core$IFn$_invoke$arity$1 = month_field66635__1;
month_field66635.cljs$core$IFn$_invoke$arity$2 = month_field66635__2;
return month_field66635;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field66635);
/**
* Creates a number input field.
*/
sablono.core.number_field66636 = (function() {
var number_field66636 = null;
var number_field66636__1 = (function (name__13522__auto__){return number_field66636.call(null,name__13522__auto__,null);
});
var number_field66636__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__13522__auto__,value__13523__auto__);
});
number_field66636 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return number_field66636__1.call(this,name__13522__auto__);
case 2:
return number_field66636__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field66636.cljs$core$IFn$_invoke$arity$1 = number_field66636__1;
number_field66636.cljs$core$IFn$_invoke$arity$2 = number_field66636__2;
return number_field66636;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field66636);
/**
* Creates a password input field.
*/
sablono.core.password_field66637 = (function() {
var password_field66637 = null;
var password_field66637__1 = (function (name__13522__auto__){return password_field66637.call(null,name__13522__auto__,null);
});
var password_field66637__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__13522__auto__,value__13523__auto__);
});
password_field66637 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return password_field66637__1.call(this,name__13522__auto__);
case 2:
return password_field66637__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field66637.cljs$core$IFn$_invoke$arity$1 = password_field66637__1;
password_field66637.cljs$core$IFn$_invoke$arity$2 = password_field66637__2;
return password_field66637;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field66637);
/**
* Creates a range input field.
*/
sablono.core.range_field66638 = (function() {
var range_field66638 = null;
var range_field66638__1 = (function (name__13522__auto__){return range_field66638.call(null,name__13522__auto__,null);
});
var range_field66638__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__13522__auto__,value__13523__auto__);
});
range_field66638 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return range_field66638__1.call(this,name__13522__auto__);
case 2:
return range_field66638__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field66638.cljs$core$IFn$_invoke$arity$1 = range_field66638__1;
range_field66638.cljs$core$IFn$_invoke$arity$2 = range_field66638__2;
return range_field66638;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field66638);
/**
* Creates a search input field.
*/
sablono.core.search_field66639 = (function() {
var search_field66639 = null;
var search_field66639__1 = (function (name__13522__auto__){return search_field66639.call(null,name__13522__auto__,null);
});
var search_field66639__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__13522__auto__,value__13523__auto__);
});
search_field66639 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return search_field66639__1.call(this,name__13522__auto__);
case 2:
return search_field66639__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field66639.cljs$core$IFn$_invoke$arity$1 = search_field66639__1;
search_field66639.cljs$core$IFn$_invoke$arity$2 = search_field66639__2;
return search_field66639;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field66639);
/**
* Creates a tel input field.
*/
sablono.core.tel_field66640 = (function() {
var tel_field66640 = null;
var tel_field66640__1 = (function (name__13522__auto__){return tel_field66640.call(null,name__13522__auto__,null);
});
var tel_field66640__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__13522__auto__,value__13523__auto__);
});
tel_field66640 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return tel_field66640__1.call(this,name__13522__auto__);
case 2:
return tel_field66640__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field66640.cljs$core$IFn$_invoke$arity$1 = tel_field66640__1;
tel_field66640.cljs$core$IFn$_invoke$arity$2 = tel_field66640__2;
return tel_field66640;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field66640);
/**
* Creates a text input field.
*/
sablono.core.text_field66641 = (function() {
var text_field66641 = null;
var text_field66641__1 = (function (name__13522__auto__){return text_field66641.call(null,name__13522__auto__,null);
});
var text_field66641__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__13522__auto__,value__13523__auto__);
});
text_field66641 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return text_field66641__1.call(this,name__13522__auto__);
case 2:
return text_field66641__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field66641.cljs$core$IFn$_invoke$arity$1 = text_field66641__1;
text_field66641.cljs$core$IFn$_invoke$arity$2 = text_field66641__2;
return text_field66641;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field66641);
/**
* Creates a time input field.
*/
sablono.core.time_field66642 = (function() {
var time_field66642 = null;
var time_field66642__1 = (function (name__13522__auto__){return time_field66642.call(null,name__13522__auto__,null);
});
var time_field66642__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__13522__auto__,value__13523__auto__);
});
time_field66642 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return time_field66642__1.call(this,name__13522__auto__);
case 2:
return time_field66642__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field66642.cljs$core$IFn$_invoke$arity$1 = time_field66642__1;
time_field66642.cljs$core$IFn$_invoke$arity$2 = time_field66642__2;
return time_field66642;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field66642);
/**
* Creates a url input field.
*/
sablono.core.url_field66643 = (function() {
var url_field66643 = null;
var url_field66643__1 = (function (name__13522__auto__){return url_field66643.call(null,name__13522__auto__,null);
});
var url_field66643__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__13522__auto__,value__13523__auto__);
});
url_field66643 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return url_field66643__1.call(this,name__13522__auto__);
case 2:
return url_field66643__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field66643.cljs$core$IFn$_invoke$arity$1 = url_field66643__1;
url_field66643.cljs$core$IFn$_invoke$arity$2 = url_field66643__2;
return url_field66643;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field66643);
/**
* Creates a week input field.
*/
sablono.core.week_field66644 = (function() {
var week_field66644 = null;
var week_field66644__1 = (function (name__13522__auto__){return week_field66644.call(null,name__13522__auto__,null);
});
var week_field66644__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__13522__auto__,value__13523__auto__);
});
week_field66644 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return week_field66644__1.call(this,name__13522__auto__);
case 2:
return week_field66644__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field66644.cljs$core$IFn$_invoke$arity$1 = week_field66644__1;
week_field66644.cljs$core$IFn$_invoke$arity$2 = week_field66644__2;
return week_field66644;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field66644);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box66645 = (function() {
var check_box66645 = null;
var check_box66645__1 = (function (name){return check_box66645.call(null,name,null);
});
var check_box66645__2 = (function (name,checked_QMARK_){return check_box66645.call(null,name,checked_QMARK_,"true");
});
var check_box66645__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box66645 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box66645__1.call(this,name);
case 2:
return check_box66645__2.call(this,name,checked_QMARK_);
case 3:
return check_box66645__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box66645.cljs$core$IFn$_invoke$arity$1 = check_box66645__1;
check_box66645.cljs$core$IFn$_invoke$arity$2 = check_box66645__2;
check_box66645.cljs$core$IFn$_invoke$arity$3 = check_box66645__3;
return check_box66645;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box66645);
/**
* Creates a radio button.
*/
sablono.core.radio_button66646 = (function() {
var radio_button66646 = null;
var radio_button66646__1 = (function (group){return radio_button66646.call(null,group,null);
});
var radio_button66646__2 = (function (group,checked_QMARK_){return radio_button66646.call(null,group,checked_QMARK_,"true");
});
var radio_button66646__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button66646 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button66646__1.call(this,group);
case 2:
return radio_button66646__2.call(this,group,checked_QMARK_);
case 3:
return radio_button66646__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button66646.cljs$core$IFn$_invoke$arity$1 = radio_button66646__1;
radio_button66646.cljs$core$IFn$_invoke$arity$2 = radio_button66646__2;
radio_button66646.cljs$core$IFn$_invoke$arity$3 = radio_button66646__3;
return radio_button66646;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button66646);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options66647 = (function() {
var select_options66647 = null;
var select_options66647__1 = (function (coll){return select_options66647.call(null,coll,null);
});
var select_options66647__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__66656(s__66657){return (new cljs.core.LazySeq(null,(function (){var s__66657__$1 = s__66657;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__66657__$1);if(temp__4126__auto__)
{var s__66657__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__66657__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__66657__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__66659 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__66658 = (0);while(true){
if((i__66658 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__66658);cljs.core.chunk_append.call(null,b__66659,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__66662 = x;var text = cljs.core.nth.call(null,vec__66662,(0),null);var val = cljs.core.nth.call(null,vec__66662,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__66662,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options66647.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__66664 = (i__66658 + (1));
i__66658 = G__66664;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66659),iter__66656.call(null,cljs.core.chunk_rest.call(null,s__66657__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66659),null);
}
} else
{var x = cljs.core.first.call(null,s__66657__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__66663 = x;var text = cljs.core.nth.call(null,vec__66663,(0),null);var val = cljs.core.nth.call(null,vec__66663,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__66663,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options66647.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__66656.call(null,cljs.core.rest.call(null,s__66657__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options66647 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options66647__1.call(this,coll);
case 2:
return select_options66647__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options66647.cljs$core$IFn$_invoke$arity$1 = select_options66647__1;
select_options66647.cljs$core$IFn$_invoke$arity$2 = select_options66647__2;
return select_options66647;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options66647);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down66665 = (function() {
var drop_down66665 = null;
var drop_down66665__2 = (function (name,options){return drop_down66665.call(null,name,options,null);
});
var drop_down66665__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down66665 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down66665__2.call(this,name,options);
case 3:
return drop_down66665__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down66665.cljs$core$IFn$_invoke$arity$2 = drop_down66665__2;
drop_down66665.cljs$core$IFn$_invoke$arity$3 = drop_down66665__3;
return drop_down66665;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down66665);
/**
* Creates a text area element.
*/
sablono.core.text_area66666 = (function() {
var text_area66666 = null;
var text_area66666__1 = (function (name){return text_area66666.call(null,name,null);
});
var text_area66666__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area66666 = function(name,value){
switch(arguments.length){
case 1:
return text_area66666__1.call(this,name);
case 2:
return text_area66666__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area66666.cljs$core$IFn$_invoke$arity$1 = text_area66666__1;
text_area66666.cljs$core$IFn$_invoke$arity$2 = text_area66666__2;
return text_area66666;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area66666);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label66667 = (function label66667(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label66667);
/**
* Creates a submit button.
*/
sablono.core.submit_button66668 = (function submit_button66668(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button66668);
/**
* Creates a form reset button.
*/
sablono.core.reset_button66669 = (function reset_button66669(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button66669);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to66670 = (function() { 
var form_to66670__delegate = function (p__66671,body){var vec__66673 = p__66671;var method = cljs.core.nth.call(null,vec__66673,(0),null);var action = cljs.core.nth.call(null,vec__66673,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to66670 = function (p__66671,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to66670__delegate.call(this,p__66671,body);};
form_to66670.cljs$lang$maxFixedArity = 1;
form_to66670.cljs$lang$applyTo = (function (arglist__66674){
var p__66671 = cljs.core.first(arglist__66674);
var body = cljs.core.rest(arglist__66674);
return form_to66670__delegate(p__66671,body);
});
form_to66670.cljs$core$IFn$_invoke$arity$variadic = form_to66670__delegate;
return form_to66670;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to66670);

//# sourceMappingURL=core.js.map