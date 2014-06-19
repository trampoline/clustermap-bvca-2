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
var opt_wrapper_51260 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_51261 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_51262 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_51262,opt_wrapper_51260,table_section_wrapper_51261,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_51260,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_51261,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_51261,cell_wrapper_51262,table_section_wrapper_51261,table_section_wrapper_51261]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3527__auto__ = div.firstChild;if(cljs.core.truth_(and__3527__auto__))
{return div.firstChild.childNodes;
} else
{return and__3527__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__51267 = cljs.core.seq.call(null,tbody);var chunk__51268 = null;var count__51269 = 0;var i__51270 = 0;while(true){
if((i__51270 < count__51269))
{var child = cljs.core._nth.call(null,chunk__51268,i__51270);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__51271 = seq__51267;
var G__51272 = chunk__51268;
var G__51273 = count__51269;
var G__51274 = (i__51270 + 1);
seq__51267 = G__51271;
chunk__51268 = G__51272;
count__51269 = G__51273;
i__51270 = G__51274;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51267);if(temp__4126__auto__)
{var seq__51267__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51267__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__51267__$1);{
var G__51275 = cljs.core.chunk_rest.call(null,seq__51267__$1);
var G__51276 = c__4295__auto__;
var G__51277 = cljs.core.count.call(null,c__4295__auto__);
var G__51278 = 0;
seq__51267 = G__51275;
chunk__51268 = G__51276;
count__51269 = G__51277;
i__51270 = G__51278;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__51267__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__51279 = cljs.core.next.call(null,seq__51267__$1);
var G__51280 = null;
var G__51281 = 0;
var G__51282 = 0;
seq__51267 = G__51279;
chunk__51268 = G__51280;
count__51269 = G__51281;
i__51270 = G__51282;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__51284 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__51284,0,null);var start_wrap = cljs.core.nth.call(null,vec__51284,1,null);var end_wrap = cljs.core.nth.call(null,vec__51284,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__51285 = wrapper.lastChild;
var G__51286 = (level - 1);
wrapper = G__51285;
level = G__51286;
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
domina.DomContent = (function (){var obj51288 = {};return obj51288;
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
log_debug.cljs$lang$applyTo = (function (arglist__51289){
var mesg = cljs.core.seq(arglist__51289);
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
log.cljs$lang$applyTo = (function (arglist__51290){
var mesg = cljs.core.seq(arglist__51290);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__51291){
var contents = cljs.core.seq(arglist__51291);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__51292_SHARP_){return p1__51292_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__51293_SHARP_,p2__51294_SHARP_){return goog.dom.insertChildAt(p1__51293_SHARP_,p2__51294_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__51296_SHARP_,p2__51295_SHARP_){return goog.dom.insertSiblingBefore(p2__51295_SHARP_,p1__51296_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__51298_SHARP_,p2__51297_SHARP_){return goog.dom.insertSiblingAfter(p2__51297_SHARP_,p1__51298_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__51300_SHARP_,p2__51299_SHARP_){return goog.dom.replaceNode(p2__51299_SHARP_,p1__51300_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__51305_51309 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51306_51310 = null;var count__51307_51311 = 0;var i__51308_51312 = 0;while(true){
if((i__51308_51312 < count__51307_51311))
{var n_51313 = cljs.core._nth.call(null,chunk__51306_51310,i__51308_51312);goog.style.setStyle(n_51313,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51314 = seq__51305_51309;
var G__51315 = chunk__51306_51310;
var G__51316 = count__51307_51311;
var G__51317 = (i__51308_51312 + 1);
seq__51305_51309 = G__51314;
chunk__51306_51310 = G__51315;
count__51307_51311 = G__51316;
i__51308_51312 = G__51317;
continue;
}
} else
{var temp__4126__auto___51318 = cljs.core.seq.call(null,seq__51305_51309);if(temp__4126__auto___51318)
{var seq__51305_51319__$1 = temp__4126__auto___51318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51305_51319__$1))
{var c__4295__auto___51320 = cljs.core.chunk_first.call(null,seq__51305_51319__$1);{
var G__51321 = cljs.core.chunk_rest.call(null,seq__51305_51319__$1);
var G__51322 = c__4295__auto___51320;
var G__51323 = cljs.core.count.call(null,c__4295__auto___51320);
var G__51324 = 0;
seq__51305_51309 = G__51321;
chunk__51306_51310 = G__51322;
count__51307_51311 = G__51323;
i__51308_51312 = G__51324;
continue;
}
} else
{var n_51325 = cljs.core.first.call(null,seq__51305_51319__$1);goog.style.setStyle(n_51325,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51326 = cljs.core.next.call(null,seq__51305_51319__$1);
var G__51327 = null;
var G__51328 = 0;
var G__51329 = 0;
seq__51305_51309 = G__51326;
chunk__51306_51310 = G__51327;
count__51307_51311 = G__51328;
i__51308_51312 = G__51329;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__51330){
var content = cljs.core.first(arglist__51330);
arglist__51330 = cljs.core.next(arglist__51330);
var name = cljs.core.first(arglist__51330);
var value = cljs.core.rest(arglist__51330);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__51335_51339 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51336_51340 = null;var count__51337_51341 = 0;var i__51338_51342 = 0;while(true){
if((i__51338_51342 < count__51337_51341))
{var n_51343 = cljs.core._nth.call(null,chunk__51336_51340,i__51338_51342);n_51343.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51344 = seq__51335_51339;
var G__51345 = chunk__51336_51340;
var G__51346 = count__51337_51341;
var G__51347 = (i__51338_51342 + 1);
seq__51335_51339 = G__51344;
chunk__51336_51340 = G__51345;
count__51337_51341 = G__51346;
i__51338_51342 = G__51347;
continue;
}
} else
{var temp__4126__auto___51348 = cljs.core.seq.call(null,seq__51335_51339);if(temp__4126__auto___51348)
{var seq__51335_51349__$1 = temp__4126__auto___51348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51335_51349__$1))
{var c__4295__auto___51350 = cljs.core.chunk_first.call(null,seq__51335_51349__$1);{
var G__51351 = cljs.core.chunk_rest.call(null,seq__51335_51349__$1);
var G__51352 = c__4295__auto___51350;
var G__51353 = cljs.core.count.call(null,c__4295__auto___51350);
var G__51354 = 0;
seq__51335_51339 = G__51351;
chunk__51336_51340 = G__51352;
count__51337_51341 = G__51353;
i__51338_51342 = G__51354;
continue;
}
} else
{var n_51355 = cljs.core.first.call(null,seq__51335_51349__$1);n_51355.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51356 = cljs.core.next.call(null,seq__51335_51349__$1);
var G__51357 = null;
var G__51358 = 0;
var G__51359 = 0;
seq__51335_51339 = G__51356;
chunk__51336_51340 = G__51357;
count__51337_51341 = G__51358;
i__51338_51342 = G__51359;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__51360){
var content = cljs.core.first(arglist__51360);
arglist__51360 = cljs.core.next(arglist__51360);
var name = cljs.core.first(arglist__51360);
var value = cljs.core.rest(arglist__51360);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__51365_51369 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51366_51370 = null;var count__51367_51371 = 0;var i__51368_51372 = 0;while(true){
if((i__51368_51372 < count__51367_51371))
{var n_51373 = cljs.core._nth.call(null,chunk__51366_51370,i__51368_51372);n_51373.removeAttribute(cljs.core.name.call(null,name));
{
var G__51374 = seq__51365_51369;
var G__51375 = chunk__51366_51370;
var G__51376 = count__51367_51371;
var G__51377 = (i__51368_51372 + 1);
seq__51365_51369 = G__51374;
chunk__51366_51370 = G__51375;
count__51367_51371 = G__51376;
i__51368_51372 = G__51377;
continue;
}
} else
{var temp__4126__auto___51378 = cljs.core.seq.call(null,seq__51365_51369);if(temp__4126__auto___51378)
{var seq__51365_51379__$1 = temp__4126__auto___51378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51365_51379__$1))
{var c__4295__auto___51380 = cljs.core.chunk_first.call(null,seq__51365_51379__$1);{
var G__51381 = cljs.core.chunk_rest.call(null,seq__51365_51379__$1);
var G__51382 = c__4295__auto___51380;
var G__51383 = cljs.core.count.call(null,c__4295__auto___51380);
var G__51384 = 0;
seq__51365_51369 = G__51381;
chunk__51366_51370 = G__51382;
count__51367_51371 = G__51383;
i__51368_51372 = G__51384;
continue;
}
} else
{var n_51385 = cljs.core.first.call(null,seq__51365_51379__$1);n_51385.removeAttribute(cljs.core.name.call(null,name));
{
var G__51386 = cljs.core.next.call(null,seq__51365_51379__$1);
var G__51387 = null;
var G__51388 = 0;
var G__51389 = 0;
seq__51365_51369 = G__51386;
chunk__51366_51370 = G__51387;
count__51367_51371 = G__51388;
i__51368_51372 = G__51389;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__51391 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__51391,0,null);var v = cljs.core.nth.call(null,vec__51391,1,null);if(cljs.core.truth_((function (){var and__3527__auto__ = k;if(cljs.core.truth_(and__3527__auto__))
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
return (function (p1__51392_SHARP_){var attr = attrs__$1.item(p1__51392_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__51399_51405 = cljs.core.seq.call(null,styles);var chunk__51400_51406 = null;var count__51401_51407 = 0;var i__51402_51408 = 0;while(true){
if((i__51402_51408 < count__51401_51407))
{var vec__51403_51409 = cljs.core._nth.call(null,chunk__51400_51406,i__51402_51408);var name_51410 = cljs.core.nth.call(null,vec__51403_51409,0,null);var value_51411 = cljs.core.nth.call(null,vec__51403_51409,1,null);domina.set_style_BANG_.call(null,content,name_51410,value_51411);
{
var G__51412 = seq__51399_51405;
var G__51413 = chunk__51400_51406;
var G__51414 = count__51401_51407;
var G__51415 = (i__51402_51408 + 1);
seq__51399_51405 = G__51412;
chunk__51400_51406 = G__51413;
count__51401_51407 = G__51414;
i__51402_51408 = G__51415;
continue;
}
} else
{var temp__4126__auto___51416 = cljs.core.seq.call(null,seq__51399_51405);if(temp__4126__auto___51416)
{var seq__51399_51417__$1 = temp__4126__auto___51416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51399_51417__$1))
{var c__4295__auto___51418 = cljs.core.chunk_first.call(null,seq__51399_51417__$1);{
var G__51419 = cljs.core.chunk_rest.call(null,seq__51399_51417__$1);
var G__51420 = c__4295__auto___51418;
var G__51421 = cljs.core.count.call(null,c__4295__auto___51418);
var G__51422 = 0;
seq__51399_51405 = G__51419;
chunk__51400_51406 = G__51420;
count__51401_51407 = G__51421;
i__51402_51408 = G__51422;
continue;
}
} else
{var vec__51404_51423 = cljs.core.first.call(null,seq__51399_51417__$1);var name_51424 = cljs.core.nth.call(null,vec__51404_51423,0,null);var value_51425 = cljs.core.nth.call(null,vec__51404_51423,1,null);domina.set_style_BANG_.call(null,content,name_51424,value_51425);
{
var G__51426 = cljs.core.next.call(null,seq__51399_51417__$1);
var G__51427 = null;
var G__51428 = 0;
var G__51429 = 0;
seq__51399_51405 = G__51426;
chunk__51400_51406 = G__51427;
count__51401_51407 = G__51428;
i__51402_51408 = G__51429;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__51436_51442 = cljs.core.seq.call(null,attrs);var chunk__51437_51443 = null;var count__51438_51444 = 0;var i__51439_51445 = 0;while(true){
if((i__51439_51445 < count__51438_51444))
{var vec__51440_51446 = cljs.core._nth.call(null,chunk__51437_51443,i__51439_51445);var name_51447 = cljs.core.nth.call(null,vec__51440_51446,0,null);var value_51448 = cljs.core.nth.call(null,vec__51440_51446,1,null);domina.set_attr_BANG_.call(null,content,name_51447,value_51448);
{
var G__51449 = seq__51436_51442;
var G__51450 = chunk__51437_51443;
var G__51451 = count__51438_51444;
var G__51452 = (i__51439_51445 + 1);
seq__51436_51442 = G__51449;
chunk__51437_51443 = G__51450;
count__51438_51444 = G__51451;
i__51439_51445 = G__51452;
continue;
}
} else
{var temp__4126__auto___51453 = cljs.core.seq.call(null,seq__51436_51442);if(temp__4126__auto___51453)
{var seq__51436_51454__$1 = temp__4126__auto___51453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51436_51454__$1))
{var c__4295__auto___51455 = cljs.core.chunk_first.call(null,seq__51436_51454__$1);{
var G__51456 = cljs.core.chunk_rest.call(null,seq__51436_51454__$1);
var G__51457 = c__4295__auto___51455;
var G__51458 = cljs.core.count.call(null,c__4295__auto___51455);
var G__51459 = 0;
seq__51436_51442 = G__51456;
chunk__51437_51443 = G__51457;
count__51438_51444 = G__51458;
i__51439_51445 = G__51459;
continue;
}
} else
{var vec__51441_51460 = cljs.core.first.call(null,seq__51436_51454__$1);var name_51461 = cljs.core.nth.call(null,vec__51441_51460,0,null);var value_51462 = cljs.core.nth.call(null,vec__51441_51460,1,null);domina.set_attr_BANG_.call(null,content,name_51461,value_51462);
{
var G__51463 = cljs.core.next.call(null,seq__51436_51454__$1);
var G__51464 = null;
var G__51465 = 0;
var G__51466 = 0;
seq__51436_51442 = G__51463;
chunk__51437_51443 = G__51464;
count__51438_51444 = G__51465;
i__51439_51445 = G__51466;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__51471_51475 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51472_51476 = null;var count__51473_51477 = 0;var i__51474_51478 = 0;while(true){
if((i__51474_51478 < count__51473_51477))
{var node_51479 = cljs.core._nth.call(null,chunk__51472_51476,i__51474_51478);goog.dom.classes.add(node_51479,class$);
{
var G__51480 = seq__51471_51475;
var G__51481 = chunk__51472_51476;
var G__51482 = count__51473_51477;
var G__51483 = (i__51474_51478 + 1);
seq__51471_51475 = G__51480;
chunk__51472_51476 = G__51481;
count__51473_51477 = G__51482;
i__51474_51478 = G__51483;
continue;
}
} else
{var temp__4126__auto___51484 = cljs.core.seq.call(null,seq__51471_51475);if(temp__4126__auto___51484)
{var seq__51471_51485__$1 = temp__4126__auto___51484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51471_51485__$1))
{var c__4295__auto___51486 = cljs.core.chunk_first.call(null,seq__51471_51485__$1);{
var G__51487 = cljs.core.chunk_rest.call(null,seq__51471_51485__$1);
var G__51488 = c__4295__auto___51486;
var G__51489 = cljs.core.count.call(null,c__4295__auto___51486);
var G__51490 = 0;
seq__51471_51475 = G__51487;
chunk__51472_51476 = G__51488;
count__51473_51477 = G__51489;
i__51474_51478 = G__51490;
continue;
}
} else
{var node_51491 = cljs.core.first.call(null,seq__51471_51485__$1);goog.dom.classes.add(node_51491,class$);
{
var G__51492 = cljs.core.next.call(null,seq__51471_51485__$1);
var G__51493 = null;
var G__51494 = 0;
var G__51495 = 0;
seq__51471_51475 = G__51492;
chunk__51472_51476 = G__51493;
count__51473_51477 = G__51494;
i__51474_51478 = G__51495;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__51500_51504 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51501_51505 = null;var count__51502_51506 = 0;var i__51503_51507 = 0;while(true){
if((i__51503_51507 < count__51502_51506))
{var node_51508 = cljs.core._nth.call(null,chunk__51501_51505,i__51503_51507);goog.dom.classes.remove(node_51508,class$);
{
var G__51509 = seq__51500_51504;
var G__51510 = chunk__51501_51505;
var G__51511 = count__51502_51506;
var G__51512 = (i__51503_51507 + 1);
seq__51500_51504 = G__51509;
chunk__51501_51505 = G__51510;
count__51502_51506 = G__51511;
i__51503_51507 = G__51512;
continue;
}
} else
{var temp__4126__auto___51513 = cljs.core.seq.call(null,seq__51500_51504);if(temp__4126__auto___51513)
{var seq__51500_51514__$1 = temp__4126__auto___51513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51500_51514__$1))
{var c__4295__auto___51515 = cljs.core.chunk_first.call(null,seq__51500_51514__$1);{
var G__51516 = cljs.core.chunk_rest.call(null,seq__51500_51514__$1);
var G__51517 = c__4295__auto___51515;
var G__51518 = cljs.core.count.call(null,c__4295__auto___51515);
var G__51519 = 0;
seq__51500_51504 = G__51516;
chunk__51501_51505 = G__51517;
count__51502_51506 = G__51518;
i__51503_51507 = G__51519;
continue;
}
} else
{var node_51520 = cljs.core.first.call(null,seq__51500_51514__$1);goog.dom.classes.remove(node_51520,class$);
{
var G__51521 = cljs.core.next.call(null,seq__51500_51514__$1);
var G__51522 = null;
var G__51523 = 0;
var G__51524 = 0;
seq__51500_51504 = G__51521;
chunk__51501_51505 = G__51522;
count__51502_51506 = G__51523;
i__51503_51507 = G__51524;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__51529_51533 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51530_51534 = null;var count__51531_51535 = 0;var i__51532_51536 = 0;while(true){
if((i__51532_51536 < count__51531_51535))
{var node_51537 = cljs.core._nth.call(null,chunk__51530_51534,i__51532_51536);goog.dom.classes.toggle(node_51537,class$);
{
var G__51538 = seq__51529_51533;
var G__51539 = chunk__51530_51534;
var G__51540 = count__51531_51535;
var G__51541 = (i__51532_51536 + 1);
seq__51529_51533 = G__51538;
chunk__51530_51534 = G__51539;
count__51531_51535 = G__51540;
i__51532_51536 = G__51541;
continue;
}
} else
{var temp__4126__auto___51542 = cljs.core.seq.call(null,seq__51529_51533);if(temp__4126__auto___51542)
{var seq__51529_51543__$1 = temp__4126__auto___51542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51529_51543__$1))
{var c__4295__auto___51544 = cljs.core.chunk_first.call(null,seq__51529_51543__$1);{
var G__51545 = cljs.core.chunk_rest.call(null,seq__51529_51543__$1);
var G__51546 = c__4295__auto___51544;
var G__51547 = cljs.core.count.call(null,c__4295__auto___51544);
var G__51548 = 0;
seq__51529_51533 = G__51545;
chunk__51530_51534 = G__51546;
count__51531_51535 = G__51547;
i__51532_51536 = G__51548;
continue;
}
} else
{var node_51549 = cljs.core.first.call(null,seq__51529_51543__$1);goog.dom.classes.toggle(node_51549,class$);
{
var G__51550 = cljs.core.next.call(null,seq__51529_51543__$1);
var G__51551 = null;
var G__51552 = 0;
var G__51553 = 0;
seq__51529_51533 = G__51550;
chunk__51530_51534 = G__51551;
count__51531_51535 = G__51552;
i__51532_51536 = G__51553;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_51562__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__51558_51563 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51559_51564 = null;var count__51560_51565 = 0;var i__51561_51566 = 0;while(true){
if((i__51561_51566 < count__51560_51565))
{var node_51567 = cljs.core._nth.call(null,chunk__51559_51564,i__51561_51566);goog.dom.classes.set(node_51567,classes_51562__$1);
{
var G__51568 = seq__51558_51563;
var G__51569 = chunk__51559_51564;
var G__51570 = count__51560_51565;
var G__51571 = (i__51561_51566 + 1);
seq__51558_51563 = G__51568;
chunk__51559_51564 = G__51569;
count__51560_51565 = G__51570;
i__51561_51566 = G__51571;
continue;
}
} else
{var temp__4126__auto___51572 = cljs.core.seq.call(null,seq__51558_51563);if(temp__4126__auto___51572)
{var seq__51558_51573__$1 = temp__4126__auto___51572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51558_51573__$1))
{var c__4295__auto___51574 = cljs.core.chunk_first.call(null,seq__51558_51573__$1);{
var G__51575 = cljs.core.chunk_rest.call(null,seq__51558_51573__$1);
var G__51576 = c__4295__auto___51574;
var G__51577 = cljs.core.count.call(null,c__4295__auto___51574);
var G__51578 = 0;
seq__51558_51563 = G__51575;
chunk__51559_51564 = G__51576;
count__51560_51565 = G__51577;
i__51561_51566 = G__51578;
continue;
}
} else
{var node_51579 = cljs.core.first.call(null,seq__51558_51573__$1);goog.dom.classes.set(node_51579,classes_51562__$1);
{
var G__51580 = cljs.core.next.call(null,seq__51558_51573__$1);
var G__51581 = null;
var G__51582 = 0;
var G__51583 = 0;
seq__51558_51563 = G__51580;
chunk__51559_51564 = G__51581;
count__51560_51565 = G__51582;
i__51561_51566 = G__51583;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__51588_51592 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51589_51593 = null;var count__51590_51594 = 0;var i__51591_51595 = 0;while(true){
if((i__51591_51595 < count__51590_51594))
{var node_51596 = cljs.core._nth.call(null,chunk__51589_51593,i__51591_51595);goog.dom.setTextContent(node_51596,value);
{
var G__51597 = seq__51588_51592;
var G__51598 = chunk__51589_51593;
var G__51599 = count__51590_51594;
var G__51600 = (i__51591_51595 + 1);
seq__51588_51592 = G__51597;
chunk__51589_51593 = G__51598;
count__51590_51594 = G__51599;
i__51591_51595 = G__51600;
continue;
}
} else
{var temp__4126__auto___51601 = cljs.core.seq.call(null,seq__51588_51592);if(temp__4126__auto___51601)
{var seq__51588_51602__$1 = temp__4126__auto___51601;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51588_51602__$1))
{var c__4295__auto___51603 = cljs.core.chunk_first.call(null,seq__51588_51602__$1);{
var G__51604 = cljs.core.chunk_rest.call(null,seq__51588_51602__$1);
var G__51605 = c__4295__auto___51603;
var G__51606 = cljs.core.count.call(null,c__4295__auto___51603);
var G__51607 = 0;
seq__51588_51592 = G__51604;
chunk__51589_51593 = G__51605;
count__51590_51594 = G__51606;
i__51591_51595 = G__51607;
continue;
}
} else
{var node_51608 = cljs.core.first.call(null,seq__51588_51602__$1);goog.dom.setTextContent(node_51608,value);
{
var G__51609 = cljs.core.next.call(null,seq__51588_51602__$1);
var G__51610 = null;
var G__51611 = 0;
var G__51612 = 0;
seq__51588_51592 = G__51609;
chunk__51589_51593 = G__51610;
count__51590_51594 = G__51611;
i__51591_51595 = G__51612;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__51617_51621 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51618_51622 = null;var count__51619_51623 = 0;var i__51620_51624 = 0;while(true){
if((i__51620_51624 < count__51619_51623))
{var node_51625 = cljs.core._nth.call(null,chunk__51618_51622,i__51620_51624);goog.dom.forms.setValue(node_51625,value);
{
var G__51626 = seq__51617_51621;
var G__51627 = chunk__51618_51622;
var G__51628 = count__51619_51623;
var G__51629 = (i__51620_51624 + 1);
seq__51617_51621 = G__51626;
chunk__51618_51622 = G__51627;
count__51619_51623 = G__51628;
i__51620_51624 = G__51629;
continue;
}
} else
{var temp__4126__auto___51630 = cljs.core.seq.call(null,seq__51617_51621);if(temp__4126__auto___51630)
{var seq__51617_51631__$1 = temp__4126__auto___51630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51617_51631__$1))
{var c__4295__auto___51632 = cljs.core.chunk_first.call(null,seq__51617_51631__$1);{
var G__51633 = cljs.core.chunk_rest.call(null,seq__51617_51631__$1);
var G__51634 = c__4295__auto___51632;
var G__51635 = cljs.core.count.call(null,c__4295__auto___51632);
var G__51636 = 0;
seq__51617_51621 = G__51633;
chunk__51618_51622 = G__51634;
count__51619_51623 = G__51635;
i__51620_51624 = G__51636;
continue;
}
} else
{var node_51637 = cljs.core.first.call(null,seq__51617_51631__$1);goog.dom.forms.setValue(node_51637,value);
{
var G__51638 = cljs.core.next.call(null,seq__51617_51631__$1);
var G__51639 = null;
var G__51640 = 0;
var G__51641 = 0;
seq__51617_51621 = G__51638;
chunk__51618_51622 = G__51639;
count__51619_51623 = G__51640;
i__51620_51624 = G__51641;
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
{var value_51652 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__51648_51653 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51649_51654 = null;var count__51650_51655 = 0;var i__51651_51656 = 0;while(true){
if((i__51651_51656 < count__51650_51655))
{var node_51657 = cljs.core._nth.call(null,chunk__51649_51654,i__51651_51656);node_51657.innerHTML = value_51652;
{
var G__51658 = seq__51648_51653;
var G__51659 = chunk__51649_51654;
var G__51660 = count__51650_51655;
var G__51661 = (i__51651_51656 + 1);
seq__51648_51653 = G__51658;
chunk__51649_51654 = G__51659;
count__51650_51655 = G__51660;
i__51651_51656 = G__51661;
continue;
}
} else
{var temp__4126__auto___51662 = cljs.core.seq.call(null,seq__51648_51653);if(temp__4126__auto___51662)
{var seq__51648_51663__$1 = temp__4126__auto___51662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51648_51663__$1))
{var c__4295__auto___51664 = cljs.core.chunk_first.call(null,seq__51648_51663__$1);{
var G__51665 = cljs.core.chunk_rest.call(null,seq__51648_51663__$1);
var G__51666 = c__4295__auto___51664;
var G__51667 = cljs.core.count.call(null,c__4295__auto___51664);
var G__51668 = 0;
seq__51648_51653 = G__51665;
chunk__51649_51654 = G__51666;
count__51650_51655 = G__51667;
i__51651_51656 = G__51668;
continue;
}
} else
{var node_51669 = cljs.core.first.call(null,seq__51648_51663__$1);node_51669.innerHTML = value_51652;
{
var G__51670 = cljs.core.next.call(null,seq__51648_51663__$1);
var G__51671 = null;
var G__51672 = 0;
var G__51673 = 0;
seq__51648_51653 = G__51670;
chunk__51649_51654 = G__51671;
count__51650_51655 = G__51672;
i__51651_51656 = G__51673;
continue;
}
}
} else
{}
}
break;
}
}catch (e51647){if((e51647 instanceof Error))
{var e_51674 = e51647;domina.replace_children_BANG_.call(null,content,value_51652);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51647;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__51681_51685 = cljs.core.seq.call(null,children);var chunk__51682_51686 = null;var count__51683_51687 = 0;var i__51684_51688 = 0;while(true){
if((i__51684_51688 < count__51683_51687))
{var child_51689 = cljs.core._nth.call(null,chunk__51682_51686,i__51684_51688);frag.appendChild(child_51689);
{
var G__51690 = seq__51681_51685;
var G__51691 = chunk__51682_51686;
var G__51692 = count__51683_51687;
var G__51693 = (i__51684_51688 + 1);
seq__51681_51685 = G__51690;
chunk__51682_51686 = G__51691;
count__51683_51687 = G__51692;
i__51684_51688 = G__51693;
continue;
}
} else
{var temp__4126__auto___51694 = cljs.core.seq.call(null,seq__51681_51685);if(temp__4126__auto___51694)
{var seq__51681_51695__$1 = temp__4126__auto___51694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51681_51695__$1))
{var c__4295__auto___51696 = cljs.core.chunk_first.call(null,seq__51681_51695__$1);{
var G__51697 = cljs.core.chunk_rest.call(null,seq__51681_51695__$1);
var G__51698 = c__4295__auto___51696;
var G__51699 = cljs.core.count.call(null,c__4295__auto___51696);
var G__51700 = 0;
seq__51681_51685 = G__51697;
chunk__51682_51686 = G__51698;
count__51683_51687 = G__51699;
i__51684_51688 = G__51700;
continue;
}
} else
{var child_51701 = cljs.core.first.call(null,seq__51681_51695__$1);frag.appendChild(child_51701);
{
var G__51702 = cljs.core.next.call(null,seq__51681_51695__$1);
var G__51703 = null;
var G__51704 = 0;
var G__51705 = 0;
seq__51681_51685 = G__51702;
chunk__51682_51686 = G__51703;
count__51683_51687 = G__51704;
i__51684_51688 = G__51705;
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
return (function (p1__51675_SHARP_,p2__51676_SHARP_){return f.call(null,p1__51675_SHARP_,p2__51676_SHARP_);
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
{if((function (){var G__51707 = list_thing;if(G__51707)
{var bit__4189__auto__ = (G__51707.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__51707.cljs$core$ISeqable$))
{return true;
} else
{if((!G__51707.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51707);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51707);
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
{if((function (){var G__51708 = content;if(G__51708)
{var bit__4189__auto__ = (G__51708.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__51708.cljs$core$ISeqable$))
{return true;
} else
{if((!G__51708.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51708);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51708);
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
{if((function (){var G__51709 = content;if(G__51709)
{var bit__4189__auto__ = (G__51709.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4189__auto__) || (G__51709.cljs$core$ISeqable$))
{return true;
} else
{if((!G__51709.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51709);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51709);
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
