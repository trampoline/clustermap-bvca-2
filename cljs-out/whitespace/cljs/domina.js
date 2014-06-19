// Compiled by ClojureScript 0.0-2227
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
var opt_wrapper_51292 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_51293 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_51294 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_51294,opt_wrapper_51292,table_section_wrapper_51293,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_51292,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_51293,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_51293,cell_wrapper_51294,table_section_wrapper_51293,table_section_wrapper_51293]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3527__auto__ = div.firstChild;if(cljs.core.truth_(and__3527__auto__))
{return div.firstChild.childNodes;
} else
{return and__3527__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__51299 = cljs.core.seq.call(null,tbody);var chunk__51300 = null;var count__51301 = 0;var i__51302 = 0;while(true){
if((i__51302 < count__51301))
{var child = cljs.core._nth.call(null,chunk__51300,i__51302);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__51303 = seq__51299;
var G__51304 = chunk__51300;
var G__51305 = count__51301;
var G__51306 = (i__51302 + 1);
seq__51299 = G__51303;
chunk__51300 = G__51304;
count__51301 = G__51305;
i__51302 = G__51306;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51299);if(temp__4126__auto__)
{var seq__51299__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51299__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__51299__$1);{
var G__51307 = cljs.core.chunk_rest.call(null,seq__51299__$1);
var G__51308 = c__4295__auto__;
var G__51309 = cljs.core.count.call(null,c__4295__auto__);
var G__51310 = 0;
seq__51299 = G__51307;
chunk__51300 = G__51308;
count__51301 = G__51309;
i__51302 = G__51310;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__51299__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__51311 = cljs.core.next.call(null,seq__51299__$1);
var G__51312 = null;
var G__51313 = 0;
var G__51314 = 0;
seq__51299 = G__51311;
chunk__51300 = G__51312;
count__51301 = G__51313;
i__51302 = G__51314;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__51316 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__51316,0,null);var start_wrap = cljs.core.nth.call(null,vec__51316,1,null);var end_wrap = cljs.core.nth.call(null,vec__51316,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__51317 = wrapper.lastChild;
var G__51318 = (level - 1);
wrapper = G__51317;
level = G__51318;
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
if(cljs.core.truth_((function (){var and__3527__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3527__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3527__auto__;
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
domina.DomContent = (function (){var obj51320 = {};return obj51320;
})();
domina.nodes = (function nodes(content){if((function (){var and__3527__auto__ = content;if(and__3527__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3527__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4166__auto__ = (((content == null))?null:content);return (function (){var or__3539__auto__ = (domina.nodes[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.nodes["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3527__auto__ = nodeseq;if(and__3527__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3527__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4166__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3539__auto__ = (domina.single_node[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.single_node["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3527__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3527__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3527__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__51321){
var mesg = cljs.core.seq(arglist__51321);
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
log.cljs$lang$applyTo = (function (arglist__51322){
var mesg = cljs.core.seq(arglist__51322);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__51323){
var contents = cljs.core.seq(arglist__51323);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__51324_SHARP_){return p1__51324_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__51325_SHARP_,p2__51326_SHARP_){return goog.dom.insertChildAt(p1__51325_SHARP_,p2__51326_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__51328_SHARP_,p2__51327_SHARP_){return goog.dom.insertSiblingBefore(p2__51327_SHARP_,p1__51328_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__51330_SHARP_,p2__51329_SHARP_){return goog.dom.insertSiblingAfter(p2__51329_SHARP_,p1__51330_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__51332_SHARP_,p2__51331_SHARP_){return goog.dom.replaceNode(p2__51331_SHARP_,p1__51332_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__51337_51341 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51338_51342 = null;var count__51339_51343 = 0;var i__51340_51344 = 0;while(true){
if((i__51340_51344 < count__51339_51343))
{var n_51345 = cljs.core._nth.call(null,chunk__51338_51342,i__51340_51344);goog.style.setStyle(n_51345,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51346 = seq__51337_51341;
var G__51347 = chunk__51338_51342;
var G__51348 = count__51339_51343;
var G__51349 = (i__51340_51344 + 1);
seq__51337_51341 = G__51346;
chunk__51338_51342 = G__51347;
count__51339_51343 = G__51348;
i__51340_51344 = G__51349;
continue;
}
} else
{var temp__4126__auto___51350 = cljs.core.seq.call(null,seq__51337_51341);if(temp__4126__auto___51350)
{var seq__51337_51351__$1 = temp__4126__auto___51350;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51337_51351__$1))
{var c__4295__auto___51352 = cljs.core.chunk_first.call(null,seq__51337_51351__$1);{
var G__51353 = cljs.core.chunk_rest.call(null,seq__51337_51351__$1);
var G__51354 = c__4295__auto___51352;
var G__51355 = cljs.core.count.call(null,c__4295__auto___51352);
var G__51356 = 0;
seq__51337_51341 = G__51353;
chunk__51338_51342 = G__51354;
count__51339_51343 = G__51355;
i__51340_51344 = G__51356;
continue;
}
} else
{var n_51357 = cljs.core.first.call(null,seq__51337_51351__$1);goog.style.setStyle(n_51357,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51358 = cljs.core.next.call(null,seq__51337_51351__$1);
var G__51359 = null;
var G__51360 = 0;
var G__51361 = 0;
seq__51337_51341 = G__51358;
chunk__51338_51342 = G__51359;
count__51339_51343 = G__51360;
i__51340_51344 = G__51361;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__51362){
var content = cljs.core.first(arglist__51362);
arglist__51362 = cljs.core.next(arglist__51362);
var name = cljs.core.first(arglist__51362);
var value = cljs.core.rest(arglist__51362);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__51367_51371 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51368_51372 = null;var count__51369_51373 = 0;var i__51370_51374 = 0;while(true){
if((i__51370_51374 < count__51369_51373))
{var n_51375 = cljs.core._nth.call(null,chunk__51368_51372,i__51370_51374);n_51375.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51376 = seq__51367_51371;
var G__51377 = chunk__51368_51372;
var G__51378 = count__51369_51373;
var G__51379 = (i__51370_51374 + 1);
seq__51367_51371 = G__51376;
chunk__51368_51372 = G__51377;
count__51369_51373 = G__51378;
i__51370_51374 = G__51379;
continue;
}
} else
{var temp__4126__auto___51380 = cljs.core.seq.call(null,seq__51367_51371);if(temp__4126__auto___51380)
{var seq__51367_51381__$1 = temp__4126__auto___51380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51367_51381__$1))
{var c__4295__auto___51382 = cljs.core.chunk_first.call(null,seq__51367_51381__$1);{
var G__51383 = cljs.core.chunk_rest.call(null,seq__51367_51381__$1);
var G__51384 = c__4295__auto___51382;
var G__51385 = cljs.core.count.call(null,c__4295__auto___51382);
var G__51386 = 0;
seq__51367_51371 = G__51383;
chunk__51368_51372 = G__51384;
count__51369_51373 = G__51385;
i__51370_51374 = G__51386;
continue;
}
} else
{var n_51387 = cljs.core.first.call(null,seq__51367_51381__$1);n_51387.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51388 = cljs.core.next.call(null,seq__51367_51381__$1);
var G__51389 = null;
var G__51390 = 0;
var G__51391 = 0;
seq__51367_51371 = G__51388;
chunk__51368_51372 = G__51389;
count__51369_51373 = G__51390;
i__51370_51374 = G__51391;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__51392){
var content = cljs.core.first(arglist__51392);
arglist__51392 = cljs.core.next(arglist__51392);
var name = cljs.core.first(arglist__51392);
var value = cljs.core.rest(arglist__51392);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__51397_51401 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51398_51402 = null;var count__51399_51403 = 0;var i__51400_51404 = 0;while(true){
if((i__51400_51404 < count__51399_51403))
{var n_51405 = cljs.core._nth.call(null,chunk__51398_51402,i__51400_51404);n_51405.removeAttribute(cljs.core.name.call(null,name));
{
var G__51406 = seq__51397_51401;
var G__51407 = chunk__51398_51402;
var G__51408 = count__51399_51403;
var G__51409 = (i__51400_51404 + 1);
seq__51397_51401 = G__51406;
chunk__51398_51402 = G__51407;
count__51399_51403 = G__51408;
i__51400_51404 = G__51409;
continue;
}
} else
{var temp__4126__auto___51410 = cljs.core.seq.call(null,seq__51397_51401);if(temp__4126__auto___51410)
{var seq__51397_51411__$1 = temp__4126__auto___51410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51397_51411__$1))
{var c__4295__auto___51412 = cljs.core.chunk_first.call(null,seq__51397_51411__$1);{
var G__51413 = cljs.core.chunk_rest.call(null,seq__51397_51411__$1);
var G__51414 = c__4295__auto___51412;
var G__51415 = cljs.core.count.call(null,c__4295__auto___51412);
var G__51416 = 0;
seq__51397_51401 = G__51413;
chunk__51398_51402 = G__51414;
count__51399_51403 = G__51415;
i__51400_51404 = G__51416;
continue;
}
} else
{var n_51417 = cljs.core.first.call(null,seq__51397_51411__$1);n_51417.removeAttribute(cljs.core.name.call(null,name));
{
var G__51418 = cljs.core.next.call(null,seq__51397_51411__$1);
var G__51419 = null;
var G__51420 = 0;
var G__51421 = 0;
seq__51397_51401 = G__51418;
chunk__51398_51402 = G__51419;
count__51399_51403 = G__51420;
i__51400_51404 = G__51421;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__51423 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__51423,0,null);var v = cljs.core.nth.call(null,vec__51423,1,null);if(cljs.core.truth_((function (){var and__3527__auto__ = k;if(cljs.core.truth_(and__3527__auto__))
{return v;
} else
{return and__3527__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
return (function (p1__51424_SHARP_){var attr = attrs__$1.item(p1__51424_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__51431_51437 = cljs.core.seq.call(null,styles);var chunk__51432_51438 = null;var count__51433_51439 = 0;var i__51434_51440 = 0;while(true){
if((i__51434_51440 < count__51433_51439))
{var vec__51435_51441 = cljs.core._nth.call(null,chunk__51432_51438,i__51434_51440);var name_51442 = cljs.core.nth.call(null,vec__51435_51441,0,null);var value_51443 = cljs.core.nth.call(null,vec__51435_51441,1,null);domina.set_style_BANG_.call(null,content,name_51442,value_51443);
{
var G__51444 = seq__51431_51437;
var G__51445 = chunk__51432_51438;
var G__51446 = count__51433_51439;
var G__51447 = (i__51434_51440 + 1);
seq__51431_51437 = G__51444;
chunk__51432_51438 = G__51445;
count__51433_51439 = G__51446;
i__51434_51440 = G__51447;
continue;
}
} else
{var temp__4126__auto___51448 = cljs.core.seq.call(null,seq__51431_51437);if(temp__4126__auto___51448)
{var seq__51431_51449__$1 = temp__4126__auto___51448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51431_51449__$1))
{var c__4295__auto___51450 = cljs.core.chunk_first.call(null,seq__51431_51449__$1);{
var G__51451 = cljs.core.chunk_rest.call(null,seq__51431_51449__$1);
var G__51452 = c__4295__auto___51450;
var G__51453 = cljs.core.count.call(null,c__4295__auto___51450);
var G__51454 = 0;
seq__51431_51437 = G__51451;
chunk__51432_51438 = G__51452;
count__51433_51439 = G__51453;
i__51434_51440 = G__51454;
continue;
}
} else
{var vec__51436_51455 = cljs.core.first.call(null,seq__51431_51449__$1);var name_51456 = cljs.core.nth.call(null,vec__51436_51455,0,null);var value_51457 = cljs.core.nth.call(null,vec__51436_51455,1,null);domina.set_style_BANG_.call(null,content,name_51456,value_51457);
{
var G__51458 = cljs.core.next.call(null,seq__51431_51449__$1);
var G__51459 = null;
var G__51460 = 0;
var G__51461 = 0;
seq__51431_51437 = G__51458;
chunk__51432_51438 = G__51459;
count__51433_51439 = G__51460;
i__51434_51440 = G__51461;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__51468_51474 = cljs.core.seq.call(null,attrs);var chunk__51469_51475 = null;var count__51470_51476 = 0;var i__51471_51477 = 0;while(true){
if((i__51471_51477 < count__51470_51476))
{var vec__51472_51478 = cljs.core._nth.call(null,chunk__51469_51475,i__51471_51477);var name_51479 = cljs.core.nth.call(null,vec__51472_51478,0,null);var value_51480 = cljs.core.nth.call(null,vec__51472_51478,1,null);domina.set_attr_BANG_.call(null,content,name_51479,value_51480);
{
var G__51481 = seq__51468_51474;
var G__51482 = chunk__51469_51475;
var G__51483 = count__51470_51476;
var G__51484 = (i__51471_51477 + 1);
seq__51468_51474 = G__51481;
chunk__51469_51475 = G__51482;
count__51470_51476 = G__51483;
i__51471_51477 = G__51484;
continue;
}
} else
{var temp__4126__auto___51485 = cljs.core.seq.call(null,seq__51468_51474);if(temp__4126__auto___51485)
{var seq__51468_51486__$1 = temp__4126__auto___51485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51468_51486__$1))
{var c__4295__auto___51487 = cljs.core.chunk_first.call(null,seq__51468_51486__$1);{
var G__51488 = cljs.core.chunk_rest.call(null,seq__51468_51486__$1);
var G__51489 = c__4295__auto___51487;
var G__51490 = cljs.core.count.call(null,c__4295__auto___51487);
var G__51491 = 0;
seq__51468_51474 = G__51488;
chunk__51469_51475 = G__51489;
count__51470_51476 = G__51490;
i__51471_51477 = G__51491;
continue;
}
} else
{var vec__51473_51492 = cljs.core.first.call(null,seq__51468_51486__$1);var name_51493 = cljs.core.nth.call(null,vec__51473_51492,0,null);var value_51494 = cljs.core.nth.call(null,vec__51473_51492,1,null);domina.set_attr_BANG_.call(null,content,name_51493,value_51494);
{
var G__51495 = cljs.core.next.call(null,seq__51468_51486__$1);
var G__51496 = null;
var G__51497 = 0;
var G__51498 = 0;
seq__51468_51474 = G__51495;
chunk__51469_51475 = G__51496;
count__51470_51476 = G__51497;
i__51471_51477 = G__51498;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__51503_51507 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51504_51508 = null;var count__51505_51509 = 0;var i__51506_51510 = 0;while(true){
if((i__51506_51510 < count__51505_51509))
{var node_51511 = cljs.core._nth.call(null,chunk__51504_51508,i__51506_51510);goog.dom.classes.add(node_51511,class$);
{
var G__51512 = seq__51503_51507;
var G__51513 = chunk__51504_51508;
var G__51514 = count__51505_51509;
var G__51515 = (i__51506_51510 + 1);
seq__51503_51507 = G__51512;
chunk__51504_51508 = G__51513;
count__51505_51509 = G__51514;
i__51506_51510 = G__51515;
continue;
}
} else
{var temp__4126__auto___51516 = cljs.core.seq.call(null,seq__51503_51507);if(temp__4126__auto___51516)
{var seq__51503_51517__$1 = temp__4126__auto___51516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51503_51517__$1))
{var c__4295__auto___51518 = cljs.core.chunk_first.call(null,seq__51503_51517__$1);{
var G__51519 = cljs.core.chunk_rest.call(null,seq__51503_51517__$1);
var G__51520 = c__4295__auto___51518;
var G__51521 = cljs.core.count.call(null,c__4295__auto___51518);
var G__51522 = 0;
seq__51503_51507 = G__51519;
chunk__51504_51508 = G__51520;
count__51505_51509 = G__51521;
i__51506_51510 = G__51522;
continue;
}
} else
{var node_51523 = cljs.core.first.call(null,seq__51503_51517__$1);goog.dom.classes.add(node_51523,class$);
{
var G__51524 = cljs.core.next.call(null,seq__51503_51517__$1);
var G__51525 = null;
var G__51526 = 0;
var G__51527 = 0;
seq__51503_51507 = G__51524;
chunk__51504_51508 = G__51525;
count__51505_51509 = G__51526;
i__51506_51510 = G__51527;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__51532_51536 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51533_51537 = null;var count__51534_51538 = 0;var i__51535_51539 = 0;while(true){
if((i__51535_51539 < count__51534_51538))
{var node_51540 = cljs.core._nth.call(null,chunk__51533_51537,i__51535_51539);goog.dom.classes.remove(node_51540,class$);
{
var G__51541 = seq__51532_51536;
var G__51542 = chunk__51533_51537;
var G__51543 = count__51534_51538;
var G__51544 = (i__51535_51539 + 1);
seq__51532_51536 = G__51541;
chunk__51533_51537 = G__51542;
count__51534_51538 = G__51543;
i__51535_51539 = G__51544;
continue;
}
} else
{var temp__4126__auto___51545 = cljs.core.seq.call(null,seq__51532_51536);if(temp__4126__auto___51545)
{var seq__51532_51546__$1 = temp__4126__auto___51545;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51532_51546__$1))
{var c__4295__auto___51547 = cljs.core.chunk_first.call(null,seq__51532_51546__$1);{
var G__51548 = cljs.core.chunk_rest.call(null,seq__51532_51546__$1);
var G__51549 = c__4295__auto___51547;
var G__51550 = cljs.core.count.call(null,c__4295__auto___51547);
var G__51551 = 0;
seq__51532_51536 = G__51548;
chunk__51533_51537 = G__51549;
count__51534_51538 = G__51550;
i__51535_51539 = G__51551;
continue;
}
} else
{var node_51552 = cljs.core.first.call(null,seq__51532_51546__$1);goog.dom.classes.remove(node_51552,class$);
{
var G__51553 = cljs.core.next.call(null,seq__51532_51546__$1);
var G__51554 = null;
var G__51555 = 0;
var G__51556 = 0;
seq__51532_51536 = G__51553;
chunk__51533_51537 = G__51554;
count__51534_51538 = G__51555;
i__51535_51539 = G__51556;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__51561_51565 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51562_51566 = null;var count__51563_51567 = 0;var i__51564_51568 = 0;while(true){
if((i__51564_51568 < count__51563_51567))
{var node_51569 = cljs.core._nth.call(null,chunk__51562_51566,i__51564_51568);goog.dom.classes.toggle(node_51569,class$);
{
var G__51570 = seq__51561_51565;
var G__51571 = chunk__51562_51566;
var G__51572 = count__51563_51567;
var G__51573 = (i__51564_51568 + 1);
seq__51561_51565 = G__51570;
chunk__51562_51566 = G__51571;
count__51563_51567 = G__51572;
i__51564_51568 = G__51573;
continue;
}
} else
{var temp__4126__auto___51574 = cljs.core.seq.call(null,seq__51561_51565);if(temp__4126__auto___51574)
{var seq__51561_51575__$1 = temp__4126__auto___51574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51561_51575__$1))
{var c__4295__auto___51576 = cljs.core.chunk_first.call(null,seq__51561_51575__$1);{
var G__51577 = cljs.core.chunk_rest.call(null,seq__51561_51575__$1);
var G__51578 = c__4295__auto___51576;
var G__51579 = cljs.core.count.call(null,c__4295__auto___51576);
var G__51580 = 0;
seq__51561_51565 = G__51577;
chunk__51562_51566 = G__51578;
count__51563_51567 = G__51579;
i__51564_51568 = G__51580;
continue;
}
} else
{var node_51581 = cljs.core.first.call(null,seq__51561_51575__$1);goog.dom.classes.toggle(node_51581,class$);
{
var G__51582 = cljs.core.next.call(null,seq__51561_51575__$1);
var G__51583 = null;
var G__51584 = 0;
var G__51585 = 0;
seq__51561_51565 = G__51582;
chunk__51562_51566 = G__51583;
count__51563_51567 = G__51584;
i__51564_51568 = G__51585;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_51594__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__51590_51595 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51591_51596 = null;var count__51592_51597 = 0;var i__51593_51598 = 0;while(true){
if((i__51593_51598 < count__51592_51597))
{var node_51599 = cljs.core._nth.call(null,chunk__51591_51596,i__51593_51598);goog.dom.classes.set(node_51599,classes_51594__$1);
{
var G__51600 = seq__51590_51595;
var G__51601 = chunk__51591_51596;
var G__51602 = count__51592_51597;
var G__51603 = (i__51593_51598 + 1);
seq__51590_51595 = G__51600;
chunk__51591_51596 = G__51601;
count__51592_51597 = G__51602;
i__51593_51598 = G__51603;
continue;
}
} else
{var temp__4126__auto___51604 = cljs.core.seq.call(null,seq__51590_51595);if(temp__4126__auto___51604)
{var seq__51590_51605__$1 = temp__4126__auto___51604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51590_51605__$1))
{var c__4295__auto___51606 = cljs.core.chunk_first.call(null,seq__51590_51605__$1);{
var G__51607 = cljs.core.chunk_rest.call(null,seq__51590_51605__$1);
var G__51608 = c__4295__auto___51606;
var G__51609 = cljs.core.count.call(null,c__4295__auto___51606);
var G__51610 = 0;
seq__51590_51595 = G__51607;
chunk__51591_51596 = G__51608;
count__51592_51597 = G__51609;
i__51593_51598 = G__51610;
continue;
}
} else
{var node_51611 = cljs.core.first.call(null,seq__51590_51605__$1);goog.dom.classes.set(node_51611,classes_51594__$1);
{
var G__51612 = cljs.core.next.call(null,seq__51590_51605__$1);
var G__51613 = null;
var G__51614 = 0;
var G__51615 = 0;
seq__51590_51595 = G__51612;
chunk__51591_51596 = G__51613;
count__51592_51597 = G__51614;
i__51593_51598 = G__51615;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__51620_51624 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51621_51625 = null;var count__51622_51626 = 0;var i__51623_51627 = 0;while(true){
if((i__51623_51627 < count__51622_51626))
{var node_51628 = cljs.core._nth.call(null,chunk__51621_51625,i__51623_51627);goog.dom.setTextContent(node_51628,value);
{
var G__51629 = seq__51620_51624;
var G__51630 = chunk__51621_51625;
var G__51631 = count__51622_51626;
var G__51632 = (i__51623_51627 + 1);
seq__51620_51624 = G__51629;
chunk__51621_51625 = G__51630;
count__51622_51626 = G__51631;
i__51623_51627 = G__51632;
continue;
}
} else
{var temp__4126__auto___51633 = cljs.core.seq.call(null,seq__51620_51624);if(temp__4126__auto___51633)
{var seq__51620_51634__$1 = temp__4126__auto___51633;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51620_51634__$1))
{var c__4295__auto___51635 = cljs.core.chunk_first.call(null,seq__51620_51634__$1);{
var G__51636 = cljs.core.chunk_rest.call(null,seq__51620_51634__$1);
var G__51637 = c__4295__auto___51635;
var G__51638 = cljs.core.count.call(null,c__4295__auto___51635);
var G__51639 = 0;
seq__51620_51624 = G__51636;
chunk__51621_51625 = G__51637;
count__51622_51626 = G__51638;
i__51623_51627 = G__51639;
continue;
}
} else
{var node_51640 = cljs.core.first.call(null,seq__51620_51634__$1);goog.dom.setTextContent(node_51640,value);
{
var G__51641 = cljs.core.next.call(null,seq__51620_51634__$1);
var G__51642 = null;
var G__51643 = 0;
var G__51644 = 0;
seq__51620_51624 = G__51641;
chunk__51621_51625 = G__51642;
count__51622_51626 = G__51643;
i__51623_51627 = G__51644;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__51649_51653 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51650_51654 = null;var count__51651_51655 = 0;var i__51652_51656 = 0;while(true){
if((i__51652_51656 < count__51651_51655))
{var node_51657 = cljs.core._nth.call(null,chunk__51650_51654,i__51652_51656);goog.dom.forms.setValue(node_51657,value);
{
var G__51658 = seq__51649_51653;
var G__51659 = chunk__51650_51654;
var G__51660 = count__51651_51655;
var G__51661 = (i__51652_51656 + 1);
seq__51649_51653 = G__51658;
chunk__51650_51654 = G__51659;
count__51651_51655 = G__51660;
i__51652_51656 = G__51661;
continue;
}
} else
{var temp__4126__auto___51662 = cljs.core.seq.call(null,seq__51649_51653);if(temp__4126__auto___51662)
{var seq__51649_51663__$1 = temp__4126__auto___51662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51649_51663__$1))
{var c__4295__auto___51664 = cljs.core.chunk_first.call(null,seq__51649_51663__$1);{
var G__51665 = cljs.core.chunk_rest.call(null,seq__51649_51663__$1);
var G__51666 = c__4295__auto___51664;
var G__51667 = cljs.core.count.call(null,c__4295__auto___51664);
var G__51668 = 0;
seq__51649_51653 = G__51665;
chunk__51650_51654 = G__51666;
count__51651_51655 = G__51667;
i__51652_51656 = G__51668;
continue;
}
} else
{var node_51669 = cljs.core.first.call(null,seq__51649_51663__$1);goog.dom.forms.setValue(node_51669,value);
{
var G__51670 = cljs.core.next.call(null,seq__51649_51663__$1);
var G__51671 = null;
var G__51672 = 0;
var G__51673 = 0;
seq__51649_51653 = G__51670;
chunk__51650_51654 = G__51671;
count__51651_51655 = G__51672;
i__51652_51656 = G__51673;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3527__auto__ = allows_inner_html_QMARK_;if(and__3527__auto__)
{var and__3527__auto____$1 = (function (){var or__3539__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3527__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
}
})()))
{var value_51684 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__51680_51685 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51681_51686 = null;var count__51682_51687 = 0;var i__51683_51688 = 0;while(true){
if((i__51683_51688 < count__51682_51687))
{var node_51689 = cljs.core._nth.call(null,chunk__51681_51686,i__51683_51688);node_51689.innerHTML = value_51684;
{
var G__51690 = seq__51680_51685;
var G__51691 = chunk__51681_51686;
var G__51692 = count__51682_51687;
var G__51693 = (i__51683_51688 + 1);
seq__51680_51685 = G__51690;
chunk__51681_51686 = G__51691;
count__51682_51687 = G__51692;
i__51683_51688 = G__51693;
continue;
}
} else
{var temp__4126__auto___51694 = cljs.core.seq.call(null,seq__51680_51685);if(temp__4126__auto___51694)
{var seq__51680_51695__$1 = temp__4126__auto___51694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51680_51695__$1))
{var c__4295__auto___51696 = cljs.core.chunk_first.call(null,seq__51680_51695__$1);{
var G__51697 = cljs.core.chunk_rest.call(null,seq__51680_51695__$1);
var G__51698 = c__4295__auto___51696;
var G__51699 = cljs.core.count.call(null,c__4295__auto___51696);
var G__51700 = 0;
seq__51680_51685 = G__51697;
chunk__51681_51686 = G__51698;
count__51682_51687 = G__51699;
i__51683_51688 = G__51700;
continue;
}
} else
{var node_51701 = cljs.core.first.call(null,seq__51680_51695__$1);node_51701.innerHTML = value_51684;
{
var G__51702 = cljs.core.next.call(null,seq__51680_51695__$1);
var G__51703 = null;
var G__51704 = 0;
var G__51705 = 0;
seq__51680_51685 = G__51702;
chunk__51681_51686 = G__51703;
count__51682_51687 = G__51704;
i__51683_51688 = G__51705;
continue;
}
}
} else
{}
}
break;
}
}catch (e51679){if((e51679 instanceof Error))
{var e_51706 = e51679;domina.replace_children_BANG_.call(null,content,value_51684);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51679;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3527__auto__ = bubble;if(cljs.core.truth_(and__3527__auto__))
{return (value == null);
} else
{return and__3527__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3539__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__51713_51717 = cljs.core.seq.call(null,children);var chunk__51714_51718 = null;var count__51715_51719 = 0;var i__51716_51720 = 0;while(true){
if((i__51716_51720 < count__51715_51719))
{var child_51721 = cljs.core._nth.call(null,chunk__51714_51718,i__51716_51720);frag.appendChild(child_51721);
{
var G__51722 = seq__51713_51717;
var G__51723 = chunk__51714_51718;
var G__51724 = count__51715_51719;
var G__51725 = (i__51716_51720 + 1);
seq__51713_51717 = G__51722;
chunk__51714_51718 = G__51723;
count__51715_51719 = G__51724;
i__51716_51720 = G__51725;
continue;
}
} else
{var temp__4126__auto___51726 = cljs.core.seq.call(null,seq__51713_51717);if(temp__4126__auto___51726)
{var seq__51713_51727__$1 = temp__4126__auto___51726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51713_51727__$1))
{var c__4295__auto___51728 = cljs.core.chunk_first.call(null,seq__51713_51727__$1);{
var G__51729 = cljs.core.chunk_rest.call(null,seq__51713_51727__$1);
var G__51730 = c__4295__auto___51728;
var G__51731 = cljs.core.count.call(null,c__4295__auto___51728);
var G__51732 = 0;
seq__51713_51717 = G__51729;
chunk__51714_51718 = G__51730;
count__51715_51719 = G__51731;
i__51716_51720 = G__51732;
continue;
}
} else
{var child_51733 = cljs.core.first.call(null,seq__51713_51727__$1);frag.appendChild(child_51733);
{
var G__51734 = cljs.core.next.call(null,seq__51713_51727__$1);
var G__51735 = null;
var G__51736 = 0;
var G__51737 = 0;
seq__51713_51717 = G__51734;
chunk__51714_51718 = G__51735;
count__51715_51719 = G__51736;
i__51716_51720 = G__51737;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__51707_SHARP_,p2__51708_SHARP_){return f.call(null,p1__51707_SHARP_,p2__51708_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3527__auto__ = obj;if(cljs.core.truth_(and__3527__auto__))
{var and__3527__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3527__auto____$1)
{return obj.length;
} else
{return and__3527__auto____$1;
}
} else
{return and__3527__auto__;
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
{if((function (){var G__51739 = list_thing;if(G__51739)
{var bit__4189__auto__ = (G__51739.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__51739.cljs$core$ISeqable$))
{return true;
} else
{if((!G__51739.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51739);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51739);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__51740 = content;if(G__51740)
{var bit__4189__auto__ = (G__51740.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__51740.cljs$core$ISeqable$))
{return true;
} else
{if((!G__51740.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51740);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51740);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__51741 = content;if(G__51741)
{var bit__4189__auto__ = (G__51741.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__51741.cljs$core$ISeqable$))
{return true;
} else
{if((!G__51741.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51741);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51741);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
