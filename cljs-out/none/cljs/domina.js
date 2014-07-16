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
var opt_wrapper_54084 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_54085 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_54086 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_54086,opt_wrapper_54084,table_section_wrapper_54085,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_54084,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_54085,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_54085,cell_wrapper_54086,table_section_wrapper_54085,table_section_wrapper_54085]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__54091 = cljs.core.seq.call(null,tbody);var chunk__54092 = null;var count__54093 = (0);var i__54094 = (0);while(true){
if((i__54094 < count__54093))
{var child = cljs.core._nth.call(null,chunk__54092,i__54094);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__54095 = seq__54091;
var G__54096 = chunk__54092;
var G__54097 = count__54093;
var G__54098 = (i__54094 + (1));
seq__54091 = G__54095;
chunk__54092 = G__54096;
count__54093 = G__54097;
i__54094 = G__54098;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__54091);if(temp__4126__auto__)
{var seq__54091__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54091__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__54091__$1);{
var G__54099 = cljs.core.chunk_rest.call(null,seq__54091__$1);
var G__54100 = c__4299__auto__;
var G__54101 = cljs.core.count.call(null,c__4299__auto__);
var G__54102 = (0);
seq__54091 = G__54099;
chunk__54092 = G__54100;
count__54093 = G__54101;
i__54094 = G__54102;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__54091__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__54103 = cljs.core.next.call(null,seq__54091__$1);
var G__54104 = null;
var G__54105 = (0);
var G__54106 = (0);
seq__54091 = G__54103;
chunk__54092 = G__54104;
count__54093 = G__54105;
i__54094 = G__54106;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__54108 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__54108,(0),null);var start_wrap = cljs.core.nth.call(null,vec__54108,(1),null);var end_wrap = cljs.core.nth.call(null,vec__54108,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__54109 = wrapper.lastChild;
var G__54110 = (level - (1));
wrapper = G__54109;
level = G__54110;
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
domina.DomContent = (function (){var obj54112 = {};return obj54112;
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
log_debug.cljs$lang$applyTo = (function (arglist__54113){
var mesg = cljs.core.seq(arglist__54113);
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
log.cljs$lang$applyTo = (function (arglist__54114){
var mesg = cljs.core.seq(arglist__54114);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__54115){
var contents = cljs.core.seq(arglist__54115);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__54116_SHARP_){return p1__54116_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__54117_SHARP_,p2__54118_SHARP_){return goog.dom.insertChildAt(p1__54117_SHARP_,p2__54118_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__54120_SHARP_,p2__54119_SHARP_){return goog.dom.insertSiblingBefore(p2__54119_SHARP_,p1__54120_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__54122_SHARP_,p2__54121_SHARP_){return goog.dom.insertSiblingAfter(p2__54121_SHARP_,p1__54122_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__54124_SHARP_,p2__54123_SHARP_){return goog.dom.replaceNode(p2__54123_SHARP_,p1__54124_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__54129_54133 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54130_54134 = null;var count__54131_54135 = (0);var i__54132_54136 = (0);while(true){
if((i__54132_54136 < count__54131_54135))
{var n_54137 = cljs.core._nth.call(null,chunk__54130_54134,i__54132_54136);goog.style.setStyle(n_54137,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54138 = seq__54129_54133;
var G__54139 = chunk__54130_54134;
var G__54140 = count__54131_54135;
var G__54141 = (i__54132_54136 + (1));
seq__54129_54133 = G__54138;
chunk__54130_54134 = G__54139;
count__54131_54135 = G__54140;
i__54132_54136 = G__54141;
continue;
}
} else
{var temp__4126__auto___54142 = cljs.core.seq.call(null,seq__54129_54133);if(temp__4126__auto___54142)
{var seq__54129_54143__$1 = temp__4126__auto___54142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54129_54143__$1))
{var c__4299__auto___54144 = cljs.core.chunk_first.call(null,seq__54129_54143__$1);{
var G__54145 = cljs.core.chunk_rest.call(null,seq__54129_54143__$1);
var G__54146 = c__4299__auto___54144;
var G__54147 = cljs.core.count.call(null,c__4299__auto___54144);
var G__54148 = (0);
seq__54129_54133 = G__54145;
chunk__54130_54134 = G__54146;
count__54131_54135 = G__54147;
i__54132_54136 = G__54148;
continue;
}
} else
{var n_54149 = cljs.core.first.call(null,seq__54129_54143__$1);goog.style.setStyle(n_54149,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54150 = cljs.core.next.call(null,seq__54129_54143__$1);
var G__54151 = null;
var G__54152 = (0);
var G__54153 = (0);
seq__54129_54133 = G__54150;
chunk__54130_54134 = G__54151;
count__54131_54135 = G__54152;
i__54132_54136 = G__54153;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__54154){
var content = cljs.core.first(arglist__54154);
arglist__54154 = cljs.core.next(arglist__54154);
var name = cljs.core.first(arglist__54154);
var value = cljs.core.rest(arglist__54154);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__54159_54163 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54160_54164 = null;var count__54161_54165 = (0);var i__54162_54166 = (0);while(true){
if((i__54162_54166 < count__54161_54165))
{var n_54167 = cljs.core._nth.call(null,chunk__54160_54164,i__54162_54166);n_54167.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54168 = seq__54159_54163;
var G__54169 = chunk__54160_54164;
var G__54170 = count__54161_54165;
var G__54171 = (i__54162_54166 + (1));
seq__54159_54163 = G__54168;
chunk__54160_54164 = G__54169;
count__54161_54165 = G__54170;
i__54162_54166 = G__54171;
continue;
}
} else
{var temp__4126__auto___54172 = cljs.core.seq.call(null,seq__54159_54163);if(temp__4126__auto___54172)
{var seq__54159_54173__$1 = temp__4126__auto___54172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54159_54173__$1))
{var c__4299__auto___54174 = cljs.core.chunk_first.call(null,seq__54159_54173__$1);{
var G__54175 = cljs.core.chunk_rest.call(null,seq__54159_54173__$1);
var G__54176 = c__4299__auto___54174;
var G__54177 = cljs.core.count.call(null,c__4299__auto___54174);
var G__54178 = (0);
seq__54159_54163 = G__54175;
chunk__54160_54164 = G__54176;
count__54161_54165 = G__54177;
i__54162_54166 = G__54178;
continue;
}
} else
{var n_54179 = cljs.core.first.call(null,seq__54159_54173__$1);n_54179.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__54180 = cljs.core.next.call(null,seq__54159_54173__$1);
var G__54181 = null;
var G__54182 = (0);
var G__54183 = (0);
seq__54159_54163 = G__54180;
chunk__54160_54164 = G__54181;
count__54161_54165 = G__54182;
i__54162_54166 = G__54183;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__54184){
var content = cljs.core.first(arglist__54184);
arglist__54184 = cljs.core.next(arglist__54184);
var name = cljs.core.first(arglist__54184);
var value = cljs.core.rest(arglist__54184);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__54189_54193 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54190_54194 = null;var count__54191_54195 = (0);var i__54192_54196 = (0);while(true){
if((i__54192_54196 < count__54191_54195))
{var n_54197 = cljs.core._nth.call(null,chunk__54190_54194,i__54192_54196);n_54197.removeAttribute(cljs.core.name.call(null,name));
{
var G__54198 = seq__54189_54193;
var G__54199 = chunk__54190_54194;
var G__54200 = count__54191_54195;
var G__54201 = (i__54192_54196 + (1));
seq__54189_54193 = G__54198;
chunk__54190_54194 = G__54199;
count__54191_54195 = G__54200;
i__54192_54196 = G__54201;
continue;
}
} else
{var temp__4126__auto___54202 = cljs.core.seq.call(null,seq__54189_54193);if(temp__4126__auto___54202)
{var seq__54189_54203__$1 = temp__4126__auto___54202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54189_54203__$1))
{var c__4299__auto___54204 = cljs.core.chunk_first.call(null,seq__54189_54203__$1);{
var G__54205 = cljs.core.chunk_rest.call(null,seq__54189_54203__$1);
var G__54206 = c__4299__auto___54204;
var G__54207 = cljs.core.count.call(null,c__4299__auto___54204);
var G__54208 = (0);
seq__54189_54193 = G__54205;
chunk__54190_54194 = G__54206;
count__54191_54195 = G__54207;
i__54192_54196 = G__54208;
continue;
}
} else
{var n_54209 = cljs.core.first.call(null,seq__54189_54203__$1);n_54209.removeAttribute(cljs.core.name.call(null,name));
{
var G__54210 = cljs.core.next.call(null,seq__54189_54203__$1);
var G__54211 = null;
var G__54212 = (0);
var G__54213 = (0);
seq__54189_54193 = G__54210;
chunk__54190_54194 = G__54211;
count__54191_54195 = G__54212;
i__54192_54196 = G__54213;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__54215 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__54215,(0),null);var v = cljs.core.nth.call(null,vec__54215,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
return (function (p1__54216_SHARP_){var attr = attrs__$1.item(p1__54216_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__54223_54229 = cljs.core.seq.call(null,styles);var chunk__54224_54230 = null;var count__54225_54231 = (0);var i__54226_54232 = (0);while(true){
if((i__54226_54232 < count__54225_54231))
{var vec__54227_54233 = cljs.core._nth.call(null,chunk__54224_54230,i__54226_54232);var name_54234 = cljs.core.nth.call(null,vec__54227_54233,(0),null);var value_54235 = cljs.core.nth.call(null,vec__54227_54233,(1),null);domina.set_style_BANG_.call(null,content,name_54234,value_54235);
{
var G__54236 = seq__54223_54229;
var G__54237 = chunk__54224_54230;
var G__54238 = count__54225_54231;
var G__54239 = (i__54226_54232 + (1));
seq__54223_54229 = G__54236;
chunk__54224_54230 = G__54237;
count__54225_54231 = G__54238;
i__54226_54232 = G__54239;
continue;
}
} else
{var temp__4126__auto___54240 = cljs.core.seq.call(null,seq__54223_54229);if(temp__4126__auto___54240)
{var seq__54223_54241__$1 = temp__4126__auto___54240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54223_54241__$1))
{var c__4299__auto___54242 = cljs.core.chunk_first.call(null,seq__54223_54241__$1);{
var G__54243 = cljs.core.chunk_rest.call(null,seq__54223_54241__$1);
var G__54244 = c__4299__auto___54242;
var G__54245 = cljs.core.count.call(null,c__4299__auto___54242);
var G__54246 = (0);
seq__54223_54229 = G__54243;
chunk__54224_54230 = G__54244;
count__54225_54231 = G__54245;
i__54226_54232 = G__54246;
continue;
}
} else
{var vec__54228_54247 = cljs.core.first.call(null,seq__54223_54241__$1);var name_54248 = cljs.core.nth.call(null,vec__54228_54247,(0),null);var value_54249 = cljs.core.nth.call(null,vec__54228_54247,(1),null);domina.set_style_BANG_.call(null,content,name_54248,value_54249);
{
var G__54250 = cljs.core.next.call(null,seq__54223_54241__$1);
var G__54251 = null;
var G__54252 = (0);
var G__54253 = (0);
seq__54223_54229 = G__54250;
chunk__54224_54230 = G__54251;
count__54225_54231 = G__54252;
i__54226_54232 = G__54253;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__54260_54266 = cljs.core.seq.call(null,attrs);var chunk__54261_54267 = null;var count__54262_54268 = (0);var i__54263_54269 = (0);while(true){
if((i__54263_54269 < count__54262_54268))
{var vec__54264_54270 = cljs.core._nth.call(null,chunk__54261_54267,i__54263_54269);var name_54271 = cljs.core.nth.call(null,vec__54264_54270,(0),null);var value_54272 = cljs.core.nth.call(null,vec__54264_54270,(1),null);domina.set_attr_BANG_.call(null,content,name_54271,value_54272);
{
var G__54273 = seq__54260_54266;
var G__54274 = chunk__54261_54267;
var G__54275 = count__54262_54268;
var G__54276 = (i__54263_54269 + (1));
seq__54260_54266 = G__54273;
chunk__54261_54267 = G__54274;
count__54262_54268 = G__54275;
i__54263_54269 = G__54276;
continue;
}
} else
{var temp__4126__auto___54277 = cljs.core.seq.call(null,seq__54260_54266);if(temp__4126__auto___54277)
{var seq__54260_54278__$1 = temp__4126__auto___54277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54260_54278__$1))
{var c__4299__auto___54279 = cljs.core.chunk_first.call(null,seq__54260_54278__$1);{
var G__54280 = cljs.core.chunk_rest.call(null,seq__54260_54278__$1);
var G__54281 = c__4299__auto___54279;
var G__54282 = cljs.core.count.call(null,c__4299__auto___54279);
var G__54283 = (0);
seq__54260_54266 = G__54280;
chunk__54261_54267 = G__54281;
count__54262_54268 = G__54282;
i__54263_54269 = G__54283;
continue;
}
} else
{var vec__54265_54284 = cljs.core.first.call(null,seq__54260_54278__$1);var name_54285 = cljs.core.nth.call(null,vec__54265_54284,(0),null);var value_54286 = cljs.core.nth.call(null,vec__54265_54284,(1),null);domina.set_attr_BANG_.call(null,content,name_54285,value_54286);
{
var G__54287 = cljs.core.next.call(null,seq__54260_54278__$1);
var G__54288 = null;
var G__54289 = (0);
var G__54290 = (0);
seq__54260_54266 = G__54287;
chunk__54261_54267 = G__54288;
count__54262_54268 = G__54289;
i__54263_54269 = G__54290;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__54295_54299 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54296_54300 = null;var count__54297_54301 = (0);var i__54298_54302 = (0);while(true){
if((i__54298_54302 < count__54297_54301))
{var node_54303 = cljs.core._nth.call(null,chunk__54296_54300,i__54298_54302);goog.dom.classes.add(node_54303,class$);
{
var G__54304 = seq__54295_54299;
var G__54305 = chunk__54296_54300;
var G__54306 = count__54297_54301;
var G__54307 = (i__54298_54302 + (1));
seq__54295_54299 = G__54304;
chunk__54296_54300 = G__54305;
count__54297_54301 = G__54306;
i__54298_54302 = G__54307;
continue;
}
} else
{var temp__4126__auto___54308 = cljs.core.seq.call(null,seq__54295_54299);if(temp__4126__auto___54308)
{var seq__54295_54309__$1 = temp__4126__auto___54308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54295_54309__$1))
{var c__4299__auto___54310 = cljs.core.chunk_first.call(null,seq__54295_54309__$1);{
var G__54311 = cljs.core.chunk_rest.call(null,seq__54295_54309__$1);
var G__54312 = c__4299__auto___54310;
var G__54313 = cljs.core.count.call(null,c__4299__auto___54310);
var G__54314 = (0);
seq__54295_54299 = G__54311;
chunk__54296_54300 = G__54312;
count__54297_54301 = G__54313;
i__54298_54302 = G__54314;
continue;
}
} else
{var node_54315 = cljs.core.first.call(null,seq__54295_54309__$1);goog.dom.classes.add(node_54315,class$);
{
var G__54316 = cljs.core.next.call(null,seq__54295_54309__$1);
var G__54317 = null;
var G__54318 = (0);
var G__54319 = (0);
seq__54295_54299 = G__54316;
chunk__54296_54300 = G__54317;
count__54297_54301 = G__54318;
i__54298_54302 = G__54319;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__54324_54328 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54325_54329 = null;var count__54326_54330 = (0);var i__54327_54331 = (0);while(true){
if((i__54327_54331 < count__54326_54330))
{var node_54332 = cljs.core._nth.call(null,chunk__54325_54329,i__54327_54331);goog.dom.classes.remove(node_54332,class$);
{
var G__54333 = seq__54324_54328;
var G__54334 = chunk__54325_54329;
var G__54335 = count__54326_54330;
var G__54336 = (i__54327_54331 + (1));
seq__54324_54328 = G__54333;
chunk__54325_54329 = G__54334;
count__54326_54330 = G__54335;
i__54327_54331 = G__54336;
continue;
}
} else
{var temp__4126__auto___54337 = cljs.core.seq.call(null,seq__54324_54328);if(temp__4126__auto___54337)
{var seq__54324_54338__$1 = temp__4126__auto___54337;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54324_54338__$1))
{var c__4299__auto___54339 = cljs.core.chunk_first.call(null,seq__54324_54338__$1);{
var G__54340 = cljs.core.chunk_rest.call(null,seq__54324_54338__$1);
var G__54341 = c__4299__auto___54339;
var G__54342 = cljs.core.count.call(null,c__4299__auto___54339);
var G__54343 = (0);
seq__54324_54328 = G__54340;
chunk__54325_54329 = G__54341;
count__54326_54330 = G__54342;
i__54327_54331 = G__54343;
continue;
}
} else
{var node_54344 = cljs.core.first.call(null,seq__54324_54338__$1);goog.dom.classes.remove(node_54344,class$);
{
var G__54345 = cljs.core.next.call(null,seq__54324_54338__$1);
var G__54346 = null;
var G__54347 = (0);
var G__54348 = (0);
seq__54324_54328 = G__54345;
chunk__54325_54329 = G__54346;
count__54326_54330 = G__54347;
i__54327_54331 = G__54348;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__54353_54357 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54354_54358 = null;var count__54355_54359 = (0);var i__54356_54360 = (0);while(true){
if((i__54356_54360 < count__54355_54359))
{var node_54361 = cljs.core._nth.call(null,chunk__54354_54358,i__54356_54360);goog.dom.classes.toggle(node_54361,class$);
{
var G__54362 = seq__54353_54357;
var G__54363 = chunk__54354_54358;
var G__54364 = count__54355_54359;
var G__54365 = (i__54356_54360 + (1));
seq__54353_54357 = G__54362;
chunk__54354_54358 = G__54363;
count__54355_54359 = G__54364;
i__54356_54360 = G__54365;
continue;
}
} else
{var temp__4126__auto___54366 = cljs.core.seq.call(null,seq__54353_54357);if(temp__4126__auto___54366)
{var seq__54353_54367__$1 = temp__4126__auto___54366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54353_54367__$1))
{var c__4299__auto___54368 = cljs.core.chunk_first.call(null,seq__54353_54367__$1);{
var G__54369 = cljs.core.chunk_rest.call(null,seq__54353_54367__$1);
var G__54370 = c__4299__auto___54368;
var G__54371 = cljs.core.count.call(null,c__4299__auto___54368);
var G__54372 = (0);
seq__54353_54357 = G__54369;
chunk__54354_54358 = G__54370;
count__54355_54359 = G__54371;
i__54356_54360 = G__54372;
continue;
}
} else
{var node_54373 = cljs.core.first.call(null,seq__54353_54367__$1);goog.dom.classes.toggle(node_54373,class$);
{
var G__54374 = cljs.core.next.call(null,seq__54353_54367__$1);
var G__54375 = null;
var G__54376 = (0);
var G__54377 = (0);
seq__54353_54357 = G__54374;
chunk__54354_54358 = G__54375;
count__54355_54359 = G__54376;
i__54356_54360 = G__54377;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_54386__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__54382_54387 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54383_54388 = null;var count__54384_54389 = (0);var i__54385_54390 = (0);while(true){
if((i__54385_54390 < count__54384_54389))
{var node_54391 = cljs.core._nth.call(null,chunk__54383_54388,i__54385_54390);goog.dom.classes.set(node_54391,classes_54386__$1);
{
var G__54392 = seq__54382_54387;
var G__54393 = chunk__54383_54388;
var G__54394 = count__54384_54389;
var G__54395 = (i__54385_54390 + (1));
seq__54382_54387 = G__54392;
chunk__54383_54388 = G__54393;
count__54384_54389 = G__54394;
i__54385_54390 = G__54395;
continue;
}
} else
{var temp__4126__auto___54396 = cljs.core.seq.call(null,seq__54382_54387);if(temp__4126__auto___54396)
{var seq__54382_54397__$1 = temp__4126__auto___54396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54382_54397__$1))
{var c__4299__auto___54398 = cljs.core.chunk_first.call(null,seq__54382_54397__$1);{
var G__54399 = cljs.core.chunk_rest.call(null,seq__54382_54397__$1);
var G__54400 = c__4299__auto___54398;
var G__54401 = cljs.core.count.call(null,c__4299__auto___54398);
var G__54402 = (0);
seq__54382_54387 = G__54399;
chunk__54383_54388 = G__54400;
count__54384_54389 = G__54401;
i__54385_54390 = G__54402;
continue;
}
} else
{var node_54403 = cljs.core.first.call(null,seq__54382_54397__$1);goog.dom.classes.set(node_54403,classes_54386__$1);
{
var G__54404 = cljs.core.next.call(null,seq__54382_54397__$1);
var G__54405 = null;
var G__54406 = (0);
var G__54407 = (0);
seq__54382_54387 = G__54404;
chunk__54383_54388 = G__54405;
count__54384_54389 = G__54406;
i__54385_54390 = G__54407;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__54412_54416 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54413_54417 = null;var count__54414_54418 = (0);var i__54415_54419 = (0);while(true){
if((i__54415_54419 < count__54414_54418))
{var node_54420 = cljs.core._nth.call(null,chunk__54413_54417,i__54415_54419);goog.dom.setTextContent(node_54420,value);
{
var G__54421 = seq__54412_54416;
var G__54422 = chunk__54413_54417;
var G__54423 = count__54414_54418;
var G__54424 = (i__54415_54419 + (1));
seq__54412_54416 = G__54421;
chunk__54413_54417 = G__54422;
count__54414_54418 = G__54423;
i__54415_54419 = G__54424;
continue;
}
} else
{var temp__4126__auto___54425 = cljs.core.seq.call(null,seq__54412_54416);if(temp__4126__auto___54425)
{var seq__54412_54426__$1 = temp__4126__auto___54425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54412_54426__$1))
{var c__4299__auto___54427 = cljs.core.chunk_first.call(null,seq__54412_54426__$1);{
var G__54428 = cljs.core.chunk_rest.call(null,seq__54412_54426__$1);
var G__54429 = c__4299__auto___54427;
var G__54430 = cljs.core.count.call(null,c__4299__auto___54427);
var G__54431 = (0);
seq__54412_54416 = G__54428;
chunk__54413_54417 = G__54429;
count__54414_54418 = G__54430;
i__54415_54419 = G__54431;
continue;
}
} else
{var node_54432 = cljs.core.first.call(null,seq__54412_54426__$1);goog.dom.setTextContent(node_54432,value);
{
var G__54433 = cljs.core.next.call(null,seq__54412_54426__$1);
var G__54434 = null;
var G__54435 = (0);
var G__54436 = (0);
seq__54412_54416 = G__54433;
chunk__54413_54417 = G__54434;
count__54414_54418 = G__54435;
i__54415_54419 = G__54436;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__54441_54445 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54442_54446 = null;var count__54443_54447 = (0);var i__54444_54448 = (0);while(true){
if((i__54444_54448 < count__54443_54447))
{var node_54449 = cljs.core._nth.call(null,chunk__54442_54446,i__54444_54448);goog.dom.forms.setValue(node_54449,value);
{
var G__54450 = seq__54441_54445;
var G__54451 = chunk__54442_54446;
var G__54452 = count__54443_54447;
var G__54453 = (i__54444_54448 + (1));
seq__54441_54445 = G__54450;
chunk__54442_54446 = G__54451;
count__54443_54447 = G__54452;
i__54444_54448 = G__54453;
continue;
}
} else
{var temp__4126__auto___54454 = cljs.core.seq.call(null,seq__54441_54445);if(temp__4126__auto___54454)
{var seq__54441_54455__$1 = temp__4126__auto___54454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54441_54455__$1))
{var c__4299__auto___54456 = cljs.core.chunk_first.call(null,seq__54441_54455__$1);{
var G__54457 = cljs.core.chunk_rest.call(null,seq__54441_54455__$1);
var G__54458 = c__4299__auto___54456;
var G__54459 = cljs.core.count.call(null,c__4299__auto___54456);
var G__54460 = (0);
seq__54441_54445 = G__54457;
chunk__54442_54446 = G__54458;
count__54443_54447 = G__54459;
i__54444_54448 = G__54460;
continue;
}
} else
{var node_54461 = cljs.core.first.call(null,seq__54441_54455__$1);goog.dom.forms.setValue(node_54461,value);
{
var G__54462 = cljs.core.next.call(null,seq__54441_54455__$1);
var G__54463 = null;
var G__54464 = (0);
var G__54465 = (0);
seq__54441_54445 = G__54462;
chunk__54442_54446 = G__54463;
count__54443_54447 = G__54464;
i__54444_54448 = G__54465;
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
{var value_54476 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__54472_54477 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54473_54478 = null;var count__54474_54479 = (0);var i__54475_54480 = (0);while(true){
if((i__54475_54480 < count__54474_54479))
{var node_54481 = cljs.core._nth.call(null,chunk__54473_54478,i__54475_54480);node_54481.innerHTML = value_54476;
{
var G__54482 = seq__54472_54477;
var G__54483 = chunk__54473_54478;
var G__54484 = count__54474_54479;
var G__54485 = (i__54475_54480 + (1));
seq__54472_54477 = G__54482;
chunk__54473_54478 = G__54483;
count__54474_54479 = G__54484;
i__54475_54480 = G__54485;
continue;
}
} else
{var temp__4126__auto___54486 = cljs.core.seq.call(null,seq__54472_54477);if(temp__4126__auto___54486)
{var seq__54472_54487__$1 = temp__4126__auto___54486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54472_54487__$1))
{var c__4299__auto___54488 = cljs.core.chunk_first.call(null,seq__54472_54487__$1);{
var G__54489 = cljs.core.chunk_rest.call(null,seq__54472_54487__$1);
var G__54490 = c__4299__auto___54488;
var G__54491 = cljs.core.count.call(null,c__4299__auto___54488);
var G__54492 = (0);
seq__54472_54477 = G__54489;
chunk__54473_54478 = G__54490;
count__54474_54479 = G__54491;
i__54475_54480 = G__54492;
continue;
}
} else
{var node_54493 = cljs.core.first.call(null,seq__54472_54487__$1);node_54493.innerHTML = value_54476;
{
var G__54494 = cljs.core.next.call(null,seq__54472_54487__$1);
var G__54495 = null;
var G__54496 = (0);
var G__54497 = (0);
seq__54472_54477 = G__54494;
chunk__54473_54478 = G__54495;
count__54474_54479 = G__54496;
i__54475_54480 = G__54497;
continue;
}
}
} else
{}
}
break;
}
}catch (e54471){if((e54471 instanceof Error))
{var e_54498 = e54471;domina.replace_children_BANG_.call(null,content,value_54476);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54471;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__54505_54509 = cljs.core.seq.call(null,children);var chunk__54506_54510 = null;var count__54507_54511 = (0);var i__54508_54512 = (0);while(true){
if((i__54508_54512 < count__54507_54511))
{var child_54513 = cljs.core._nth.call(null,chunk__54506_54510,i__54508_54512);frag.appendChild(child_54513);
{
var G__54514 = seq__54505_54509;
var G__54515 = chunk__54506_54510;
var G__54516 = count__54507_54511;
var G__54517 = (i__54508_54512 + (1));
seq__54505_54509 = G__54514;
chunk__54506_54510 = G__54515;
count__54507_54511 = G__54516;
i__54508_54512 = G__54517;
continue;
}
} else
{var temp__4126__auto___54518 = cljs.core.seq.call(null,seq__54505_54509);if(temp__4126__auto___54518)
{var seq__54505_54519__$1 = temp__4126__auto___54518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54505_54519__$1))
{var c__4299__auto___54520 = cljs.core.chunk_first.call(null,seq__54505_54519__$1);{
var G__54521 = cljs.core.chunk_rest.call(null,seq__54505_54519__$1);
var G__54522 = c__4299__auto___54520;
var G__54523 = cljs.core.count.call(null,c__4299__auto___54520);
var G__54524 = (0);
seq__54505_54509 = G__54521;
chunk__54506_54510 = G__54522;
count__54507_54511 = G__54523;
i__54508_54512 = G__54524;
continue;
}
} else
{var child_54525 = cljs.core.first.call(null,seq__54505_54519__$1);frag.appendChild(child_54525);
{
var G__54526 = cljs.core.next.call(null,seq__54505_54519__$1);
var G__54527 = null;
var G__54528 = (0);
var G__54529 = (0);
seq__54505_54509 = G__54526;
chunk__54506_54510 = G__54527;
count__54507_54511 = G__54528;
i__54508_54512 = G__54529;
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
return (function (p1__54499_SHARP_,p2__54500_SHARP_){return f.call(null,p1__54499_SHARP_,p2__54500_SHARP_);
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
{if((function (){var G__54531 = list_thing;if(G__54531)
{var bit__4193__auto__ = (G__54531.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__54531.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54531.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54531);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54531);
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
{if((function (){var G__54532 = content;if(G__54532)
{var bit__4193__auto__ = (G__54532.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__54532.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54532.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54532);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54532);
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
{if((function (){var G__54533 = content;if(G__54533)
{var bit__4193__auto__ = (G__54533.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__54533.cljs$core$ISeqable$))
{return true;
} else
{if((!G__54533.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54533);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__54533);
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

//# sourceMappingURL=domina.js.map