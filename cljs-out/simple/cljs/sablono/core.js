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
var G__35661__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__35660 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__35660,(0),null);var body = cljs.core.nthnext.call(null,vec__35660,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__35661 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__35661__delegate.call(this,args);};
G__35661.cljs$lang$maxFixedArity = 0;
G__35661.cljs$lang$applyTo = (function (arglist__35662){
var args = cljs.core.seq(arglist__35662);
return G__35661__delegate(args);
});
G__35661.cljs$core$IFn$_invoke$arity$variadic = G__35661__delegate;
return G__35661;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__35667(s__35668){return (new cljs.core.LazySeq(null,(function (){var s__35668__$1 = s__35668;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35668__$1);if(temp__4126__auto__)
{var s__35668__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35668__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__35668__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__35670 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__35669 = (0);while(true){
if((i__35669 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__35669);cljs.core.chunk_append.call(null,b__35670,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__35671 = (i__35669 + (1));
i__35669 = G__35671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35670),iter__35667.call(null,cljs.core.chunk_rest.call(null,s__35668__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35670),null);
}
} else
{var args = cljs.core.first.call(null,s__35668__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__35667.call(null,cljs.core.rest.call(null,s__35668__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__35676(s__35677){return (new cljs.core.LazySeq(null,(function (){var s__35677__$1 = s__35677;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35677__$1);if(temp__4126__auto__)
{var s__35677__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35677__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__35677__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__35679 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__35678 = (0);while(true){
if((i__35678 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__35678);cljs.core.chunk_append.call(null,b__35679,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__35680 = (i__35678 + (1));
i__35678 = G__35680;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35679),iter__35676.call(null,cljs.core.chunk_rest.call(null,s__35677__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35679),null);
}
} else
{var style = cljs.core.first.call(null,s__35677__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__35676.call(null,cljs.core.rest.call(null,s__35677__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__35681){
var styles = cljs.core.seq(arglist__35681);
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
sablono.core.link_to35682 = (function() { 
var link_to35682__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to35682 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to35682__delegate.call(this,url,content);};
link_to35682.cljs$lang$maxFixedArity = 1;
link_to35682.cljs$lang$applyTo = (function (arglist__35683){
var url = cljs.core.first(arglist__35683);
var content = cljs.core.rest(arglist__35683);
return link_to35682__delegate(url,content);
});
link_to35682.cljs$core$IFn$_invoke$arity$variadic = link_to35682__delegate;
return link_to35682;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35682);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to35684 = (function() { 
var mail_to35684__delegate = function (e_mail,p__35685){var vec__35687 = p__35685;var content = cljs.core.nth.call(null,vec__35687,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to35684 = function (e_mail,var_args){
var p__35685 = null;if (arguments.length > 1) {
  p__35685 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to35684__delegate.call(this,e_mail,p__35685);};
mail_to35684.cljs$lang$maxFixedArity = 1;
mail_to35684.cljs$lang$applyTo = (function (arglist__35688){
var e_mail = cljs.core.first(arglist__35688);
var p__35685 = cljs.core.rest(arglist__35688);
return mail_to35684__delegate(e_mail,p__35685);
});
mail_to35684.cljs$core$IFn$_invoke$arity$variadic = mail_to35684__delegate;
return mail_to35684;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35684);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list35689 = (function unordered_list35689(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__35694(s__35695){return (new cljs.core.LazySeq(null,(function (){var s__35695__$1 = s__35695;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35695__$1);if(temp__4126__auto__)
{var s__35695__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35695__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__35695__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__35697 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__35696 = (0);while(true){
if((i__35696 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__35696);cljs.core.chunk_append.call(null,b__35697,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__35698 = (i__35696 + (1));
i__35696 = G__35698;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35697),iter__35694.call(null,cljs.core.chunk_rest.call(null,s__35695__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35697),null);
}
} else
{var x = cljs.core.first.call(null,s__35695__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__35694.call(null,cljs.core.rest.call(null,s__35695__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35689);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list35699 = (function ordered_list35699(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__35704(s__35705){return (new cljs.core.LazySeq(null,(function (){var s__35705__$1 = s__35705;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35705__$1);if(temp__4126__auto__)
{var s__35705__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35705__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__35705__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__35707 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__35706 = (0);while(true){
if((i__35706 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__35706);cljs.core.chunk_append.call(null,b__35707,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__35708 = (i__35706 + (1));
i__35706 = G__35708;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35707),iter__35704.call(null,cljs.core.chunk_rest.call(null,s__35705__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35707),null);
}
} else
{var x = cljs.core.first.call(null,s__35705__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__35704.call(null,cljs.core.rest.call(null,s__35705__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35699);
/**
* Create an image element.
*/
sablono.core.image35709 = (function() {
var image35709 = null;
var image35709__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image35709__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image35709 = function(src,alt){
switch(arguments.length){
case 1:
return image35709__1.call(this,src);
case 2:
return image35709__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image35709.cljs$core$IFn$_invoke$arity$1 = image35709__1;
image35709.cljs$core$IFn$_invoke$arity$2 = image35709__2;
return image35709;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35709);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__35710_SHARP_,p2__35711_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35710_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__35711_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__35712_SHARP_,p2__35713_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35712_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__35713_SHARP_));
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
sablono.core.color_field35714 = (function() {
var color_field35714 = null;
var color_field35714__1 = (function (name__10441__auto__){return color_field35714.call(null,name__10441__auto__,null);
});
var color_field35714__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10441__auto__,value__10442__auto__);
});
color_field35714 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return color_field35714__1.call(this,name__10441__auto__);
case 2:
return color_field35714__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field35714.cljs$core$IFn$_invoke$arity$1 = color_field35714__1;
color_field35714.cljs$core$IFn$_invoke$arity$2 = color_field35714__2;
return color_field35714;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field35714);
/**
* Creates a date input field.
*/
sablono.core.date_field35715 = (function() {
var date_field35715 = null;
var date_field35715__1 = (function (name__10441__auto__){return date_field35715.call(null,name__10441__auto__,null);
});
var date_field35715__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10441__auto__,value__10442__auto__);
});
date_field35715 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return date_field35715__1.call(this,name__10441__auto__);
case 2:
return date_field35715__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field35715.cljs$core$IFn$_invoke$arity$1 = date_field35715__1;
date_field35715.cljs$core$IFn$_invoke$arity$2 = date_field35715__2;
return date_field35715;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field35715);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field35716 = (function() {
var datetime_field35716 = null;
var datetime_field35716__1 = (function (name__10441__auto__){return datetime_field35716.call(null,name__10441__auto__,null);
});
var datetime_field35716__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10441__auto__,value__10442__auto__);
});
datetime_field35716 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return datetime_field35716__1.call(this,name__10441__auto__);
case 2:
return datetime_field35716__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field35716.cljs$core$IFn$_invoke$arity$1 = datetime_field35716__1;
datetime_field35716.cljs$core$IFn$_invoke$arity$2 = datetime_field35716__2;
return datetime_field35716;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field35716);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field35717 = (function() {
var datetime_local_field35717 = null;
var datetime_local_field35717__1 = (function (name__10441__auto__){return datetime_local_field35717.call(null,name__10441__auto__,null);
});
var datetime_local_field35717__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10441__auto__,value__10442__auto__);
});
datetime_local_field35717 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return datetime_local_field35717__1.call(this,name__10441__auto__);
case 2:
return datetime_local_field35717__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field35717.cljs$core$IFn$_invoke$arity$1 = datetime_local_field35717__1;
datetime_local_field35717.cljs$core$IFn$_invoke$arity$2 = datetime_local_field35717__2;
return datetime_local_field35717;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field35717);
/**
* Creates a email input field.
*/
sablono.core.email_field35718 = (function() {
var email_field35718 = null;
var email_field35718__1 = (function (name__10441__auto__){return email_field35718.call(null,name__10441__auto__,null);
});
var email_field35718__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10441__auto__,value__10442__auto__);
});
email_field35718 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return email_field35718__1.call(this,name__10441__auto__);
case 2:
return email_field35718__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field35718.cljs$core$IFn$_invoke$arity$1 = email_field35718__1;
email_field35718.cljs$core$IFn$_invoke$arity$2 = email_field35718__2;
return email_field35718;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35718);
/**
* Creates a file input field.
*/
sablono.core.file_field35719 = (function() {
var file_field35719 = null;
var file_field35719__1 = (function (name__10441__auto__){return file_field35719.call(null,name__10441__auto__,null);
});
var file_field35719__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10441__auto__,value__10442__auto__);
});
file_field35719 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return file_field35719__1.call(this,name__10441__auto__);
case 2:
return file_field35719__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field35719.cljs$core$IFn$_invoke$arity$1 = file_field35719__1;
file_field35719.cljs$core$IFn$_invoke$arity$2 = file_field35719__2;
return file_field35719;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field35719);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field35720 = (function() {
var hidden_field35720 = null;
var hidden_field35720__1 = (function (name__10441__auto__){return hidden_field35720.call(null,name__10441__auto__,null);
});
var hidden_field35720__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10441__auto__,value__10442__auto__);
});
hidden_field35720 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return hidden_field35720__1.call(this,name__10441__auto__);
case 2:
return hidden_field35720__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field35720.cljs$core$IFn$_invoke$arity$1 = hidden_field35720__1;
hidden_field35720.cljs$core$IFn$_invoke$arity$2 = hidden_field35720__2;
return hidden_field35720;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35720);
/**
* Creates a month input field.
*/
sablono.core.month_field35721 = (function() {
var month_field35721 = null;
var month_field35721__1 = (function (name__10441__auto__){return month_field35721.call(null,name__10441__auto__,null);
});
var month_field35721__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10441__auto__,value__10442__auto__);
});
month_field35721 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return month_field35721__1.call(this,name__10441__auto__);
case 2:
return month_field35721__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field35721.cljs$core$IFn$_invoke$arity$1 = month_field35721__1;
month_field35721.cljs$core$IFn$_invoke$arity$2 = month_field35721__2;
return month_field35721;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field35721);
/**
* Creates a number input field.
*/
sablono.core.number_field35722 = (function() {
var number_field35722 = null;
var number_field35722__1 = (function (name__10441__auto__){return number_field35722.call(null,name__10441__auto__,null);
});
var number_field35722__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10441__auto__,value__10442__auto__);
});
number_field35722 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return number_field35722__1.call(this,name__10441__auto__);
case 2:
return number_field35722__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field35722.cljs$core$IFn$_invoke$arity$1 = number_field35722__1;
number_field35722.cljs$core$IFn$_invoke$arity$2 = number_field35722__2;
return number_field35722;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field35722);
/**
* Creates a password input field.
*/
sablono.core.password_field35723 = (function() {
var password_field35723 = null;
var password_field35723__1 = (function (name__10441__auto__){return password_field35723.call(null,name__10441__auto__,null);
});
var password_field35723__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10441__auto__,value__10442__auto__);
});
password_field35723 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return password_field35723__1.call(this,name__10441__auto__);
case 2:
return password_field35723__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field35723.cljs$core$IFn$_invoke$arity$1 = password_field35723__1;
password_field35723.cljs$core$IFn$_invoke$arity$2 = password_field35723__2;
return password_field35723;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35723);
/**
* Creates a range input field.
*/
sablono.core.range_field35724 = (function() {
var range_field35724 = null;
var range_field35724__1 = (function (name__10441__auto__){return range_field35724.call(null,name__10441__auto__,null);
});
var range_field35724__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10441__auto__,value__10442__auto__);
});
range_field35724 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return range_field35724__1.call(this,name__10441__auto__);
case 2:
return range_field35724__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field35724.cljs$core$IFn$_invoke$arity$1 = range_field35724__1;
range_field35724.cljs$core$IFn$_invoke$arity$2 = range_field35724__2;
return range_field35724;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field35724);
/**
* Creates a search input field.
*/
sablono.core.search_field35725 = (function() {
var search_field35725 = null;
var search_field35725__1 = (function (name__10441__auto__){return search_field35725.call(null,name__10441__auto__,null);
});
var search_field35725__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10441__auto__,value__10442__auto__);
});
search_field35725 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return search_field35725__1.call(this,name__10441__auto__);
case 2:
return search_field35725__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field35725.cljs$core$IFn$_invoke$arity$1 = search_field35725__1;
search_field35725.cljs$core$IFn$_invoke$arity$2 = search_field35725__2;
return search_field35725;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field35725);
/**
* Creates a tel input field.
*/
sablono.core.tel_field35726 = (function() {
var tel_field35726 = null;
var tel_field35726__1 = (function (name__10441__auto__){return tel_field35726.call(null,name__10441__auto__,null);
});
var tel_field35726__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10441__auto__,value__10442__auto__);
});
tel_field35726 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return tel_field35726__1.call(this,name__10441__auto__);
case 2:
return tel_field35726__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field35726.cljs$core$IFn$_invoke$arity$1 = tel_field35726__1;
tel_field35726.cljs$core$IFn$_invoke$arity$2 = tel_field35726__2;
return tel_field35726;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field35726);
/**
* Creates a text input field.
*/
sablono.core.text_field35727 = (function() {
var text_field35727 = null;
var text_field35727__1 = (function (name__10441__auto__){return text_field35727.call(null,name__10441__auto__,null);
});
var text_field35727__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10441__auto__,value__10442__auto__);
});
text_field35727 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return text_field35727__1.call(this,name__10441__auto__);
case 2:
return text_field35727__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field35727.cljs$core$IFn$_invoke$arity$1 = text_field35727__1;
text_field35727.cljs$core$IFn$_invoke$arity$2 = text_field35727__2;
return text_field35727;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35727);
/**
* Creates a time input field.
*/
sablono.core.time_field35728 = (function() {
var time_field35728 = null;
var time_field35728__1 = (function (name__10441__auto__){return time_field35728.call(null,name__10441__auto__,null);
});
var time_field35728__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10441__auto__,value__10442__auto__);
});
time_field35728 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return time_field35728__1.call(this,name__10441__auto__);
case 2:
return time_field35728__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field35728.cljs$core$IFn$_invoke$arity$1 = time_field35728__1;
time_field35728.cljs$core$IFn$_invoke$arity$2 = time_field35728__2;
return time_field35728;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field35728);
/**
* Creates a url input field.
*/
sablono.core.url_field35729 = (function() {
var url_field35729 = null;
var url_field35729__1 = (function (name__10441__auto__){return url_field35729.call(null,name__10441__auto__,null);
});
var url_field35729__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10441__auto__,value__10442__auto__);
});
url_field35729 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return url_field35729__1.call(this,name__10441__auto__);
case 2:
return url_field35729__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field35729.cljs$core$IFn$_invoke$arity$1 = url_field35729__1;
url_field35729.cljs$core$IFn$_invoke$arity$2 = url_field35729__2;
return url_field35729;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field35729);
/**
* Creates a week input field.
*/
sablono.core.week_field35730 = (function() {
var week_field35730 = null;
var week_field35730__1 = (function (name__10441__auto__){return week_field35730.call(null,name__10441__auto__,null);
});
var week_field35730__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10441__auto__,value__10442__auto__);
});
week_field35730 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return week_field35730__1.call(this,name__10441__auto__);
case 2:
return week_field35730__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field35730.cljs$core$IFn$_invoke$arity$1 = week_field35730__1;
week_field35730.cljs$core$IFn$_invoke$arity$2 = week_field35730__2;
return week_field35730;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field35730);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box35731 = (function() {
var check_box35731 = null;
var check_box35731__1 = (function (name){return check_box35731.call(null,name,null);
});
var check_box35731__2 = (function (name,checked_QMARK_){return check_box35731.call(null,name,checked_QMARK_,"true");
});
var check_box35731__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box35731 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box35731__1.call(this,name);
case 2:
return check_box35731__2.call(this,name,checked_QMARK_);
case 3:
return check_box35731__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box35731.cljs$core$IFn$_invoke$arity$1 = check_box35731__1;
check_box35731.cljs$core$IFn$_invoke$arity$2 = check_box35731__2;
check_box35731.cljs$core$IFn$_invoke$arity$3 = check_box35731__3;
return check_box35731;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35731);
/**
* Creates a radio button.
*/
sablono.core.radio_button35732 = (function() {
var radio_button35732 = null;
var radio_button35732__1 = (function (group){return radio_button35732.call(null,group,null);
});
var radio_button35732__2 = (function (group,checked_QMARK_){return radio_button35732.call(null,group,checked_QMARK_,"true");
});
var radio_button35732__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button35732 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button35732__1.call(this,group);
case 2:
return radio_button35732__2.call(this,group,checked_QMARK_);
case 3:
return radio_button35732__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button35732.cljs$core$IFn$_invoke$arity$1 = radio_button35732__1;
radio_button35732.cljs$core$IFn$_invoke$arity$2 = radio_button35732__2;
radio_button35732.cljs$core$IFn$_invoke$arity$3 = radio_button35732__3;
return radio_button35732;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35732);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options35733 = (function() {
var select_options35733 = null;
var select_options35733__1 = (function (coll){return select_options35733.call(null,coll,null);
});
var select_options35733__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__35742(s__35743){return (new cljs.core.LazySeq(null,(function (){var s__35743__$1 = s__35743;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35743__$1);if(temp__4126__auto__)
{var s__35743__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35743__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__35743__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__35745 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__35744 = (0);while(true){
if((i__35744 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__35744);cljs.core.chunk_append.call(null,b__35745,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35748 = x;var text = cljs.core.nth.call(null,vec__35748,(0),null);var val = cljs.core.nth.call(null,vec__35748,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__35748,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options35733.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__35750 = (i__35744 + (1));
i__35744 = G__35750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35745),iter__35742.call(null,cljs.core.chunk_rest.call(null,s__35743__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35745),null);
}
} else
{var x = cljs.core.first.call(null,s__35743__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35749 = x;var text = cljs.core.nth.call(null,vec__35749,(0),null);var val = cljs.core.nth.call(null,vec__35749,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__35749,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options35733.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__35742.call(null,cljs.core.rest.call(null,s__35743__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options35733 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options35733__1.call(this,coll);
case 2:
return select_options35733__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options35733.cljs$core$IFn$_invoke$arity$1 = select_options35733__1;
select_options35733.cljs$core$IFn$_invoke$arity$2 = select_options35733__2;
return select_options35733;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35733);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down35751 = (function() {
var drop_down35751 = null;
var drop_down35751__2 = (function (name,options){return drop_down35751.call(null,name,options,null);
});
var drop_down35751__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down35751 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down35751__2.call(this,name,options);
case 3:
return drop_down35751__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down35751.cljs$core$IFn$_invoke$arity$2 = drop_down35751__2;
drop_down35751.cljs$core$IFn$_invoke$arity$3 = drop_down35751__3;
return drop_down35751;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down35751);
/**
* Creates a text area element.
*/
sablono.core.text_area35752 = (function() {
var text_area35752 = null;
var text_area35752__1 = (function (name){return text_area35752.call(null,name,null);
});
var text_area35752__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area35752 = function(name,value){
switch(arguments.length){
case 1:
return text_area35752__1.call(this,name);
case 2:
return text_area35752__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area35752.cljs$core$IFn$_invoke$arity$1 = text_area35752__1;
text_area35752.cljs$core$IFn$_invoke$arity$2 = text_area35752__2;
return text_area35752;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area35752);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label35753 = (function label35753(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label35753);
/**
* Creates a submit button.
*/
sablono.core.submit_button35754 = (function submit_button35754(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button35754);
/**
* Creates a form reset button.
*/
sablono.core.reset_button35755 = (function reset_button35755(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button35755);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to35756 = (function() { 
var form_to35756__delegate = function (p__35757,body){var vec__35759 = p__35757;var method = cljs.core.nth.call(null,vec__35759,(0),null);var action = cljs.core.nth.call(null,vec__35759,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to35756 = function (p__35757,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to35756__delegate.call(this,p__35757,body);};
form_to35756.cljs$lang$maxFixedArity = 1;
form_to35756.cljs$lang$applyTo = (function (arglist__35760){
var p__35757 = cljs.core.first(arglist__35760);
var body = cljs.core.rest(arglist__35760);
return form_to35756__delegate(p__35757,body);
});
form_to35756.cljs$core$IFn$_invoke$arity$variadic = form_to35756__delegate;
return form_to35756;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to35756);
