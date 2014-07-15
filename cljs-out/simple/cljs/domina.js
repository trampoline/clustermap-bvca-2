// Compiled by ClojureScript 0.0-2261
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_29274 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_29275 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_29276 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_29276,opt_wrapper_29274,table_section_wrapper_29275,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_29274,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_29275,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_29275,cell_wrapper_29276,table_section_wrapper_29275,table_section_wrapper_29275]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__29281 = cljs.core.seq.call(null,tbody);var chunk__29282 = null;var count__29283 = (0);var i__29284 = (0);while(true){
if((i__29284 < count__29283))
{var child = cljs.core._nth.call(null,chunk__29282,i__29284);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__29285 = seq__29281;
var G__29286 = chunk__29282;
var G__29287 = count__29283;
var G__29288 = (i__29284 + (1));
seq__29281 = G__29285;
chunk__29282 = G__29286;
count__29283 = G__29287;
i__29284 = G__29288;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29281);if(temp__4126__auto__)
{var seq__29281__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29281__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__29281__$1);{
var G__29289 = cljs.core.chunk_rest.call(null,seq__29281__$1);
var G__29290 = c__4299__auto__;
var G__29291 = cljs.core.count.call(null,c__4299__auto__);
var G__29292 = (0);
seq__29281 = G__29289;
chunk__29282 = G__29290;
count__29283 = G__29291;
i__29284 = G__29292;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__29281__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__29293 = cljs.core.next.call(null,seq__29281__$1);
var G__29294 = null;
var G__29295 = (0);
var G__29296 = (0);
seq__29281 = G__29293;
chunk__29282 = G__29294;
count__29283 = G__29295;
i__29284 = G__29296;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__29298 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__29298,(0),null);var start_wrap = cljs.core.nth.call(null,vec__29298,(1),null);var end_wrap = cljs.core.nth.call(null,vec__29298,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__29299 = wrapper.lastChild;
var G__29300 = (level - (1));
wrapper = G__29299;
level = G__29300;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj29302 = {};return obj29302;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__29303){
var mesg = cljs.core.seq(arglist__29303);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__29304){
var mesg = cljs.core.seq(arglist__29304);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__29305){
var contents = cljs.core.seq(arglist__29305);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__29306_SHARP_){return p1__29306_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__29307_SHARP_,p2__29308_SHARP_){return goog.dom.insertChildAt(p1__29307_SHARP_,p2__29308_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__29310_SHARP_,p2__29309_SHARP_){return goog.dom.insertSiblingBefore(p2__29309_SHARP_,p1__29310_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__29312_SHARP_,p2__29311_SHARP_){return goog.dom.insertSiblingAfter(p2__29311_SHARP_,p1__29312_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__29314_SHARP_,p2__29313_SHARP_){return goog.dom.replaceNode(p2__29313_SHARP_,p1__29314_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__29319_29323 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29320_29324 = null;var count__29321_29325 = (0);var i__29322_29326 = (0);while(true){
if((i__29322_29326 < count__29321_29325))
{var n_29327 = cljs.core._nth.call(null,chunk__29320_29324,i__29322_29326);goog.style.setStyle(n_29327,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29328 = seq__29319_29323;
var G__29329 = chunk__29320_29324;
var G__29330 = count__29321_29325;
var G__29331 = (i__29322_29326 + (1));
seq__29319_29323 = G__29328;
chunk__29320_29324 = G__29329;
count__29321_29325 = G__29330;
i__29322_29326 = G__29331;
continue;
}
} else
{var temp__4126__auto___29332 = cljs.core.seq.call(null,seq__29319_29323);if(temp__4126__auto___29332)
{var seq__29319_29333__$1 = temp__4126__auto___29332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29319_29333__$1))
{var c__4299__auto___29334 = cljs.core.chunk_first.call(null,seq__29319_29333__$1);{
var G__29335 = cljs.core.chunk_rest.call(null,seq__29319_29333__$1);
var G__29336 = c__4299__auto___29334;
var G__29337 = cljs.core.count.call(null,c__4299__auto___29334);
var G__29338 = (0);
seq__29319_29323 = G__29335;
chunk__29320_29324 = G__29336;
count__29321_29325 = G__29337;
i__29322_29326 = G__29338;
continue;
}
} else
{var n_29339 = cljs.core.first.call(null,seq__29319_29333__$1);goog.style.setStyle(n_29339,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29340 = cljs.core.next.call(null,seq__29319_29333__$1);
var G__29341 = null;
var G__29342 = (0);
var G__29343 = (0);
seq__29319_29323 = G__29340;
chunk__29320_29324 = G__29341;
count__29321_29325 = G__29342;
i__29322_29326 = G__29343;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__29344){
var content = cljs.core.first(arglist__29344);
arglist__29344 = cljs.core.next(arglist__29344);
var name = cljs.core.first(arglist__29344);
var value = cljs.core.rest(arglist__29344);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__29349_29353 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29350_29354 = null;var count__29351_29355 = (0);var i__29352_29356 = (0);while(true){
if((i__29352_29356 < count__29351_29355))
{var n_29357 = cljs.core._nth.call(null,chunk__29350_29354,i__29352_29356);n_29357.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29358 = seq__29349_29353;
var G__29359 = chunk__29350_29354;
var G__29360 = count__29351_29355;
var G__29361 = (i__29352_29356 + (1));
seq__29349_29353 = G__29358;
chunk__29350_29354 = G__29359;
count__29351_29355 = G__29360;
i__29352_29356 = G__29361;
continue;
}
} else
{var temp__4126__auto___29362 = cljs.core.seq.call(null,seq__29349_29353);if(temp__4126__auto___29362)
{var seq__29349_29363__$1 = temp__4126__auto___29362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29349_29363__$1))
{var c__4299__auto___29364 = cljs.core.chunk_first.call(null,seq__29349_29363__$1);{
var G__29365 = cljs.core.chunk_rest.call(null,seq__29349_29363__$1);
var G__29366 = c__4299__auto___29364;
var G__29367 = cljs.core.count.call(null,c__4299__auto___29364);
var G__29368 = (0);
seq__29349_29353 = G__29365;
chunk__29350_29354 = G__29366;
count__29351_29355 = G__29367;
i__29352_29356 = G__29368;
continue;
}
} else
{var n_29369 = cljs.core.first.call(null,seq__29349_29363__$1);n_29369.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29370 = cljs.core.next.call(null,seq__29349_29363__$1);
var G__29371 = null;
var G__29372 = (0);
var G__29373 = (0);
seq__29349_29353 = G__29370;
chunk__29350_29354 = G__29371;
count__29351_29355 = G__29372;
i__29352_29356 = G__29373;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__29374){
var content = cljs.core.first(arglist__29374);
arglist__29374 = cljs.core.next(arglist__29374);
var name = cljs.core.first(arglist__29374);
var value = cljs.core.rest(arglist__29374);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__29379_29383 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29380_29384 = null;var count__29381_29385 = (0);var i__29382_29386 = (0);while(true){
if((i__29382_29386 < count__29381_29385))
{var n_29387 = cljs.core._nth.call(null,chunk__29380_29384,i__29382_29386);n_29387.removeAttribute(cljs.core.name.call(null,name));
{
var G__29388 = seq__29379_29383;
var G__29389 = chunk__29380_29384;
var G__29390 = count__29381_29385;
var G__29391 = (i__29382_29386 + (1));
seq__29379_29383 = G__29388;
chunk__29380_29384 = G__29389;
count__29381_29385 = G__29390;
i__29382_29386 = G__29391;
continue;
}
} else
{var temp__4126__auto___29392 = cljs.core.seq.call(null,seq__29379_29383);if(temp__4126__auto___29392)
{var seq__29379_29393__$1 = temp__4126__auto___29392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29379_29393__$1))
{var c__4299__auto___29394 = cljs.core.chunk_first.call(null,seq__29379_29393__$1);{
var G__29395 = cljs.core.chunk_rest.call(null,seq__29379_29393__$1);
var G__29396 = c__4299__auto___29394;
var G__29397 = cljs.core.count.call(null,c__4299__auto___29394);
var G__29398 = (0);
seq__29379_29383 = G__29395;
chunk__29380_29384 = G__29396;
count__29381_29385 = G__29397;
i__29382_29386 = G__29398;
continue;
}
} else
{var n_29399 = cljs.core.first.call(null,seq__29379_29393__$1);n_29399.removeAttribute(cljs.core.name.call(null,name));
{
var G__29400 = cljs.core.next.call(null,seq__29379_29393__$1);
var G__29401 = null;
var G__29402 = (0);
var G__29403 = (0);
seq__29379_29383 = G__29400;
chunk__29380_29384 = G__29401;
count__29381_29385 = G__29402;
i__29382_29386 = G__29403;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__29405 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__29405,(0),null);var v = cljs.core.nth.call(null,vec__29405,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__29406_SHARP_){var attr = attrs__$1.item(p1__29406_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__29413_29419 = cljs.core.seq.call(null,styles);var chunk__29414_29420 = null;var count__29415_29421 = (0);var i__29416_29422 = (0);while(true){
if((i__29416_29422 < count__29415_29421))
{var vec__29417_29423 = cljs.core._nth.call(null,chunk__29414_29420,i__29416_29422);var name_29424 = cljs.core.nth.call(null,vec__29417_29423,(0),null);var value_29425 = cljs.core.nth.call(null,vec__29417_29423,(1),null);domina.set_style_BANG_.call(null,content,name_29424,value_29425);
{
var G__29426 = seq__29413_29419;
var G__29427 = chunk__29414_29420;
var G__29428 = count__29415_29421;
var G__29429 = (i__29416_29422 + (1));
seq__29413_29419 = G__29426;
chunk__29414_29420 = G__29427;
count__29415_29421 = G__29428;
i__29416_29422 = G__29429;
continue;
}
} else
{var temp__4126__auto___29430 = cljs.core.seq.call(null,seq__29413_29419);if(temp__4126__auto___29430)
{var seq__29413_29431__$1 = temp__4126__auto___29430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29413_29431__$1))
{var c__4299__auto___29432 = cljs.core.chunk_first.call(null,seq__29413_29431__$1);{
var G__29433 = cljs.core.chunk_rest.call(null,seq__29413_29431__$1);
var G__29434 = c__4299__auto___29432;
var G__29435 = cljs.core.count.call(null,c__4299__auto___29432);
var G__29436 = (0);
seq__29413_29419 = G__29433;
chunk__29414_29420 = G__29434;
count__29415_29421 = G__29435;
i__29416_29422 = G__29436;
continue;
}
} else
{var vec__29418_29437 = cljs.core.first.call(null,seq__29413_29431__$1);var name_29438 = cljs.core.nth.call(null,vec__29418_29437,(0),null);var value_29439 = cljs.core.nth.call(null,vec__29418_29437,(1),null);domina.set_style_BANG_.call(null,content,name_29438,value_29439);
{
var G__29440 = cljs.core.next.call(null,seq__29413_29431__$1);
var G__29441 = null;
var G__29442 = (0);
var G__29443 = (0);
seq__29413_29419 = G__29440;
chunk__29414_29420 = G__29441;
count__29415_29421 = G__29442;
i__29416_29422 = G__29443;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__29450_29456 = cljs.core.seq.call(null,attrs);var chunk__29451_29457 = null;var count__29452_29458 = (0);var i__29453_29459 = (0);while(true){
if((i__29453_29459 < count__29452_29458))
{var vec__29454_29460 = cljs.core._nth.call(null,chunk__29451_29457,i__29453_29459);var name_29461 = cljs.core.nth.call(null,vec__29454_29460,(0),null);var value_29462 = cljs.core.nth.call(null,vec__29454_29460,(1),null);domina.set_attr_BANG_.call(null,content,name_29461,value_29462);
{
var G__29463 = seq__29450_29456;
var G__29464 = chunk__29451_29457;
var G__29465 = count__29452_29458;
var G__29466 = (i__29453_29459 + (1));
seq__29450_29456 = G__29463;
chunk__29451_29457 = G__29464;
count__29452_29458 = G__29465;
i__29453_29459 = G__29466;
continue;
}
} else
{var temp__4126__auto___29467 = cljs.core.seq.call(null,seq__29450_29456);if(temp__4126__auto___29467)
{var seq__29450_29468__$1 = temp__4126__auto___29467;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29450_29468__$1))
{var c__4299__auto___29469 = cljs.core.chunk_first.call(null,seq__29450_29468__$1);{
var G__29470 = cljs.core.chunk_rest.call(null,seq__29450_29468__$1);
var G__29471 = c__4299__auto___29469;
var G__29472 = cljs.core.count.call(null,c__4299__auto___29469);
var G__29473 = (0);
seq__29450_29456 = G__29470;
chunk__29451_29457 = G__29471;
count__29452_29458 = G__29472;
i__29453_29459 = G__29473;
continue;
}
} else
{var vec__29455_29474 = cljs.core.first.call(null,seq__29450_29468__$1);var name_29475 = cljs.core.nth.call(null,vec__29455_29474,(0),null);var value_29476 = cljs.core.nth.call(null,vec__29455_29474,(1),null);domina.set_attr_BANG_.call(null,content,name_29475,value_29476);
{
var G__29477 = cljs.core.next.call(null,seq__29450_29468__$1);
var G__29478 = null;
var G__29479 = (0);
var G__29480 = (0);
seq__29450_29456 = G__29477;
chunk__29451_29457 = G__29478;
count__29452_29458 = G__29479;
i__29453_29459 = G__29480;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__29485_29489 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29486_29490 = null;var count__29487_29491 = (0);var i__29488_29492 = (0);while(true){
if((i__29488_29492 < count__29487_29491))
{var node_29493 = cljs.core._nth.call(null,chunk__29486_29490,i__29488_29492);goog.dom.classes.add(node_29493,class$);
{
var G__29494 = seq__29485_29489;
var G__29495 = chunk__29486_29490;
var G__29496 = count__29487_29491;
var G__29497 = (i__29488_29492 + (1));
seq__29485_29489 = G__29494;
chunk__29486_29490 = G__29495;
count__29487_29491 = G__29496;
i__29488_29492 = G__29497;
continue;
}
} else
{var temp__4126__auto___29498 = cljs.core.seq.call(null,seq__29485_29489);if(temp__4126__auto___29498)
{var seq__29485_29499__$1 = temp__4126__auto___29498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29485_29499__$1))
{var c__4299__auto___29500 = cljs.core.chunk_first.call(null,seq__29485_29499__$1);{
var G__29501 = cljs.core.chunk_rest.call(null,seq__29485_29499__$1);
var G__29502 = c__4299__auto___29500;
var G__29503 = cljs.core.count.call(null,c__4299__auto___29500);
var G__29504 = (0);
seq__29485_29489 = G__29501;
chunk__29486_29490 = G__29502;
count__29487_29491 = G__29503;
i__29488_29492 = G__29504;
continue;
}
} else
{var node_29505 = cljs.core.first.call(null,seq__29485_29499__$1);goog.dom.classes.add(node_29505,class$);
{
var G__29506 = cljs.core.next.call(null,seq__29485_29499__$1);
var G__29507 = null;
var G__29508 = (0);
var G__29509 = (0);
seq__29485_29489 = G__29506;
chunk__29486_29490 = G__29507;
count__29487_29491 = G__29508;
i__29488_29492 = G__29509;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__29514_29518 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29515_29519 = null;var count__29516_29520 = (0);var i__29517_29521 = (0);while(true){
if((i__29517_29521 < count__29516_29520))
{var node_29522 = cljs.core._nth.call(null,chunk__29515_29519,i__29517_29521);goog.dom.classes.remove(node_29522,class$);
{
var G__29523 = seq__29514_29518;
var G__29524 = chunk__29515_29519;
var G__29525 = count__29516_29520;
var G__29526 = (i__29517_29521 + (1));
seq__29514_29518 = G__29523;
chunk__29515_29519 = G__29524;
count__29516_29520 = G__29525;
i__29517_29521 = G__29526;
continue;
}
} else
{var temp__4126__auto___29527 = cljs.core.seq.call(null,seq__29514_29518);if(temp__4126__auto___29527)
{var seq__29514_29528__$1 = temp__4126__auto___29527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29514_29528__$1))
{var c__4299__auto___29529 = cljs.core.chunk_first.call(null,seq__29514_29528__$1);{
var G__29530 = cljs.core.chunk_rest.call(null,seq__29514_29528__$1);
var G__29531 = c__4299__auto___29529;
var G__29532 = cljs.core.count.call(null,c__4299__auto___29529);
var G__29533 = (0);
seq__29514_29518 = G__29530;
chunk__29515_29519 = G__29531;
count__29516_29520 = G__29532;
i__29517_29521 = G__29533;
continue;
}
} else
{var node_29534 = cljs.core.first.call(null,seq__29514_29528__$1);goog.dom.classes.remove(node_29534,class$);
{
var G__29535 = cljs.core.next.call(null,seq__29514_29528__$1);
var G__29536 = null;
var G__29537 = (0);
var G__29538 = (0);
seq__29514_29518 = G__29535;
chunk__29515_29519 = G__29536;
count__29516_29520 = G__29537;
i__29517_29521 = G__29538;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__29543_29547 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29544_29548 = null;var count__29545_29549 = (0);var i__29546_29550 = (0);while(true){
if((i__29546_29550 < count__29545_29549))
{var node_29551 = cljs.core._nth.call(null,chunk__29544_29548,i__29546_29550);goog.dom.classes.toggle(node_29551,class$);
{
var G__29552 = seq__29543_29547;
var G__29553 = chunk__29544_29548;
var G__29554 = count__29545_29549;
var G__29555 = (i__29546_29550 + (1));
seq__29543_29547 = G__29552;
chunk__29544_29548 = G__29553;
count__29545_29549 = G__29554;
i__29546_29550 = G__29555;
continue;
}
} else
{var temp__4126__auto___29556 = cljs.core.seq.call(null,seq__29543_29547);if(temp__4126__auto___29556)
{var seq__29543_29557__$1 = temp__4126__auto___29556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29543_29557__$1))
{var c__4299__auto___29558 = cljs.core.chunk_first.call(null,seq__29543_29557__$1);{
var G__29559 = cljs.core.chunk_rest.call(null,seq__29543_29557__$1);
var G__29560 = c__4299__auto___29558;
var G__29561 = cljs.core.count.call(null,c__4299__auto___29558);
var G__29562 = (0);
seq__29543_29547 = G__29559;
chunk__29544_29548 = G__29560;
count__29545_29549 = G__29561;
i__29546_29550 = G__29562;
continue;
}
} else
{var node_29563 = cljs.core.first.call(null,seq__29543_29557__$1);goog.dom.classes.toggle(node_29563,class$);
{
var G__29564 = cljs.core.next.call(null,seq__29543_29557__$1);
var G__29565 = null;
var G__29566 = (0);
var G__29567 = (0);
seq__29543_29547 = G__29564;
chunk__29544_29548 = G__29565;
count__29545_29549 = G__29566;
i__29546_29550 = G__29567;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_29576__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__29572_29577 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29573_29578 = null;var count__29574_29579 = (0);var i__29575_29580 = (0);while(true){
if((i__29575_29580 < count__29574_29579))
{var node_29581 = cljs.core._nth.call(null,chunk__29573_29578,i__29575_29580);goog.dom.classes.set(node_29581,classes_29576__$1);
{
var G__29582 = seq__29572_29577;
var G__29583 = chunk__29573_29578;
var G__29584 = count__29574_29579;
var G__29585 = (i__29575_29580 + (1));
seq__29572_29577 = G__29582;
chunk__29573_29578 = G__29583;
count__29574_29579 = G__29584;
i__29575_29580 = G__29585;
continue;
}
} else
{var temp__4126__auto___29586 = cljs.core.seq.call(null,seq__29572_29577);if(temp__4126__auto___29586)
{var seq__29572_29587__$1 = temp__4126__auto___29586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29572_29587__$1))
{var c__4299__auto___29588 = cljs.core.chunk_first.call(null,seq__29572_29587__$1);{
var G__29589 = cljs.core.chunk_rest.call(null,seq__29572_29587__$1);
var G__29590 = c__4299__auto___29588;
var G__29591 = cljs.core.count.call(null,c__4299__auto___29588);
var G__29592 = (0);
seq__29572_29577 = G__29589;
chunk__29573_29578 = G__29590;
count__29574_29579 = G__29591;
i__29575_29580 = G__29592;
continue;
}
} else
{var node_29593 = cljs.core.first.call(null,seq__29572_29587__$1);goog.dom.classes.set(node_29593,classes_29576__$1);
{
var G__29594 = cljs.core.next.call(null,seq__29572_29587__$1);
var G__29595 = null;
var G__29596 = (0);
var G__29597 = (0);
seq__29572_29577 = G__29594;
chunk__29573_29578 = G__29595;
count__29574_29579 = G__29596;
i__29575_29580 = G__29597;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__29602_29606 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29603_29607 = null;var count__29604_29608 = (0);var i__29605_29609 = (0);while(true){
if((i__29605_29609 < count__29604_29608))
{var node_29610 = cljs.core._nth.call(null,chunk__29603_29607,i__29605_29609);goog.dom.setTextContent(node_29610,value);
{
var G__29611 = seq__29602_29606;
var G__29612 = chunk__29603_29607;
var G__29613 = count__29604_29608;
var G__29614 = (i__29605_29609 + (1));
seq__29602_29606 = G__29611;
chunk__29603_29607 = G__29612;
count__29604_29608 = G__29613;
i__29605_29609 = G__29614;
continue;
}
} else
{var temp__4126__auto___29615 = cljs.core.seq.call(null,seq__29602_29606);if(temp__4126__auto___29615)
{var seq__29602_29616__$1 = temp__4126__auto___29615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29602_29616__$1))
{var c__4299__auto___29617 = cljs.core.chunk_first.call(null,seq__29602_29616__$1);{
var G__29618 = cljs.core.chunk_rest.call(null,seq__29602_29616__$1);
var G__29619 = c__4299__auto___29617;
var G__29620 = cljs.core.count.call(null,c__4299__auto___29617);
var G__29621 = (0);
seq__29602_29606 = G__29618;
chunk__29603_29607 = G__29619;
count__29604_29608 = G__29620;
i__29605_29609 = G__29621;
continue;
}
} else
{var node_29622 = cljs.core.first.call(null,seq__29602_29616__$1);goog.dom.setTextContent(node_29622,value);
{
var G__29623 = cljs.core.next.call(null,seq__29602_29616__$1);
var G__29624 = null;
var G__29625 = (0);
var G__29626 = (0);
seq__29602_29606 = G__29623;
chunk__29603_29607 = G__29624;
count__29604_29608 = G__29625;
i__29605_29609 = G__29626;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__29631_29635 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29632_29636 = null;var count__29633_29637 = (0);var i__29634_29638 = (0);while(true){
if((i__29634_29638 < count__29633_29637))
{var node_29639 = cljs.core._nth.call(null,chunk__29632_29636,i__29634_29638);goog.dom.forms.setValue(node_29639,value);
{
var G__29640 = seq__29631_29635;
var G__29641 = chunk__29632_29636;
var G__29642 = count__29633_29637;
var G__29643 = (i__29634_29638 + (1));
seq__29631_29635 = G__29640;
chunk__29632_29636 = G__29641;
count__29633_29637 = G__29642;
i__29634_29638 = G__29643;
continue;
}
} else
{var temp__4126__auto___29644 = cljs.core.seq.call(null,seq__29631_29635);if(temp__4126__auto___29644)
{var seq__29631_29645__$1 = temp__4126__auto___29644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29631_29645__$1))
{var c__4299__auto___29646 = cljs.core.chunk_first.call(null,seq__29631_29645__$1);{
var G__29647 = cljs.core.chunk_rest.call(null,seq__29631_29645__$1);
var G__29648 = c__4299__auto___29646;
var G__29649 = cljs.core.count.call(null,c__4299__auto___29646);
var G__29650 = (0);
seq__29631_29635 = G__29647;
chunk__29632_29636 = G__29648;
count__29633_29637 = G__29649;
i__29634_29638 = G__29650;
continue;
}
} else
{var node_29651 = cljs.core.first.call(null,seq__29631_29645__$1);goog.dom.forms.setValue(node_29651,value);
{
var G__29652 = cljs.core.next.call(null,seq__29631_29645__$1);
var G__29653 = null;
var G__29654 = (0);
var G__29655 = (0);
seq__29631_29635 = G__29652;
chunk__29632_29636 = G__29653;
count__29633_29637 = G__29654;
i__29634_29638 = G__29655;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_29666 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__29662_29667 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29663_29668 = null;var count__29664_29669 = (0);var i__29665_29670 = (0);while(true){
if((i__29665_29670 < count__29664_29669))
{var node_29671 = cljs.core._nth.call(null,chunk__29663_29668,i__29665_29670);node_29671.innerHTML = value_29666;
{
var G__29672 = seq__29662_29667;
var G__29673 = chunk__29663_29668;
var G__29674 = count__29664_29669;
var G__29675 = (i__29665_29670 + (1));
seq__29662_29667 = G__29672;
chunk__29663_29668 = G__29673;
count__29664_29669 = G__29674;
i__29665_29670 = G__29675;
continue;
}
} else
{var temp__4126__auto___29676 = cljs.core.seq.call(null,seq__29662_29667);if(temp__4126__auto___29676)
{var seq__29662_29677__$1 = temp__4126__auto___29676;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29662_29677__$1))
{var c__4299__auto___29678 = cljs.core.chunk_first.call(null,seq__29662_29677__$1);{
var G__29679 = cljs.core.chunk_rest.call(null,seq__29662_29677__$1);
var G__29680 = c__4299__auto___29678;
var G__29681 = cljs.core.count.call(null,c__4299__auto___29678);
var G__29682 = (0);
seq__29662_29667 = G__29679;
chunk__29663_29668 = G__29680;
count__29664_29669 = G__29681;
i__29665_29670 = G__29682;
continue;
}
} else
{var node_29683 = cljs.core.first.call(null,seq__29662_29677__$1);node_29683.innerHTML = value_29666;
{
var G__29684 = cljs.core.next.call(null,seq__29662_29677__$1);
var G__29685 = null;
var G__29686 = (0);
var G__29687 = (0);
seq__29662_29667 = G__29684;
chunk__29663_29668 = G__29685;
count__29664_29669 = G__29686;
i__29665_29670 = G__29687;
continue;
}
}
} else
{}
}
break;
}
}catch (e29661){if((e29661 instanceof Error))
{var e_29688 = e29661;domina.replace_children_BANG_.call(null,content,value_29666);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29661;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__29695_29699 = cljs.core.seq.call(null,children);var chunk__29696_29700 = null;var count__29697_29701 = (0);var i__29698_29702 = (0);while(true){
if((i__29698_29702 < count__29697_29701))
{var child_29703 = cljs.core._nth.call(null,chunk__29696_29700,i__29698_29702);frag.appendChild(child_29703);
{
var G__29704 = seq__29695_29699;
var G__29705 = chunk__29696_29700;
var G__29706 = count__29697_29701;
var G__29707 = (i__29698_29702 + (1));
seq__29695_29699 = G__29704;
chunk__29696_29700 = G__29705;
count__29697_29701 = G__29706;
i__29698_29702 = G__29707;
continue;
}
} else
{var temp__4126__auto___29708 = cljs.core.seq.call(null,seq__29695_29699);if(temp__4126__auto___29708)
{var seq__29695_29709__$1 = temp__4126__auto___29708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29695_29709__$1))
{var c__4299__auto___29710 = cljs.core.chunk_first.call(null,seq__29695_29709__$1);{
var G__29711 = cljs.core.chunk_rest.call(null,seq__29695_29709__$1);
var G__29712 = c__4299__auto___29710;
var G__29713 = cljs.core.count.call(null,c__4299__auto___29710);
var G__29714 = (0);
seq__29695_29699 = G__29711;
chunk__29696_29700 = G__29712;
count__29697_29701 = G__29713;
i__29698_29702 = G__29714;
continue;
}
} else
{var child_29715 = cljs.core.first.call(null,seq__29695_29709__$1);frag.appendChild(child_29715);
{
var G__29716 = cljs.core.next.call(null,seq__29695_29709__$1);
var G__29717 = null;
var G__29718 = (0);
var G__29719 = (0);
seq__29695_29699 = G__29716;
chunk__29696_29700 = G__29717;
count__29697_29701 = G__29718;
i__29698_29702 = G__29719;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__29689_SHARP_,p2__29690_SHARP_){return f.call(null,p1__29689_SHARP_,p2__29690_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__29721 = list_thing;if(G__29721)
{var bit__4193__auto__ = (G__29721.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__29721.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29721.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29721);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29721);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__29722 = content;if(G__29722)
{var bit__4193__auto__ = (G__29722.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__29722.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29722.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29722);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29722);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__29723 = content;if(G__29723)
{var bit__4193__auto__ = (G__29723.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__29723.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29723.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29723);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29723);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
