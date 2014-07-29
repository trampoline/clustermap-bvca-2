// Compiled by ClojureScript 0.0-2268
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
var opt_wrapper_31134 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_31135 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_31136 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_31136,opt_wrapper_31134,table_section_wrapper_31135,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_31134,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_31135,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_31135,cell_wrapper_31136,table_section_wrapper_31135,table_section_wrapper_31135]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__31141 = cljs.core.seq.call(null,tbody);var chunk__31142 = null;var count__31143 = (0);var i__31144 = (0);while(true){
if((i__31144 < count__31143))
{var child = cljs.core._nth.call(null,chunk__31142,i__31144);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31145 = seq__31141;
var G__31146 = chunk__31142;
var G__31147 = count__31143;
var G__31148 = (i__31144 + (1));
seq__31141 = G__31145;
chunk__31142 = G__31146;
count__31143 = G__31147;
i__31144 = G__31148;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31141);if(temp__4126__auto__)
{var seq__31141__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31141__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__31141__$1);{
var G__31149 = cljs.core.chunk_rest.call(null,seq__31141__$1);
var G__31150 = c__4299__auto__;
var G__31151 = cljs.core.count.call(null,c__4299__auto__);
var G__31152 = (0);
seq__31141 = G__31149;
chunk__31142 = G__31150;
count__31143 = G__31151;
i__31144 = G__31152;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__31141__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31153 = cljs.core.next.call(null,seq__31141__$1);
var G__31154 = null;
var G__31155 = (0);
var G__31156 = (0);
seq__31141 = G__31153;
chunk__31142 = G__31154;
count__31143 = G__31155;
i__31144 = G__31156;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__31158 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__31158,(0),null);var start_wrap = cljs.core.nth.call(null,vec__31158,(1),null);var end_wrap = cljs.core.nth.call(null,vec__31158,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__31159 = wrapper.lastChild;
var G__31160 = (level - (1));
wrapper = G__31159;
level = G__31160;
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
domina.DomContent = (function (){var obj31162 = {};return obj31162;
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
log_debug.cljs$lang$applyTo = (function (arglist__31163){
var mesg = cljs.core.seq(arglist__31163);
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
log.cljs$lang$applyTo = (function (arglist__31164){
var mesg = cljs.core.seq(arglist__31164);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__31165){
var contents = cljs.core.seq(arglist__31165);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__31166_SHARP_){return p1__31166_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__31167_SHARP_,p2__31168_SHARP_){return goog.dom.insertChildAt(p1__31167_SHARP_,p2__31168_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31170_SHARP_,p2__31169_SHARP_){return goog.dom.insertSiblingBefore(p2__31169_SHARP_,p1__31170_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31172_SHARP_,p2__31171_SHARP_){return goog.dom.insertSiblingAfter(p2__31171_SHARP_,p1__31172_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__31174_SHARP_,p2__31173_SHARP_){return goog.dom.replaceNode(p2__31173_SHARP_,p1__31174_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__31179_31183 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31180_31184 = null;var count__31181_31185 = (0);var i__31182_31186 = (0);while(true){
if((i__31182_31186 < count__31181_31185))
{var n_31187 = cljs.core._nth.call(null,chunk__31180_31184,i__31182_31186);goog.style.setStyle(n_31187,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31188 = seq__31179_31183;
var G__31189 = chunk__31180_31184;
var G__31190 = count__31181_31185;
var G__31191 = (i__31182_31186 + (1));
seq__31179_31183 = G__31188;
chunk__31180_31184 = G__31189;
count__31181_31185 = G__31190;
i__31182_31186 = G__31191;
continue;
}
} else
{var temp__4126__auto___31192 = cljs.core.seq.call(null,seq__31179_31183);if(temp__4126__auto___31192)
{var seq__31179_31193__$1 = temp__4126__auto___31192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31179_31193__$1))
{var c__4299__auto___31194 = cljs.core.chunk_first.call(null,seq__31179_31193__$1);{
var G__31195 = cljs.core.chunk_rest.call(null,seq__31179_31193__$1);
var G__31196 = c__4299__auto___31194;
var G__31197 = cljs.core.count.call(null,c__4299__auto___31194);
var G__31198 = (0);
seq__31179_31183 = G__31195;
chunk__31180_31184 = G__31196;
count__31181_31185 = G__31197;
i__31182_31186 = G__31198;
continue;
}
} else
{var n_31199 = cljs.core.first.call(null,seq__31179_31193__$1);goog.style.setStyle(n_31199,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31200 = cljs.core.next.call(null,seq__31179_31193__$1);
var G__31201 = null;
var G__31202 = (0);
var G__31203 = (0);
seq__31179_31183 = G__31200;
chunk__31180_31184 = G__31201;
count__31181_31185 = G__31202;
i__31182_31186 = G__31203;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__31204){
var content = cljs.core.first(arglist__31204);
arglist__31204 = cljs.core.next(arglist__31204);
var name = cljs.core.first(arglist__31204);
var value = cljs.core.rest(arglist__31204);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__31209_31213 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31210_31214 = null;var count__31211_31215 = (0);var i__31212_31216 = (0);while(true){
if((i__31212_31216 < count__31211_31215))
{var n_31217 = cljs.core._nth.call(null,chunk__31210_31214,i__31212_31216);n_31217.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31218 = seq__31209_31213;
var G__31219 = chunk__31210_31214;
var G__31220 = count__31211_31215;
var G__31221 = (i__31212_31216 + (1));
seq__31209_31213 = G__31218;
chunk__31210_31214 = G__31219;
count__31211_31215 = G__31220;
i__31212_31216 = G__31221;
continue;
}
} else
{var temp__4126__auto___31222 = cljs.core.seq.call(null,seq__31209_31213);if(temp__4126__auto___31222)
{var seq__31209_31223__$1 = temp__4126__auto___31222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31209_31223__$1))
{var c__4299__auto___31224 = cljs.core.chunk_first.call(null,seq__31209_31223__$1);{
var G__31225 = cljs.core.chunk_rest.call(null,seq__31209_31223__$1);
var G__31226 = c__4299__auto___31224;
var G__31227 = cljs.core.count.call(null,c__4299__auto___31224);
var G__31228 = (0);
seq__31209_31213 = G__31225;
chunk__31210_31214 = G__31226;
count__31211_31215 = G__31227;
i__31212_31216 = G__31228;
continue;
}
} else
{var n_31229 = cljs.core.first.call(null,seq__31209_31223__$1);n_31229.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31230 = cljs.core.next.call(null,seq__31209_31223__$1);
var G__31231 = null;
var G__31232 = (0);
var G__31233 = (0);
seq__31209_31213 = G__31230;
chunk__31210_31214 = G__31231;
count__31211_31215 = G__31232;
i__31212_31216 = G__31233;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__31234){
var content = cljs.core.first(arglist__31234);
arglist__31234 = cljs.core.next(arglist__31234);
var name = cljs.core.first(arglist__31234);
var value = cljs.core.rest(arglist__31234);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__31239_31243 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31240_31244 = null;var count__31241_31245 = (0);var i__31242_31246 = (0);while(true){
if((i__31242_31246 < count__31241_31245))
{var n_31247 = cljs.core._nth.call(null,chunk__31240_31244,i__31242_31246);n_31247.removeAttribute(cljs.core.name.call(null,name));
{
var G__31248 = seq__31239_31243;
var G__31249 = chunk__31240_31244;
var G__31250 = count__31241_31245;
var G__31251 = (i__31242_31246 + (1));
seq__31239_31243 = G__31248;
chunk__31240_31244 = G__31249;
count__31241_31245 = G__31250;
i__31242_31246 = G__31251;
continue;
}
} else
{var temp__4126__auto___31252 = cljs.core.seq.call(null,seq__31239_31243);if(temp__4126__auto___31252)
{var seq__31239_31253__$1 = temp__4126__auto___31252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31239_31253__$1))
{var c__4299__auto___31254 = cljs.core.chunk_first.call(null,seq__31239_31253__$1);{
var G__31255 = cljs.core.chunk_rest.call(null,seq__31239_31253__$1);
var G__31256 = c__4299__auto___31254;
var G__31257 = cljs.core.count.call(null,c__4299__auto___31254);
var G__31258 = (0);
seq__31239_31243 = G__31255;
chunk__31240_31244 = G__31256;
count__31241_31245 = G__31257;
i__31242_31246 = G__31258;
continue;
}
} else
{var n_31259 = cljs.core.first.call(null,seq__31239_31253__$1);n_31259.removeAttribute(cljs.core.name.call(null,name));
{
var G__31260 = cljs.core.next.call(null,seq__31239_31253__$1);
var G__31261 = null;
var G__31262 = (0);
var G__31263 = (0);
seq__31239_31243 = G__31260;
chunk__31240_31244 = G__31261;
count__31241_31245 = G__31262;
i__31242_31246 = G__31263;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__31265 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__31265,(0),null);var v = cljs.core.nth.call(null,vec__31265,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
return (function (p1__31266_SHARP_){var attr = attrs__$1.item(p1__31266_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__31273_31279 = cljs.core.seq.call(null,styles);var chunk__31274_31280 = null;var count__31275_31281 = (0);var i__31276_31282 = (0);while(true){
if((i__31276_31282 < count__31275_31281))
{var vec__31277_31283 = cljs.core._nth.call(null,chunk__31274_31280,i__31276_31282);var name_31284 = cljs.core.nth.call(null,vec__31277_31283,(0),null);var value_31285 = cljs.core.nth.call(null,vec__31277_31283,(1),null);domina.set_style_BANG_.call(null,content,name_31284,value_31285);
{
var G__31286 = seq__31273_31279;
var G__31287 = chunk__31274_31280;
var G__31288 = count__31275_31281;
var G__31289 = (i__31276_31282 + (1));
seq__31273_31279 = G__31286;
chunk__31274_31280 = G__31287;
count__31275_31281 = G__31288;
i__31276_31282 = G__31289;
continue;
}
} else
{var temp__4126__auto___31290 = cljs.core.seq.call(null,seq__31273_31279);if(temp__4126__auto___31290)
{var seq__31273_31291__$1 = temp__4126__auto___31290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31273_31291__$1))
{var c__4299__auto___31292 = cljs.core.chunk_first.call(null,seq__31273_31291__$1);{
var G__31293 = cljs.core.chunk_rest.call(null,seq__31273_31291__$1);
var G__31294 = c__4299__auto___31292;
var G__31295 = cljs.core.count.call(null,c__4299__auto___31292);
var G__31296 = (0);
seq__31273_31279 = G__31293;
chunk__31274_31280 = G__31294;
count__31275_31281 = G__31295;
i__31276_31282 = G__31296;
continue;
}
} else
{var vec__31278_31297 = cljs.core.first.call(null,seq__31273_31291__$1);var name_31298 = cljs.core.nth.call(null,vec__31278_31297,(0),null);var value_31299 = cljs.core.nth.call(null,vec__31278_31297,(1),null);domina.set_style_BANG_.call(null,content,name_31298,value_31299);
{
var G__31300 = cljs.core.next.call(null,seq__31273_31291__$1);
var G__31301 = null;
var G__31302 = (0);
var G__31303 = (0);
seq__31273_31279 = G__31300;
chunk__31274_31280 = G__31301;
count__31275_31281 = G__31302;
i__31276_31282 = G__31303;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__31310_31316 = cljs.core.seq.call(null,attrs);var chunk__31311_31317 = null;var count__31312_31318 = (0);var i__31313_31319 = (0);while(true){
if((i__31313_31319 < count__31312_31318))
{var vec__31314_31320 = cljs.core._nth.call(null,chunk__31311_31317,i__31313_31319);var name_31321 = cljs.core.nth.call(null,vec__31314_31320,(0),null);var value_31322 = cljs.core.nth.call(null,vec__31314_31320,(1),null);domina.set_attr_BANG_.call(null,content,name_31321,value_31322);
{
var G__31323 = seq__31310_31316;
var G__31324 = chunk__31311_31317;
var G__31325 = count__31312_31318;
var G__31326 = (i__31313_31319 + (1));
seq__31310_31316 = G__31323;
chunk__31311_31317 = G__31324;
count__31312_31318 = G__31325;
i__31313_31319 = G__31326;
continue;
}
} else
{var temp__4126__auto___31327 = cljs.core.seq.call(null,seq__31310_31316);if(temp__4126__auto___31327)
{var seq__31310_31328__$1 = temp__4126__auto___31327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31310_31328__$1))
{var c__4299__auto___31329 = cljs.core.chunk_first.call(null,seq__31310_31328__$1);{
var G__31330 = cljs.core.chunk_rest.call(null,seq__31310_31328__$1);
var G__31331 = c__4299__auto___31329;
var G__31332 = cljs.core.count.call(null,c__4299__auto___31329);
var G__31333 = (0);
seq__31310_31316 = G__31330;
chunk__31311_31317 = G__31331;
count__31312_31318 = G__31332;
i__31313_31319 = G__31333;
continue;
}
} else
{var vec__31315_31334 = cljs.core.first.call(null,seq__31310_31328__$1);var name_31335 = cljs.core.nth.call(null,vec__31315_31334,(0),null);var value_31336 = cljs.core.nth.call(null,vec__31315_31334,(1),null);domina.set_attr_BANG_.call(null,content,name_31335,value_31336);
{
var G__31337 = cljs.core.next.call(null,seq__31310_31328__$1);
var G__31338 = null;
var G__31339 = (0);
var G__31340 = (0);
seq__31310_31316 = G__31337;
chunk__31311_31317 = G__31338;
count__31312_31318 = G__31339;
i__31313_31319 = G__31340;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__31345_31349 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31346_31350 = null;var count__31347_31351 = (0);var i__31348_31352 = (0);while(true){
if((i__31348_31352 < count__31347_31351))
{var node_31353 = cljs.core._nth.call(null,chunk__31346_31350,i__31348_31352);goog.dom.classes.add(node_31353,class$);
{
var G__31354 = seq__31345_31349;
var G__31355 = chunk__31346_31350;
var G__31356 = count__31347_31351;
var G__31357 = (i__31348_31352 + (1));
seq__31345_31349 = G__31354;
chunk__31346_31350 = G__31355;
count__31347_31351 = G__31356;
i__31348_31352 = G__31357;
continue;
}
} else
{var temp__4126__auto___31358 = cljs.core.seq.call(null,seq__31345_31349);if(temp__4126__auto___31358)
{var seq__31345_31359__$1 = temp__4126__auto___31358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31345_31359__$1))
{var c__4299__auto___31360 = cljs.core.chunk_first.call(null,seq__31345_31359__$1);{
var G__31361 = cljs.core.chunk_rest.call(null,seq__31345_31359__$1);
var G__31362 = c__4299__auto___31360;
var G__31363 = cljs.core.count.call(null,c__4299__auto___31360);
var G__31364 = (0);
seq__31345_31349 = G__31361;
chunk__31346_31350 = G__31362;
count__31347_31351 = G__31363;
i__31348_31352 = G__31364;
continue;
}
} else
{var node_31365 = cljs.core.first.call(null,seq__31345_31359__$1);goog.dom.classes.add(node_31365,class$);
{
var G__31366 = cljs.core.next.call(null,seq__31345_31359__$1);
var G__31367 = null;
var G__31368 = (0);
var G__31369 = (0);
seq__31345_31349 = G__31366;
chunk__31346_31350 = G__31367;
count__31347_31351 = G__31368;
i__31348_31352 = G__31369;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__31374_31378 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31375_31379 = null;var count__31376_31380 = (0);var i__31377_31381 = (0);while(true){
if((i__31377_31381 < count__31376_31380))
{var node_31382 = cljs.core._nth.call(null,chunk__31375_31379,i__31377_31381);goog.dom.classes.remove(node_31382,class$);
{
var G__31383 = seq__31374_31378;
var G__31384 = chunk__31375_31379;
var G__31385 = count__31376_31380;
var G__31386 = (i__31377_31381 + (1));
seq__31374_31378 = G__31383;
chunk__31375_31379 = G__31384;
count__31376_31380 = G__31385;
i__31377_31381 = G__31386;
continue;
}
} else
{var temp__4126__auto___31387 = cljs.core.seq.call(null,seq__31374_31378);if(temp__4126__auto___31387)
{var seq__31374_31388__$1 = temp__4126__auto___31387;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31374_31388__$1))
{var c__4299__auto___31389 = cljs.core.chunk_first.call(null,seq__31374_31388__$1);{
var G__31390 = cljs.core.chunk_rest.call(null,seq__31374_31388__$1);
var G__31391 = c__4299__auto___31389;
var G__31392 = cljs.core.count.call(null,c__4299__auto___31389);
var G__31393 = (0);
seq__31374_31378 = G__31390;
chunk__31375_31379 = G__31391;
count__31376_31380 = G__31392;
i__31377_31381 = G__31393;
continue;
}
} else
{var node_31394 = cljs.core.first.call(null,seq__31374_31388__$1);goog.dom.classes.remove(node_31394,class$);
{
var G__31395 = cljs.core.next.call(null,seq__31374_31388__$1);
var G__31396 = null;
var G__31397 = (0);
var G__31398 = (0);
seq__31374_31378 = G__31395;
chunk__31375_31379 = G__31396;
count__31376_31380 = G__31397;
i__31377_31381 = G__31398;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__31403_31407 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31404_31408 = null;var count__31405_31409 = (0);var i__31406_31410 = (0);while(true){
if((i__31406_31410 < count__31405_31409))
{var node_31411 = cljs.core._nth.call(null,chunk__31404_31408,i__31406_31410);goog.dom.classes.toggle(node_31411,class$);
{
var G__31412 = seq__31403_31407;
var G__31413 = chunk__31404_31408;
var G__31414 = count__31405_31409;
var G__31415 = (i__31406_31410 + (1));
seq__31403_31407 = G__31412;
chunk__31404_31408 = G__31413;
count__31405_31409 = G__31414;
i__31406_31410 = G__31415;
continue;
}
} else
{var temp__4126__auto___31416 = cljs.core.seq.call(null,seq__31403_31407);if(temp__4126__auto___31416)
{var seq__31403_31417__$1 = temp__4126__auto___31416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31403_31417__$1))
{var c__4299__auto___31418 = cljs.core.chunk_first.call(null,seq__31403_31417__$1);{
var G__31419 = cljs.core.chunk_rest.call(null,seq__31403_31417__$1);
var G__31420 = c__4299__auto___31418;
var G__31421 = cljs.core.count.call(null,c__4299__auto___31418);
var G__31422 = (0);
seq__31403_31407 = G__31419;
chunk__31404_31408 = G__31420;
count__31405_31409 = G__31421;
i__31406_31410 = G__31422;
continue;
}
} else
{var node_31423 = cljs.core.first.call(null,seq__31403_31417__$1);goog.dom.classes.toggle(node_31423,class$);
{
var G__31424 = cljs.core.next.call(null,seq__31403_31417__$1);
var G__31425 = null;
var G__31426 = (0);
var G__31427 = (0);
seq__31403_31407 = G__31424;
chunk__31404_31408 = G__31425;
count__31405_31409 = G__31426;
i__31406_31410 = G__31427;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_31436__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__31432_31437 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31433_31438 = null;var count__31434_31439 = (0);var i__31435_31440 = (0);while(true){
if((i__31435_31440 < count__31434_31439))
{var node_31441 = cljs.core._nth.call(null,chunk__31433_31438,i__31435_31440);goog.dom.classes.set(node_31441,classes_31436__$1);
{
var G__31442 = seq__31432_31437;
var G__31443 = chunk__31433_31438;
var G__31444 = count__31434_31439;
var G__31445 = (i__31435_31440 + (1));
seq__31432_31437 = G__31442;
chunk__31433_31438 = G__31443;
count__31434_31439 = G__31444;
i__31435_31440 = G__31445;
continue;
}
} else
{var temp__4126__auto___31446 = cljs.core.seq.call(null,seq__31432_31437);if(temp__4126__auto___31446)
{var seq__31432_31447__$1 = temp__4126__auto___31446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31432_31447__$1))
{var c__4299__auto___31448 = cljs.core.chunk_first.call(null,seq__31432_31447__$1);{
var G__31449 = cljs.core.chunk_rest.call(null,seq__31432_31447__$1);
var G__31450 = c__4299__auto___31448;
var G__31451 = cljs.core.count.call(null,c__4299__auto___31448);
var G__31452 = (0);
seq__31432_31437 = G__31449;
chunk__31433_31438 = G__31450;
count__31434_31439 = G__31451;
i__31435_31440 = G__31452;
continue;
}
} else
{var node_31453 = cljs.core.first.call(null,seq__31432_31447__$1);goog.dom.classes.set(node_31453,classes_31436__$1);
{
var G__31454 = cljs.core.next.call(null,seq__31432_31447__$1);
var G__31455 = null;
var G__31456 = (0);
var G__31457 = (0);
seq__31432_31437 = G__31454;
chunk__31433_31438 = G__31455;
count__31434_31439 = G__31456;
i__31435_31440 = G__31457;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__31462_31466 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31463_31467 = null;var count__31464_31468 = (0);var i__31465_31469 = (0);while(true){
if((i__31465_31469 < count__31464_31468))
{var node_31470 = cljs.core._nth.call(null,chunk__31463_31467,i__31465_31469);goog.dom.setTextContent(node_31470,value);
{
var G__31471 = seq__31462_31466;
var G__31472 = chunk__31463_31467;
var G__31473 = count__31464_31468;
var G__31474 = (i__31465_31469 + (1));
seq__31462_31466 = G__31471;
chunk__31463_31467 = G__31472;
count__31464_31468 = G__31473;
i__31465_31469 = G__31474;
continue;
}
} else
{var temp__4126__auto___31475 = cljs.core.seq.call(null,seq__31462_31466);if(temp__4126__auto___31475)
{var seq__31462_31476__$1 = temp__4126__auto___31475;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31462_31476__$1))
{var c__4299__auto___31477 = cljs.core.chunk_first.call(null,seq__31462_31476__$1);{
var G__31478 = cljs.core.chunk_rest.call(null,seq__31462_31476__$1);
var G__31479 = c__4299__auto___31477;
var G__31480 = cljs.core.count.call(null,c__4299__auto___31477);
var G__31481 = (0);
seq__31462_31466 = G__31478;
chunk__31463_31467 = G__31479;
count__31464_31468 = G__31480;
i__31465_31469 = G__31481;
continue;
}
} else
{var node_31482 = cljs.core.first.call(null,seq__31462_31476__$1);goog.dom.setTextContent(node_31482,value);
{
var G__31483 = cljs.core.next.call(null,seq__31462_31476__$1);
var G__31484 = null;
var G__31485 = (0);
var G__31486 = (0);
seq__31462_31466 = G__31483;
chunk__31463_31467 = G__31484;
count__31464_31468 = G__31485;
i__31465_31469 = G__31486;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__31491_31495 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31492_31496 = null;var count__31493_31497 = (0);var i__31494_31498 = (0);while(true){
if((i__31494_31498 < count__31493_31497))
{var node_31499 = cljs.core._nth.call(null,chunk__31492_31496,i__31494_31498);goog.dom.forms.setValue(node_31499,value);
{
var G__31500 = seq__31491_31495;
var G__31501 = chunk__31492_31496;
var G__31502 = count__31493_31497;
var G__31503 = (i__31494_31498 + (1));
seq__31491_31495 = G__31500;
chunk__31492_31496 = G__31501;
count__31493_31497 = G__31502;
i__31494_31498 = G__31503;
continue;
}
} else
{var temp__4126__auto___31504 = cljs.core.seq.call(null,seq__31491_31495);if(temp__4126__auto___31504)
{var seq__31491_31505__$1 = temp__4126__auto___31504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31491_31505__$1))
{var c__4299__auto___31506 = cljs.core.chunk_first.call(null,seq__31491_31505__$1);{
var G__31507 = cljs.core.chunk_rest.call(null,seq__31491_31505__$1);
var G__31508 = c__4299__auto___31506;
var G__31509 = cljs.core.count.call(null,c__4299__auto___31506);
var G__31510 = (0);
seq__31491_31495 = G__31507;
chunk__31492_31496 = G__31508;
count__31493_31497 = G__31509;
i__31494_31498 = G__31510;
continue;
}
} else
{var node_31511 = cljs.core.first.call(null,seq__31491_31505__$1);goog.dom.forms.setValue(node_31511,value);
{
var G__31512 = cljs.core.next.call(null,seq__31491_31505__$1);
var G__31513 = null;
var G__31514 = (0);
var G__31515 = (0);
seq__31491_31495 = G__31512;
chunk__31492_31496 = G__31513;
count__31493_31497 = G__31514;
i__31494_31498 = G__31515;
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
{var value_31526 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__31522_31527 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31523_31528 = null;var count__31524_31529 = (0);var i__31525_31530 = (0);while(true){
if((i__31525_31530 < count__31524_31529))
{var node_31531 = cljs.core._nth.call(null,chunk__31523_31528,i__31525_31530);node_31531.innerHTML = value_31526;
{
var G__31532 = seq__31522_31527;
var G__31533 = chunk__31523_31528;
var G__31534 = count__31524_31529;
var G__31535 = (i__31525_31530 + (1));
seq__31522_31527 = G__31532;
chunk__31523_31528 = G__31533;
count__31524_31529 = G__31534;
i__31525_31530 = G__31535;
continue;
}
} else
{var temp__4126__auto___31536 = cljs.core.seq.call(null,seq__31522_31527);if(temp__4126__auto___31536)
{var seq__31522_31537__$1 = temp__4126__auto___31536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31522_31537__$1))
{var c__4299__auto___31538 = cljs.core.chunk_first.call(null,seq__31522_31537__$1);{
var G__31539 = cljs.core.chunk_rest.call(null,seq__31522_31537__$1);
var G__31540 = c__4299__auto___31538;
var G__31541 = cljs.core.count.call(null,c__4299__auto___31538);
var G__31542 = (0);
seq__31522_31527 = G__31539;
chunk__31523_31528 = G__31540;
count__31524_31529 = G__31541;
i__31525_31530 = G__31542;
continue;
}
} else
{var node_31543 = cljs.core.first.call(null,seq__31522_31537__$1);node_31543.innerHTML = value_31526;
{
var G__31544 = cljs.core.next.call(null,seq__31522_31537__$1);
var G__31545 = null;
var G__31546 = (0);
var G__31547 = (0);
seq__31522_31527 = G__31544;
chunk__31523_31528 = G__31545;
count__31524_31529 = G__31546;
i__31525_31530 = G__31547;
continue;
}
}
} else
{}
}
break;
}
}catch (e31521){if((e31521 instanceof Error))
{var e_31548 = e31521;domina.replace_children_BANG_.call(null,content,value_31526);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31521;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__31555_31559 = cljs.core.seq.call(null,children);var chunk__31556_31560 = null;var count__31557_31561 = (0);var i__31558_31562 = (0);while(true){
if((i__31558_31562 < count__31557_31561))
{var child_31563 = cljs.core._nth.call(null,chunk__31556_31560,i__31558_31562);frag.appendChild(child_31563);
{
var G__31564 = seq__31555_31559;
var G__31565 = chunk__31556_31560;
var G__31566 = count__31557_31561;
var G__31567 = (i__31558_31562 + (1));
seq__31555_31559 = G__31564;
chunk__31556_31560 = G__31565;
count__31557_31561 = G__31566;
i__31558_31562 = G__31567;
continue;
}
} else
{var temp__4126__auto___31568 = cljs.core.seq.call(null,seq__31555_31559);if(temp__4126__auto___31568)
{var seq__31555_31569__$1 = temp__4126__auto___31568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31555_31569__$1))
{var c__4299__auto___31570 = cljs.core.chunk_first.call(null,seq__31555_31569__$1);{
var G__31571 = cljs.core.chunk_rest.call(null,seq__31555_31569__$1);
var G__31572 = c__4299__auto___31570;
var G__31573 = cljs.core.count.call(null,c__4299__auto___31570);
var G__31574 = (0);
seq__31555_31559 = G__31571;
chunk__31556_31560 = G__31572;
count__31557_31561 = G__31573;
i__31558_31562 = G__31574;
continue;
}
} else
{var child_31575 = cljs.core.first.call(null,seq__31555_31569__$1);frag.appendChild(child_31575);
{
var G__31576 = cljs.core.next.call(null,seq__31555_31569__$1);
var G__31577 = null;
var G__31578 = (0);
var G__31579 = (0);
seq__31555_31559 = G__31576;
chunk__31556_31560 = G__31577;
count__31557_31561 = G__31578;
i__31558_31562 = G__31579;
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
return (function (p1__31549_SHARP_,p2__31550_SHARP_){return f.call(null,p1__31549_SHARP_,p2__31550_SHARP_);
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
{if((function (){var G__31581 = list_thing;if(G__31581)
{var bit__4193__auto__ = (G__31581.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__31581.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31581.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31581);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31581);
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
{if((function (){var G__31582 = content;if(G__31582)
{var bit__4193__auto__ = (G__31582.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__31582.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31582.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31582);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31582);
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
{if((function (){var G__31583 = content;if(G__31583)
{var bit__4193__auto__ = (G__31583.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__31583.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31583.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31583);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31583);
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
