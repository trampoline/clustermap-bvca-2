// Compiled by ClojureScript 0.0-2080
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_33299 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_33300 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_33301 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_33300,table_section_wrapper_33300,opt_wrapper_33299,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_33301,table_section_wrapper_33300,cell_wrapper_33301,opt_wrapper_33299,table_section_wrapper_33300,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_33300]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__33306 = cljs.core.seq.call(null,tbody);var chunk__33307 = null;var count__33308 = 0;var i__33309 = 0;while(true){
if((i__33309 < count__33308))
{var child = cljs.core._nth.call(null,chunk__33307,i__33309);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__33310 = seq__33306;
var G__33311 = chunk__33307;
var G__33312 = count__33308;
var G__33313 = (i__33309 + 1);
seq__33306 = G__33310;
chunk__33307 = G__33311;
count__33308 = G__33312;
i__33309 = G__33313;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33306);if(temp__4092__auto__)
{var seq__33306__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33306__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__33306__$1);{
var G__33314 = cljs.core.chunk_rest.call(null,seq__33306__$1);
var G__33315 = c__4015__auto__;
var G__33316 = cljs.core.count.call(null,c__4015__auto__);
var G__33317 = 0;
seq__33306 = G__33314;
chunk__33307 = G__33315;
count__33308 = G__33316;
i__33309 = G__33317;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__33306__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__33318 = cljs.core.next.call(null,seq__33306__$1);
var G__33319 = null;
var G__33320 = 0;
var G__33321 = 0;
seq__33306 = G__33318;
chunk__33307 = G__33319;
count__33308 = G__33320;
i__33309 = G__33321;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__33323 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__33323,0,null);var start_wrap = cljs.core.nth.call(null,vec__33323,1,null);var end_wrap = cljs.core.nth.call(null,vec__33323,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__33324 = wrapper.lastChild;
var G__33325 = (level - 1);
wrapper = G__33324;
level = G__33325;
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
if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3279__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3279__auto__;
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
domina.DomContent = (function (){var obj33327 = {};return obj33327;
})();
domina.nodes = (function nodes(content){if((function (){var and__3279__auto__ = content;if(and__3279__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3279__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3894__auto__ = (((content == null))?null:content);return (function (){var or__3291__auto__ = (domina.nodes[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.nodes["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3279__auto__ = nodeseq;if(and__3279__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3279__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3894__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3291__auto__ = (domina.single_node[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.single_node["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3279__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3279__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__33328){
var mesg = cljs.core.seq(arglist__33328);
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
log.cljs$lang$applyTo = (function (arglist__33329){
var mesg = cljs.core.seq(arglist__33329);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__33330){
var contents = cljs.core.seq(arglist__33330);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__33331_SHARP_){return p1__33331_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__33332_SHARP_,p2__33333_SHARP_){return goog.dom.insertChildAt(p1__33332_SHARP_,p2__33333_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33335_SHARP_,p2__33334_SHARP_){return goog.dom.insertSiblingBefore(p2__33334_SHARP_,p1__33335_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33337_SHARP_,p2__33336_SHARP_){return goog.dom.insertSiblingAfter(p2__33336_SHARP_,p1__33337_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__33339_SHARP_,p2__33338_SHARP_){return goog.dom.replaceNode(p2__33338_SHARP_,p1__33339_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__33344_33348 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33345_33349 = null;var count__33346_33350 = 0;var i__33347_33351 = 0;while(true){
if((i__33347_33351 < count__33346_33350))
{var n_33352 = cljs.core._nth.call(null,chunk__33345_33349,i__33347_33351);goog.style.setStyle(n_33352,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33353 = seq__33344_33348;
var G__33354 = chunk__33345_33349;
var G__33355 = count__33346_33350;
var G__33356 = (i__33347_33351 + 1);
seq__33344_33348 = G__33353;
chunk__33345_33349 = G__33354;
count__33346_33350 = G__33355;
i__33347_33351 = G__33356;
continue;
}
} else
{var temp__4092__auto___33357 = cljs.core.seq.call(null,seq__33344_33348);if(temp__4092__auto___33357)
{var seq__33344_33358__$1 = temp__4092__auto___33357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33344_33358__$1))
{var c__4015__auto___33359 = cljs.core.chunk_first.call(null,seq__33344_33358__$1);{
var G__33360 = cljs.core.chunk_rest.call(null,seq__33344_33358__$1);
var G__33361 = c__4015__auto___33359;
var G__33362 = cljs.core.count.call(null,c__4015__auto___33359);
var G__33363 = 0;
seq__33344_33348 = G__33360;
chunk__33345_33349 = G__33361;
count__33346_33350 = G__33362;
i__33347_33351 = G__33363;
continue;
}
} else
{var n_33364 = cljs.core.first.call(null,seq__33344_33358__$1);goog.style.setStyle(n_33364,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33365 = cljs.core.next.call(null,seq__33344_33358__$1);
var G__33366 = null;
var G__33367 = 0;
var G__33368 = 0;
seq__33344_33348 = G__33365;
chunk__33345_33349 = G__33366;
count__33346_33350 = G__33367;
i__33347_33351 = G__33368;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__33369){
var content = cljs.core.first(arglist__33369);
arglist__33369 = cljs.core.next(arglist__33369);
var name = cljs.core.first(arglist__33369);
var value = cljs.core.rest(arglist__33369);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__33374_33378 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33375_33379 = null;var count__33376_33380 = 0;var i__33377_33381 = 0;while(true){
if((i__33377_33381 < count__33376_33380))
{var n_33382 = cljs.core._nth.call(null,chunk__33375_33379,i__33377_33381);n_33382.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33383 = seq__33374_33378;
var G__33384 = chunk__33375_33379;
var G__33385 = count__33376_33380;
var G__33386 = (i__33377_33381 + 1);
seq__33374_33378 = G__33383;
chunk__33375_33379 = G__33384;
count__33376_33380 = G__33385;
i__33377_33381 = G__33386;
continue;
}
} else
{var temp__4092__auto___33387 = cljs.core.seq.call(null,seq__33374_33378);if(temp__4092__auto___33387)
{var seq__33374_33388__$1 = temp__4092__auto___33387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33374_33388__$1))
{var c__4015__auto___33389 = cljs.core.chunk_first.call(null,seq__33374_33388__$1);{
var G__33390 = cljs.core.chunk_rest.call(null,seq__33374_33388__$1);
var G__33391 = c__4015__auto___33389;
var G__33392 = cljs.core.count.call(null,c__4015__auto___33389);
var G__33393 = 0;
seq__33374_33378 = G__33390;
chunk__33375_33379 = G__33391;
count__33376_33380 = G__33392;
i__33377_33381 = G__33393;
continue;
}
} else
{var n_33394 = cljs.core.first.call(null,seq__33374_33388__$1);n_33394.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33395 = cljs.core.next.call(null,seq__33374_33388__$1);
var G__33396 = null;
var G__33397 = 0;
var G__33398 = 0;
seq__33374_33378 = G__33395;
chunk__33375_33379 = G__33396;
count__33376_33380 = G__33397;
i__33377_33381 = G__33398;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__33399){
var content = cljs.core.first(arglist__33399);
arglist__33399 = cljs.core.next(arglist__33399);
var name = cljs.core.first(arglist__33399);
var value = cljs.core.rest(arglist__33399);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__33404_33408 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33405_33409 = null;var count__33406_33410 = 0;var i__33407_33411 = 0;while(true){
if((i__33407_33411 < count__33406_33410))
{var n_33412 = cljs.core._nth.call(null,chunk__33405_33409,i__33407_33411);n_33412.removeAttribute(cljs.core.name.call(null,name));
{
var G__33413 = seq__33404_33408;
var G__33414 = chunk__33405_33409;
var G__33415 = count__33406_33410;
var G__33416 = (i__33407_33411 + 1);
seq__33404_33408 = G__33413;
chunk__33405_33409 = G__33414;
count__33406_33410 = G__33415;
i__33407_33411 = G__33416;
continue;
}
} else
{var temp__4092__auto___33417 = cljs.core.seq.call(null,seq__33404_33408);if(temp__4092__auto___33417)
{var seq__33404_33418__$1 = temp__4092__auto___33417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33404_33418__$1))
{var c__4015__auto___33419 = cljs.core.chunk_first.call(null,seq__33404_33418__$1);{
var G__33420 = cljs.core.chunk_rest.call(null,seq__33404_33418__$1);
var G__33421 = c__4015__auto___33419;
var G__33422 = cljs.core.count.call(null,c__4015__auto___33419);
var G__33423 = 0;
seq__33404_33408 = G__33420;
chunk__33405_33409 = G__33421;
count__33406_33410 = G__33422;
i__33407_33411 = G__33423;
continue;
}
} else
{var n_33424 = cljs.core.first.call(null,seq__33404_33418__$1);n_33424.removeAttribute(cljs.core.name.call(null,name));
{
var G__33425 = cljs.core.next.call(null,seq__33404_33418__$1);
var G__33426 = null;
var G__33427 = 0;
var G__33428 = 0;
seq__33404_33408 = G__33425;
chunk__33405_33409 = G__33426;
count__33406_33410 = G__33427;
i__33407_33411 = G__33428;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__33430 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__33430,0,null);var v = cljs.core.nth.call(null,vec__33430,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
{return v;
} else
{return and__3279__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__33431_SHARP_){var attr = attrs__$1.item(p1__33431_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__33438_33444 = cljs.core.seq.call(null,styles);var chunk__33439_33445 = null;var count__33440_33446 = 0;var i__33441_33447 = 0;while(true){
if((i__33441_33447 < count__33440_33446))
{var vec__33442_33448 = cljs.core._nth.call(null,chunk__33439_33445,i__33441_33447);var name_33449 = cljs.core.nth.call(null,vec__33442_33448,0,null);var value_33450 = cljs.core.nth.call(null,vec__33442_33448,1,null);domina.set_style_BANG_.call(null,content,name_33449,value_33450);
{
var G__33451 = seq__33438_33444;
var G__33452 = chunk__33439_33445;
var G__33453 = count__33440_33446;
var G__33454 = (i__33441_33447 + 1);
seq__33438_33444 = G__33451;
chunk__33439_33445 = G__33452;
count__33440_33446 = G__33453;
i__33441_33447 = G__33454;
continue;
}
} else
{var temp__4092__auto___33455 = cljs.core.seq.call(null,seq__33438_33444);if(temp__4092__auto___33455)
{var seq__33438_33456__$1 = temp__4092__auto___33455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33438_33456__$1))
{var c__4015__auto___33457 = cljs.core.chunk_first.call(null,seq__33438_33456__$1);{
var G__33458 = cljs.core.chunk_rest.call(null,seq__33438_33456__$1);
var G__33459 = c__4015__auto___33457;
var G__33460 = cljs.core.count.call(null,c__4015__auto___33457);
var G__33461 = 0;
seq__33438_33444 = G__33458;
chunk__33439_33445 = G__33459;
count__33440_33446 = G__33460;
i__33441_33447 = G__33461;
continue;
}
} else
{var vec__33443_33462 = cljs.core.first.call(null,seq__33438_33456__$1);var name_33463 = cljs.core.nth.call(null,vec__33443_33462,0,null);var value_33464 = cljs.core.nth.call(null,vec__33443_33462,1,null);domina.set_style_BANG_.call(null,content,name_33463,value_33464);
{
var G__33465 = cljs.core.next.call(null,seq__33438_33456__$1);
var G__33466 = null;
var G__33467 = 0;
var G__33468 = 0;
seq__33438_33444 = G__33465;
chunk__33439_33445 = G__33466;
count__33440_33446 = G__33467;
i__33441_33447 = G__33468;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__33475_33481 = cljs.core.seq.call(null,attrs);var chunk__33476_33482 = null;var count__33477_33483 = 0;var i__33478_33484 = 0;while(true){
if((i__33478_33484 < count__33477_33483))
{var vec__33479_33485 = cljs.core._nth.call(null,chunk__33476_33482,i__33478_33484);var name_33486 = cljs.core.nth.call(null,vec__33479_33485,0,null);var value_33487 = cljs.core.nth.call(null,vec__33479_33485,1,null);domina.set_attr_BANG_.call(null,content,name_33486,value_33487);
{
var G__33488 = seq__33475_33481;
var G__33489 = chunk__33476_33482;
var G__33490 = count__33477_33483;
var G__33491 = (i__33478_33484 + 1);
seq__33475_33481 = G__33488;
chunk__33476_33482 = G__33489;
count__33477_33483 = G__33490;
i__33478_33484 = G__33491;
continue;
}
} else
{var temp__4092__auto___33492 = cljs.core.seq.call(null,seq__33475_33481);if(temp__4092__auto___33492)
{var seq__33475_33493__$1 = temp__4092__auto___33492;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33475_33493__$1))
{var c__4015__auto___33494 = cljs.core.chunk_first.call(null,seq__33475_33493__$1);{
var G__33495 = cljs.core.chunk_rest.call(null,seq__33475_33493__$1);
var G__33496 = c__4015__auto___33494;
var G__33497 = cljs.core.count.call(null,c__4015__auto___33494);
var G__33498 = 0;
seq__33475_33481 = G__33495;
chunk__33476_33482 = G__33496;
count__33477_33483 = G__33497;
i__33478_33484 = G__33498;
continue;
}
} else
{var vec__33480_33499 = cljs.core.first.call(null,seq__33475_33493__$1);var name_33500 = cljs.core.nth.call(null,vec__33480_33499,0,null);var value_33501 = cljs.core.nth.call(null,vec__33480_33499,1,null);domina.set_attr_BANG_.call(null,content,name_33500,value_33501);
{
var G__33502 = cljs.core.next.call(null,seq__33475_33493__$1);
var G__33503 = null;
var G__33504 = 0;
var G__33505 = 0;
seq__33475_33481 = G__33502;
chunk__33476_33482 = G__33503;
count__33477_33483 = G__33504;
i__33478_33484 = G__33505;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__33510_33514 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33511_33515 = null;var count__33512_33516 = 0;var i__33513_33517 = 0;while(true){
if((i__33513_33517 < count__33512_33516))
{var node_33518 = cljs.core._nth.call(null,chunk__33511_33515,i__33513_33517);goog.dom.classes.add(node_33518,class$);
{
var G__33519 = seq__33510_33514;
var G__33520 = chunk__33511_33515;
var G__33521 = count__33512_33516;
var G__33522 = (i__33513_33517 + 1);
seq__33510_33514 = G__33519;
chunk__33511_33515 = G__33520;
count__33512_33516 = G__33521;
i__33513_33517 = G__33522;
continue;
}
} else
{var temp__4092__auto___33523 = cljs.core.seq.call(null,seq__33510_33514);if(temp__4092__auto___33523)
{var seq__33510_33524__$1 = temp__4092__auto___33523;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33510_33524__$1))
{var c__4015__auto___33525 = cljs.core.chunk_first.call(null,seq__33510_33524__$1);{
var G__33526 = cljs.core.chunk_rest.call(null,seq__33510_33524__$1);
var G__33527 = c__4015__auto___33525;
var G__33528 = cljs.core.count.call(null,c__4015__auto___33525);
var G__33529 = 0;
seq__33510_33514 = G__33526;
chunk__33511_33515 = G__33527;
count__33512_33516 = G__33528;
i__33513_33517 = G__33529;
continue;
}
} else
{var node_33530 = cljs.core.first.call(null,seq__33510_33524__$1);goog.dom.classes.add(node_33530,class$);
{
var G__33531 = cljs.core.next.call(null,seq__33510_33524__$1);
var G__33532 = null;
var G__33533 = 0;
var G__33534 = 0;
seq__33510_33514 = G__33531;
chunk__33511_33515 = G__33532;
count__33512_33516 = G__33533;
i__33513_33517 = G__33534;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__33539_33543 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33540_33544 = null;var count__33541_33545 = 0;var i__33542_33546 = 0;while(true){
if((i__33542_33546 < count__33541_33545))
{var node_33547 = cljs.core._nth.call(null,chunk__33540_33544,i__33542_33546);goog.dom.classes.remove(node_33547,class$);
{
var G__33548 = seq__33539_33543;
var G__33549 = chunk__33540_33544;
var G__33550 = count__33541_33545;
var G__33551 = (i__33542_33546 + 1);
seq__33539_33543 = G__33548;
chunk__33540_33544 = G__33549;
count__33541_33545 = G__33550;
i__33542_33546 = G__33551;
continue;
}
} else
{var temp__4092__auto___33552 = cljs.core.seq.call(null,seq__33539_33543);if(temp__4092__auto___33552)
{var seq__33539_33553__$1 = temp__4092__auto___33552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33539_33553__$1))
{var c__4015__auto___33554 = cljs.core.chunk_first.call(null,seq__33539_33553__$1);{
var G__33555 = cljs.core.chunk_rest.call(null,seq__33539_33553__$1);
var G__33556 = c__4015__auto___33554;
var G__33557 = cljs.core.count.call(null,c__4015__auto___33554);
var G__33558 = 0;
seq__33539_33543 = G__33555;
chunk__33540_33544 = G__33556;
count__33541_33545 = G__33557;
i__33542_33546 = G__33558;
continue;
}
} else
{var node_33559 = cljs.core.first.call(null,seq__33539_33553__$1);goog.dom.classes.remove(node_33559,class$);
{
var G__33560 = cljs.core.next.call(null,seq__33539_33553__$1);
var G__33561 = null;
var G__33562 = 0;
var G__33563 = 0;
seq__33539_33543 = G__33560;
chunk__33540_33544 = G__33561;
count__33541_33545 = G__33562;
i__33542_33546 = G__33563;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__33568_33572 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33569_33573 = null;var count__33570_33574 = 0;var i__33571_33575 = 0;while(true){
if((i__33571_33575 < count__33570_33574))
{var node_33576 = cljs.core._nth.call(null,chunk__33569_33573,i__33571_33575);goog.dom.classes.toggle(node_33576,class$);
{
var G__33577 = seq__33568_33572;
var G__33578 = chunk__33569_33573;
var G__33579 = count__33570_33574;
var G__33580 = (i__33571_33575 + 1);
seq__33568_33572 = G__33577;
chunk__33569_33573 = G__33578;
count__33570_33574 = G__33579;
i__33571_33575 = G__33580;
continue;
}
} else
{var temp__4092__auto___33581 = cljs.core.seq.call(null,seq__33568_33572);if(temp__4092__auto___33581)
{var seq__33568_33582__$1 = temp__4092__auto___33581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33568_33582__$1))
{var c__4015__auto___33583 = cljs.core.chunk_first.call(null,seq__33568_33582__$1);{
var G__33584 = cljs.core.chunk_rest.call(null,seq__33568_33582__$1);
var G__33585 = c__4015__auto___33583;
var G__33586 = cljs.core.count.call(null,c__4015__auto___33583);
var G__33587 = 0;
seq__33568_33572 = G__33584;
chunk__33569_33573 = G__33585;
count__33570_33574 = G__33586;
i__33571_33575 = G__33587;
continue;
}
} else
{var node_33588 = cljs.core.first.call(null,seq__33568_33582__$1);goog.dom.classes.toggle(node_33588,class$);
{
var G__33589 = cljs.core.next.call(null,seq__33568_33582__$1);
var G__33590 = null;
var G__33591 = 0;
var G__33592 = 0;
seq__33568_33572 = G__33589;
chunk__33569_33573 = G__33590;
count__33570_33574 = G__33591;
i__33571_33575 = G__33592;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_33601__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__33597_33602 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33598_33603 = null;var count__33599_33604 = 0;var i__33600_33605 = 0;while(true){
if((i__33600_33605 < count__33599_33604))
{var node_33606 = cljs.core._nth.call(null,chunk__33598_33603,i__33600_33605);goog.dom.classes.set(node_33606,classes_33601__$1);
{
var G__33607 = seq__33597_33602;
var G__33608 = chunk__33598_33603;
var G__33609 = count__33599_33604;
var G__33610 = (i__33600_33605 + 1);
seq__33597_33602 = G__33607;
chunk__33598_33603 = G__33608;
count__33599_33604 = G__33609;
i__33600_33605 = G__33610;
continue;
}
} else
{var temp__4092__auto___33611 = cljs.core.seq.call(null,seq__33597_33602);if(temp__4092__auto___33611)
{var seq__33597_33612__$1 = temp__4092__auto___33611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33597_33612__$1))
{var c__4015__auto___33613 = cljs.core.chunk_first.call(null,seq__33597_33612__$1);{
var G__33614 = cljs.core.chunk_rest.call(null,seq__33597_33612__$1);
var G__33615 = c__4015__auto___33613;
var G__33616 = cljs.core.count.call(null,c__4015__auto___33613);
var G__33617 = 0;
seq__33597_33602 = G__33614;
chunk__33598_33603 = G__33615;
count__33599_33604 = G__33616;
i__33600_33605 = G__33617;
continue;
}
} else
{var node_33618 = cljs.core.first.call(null,seq__33597_33612__$1);goog.dom.classes.set(node_33618,classes_33601__$1);
{
var G__33619 = cljs.core.next.call(null,seq__33597_33612__$1);
var G__33620 = null;
var G__33621 = 0;
var G__33622 = 0;
seq__33597_33602 = G__33619;
chunk__33598_33603 = G__33620;
count__33599_33604 = G__33621;
i__33600_33605 = G__33622;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__33627_33631 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33628_33632 = null;var count__33629_33633 = 0;var i__33630_33634 = 0;while(true){
if((i__33630_33634 < count__33629_33633))
{var node_33635 = cljs.core._nth.call(null,chunk__33628_33632,i__33630_33634);goog.dom.setTextContent(node_33635,value);
{
var G__33636 = seq__33627_33631;
var G__33637 = chunk__33628_33632;
var G__33638 = count__33629_33633;
var G__33639 = (i__33630_33634 + 1);
seq__33627_33631 = G__33636;
chunk__33628_33632 = G__33637;
count__33629_33633 = G__33638;
i__33630_33634 = G__33639;
continue;
}
} else
{var temp__4092__auto___33640 = cljs.core.seq.call(null,seq__33627_33631);if(temp__4092__auto___33640)
{var seq__33627_33641__$1 = temp__4092__auto___33640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33627_33641__$1))
{var c__4015__auto___33642 = cljs.core.chunk_first.call(null,seq__33627_33641__$1);{
var G__33643 = cljs.core.chunk_rest.call(null,seq__33627_33641__$1);
var G__33644 = c__4015__auto___33642;
var G__33645 = cljs.core.count.call(null,c__4015__auto___33642);
var G__33646 = 0;
seq__33627_33631 = G__33643;
chunk__33628_33632 = G__33644;
count__33629_33633 = G__33645;
i__33630_33634 = G__33646;
continue;
}
} else
{var node_33647 = cljs.core.first.call(null,seq__33627_33641__$1);goog.dom.setTextContent(node_33647,value);
{
var G__33648 = cljs.core.next.call(null,seq__33627_33641__$1);
var G__33649 = null;
var G__33650 = 0;
var G__33651 = 0;
seq__33627_33631 = G__33648;
chunk__33628_33632 = G__33649;
count__33629_33633 = G__33650;
i__33630_33634 = G__33651;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__33656_33660 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33657_33661 = null;var count__33658_33662 = 0;var i__33659_33663 = 0;while(true){
if((i__33659_33663 < count__33658_33662))
{var node_33664 = cljs.core._nth.call(null,chunk__33657_33661,i__33659_33663);goog.dom.forms.setValue(node_33664,value);
{
var G__33665 = seq__33656_33660;
var G__33666 = chunk__33657_33661;
var G__33667 = count__33658_33662;
var G__33668 = (i__33659_33663 + 1);
seq__33656_33660 = G__33665;
chunk__33657_33661 = G__33666;
count__33658_33662 = G__33667;
i__33659_33663 = G__33668;
continue;
}
} else
{var temp__4092__auto___33669 = cljs.core.seq.call(null,seq__33656_33660);if(temp__4092__auto___33669)
{var seq__33656_33670__$1 = temp__4092__auto___33669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33656_33670__$1))
{var c__4015__auto___33671 = cljs.core.chunk_first.call(null,seq__33656_33670__$1);{
var G__33672 = cljs.core.chunk_rest.call(null,seq__33656_33670__$1);
var G__33673 = c__4015__auto___33671;
var G__33674 = cljs.core.count.call(null,c__4015__auto___33671);
var G__33675 = 0;
seq__33656_33660 = G__33672;
chunk__33657_33661 = G__33673;
count__33658_33662 = G__33674;
i__33659_33663 = G__33675;
continue;
}
} else
{var node_33676 = cljs.core.first.call(null,seq__33656_33670__$1);goog.dom.forms.setValue(node_33676,value);
{
var G__33677 = cljs.core.next.call(null,seq__33656_33670__$1);
var G__33678 = null;
var G__33679 = 0;
var G__33680 = 0;
seq__33656_33660 = G__33677;
chunk__33657_33661 = G__33678;
count__33658_33662 = G__33679;
i__33659_33663 = G__33680;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3279__auto__ = allows_inner_html_QMARK_;if(and__3279__auto__)
{var and__3279__auto____$1 = (function (){var or__3291__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3279__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var value_33691 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__33687_33692 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33688_33693 = null;var count__33689_33694 = 0;var i__33690_33695 = 0;while(true){
if((i__33690_33695 < count__33689_33694))
{var node_33696 = cljs.core._nth.call(null,chunk__33688_33693,i__33690_33695);node_33696.innerHTML = value_33691;
{
var G__33697 = seq__33687_33692;
var G__33698 = chunk__33688_33693;
var G__33699 = count__33689_33694;
var G__33700 = (i__33690_33695 + 1);
seq__33687_33692 = G__33697;
chunk__33688_33693 = G__33698;
count__33689_33694 = G__33699;
i__33690_33695 = G__33700;
continue;
}
} else
{var temp__4092__auto___33701 = cljs.core.seq.call(null,seq__33687_33692);if(temp__4092__auto___33701)
{var seq__33687_33702__$1 = temp__4092__auto___33701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33687_33702__$1))
{var c__4015__auto___33703 = cljs.core.chunk_first.call(null,seq__33687_33702__$1);{
var G__33704 = cljs.core.chunk_rest.call(null,seq__33687_33702__$1);
var G__33705 = c__4015__auto___33703;
var G__33706 = cljs.core.count.call(null,c__4015__auto___33703);
var G__33707 = 0;
seq__33687_33692 = G__33704;
chunk__33688_33693 = G__33705;
count__33689_33694 = G__33706;
i__33690_33695 = G__33707;
continue;
}
} else
{var node_33708 = cljs.core.first.call(null,seq__33687_33702__$1);node_33708.innerHTML = value_33691;
{
var G__33709 = cljs.core.next.call(null,seq__33687_33702__$1);
var G__33710 = null;
var G__33711 = 0;
var G__33712 = 0;
seq__33687_33692 = G__33709;
chunk__33688_33693 = G__33710;
count__33689_33694 = G__33711;
i__33690_33695 = G__33712;
continue;
}
}
} else
{}
}
break;
}
}catch (e33686){if((e33686 instanceof Error))
{var e_33713 = e33686;domina.replace_children_BANG_.call(null,content,value_33691);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33686;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3279__auto__ = bubble;if(cljs.core.truth_(and__3279__auto__))
{return (value == null);
} else
{return and__3279__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3291__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__33720_33724 = cljs.core.seq.call(null,children);var chunk__33721_33725 = null;var count__33722_33726 = 0;var i__33723_33727 = 0;while(true){
if((i__33723_33727 < count__33722_33726))
{var child_33728 = cljs.core._nth.call(null,chunk__33721_33725,i__33723_33727);frag.appendChild(child_33728);
{
var G__33729 = seq__33720_33724;
var G__33730 = chunk__33721_33725;
var G__33731 = count__33722_33726;
var G__33732 = (i__33723_33727 + 1);
seq__33720_33724 = G__33729;
chunk__33721_33725 = G__33730;
count__33722_33726 = G__33731;
i__33723_33727 = G__33732;
continue;
}
} else
{var temp__4092__auto___33733 = cljs.core.seq.call(null,seq__33720_33724);if(temp__4092__auto___33733)
{var seq__33720_33734__$1 = temp__4092__auto___33733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33720_33734__$1))
{var c__4015__auto___33735 = cljs.core.chunk_first.call(null,seq__33720_33734__$1);{
var G__33736 = cljs.core.chunk_rest.call(null,seq__33720_33734__$1);
var G__33737 = c__4015__auto___33735;
var G__33738 = cljs.core.count.call(null,c__4015__auto___33735);
var G__33739 = 0;
seq__33720_33724 = G__33736;
chunk__33721_33725 = G__33737;
count__33722_33726 = G__33738;
i__33723_33727 = G__33739;
continue;
}
} else
{var child_33740 = cljs.core.first.call(null,seq__33720_33734__$1);frag.appendChild(child_33740);
{
var G__33741 = cljs.core.next.call(null,seq__33720_33734__$1);
var G__33742 = null;
var G__33743 = 0;
var G__33744 = 0;
seq__33720_33724 = G__33741;
chunk__33721_33725 = G__33742;
count__33722_33726 = G__33743;
i__33723_33727 = G__33744;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__33714_SHARP_,p2__33715_SHARP_){return f.call(null,p1__33714_SHARP_,p2__33715_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3279__auto__ = obj;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3279__auto____$1)
{return obj.length;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
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
{if((function (){var G__33746 = list_thing;if(G__33746)
{var bit__3917__auto__ = (G__33746.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__33746.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33746.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33746);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33746);
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
{if((function (){var G__33747 = content;if(G__33747)
{var bit__3917__auto__ = (G__33747.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__33747.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33747.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33747);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33747);
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
{if((function (){var G__33748 = content;if(G__33748)
{var bit__3917__auto__ = (G__33748.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__33748.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33748.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33748);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33748);
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
